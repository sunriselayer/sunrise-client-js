// Create Amino converter for the shareclass module.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgNonVotingDelegateSchema,
    type MsgNonVotingDelegate,
    MsgNonVotingUndelegateSchema,
    type MsgNonVotingUndelegate,
    MsgClaimRewardsSchema,
    type MsgClaimRewards,
    MsgCreateValidatorSchema,
    type MsgCreateValidator,
} from '../types/sunrise/shareclass';

import {
    type Description,
    type CommissionRates,
} from '../types/cosmos/staking';
import { type Any } from '@bufbuild/protobuf/wkt';

export interface AminoMsgNonVotingDelegate extends AminoMsg {
    readonly type: 'sunrise/sc/MsgNonVotingDelegate';
    readonly value: {
        readonly sender: string;
        readonly amount: Coin;
    };
}

export interface AminoMsgNonVotingUndelegate extends AminoMsg {
    readonly type: 'sunrise/sc/MsgNonVotingUndelegate';
    readonly value: {
        readonly sender: string;
        readonly amount: Coin;
    };
}

export interface AminoMsgClaimRewards extends AminoMsg {
    readonly type: 'sunrise/sc/MsgClaimRewards';
    readonly value: {
        readonly sender: string;
    };
}

export interface AminoMsgCreateValidator extends AminoMsg {
    readonly type: 'sunrise/sc/MsgCreateValidator';
    readonly value: {
        readonly description: Description;
        readonly commission: CommissionRates;
        readonly min_self_delegation: string;
        readonly validator_address: string;
        readonly pubkey: Any;
        readonly amount: Coin;
    };
}

export function createShareclassAminoConverters(): AminoConverters {
    return {
        '/sunrise.shareclass.v1.MsgNonVotingDelegate': {
            aminoType: 'sunrise/sc/MsgNonVotingDelegate',
            toAmino: ({
                sender,
                amount,
            }: MsgNonVotingDelegate): AminoMsgNonVotingDelegate['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    sender: sender,
                    amount: amount,
                };
            },
            fromAmino: ({
                sender,
                amount,
            }: AminoMsgNonVotingDelegate['value']): MsgNonVotingDelegate => {
                return create(MsgNonVotingDelegateSchema, {
                    sender: sender,
                    amount: amount,
                });
            }
        },
        '/sunrise.shareclass.v1.MsgNonVotingUndelegate': {
            aminoType: 'sunrise/sc/MsgNonVotingUndelegate',
            toAmino: ({
                sender,
                amount,
            }: MsgNonVotingUndelegate): AminoMsgNonVotingUndelegate['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    sender: sender,
                    amount: amount,
                };
            },
            fromAmino: ({
                sender,
                amount,
            }: AminoMsgNonVotingUndelegate['value']): MsgNonVotingUndelegate => {
                return create(MsgNonVotingUndelegateSchema, {
                    sender: sender,
                    amount: amount,
                });
            }
        },
        '/sunrise.shareclass.v1.MsgClaimRewards': {
            aminoType: 'sunrise/sc/MsgClaimRewards',
            toAmino: ({
                sender,
            }: MsgClaimRewards): AminoMsgClaimRewards['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');

                return {
                    sender: sender,
                };
            },
            fromAmino: ({
                sender,
            }: AminoMsgClaimRewards['value']): MsgClaimRewards => {
                return create(MsgClaimRewardsSchema, {
                    sender: sender,
                });
            }
        },
        '/sunrise.shareclass.v1.MsgCreateValidator': {
            aminoType: 'sunrise/sc/MsgCreateValidator',
            toAmino: ({
                description,
                commission,
                minSelfDelegation,
                validatorAddress,
                pubkey,
                amount,
            }: MsgCreateValidator): AminoMsgCreateValidator['value'] => {
                assertDefinedAndNotNull(description, 'missing description');
                assertDefinedAndNotNull(commission, 'missing commission');
                assertDefinedAndNotNull(minSelfDelegation, 'missing min_self_delegation');
                assertDefinedAndNotNull(validatorAddress, 'missing validator_address');
                assertDefinedAndNotNull(pubkey, 'missing pubkey');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    description: description,
                    commission: commission,
                    min_self_delegation: minSelfDelegation,
                    validator_address: validatorAddress,
                    pubkey: pubkey,
                    amount: amount,
                };
            },
            fromAmino: ({
                description,
                commission,
                min_self_delegation,
                validator_address,
                pubkey,
                amount,
            }: AminoMsgCreateValidator['value']): MsgCreateValidator => {
                return create(MsgCreateValidatorSchema, {
                    description: description,
                    commission: commission,
                    minSelfDelegation: min_self_delegation,
                    validatorAddress: validator_address,
                    pubkey: pubkey,
                    amount: amount,
                });
            }
        },
    };
}
