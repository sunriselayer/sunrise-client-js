// Create Amino converter for the liquiditypool module.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgCreatePoolSchema,
    type MsgCreatePool,
    MsgCreatePositionSchema,
    type MsgCreatePosition,
    MsgIncreaseLiquiditySchema,
    type MsgIncreaseLiquidity,
    MsgDecreaseLiquiditySchema,
    type MsgDecreaseLiquidity,
    MsgClaimRewardsSchema,
    type MsgClaimRewards,
} from '../types/sunrise/liquiditypool';

export interface AminoMsgCreatePool extends AminoMsg {
    readonly type: 'sunrise/pool/MsgCreatePool';
    readonly value: {
        readonly sender: string;
        readonly denom_base: string;
        readonly denom_quote: string;
        readonly fee_rate: string;
        readonly price_ratio: string;
        readonly base_offset: string;
    };
}

export interface AminoMsgCreatePosition extends AminoMsg {
    readonly type: 'sunrise/pool/MsgCreatePosition';
    readonly value: {
        readonly sender: string;
        readonly pool_id: string;
        readonly lower_tick: string;
        readonly upper_tick: string;
        readonly token_base: Coin;
        readonly token_quote: Coin;
        readonly min_amount_base: string;
        readonly min_amount_quote: string;
    };
}

export interface AminoMsgIncreaseLiquidity extends AminoMsg {
    readonly type: 'sunrise/pool/MsgIncreaseLiquidity';
    readonly value: {
        readonly sender: string;
        readonly id: string;
        readonly amount_base: string;
        readonly amount_quote: string;
        readonly min_amount_base: string;
        readonly min_amount_quote: string;
    };
}

export interface AminoMsgDecreaseLiquidity extends AminoMsg {
    readonly type: 'sunrise/pool/MsgDecreaseLiquidity';
    readonly value: {
        readonly sender: string;
        readonly id: string;
        readonly liquidity: string;
    };
}

export interface AminoMsgClaimRewards extends AminoMsg {
    readonly type: 'sunrise/pool/MsgClaimRewards';
    readonly value: {
        readonly sender: string;
        readonly position_ids: readonly string[];
    };
}

