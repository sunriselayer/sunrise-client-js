// Create Amino converter for the swap module.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgUpdateParamsSchema,
    type MsgUpdateParams,
    type Params,
    MsgSwapExactAmountInSchema,
    type MsgSwapExactAmountIn,
    type Route,
    MsgSwapExactAmountOutSchema,
    type MsgSwapExactAmountOut,
} from '../types/sunrise/swap';

export interface AminoMsgUpdateParams extends AminoMsg {
    readonly type: 'sunrise/swap/MsgUpdateParams';
    readonly value: {
        readonly authority: string;
        readonly params: Params;
    };
}

export interface AminoMsgSwapExactAmountIn extends AminoMsg {
    readonly type: 'sunrise/swap/MsgSwapExactAmountIn';
    readonly value: {
        readonly sender: string;
        readonly interface_provider: string;
        readonly route: Route;
        readonly amount_in: string;
        readonly min_amount_out: string;
    };
}

export interface AminoMsgSwapExactAmountOut extends AminoMsg {
    readonly type: 'sunrise/swap/MsgSwapExactAmountOut';
    readonly value: {
        readonly sender: string;
        readonly interface_provider: string;
        readonly route: Route;
        readonly max_amount_in: string;
        readonly amount_out: string;
    };
}

export function createSwapAminoConverters(): AminoConverters {
    return {
        '/sunrise.swap.v1.MsgUpdateParams': {
            aminoType: 'sunrise/swap/MsgUpdateParams',
            toAmino: ({
                authority,
                params,
            }: MsgUpdateParams): AminoMsgUpdateParams['value'] => {
                assertDefinedAndNotNull(authority, 'missing authority');
                assertDefinedAndNotNull(params, 'missing params');

                return {
                    authority: authority,
                    params: params,
                };
            },
            fromAmino: ({
                authority,
                params,
            }: AminoMsgUpdateParams['value']): MsgUpdateParams => {
                return create(MsgUpdateParamsSchema, {
                    authority: authority,
                    params: params,
                });
            }
        },
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
                    route: route,
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
                    route: route,
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
                    route: route,
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
                    route: route,
                    maxAmountIn: max_amount_in,
                    amountOut: amount_out,
                });
            }
        },
    };
}
