// Create Amino converter for the swap module.
import type { AminoMsg } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgSwapExactAmountInSchema,
    type MsgSwapExactAmountIn,
    MsgSwapExactAmountOutSchema,
    type MsgSwapExactAmountOut,
    Route,
    RoutePool,
    RouteSeries,
    RouteParallel,
    RouteSchema,
    RoutePoolSchema,
    RouteSeriesSchema,
    RouteParallelSchema,
} from '../types/sunrise/swap';

export interface AminoMsgSwapExactAmountIn extends AminoMsg {
    readonly type: 'sunrise/swap/MsgSwapExactAmountIn';
    readonly value: {
        readonly sender: string;
        readonly interface_provider: string;
        readonly route: any;
        readonly amount_in: string;
        readonly min_amount_out: string;
    };
}

export interface AminoMsgSwapExactAmountOut extends AminoMsg {
    readonly type: 'sunrise/swap/MsgSwapExactAmountOut';
    readonly value: {
        readonly sender: string;
        readonly interface_provider: string;
        readonly route: any;
        readonly max_amount_in: string;
        readonly amount_out: string;
    };
}

export function createSwapAminoConverters(): AminoConverters {
    return {
        '/sunrise.swap.v1.MsgSwapExactAmountIn': {
            aminoType: 'sunrise/swap/MsgSwapExactAmountIn',
            toAmino: ({
                sender,
                interfaceProvider,
                route,
                amountIn,
                minAmountOut,
            }: MsgSwapExactAmountIn): AminoMsgSwapExactAmountIn['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(interfaceProvider, 'missing interface_provider');
                assertDefinedAndNotNull(route, 'missing route');
                assertDefinedAndNotNull(amountIn, 'missing amount_in');
                assertDefinedAndNotNull(minAmountOut, 'missing min_amount_out');

                return {
                    sender: sender,
                    interface_provider: interfaceProvider,
                    route: convertRouteToAmino(route),
                    amount_in: amountIn,
                    min_amount_out: minAmountOut,
                };
            },
            fromAmino: ({
                sender,
                interface_provider,
                route,
                amount_in,
                min_amount_out,
            }: AminoMsgSwapExactAmountIn['value']): MsgSwapExactAmountIn => {
                return create(MsgSwapExactAmountInSchema, {
                    sender: sender,
                    interfaceProvider: interface_provider,
                    route: convertRouteFromAmino(route),
                    amountIn: amount_in,
                    minAmountOut: min_amount_out,
                });
            }
        },
        '/sunrise.swap.v1.MsgSwapExactAmountOut': {
            aminoType: 'sunrise/swap/MsgSwapExactAmountOut',
            toAmino: ({
                sender,
                interfaceProvider,
                route,
                maxAmountIn,
                amountOut,
            }: MsgSwapExactAmountOut): AminoMsgSwapExactAmountOut['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(interfaceProvider, 'missing interface_provider');
                assertDefinedAndNotNull(route, 'missing route');
                assertDefinedAndNotNull(maxAmountIn, 'missing max_amount_in');
                assertDefinedAndNotNull(amountOut, 'missing amount_out');

                return {
                    sender: sender,
                    interface_provider: interfaceProvider,
                    route: convertRouteToAmino(route),
                    max_amount_in: maxAmountIn,
                    amount_out: amountOut,
                };
            },
            fromAmino: ({
                sender,
                interface_provider,
                route,
                max_amount_in,
                amount_out,
            }: AminoMsgSwapExactAmountOut['value']): MsgSwapExactAmountOut => {
                return create(MsgSwapExactAmountOutSchema, {
                    sender: sender,
                    interfaceProvider: interface_provider,
                    route: convertRouteFromAmino(route),
                    maxAmountIn: max_amount_in,
                    amountOut: amount_out,
                });
            }
        },
    };
}

export function convertRouteFromAmino(aminoRoute: any): Route {
    let strategy: Route['strategy'] | undefined;
    if (aminoRoute.Strategy) {
        const strategyValue = aminoRoute.Strategy.value;
        switch (aminoRoute.Strategy.type) {
            case 'sunrise/swap/RoutePool':
                if (strategyValue.pool) {
                    strategy = {
                        case: 'pool',
                        value: create(RoutePoolSchema, {
                            poolId: BigInt(strategyValue.pool.pool_id),
                        }),
                    };
                }
                break;
            case 'sunrise/swap/RouteSeries':
                if (strategyValue.series) {
                    strategy = {
                        case: 'series',
                        value: create(RouteSeriesSchema, {
                            routes: (strategyValue.series.routes || []).map(convertRouteFromAmino),
                        }),
                    };
                }
                break;
            case 'sunrise/swap/RouteParallel':
                if (strategyValue.parallel) {
                    strategy = {
                        case: 'parallel',
                        value: create(RouteParallelSchema, {
                            routes: (strategyValue.parallel.routes || []).map(convertRouteFromAmino),
                            weights: strategyValue.parallel.weights,
                        }),
                    };
                }
                break;
        }
    }

    const route = create(RouteSchema, {
        denomIn: aminoRoute.denom_in,
        denomOut: aminoRoute.denom_out,
        strategy: strategy,
    });

    return route;
}

export function convertRouteToAmino(route: Route): any {
    const newRoute: any = {};

    if (route.denomIn) {
        newRoute.denom_in = route.denomIn;
    }
    if (route.denomOut) {
        newRoute.denom_out = route.denomOut;
    }


    if (route.strategy?.case) {
        const strategyCase = route.strategy.case;
        const strategyValue = route.strategy.value;

        switch (strategyCase) {
            case 'pool': {
                const pool = strategyValue as RoutePool;
                if (pool) {
                    newRoute.Strategy = {
                        type: 'sunrise/swap/RoutePool',
                        value: {
                            pool: {
                                pool_id: pool.poolId.toString(),
                            },
                        },
                    };
                }
                break;
            }
            case 'series': {
                const series = strategyValue as RouteSeries;
                if (series) {
                    newRoute.Strategy = {
                        type: 'sunrise/swap/RouteSeries',
                        value: {
                            series: {
                                routes: (series.routes || []).map(convertRouteToAmino),
                            },
                        },
                    };
                }
                break;
            }
            case 'parallel': {
                const parallel = strategyValue as RouteParallel;
                if (parallel) {
                    const aminoParallel: { routes: any[]; weights?: string[] } = {
                        routes: (parallel.routes || []).map(convertRouteToAmino),
                    };

                    if (parallel.weights && parallel.weights.length > 0) {
                        aminoParallel.weights = parallel.weights;
                    }
                    newRoute.Strategy = {
                        type: 'sunrise/swap/RouteParallel',
                        value: {
                            parallel: aminoParallel,
                        },
                    };
                }
                break;
            }
        }
    }

    return newRoute;
}