export function createLiquiditypoolAminoConverters(): AminoConverters {
    return {
        '/sunrise.liquiditypool.v1.MsgCreatePool': {
            aminoType: 'sunrise/pool/MsgCreatePool',
            toAmino: ({
                sender,
                denomBase,
                denomQuote,
                feeRate,
                priceRatio,
                baseOffset,
            }: MsgCreatePool): AminoMsgCreatePool['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(denomBase, 'missing denom_base');
                assertDefinedAndNotNull(denomQuote, 'missing denom_quote');
                assertDefinedAndNotNull(feeRate, 'missing fee_rate');
                assertDefinedAndNotNull(priceRatio, 'missing price_ratio');
                assertDefinedAndNotNull(baseOffset, 'missing base_offset');

                return {
                    sender: sender,
                    denom_base: denomBase,
                    denom_quote: denomQuote,
                    fee_rate: feeRate,
                    price_ratio: priceRatio,
                    base_offset: baseOffset,
                };
            },
            fromAmino: ({
                sender,
                denom_base,
                denom_quote,
                fee_rate,
                price_ratio,
                base_offset,
            }: AminoMsgCreatePool['value']): MsgCreatePool => {
                return create(MsgCreatePoolSchema, {
                    sender: sender,
                    denomBase: denom_base,
                    denomQuote: denom_quote,
                    feeRate: fee_rate,
                    priceRatio: price_ratio,
                    baseOffset: base_offset,
                });
            }
        },
        '/sunrise.liquiditypool.v1.MsgCreatePosition': {
            aminoType: 'sunrise/pool/MsgCreatePosition',
            toAmino: ({
                sender,
                poolId,
                lowerTick,
                upperTick,
                tokenBase,
                tokenQuote,
                minAmountBase,
                minAmountQuote,
            }: MsgCreatePosition): AminoMsgCreatePosition['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(poolId, 'missing pool_id');
                assertDefinedAndNotNull(lowerTick, 'missing lower_tick');
                assertDefinedAndNotNull(upperTick, 'missing upper_tick');
                assertDefinedAndNotNull(tokenBase, 'missing token_base');
                assertDefinedAndNotNull(tokenQuote, 'missing token_quote');
                assertDefinedAndNotNull(minAmountBase, 'missing min_amount_base');
                assertDefinedAndNotNull(minAmountQuote, 'missing min_amount_quote');

                return {
                    sender: sender,
                    pool_id: poolId.toString(),
                    lower_tick: lowerTick.toString(),
                    upper_tick: upperTick.toString(),
                    token_base: tokenBase,
                    token_quote: tokenQuote,
                    min_amount_base: minAmountBase,
                    min_amount_quote: minAmountQuote,
                };
            },
            fromAmino: ({
                sender,
                pool_id,
                lower_tick,
                upper_tick,
                token_base,
                token_quote,
                min_amount_base,
                min_amount_quote,
            }: AminoMsgCreatePosition['value']): MsgCreatePosition => {
                return create(MsgCreatePositionSchema, {
                    sender: sender,
                    poolId: BigInt(pool_id),
                    lowerTick: BigInt(lower_tick),
                    upperTick: BigInt(upper_tick),
                    tokenBase: token_base,
                    tokenQuote: token_quote,
                    minAmountBase: min_amount_base,
                    minAmountQuote: min_amount_quote,
                });
            }
        },
        '/sunrise.liquiditypool.v1.MsgIncreaseLiquidity': {
            aminoType: 'sunrise/pool/MsgIncreaseLiquidity',
            toAmino: ({
                sender,
                id,
                amountBase,
                amountQuote,
                minAmountBase,
                minAmountQuote,
            }: MsgIncreaseLiquidity): AminoMsgIncreaseLiquidity['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(id, 'missing id');
                assertDefinedAndNotNull(amountBase, 'missing amount_base');
                assertDefinedAndNotNull(amountQuote, 'missing amount_quote');
                assertDefinedAndNotNull(minAmountBase, 'missing min_amount_base');
                assertDefinedAndNotNull(minAmountQuote, 'missing min_amount_quote');

                return {
                    sender: sender,
                    id: id.toString(),
                    amount_base: amountBase,
                    amount_quote: amountQuote,
                    min_amount_base: minAmountBase,
                    min_amount_quote: minAmountQuote,
                };
            },
            fromAmino: ({
                sender,
                id,
                amount_base,
                amount_quote,
                min_amount_base,
                min_amount_quote,
            }: AminoMsgIncreaseLiquidity['value']): MsgIncreaseLiquidity => {
                return create(MsgIncreaseLiquiditySchema, {
                    sender: sender,
                    id: BigInt(id),
                    amountBase: amount_base,
                    amountQuote: amount_quote,
                    minAmountBase: min_amount_base,
                    minAmountQuote: min_amount_quote,
                });
            }
        },
        '/sunrise.liquiditypool.v1.MsgDecreaseLiquidity': {
            aminoType: 'sunrise/pool/MsgDecreaseLiquidity',
            toAmino: ({
                sender,
                id,
                liquidity,
            }: MsgDecreaseLiquidity): AminoMsgDecreaseLiquidity['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(id, 'missing id');
                assertDefinedAndNotNull(liquidity, 'missing liquidity');

                return {
                    sender: sender,
                    id: id.toString(),
                    liquidity: liquidity.toString(),
                };
            },
            fromAmino: ({
                sender,
                id,
                liquidity,
            }: AminoMsgDecreaseLiquidity['value']): MsgDecreaseLiquidity => {
                return create(MsgDecreaseLiquiditySchema, {
                    sender: sender,
                    id: BigInt(id),
                    liquidity: liquidity,
                });
            }
        },
        '/sunrise.liquiditypool.v1.MsgClaimRewards': {
            aminoType: 'sunrise/pool/MsgClaimRewards',
            toAmino: ({
                sender,
                positionIds,
            }: MsgClaimRewards): AminoMsgClaimRewards['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(positionIds, 'missing position_ids');

                return {
                    sender: sender,
                    position_ids: positionIds.map((e) => e.toString()),
                };
            },
            fromAmino: ({
                sender,
                position_ids,
            }: AminoMsgClaimRewards['value']): MsgClaimRewards => {
                return create(MsgClaimRewardsSchema, {
                    sender: sender,
                    positionIds: position_ids.map((e) => BigInt(e)),
                });
            }
        },
    };
}
