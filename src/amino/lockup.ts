// Create Amino converter for the lockup module.
// This file provides the logic to convert message types between Amino and Protobuf formats,
// which is necessary for signing transactions with wallets that use Legacy Amino, such as Keplr with Ledger.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgNonVotingDelegateSchema,
    MsgSendSchema,
    type MsgNonVotingDelegate,
    type MsgSend
} from '../types/sunrise/lockup';

/**
 * Performs a non-voting delegation from a lockup account to a validator.
 */
export interface AminoMsgNonVotingDelegate extends AminoMsg {
    readonly type: 'sunrise/lockup/MsgNonVotingDelegate';
    readonly value: {
        readonly owner: string;
        readonly lockup_account_id: string;
        readonly validator_address: string;
        readonly amount: Coin;
    };
}

/**
 * Performs a send from a lockup account to a recipient.
 */
export interface AminoMsgSend extends AminoMsg {
    readonly type: 'sunrise/lockup/MsgSend';
    readonly value: {
        readonly owner: string;
        readonly lockup_account_id: string;
        readonly recipient: string;
        readonly amount: readonly Coin[];
    };
}

/**
 * Creates an Amino converter object for lockup module messages.
 * This object is used by AminoTypes to convert messages between Protobuf and Amino formats.
 * @returns An object containing the Amino converters for the lockup module.
 */
export function createLockupAminoConverters(): AminoConverters {
    return {
        '/sunrise.lockup.v1.MsgNonVotingDelegate': {
            aminoType: 'sunrise/lockup/MsgNonVotingDelegate',
            toAmino: ({
                owner,
                lockupAccountId,
                validatorAddress,
                amount
            }: MsgNonVotingDelegate): AminoMsgNonVotingDelegate['value'] => {
                assertDefinedAndNotNull(owner, 'missing owner');
                assertDefinedAndNotNull(lockupAccountId, 'missing lockupAccountId');
                assertDefinedAndNotNull(validatorAddress, 'missing validatorAddress');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    owner: owner,
                    lockup_account_id: lockupAccountId.toString(),
                    validator_address: validatorAddress,
                    amount: amount
                };
            },
            fromAmino: ({
                owner,
                lockup_account_id,
                validator_address,
                amount
            }: AminoMsgNonVotingDelegate['value']): MsgNonVotingDelegate => {
                return create(MsgNonVotingDelegateSchema, {
                    owner: owner,
                    lockupAccountId: BigInt(lockup_account_id),
                    validatorAddress: validator_address,
                    amount: amount
                });
            }
        },
        '/sunrise.lockup.v1.MsgSend': {
            aminoType: 'sunrise/lockup/MsgSend',
            toAmino: ({
                owner,
                lockupAccountId,
                recipient,
                amount
            }: MsgSend): AminoMsgSend['value'] => {
                assertDefinedAndNotNull(owner, 'missing owner');
                assertDefinedAndNotNull(lockupAccountId, 'missing lockupAccountId');
                assertDefinedAndNotNull(recipient, 'missing recipient');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    owner: owner,
                    lockup_account_id: lockupAccountId.toString(),
                    recipient: recipient,
                    amount: amount
                };
            },
            fromAmino: ({
                owner,
                lockup_account_id,
                recipient,
                amount
            }: AminoMsgSend['value']): MsgSend => {
                return create(MsgSendSchema, {
                    owner: owner,
                    lockupAccountId: BigInt(lockup_account_id),
                    recipient: recipient,
                    amount: [...amount]
                });
            }
        }
    };
}

