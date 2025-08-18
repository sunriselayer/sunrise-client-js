// Create Amino converter for the liquidityincentive module.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgUpdateParamsSchema,
    type MsgUpdateParams,
    type Params,
    MsgStartNewEpochSchema,
    type MsgStartNewEpoch,
    MsgVoteGaugeSchema,
    type MsgVoteGauge,
    MsgRegisterBribeSchema,
    type MsgRegisterBribe,
    MsgClaimBribesSchema,
    type MsgClaimBribes,
    type PoolWeight,
} from '../types/sunrise/liquidityincentive';

export interface AminoMsgUpdateParams extends AminoMsg {
    readonly type: 'sunrise/incentive/MsgUpdateParams';
    readonly value: {
        readonly authority: string;
        readonly params: Params;
    };
}

export interface AminoMsgStartNewEpoch extends AminoMsg {
    readonly type: 'sunrise/incentive/MsgStartNewEpoch';
    readonly value: {
        readonly sender: string;
    };
}

export interface AminoMsgVoteGauge extends AminoMsg {
    readonly type: 'sunrise/incentive/MsgVoteGauge';
    readonly value: {
        readonly sender: string;
        readonly pool_weights: readonly PoolWeight[];
    };
}

export interface AminoMsgRegisterBribe extends AminoMsg {
    readonly type: 'sunrise/incentive/MsgRegisterBribe';
    readonly value: {
        readonly sender: string;
        readonly epoch_id: string;
        readonly pool_id: string;
        readonly amount: readonly Coin[];
    };
}

export interface AminoMsgClaimBribes extends AminoMsg {
    readonly type: 'sunrise/incentive/MsgClaimBribes';
    readonly value: {
        readonly sender: string;
        readonly bribe_ids: readonly string[];
    };
}

export function createLiquidityincentiveAminoConverters(): AminoConverters {
    return {
        '/sunrise.liquidityincentive.v1.MsgUpdateParams': {
            aminoType: 'sunrise/incentive/MsgUpdateParams',
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
        '/sunrise.liquidityincentive.v1.MsgStartNewEpoch': {
            aminoType: 'sunrise/incentive/MsgStartNewEpoch',
            toAmino: ({
                sender,
            }: MsgStartNewEpoch): AminoMsgStartNewEpoch['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');

                return {
                    sender: sender,
                };
            },
            fromAmino: ({
                sender,
            }: AminoMsgStartNewEpoch['value']): MsgStartNewEpoch => {
                return create(MsgStartNewEpochSchema, {
                    sender: sender,
                });
            }
        },
        '/sunrise.liquidityincentive.v1.MsgVoteGauge': {
            aminoType: 'sunrise/incentive/MsgVoteGauge',
            toAmino: ({
                sender,
                poolWeights,
            }: MsgVoteGauge): AminoMsgVoteGauge['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(poolWeights, 'missing pool_weights');

                return {
                    sender: sender,
                    pool_weights: poolWeights,
                };
            },
            fromAmino: ({
                sender,
                pool_weights,
            }: AminoMsgVoteGauge['value']): MsgVoteGauge => {
                return create(MsgVoteGaugeSchema, {
                    sender: sender,
                    poolWeights: [...pool_weights],
                });
            }
        },
        '/sunrise.liquidityincentive.v1.MsgRegisterBribe': {
            aminoType: 'sunrise/incentive/MsgRegisterBribe',
            toAmino: ({
                sender,
                epochId,
                poolId,
                amount,
            }: MsgRegisterBribe): AminoMsgRegisterBribe['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(epochId, 'missing epoch_id');
                assertDefinedAndNotNull(poolId, 'missing pool_id');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    sender: sender,
                    epoch_id: epochId.toString(),
                    pool_id: poolId.toString(),
                    amount: [...amount],
                };
            },
            fromAmino: ({
                sender,
                epoch_id,
                pool_id,
                amount,
            }: AminoMsgRegisterBribe['value']): MsgRegisterBribe => {
                return create(MsgRegisterBribeSchema, {
                    sender: sender,
                    epochId: BigInt(epoch_id),
                    poolId: BigInt(pool_id),
                    amount: [...amount],
                });
            }
        },
        '/sunrise.liquidityincentive.v1.MsgClaimBribes': {
            aminoType: 'sunrise/incentive/MsgClaimBribes',
            toAmino: ({
                sender,
                bribeIds,
            }: MsgClaimBribes): AminoMsgClaimBribes['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(bribeIds, 'missing bribe_ids');

                return {
                    sender: sender,
                    bribe_ids: bribeIds.map((e) => e.toString()),
                };
            },
            fromAmino: ({
                sender,
                bribe_ids,
            }: AminoMsgClaimBribes['value']): MsgClaimBribes => {
                return create(MsgClaimBribesSchema, {
                    sender: sender,
                    bribeIds: bribe_ids.map((e) => BigInt(e)),
                });
            }
        },
    };
}
