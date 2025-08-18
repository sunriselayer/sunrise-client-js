// Create Amino converter for the lockup module.
// This file provides the logic to convert message types between Amino and Protobuf formats,
// which is necessary for signing transactions with wallets that use Legacy Amino, such as Keplr with Ledger.
import { create } from "@bufbuild/protobuf";
import type { AminoMsg, Coin } from "@cosmjs/amino";
import type { AminoConverters } from "@cosmjs/stargate";
import { assertDefinedAndNotNull } from "@cosmjs/utils";

import {
    MsgClaimRewardsSchema,
    MsgInitLockupAccountSchema,
    MsgNonVotingDelegateSchema,
    MsgNonVotingUndelegateSchema,
    MsgSendSchema,
    type MsgClaimRewards,
    type MsgInitLockupAccount,
    type MsgNonVotingDelegate,
    type MsgNonVotingUndelegate,
    type MsgSend,
} from "../types/sunrise/lockup";

/**
 * Initializes a new lockup account.
 */
export interface AminoMsgInitLockupAccount extends AminoMsg {
    readonly type: "sunrise/lockup/MsgInitLockupAccount";
    readonly value: {
        readonly sender: string;
        readonly owner: string;
        readonly start_time: string;
        readonly end_time: string;
        readonly amount: Coin;
    };
}

/**
 * Performs a non-voting delegation from a lockup account to a validator.
 */
export interface AminoMsgNonVotingDelegate extends AminoMsg {
    readonly type: "sunrise/lockup/MsgNonVotingDelegate";
    readonly value: {
        readonly owner: string;
        readonly lockup_account_id: string;
        readonly validator_address: string;
        readonly amount: Coin;
    };
}

/**
 * Performs a non-voting undelegation from a lockup account from a validator.
 */
export interface AminoMsgNonVotingUndelegate extends AminoMsg {
    readonly type: "sunrise/lockup/MsgNonVotingUndelegate";
    readonly value: {
        readonly owner: string;
        readonly lockup_account_id: string;
        readonly validator_address: string;
        readonly amount: Coin;
    };
}

/**
 * Claims rewards from a lockup account.
 */
export interface AminoMsgClaimRewards extends AminoMsg {
    readonly type: "sunrise/lockup/MsgClaimRewards";
    readonly value: {
        readonly owner: string;
        readonly lockup_account_id: string;
        readonly validator_address: string;
    };
}


/**
 * Performs a send from a lockup account to a recipient.
 */
export interface AminoMsgSend extends AminoMsg {
    readonly type: "sunrise/lockup/MsgSend";
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
        "/sunrise.lockup.v1.MsgInitLockupAccount": {
            aminoType: "sunrise/lockup/MsgInitLockupAccount",
            toAmino: ({
                sender,
                owner,
                startTime,
                endTime,
                amount,
            }: MsgInitLockupAccount): AminoMsgInitLockupAccount["value"] => {
                assertDefinedAndNotNull(sender, "missing sender");
                assertDefinedAndNotNull(owner, "missing owner");
                assertDefinedAndNotNull(startTime, "missing startTime");
                assertDefinedAndNotNull(endTime, "missing endTime");
                assertDefinedAndNotNull(amount, "missing amount");

                return {
                    sender: sender,
                    owner: owner,
                    start_time: startTime.toString(),
                    end_time: endTime.toString(),
                    amount: amount,
                };
            },
            fromAmino: ({
                sender,
                owner,
                start_time,
                end_time,
                amount,
            }: AminoMsgInitLockupAccount["value"]): MsgInitLockupAccount => {
                return create(MsgInitLockupAccountSchema, {
                    sender: sender,
                    owner: owner,
                    startTime: BigInt(start_time),
                    endTime: BigInt(end_time),
                    amount: amount,
                });
            },
        },
        "/sunrise.lockup.v1.MsgNonVotingDelegate": {
            aminoType: "sunrise/lockup/MsgNonVotingDelegate",
            toAmino: ({
                owner,
                lockupAccountId,
                validatorAddress,
                amount,
            }: MsgNonVotingDelegate): AminoMsgNonVotingDelegate["value"] => {
                assertDefinedAndNotNull(owner, "missing owner");
                assertDefinedAndNotNull(lockupAccountId, "missing lockupAccountId");
                assertDefinedAndNotNull(validatorAddress, "missing validatorAddress");
                assertDefinedAndNotNull(amount, "missing amount");

                return {
                    owner: owner,
                    lockup_account_id: lockupAccountId.toString(),
                    validator_address: validatorAddress,
                    amount: amount,
                };
            },
            fromAmino: ({
                owner,
                lockup_account_id,
                validator_address,
                amount,
            }: AminoMsgNonVotingDelegate["value"]): MsgNonVotingDelegate => {
                return create(MsgNonVotingDelegateSchema, {
                    owner: owner,
                    lockupAccountId: BigInt(lockup_account_id),
                    validatorAddress: validator_address,
                    amount: amount,
                });
            },
        },
        "/sunrise.lockup.v1.MsgNonVotingUndelegate": {
            aminoType: "sunrise/lockup/MsgNonVotingUndelegate",
            toAmino: ({
                owner,
                lockupAccountId,
                validatorAddress,
                amount,
            }: MsgNonVotingUndelegate): AminoMsgNonVotingUndelegate["value"] => {
                assertDefinedAndNotNull(owner, "missing owner");
                assertDefinedAndNotNull(lockupAccountId, "missing lockupAccountId");
                assertDefinedAndNotNull(validatorAddress, "missing validatorAddress");
                assertDefinedAndNotNull(amount, "missing amount");

                return {
                    owner: owner,
                    lockup_account_id: lockupAccountId.toString(),
                    validator_address: validatorAddress,
                    amount: amount,
                };
            },
            fromAmino: ({
                owner,
                lockup_account_id,
                validator_address,
                amount,
            }: AminoMsgNonVotingUndelegate["value"]): MsgNonVotingUndelegate => {
                return create(MsgNonVotingUndelegateSchema, {
                    owner: owner,
                    lockupAccountId: BigInt(lockup_account_id),
                    validatorAddress: validator_address,
                    amount: amount,
                });
            },
        },
        "/sunrise.lockup.v1.MsgClaimRewards": {
            aminoType: "sunrise/lockup/MsgClaimRewards",
            toAmino: ({
                owner,
                lockupAccountId,
                validatorAddress,
            }: MsgClaimRewards): AminoMsgClaimRewards["value"] => {
                assertDefinedAndNotNull(owner, "missing owner");
                assertDefinedAndNotNull(lockupAccountId, "missing lockupAccountId");
                assertDefinedAndNotNull(validatorAddress, "missing validatorAddress");

                return {
                    owner: owner,
                    lockup_account_id: lockupAccountId.toString(),
                    validator_address: validatorAddress,
                };
            },
            fromAmino: ({
                owner,
                lockup_account_id,
                validator_address,
            }: AminoMsgClaimRewards["value"]): MsgClaimRewards => {
                return create(MsgClaimRewardsSchema, {
                    owner: owner,
                    lockupAccountId: BigInt(lockup_account_id),
                    validatorAddress: validator_address,
                });
            },
        },
        "/sunrise.lockup.v1.MsgSend": {
            aminoType: "sunrise/lockup/MsgSend",
            toAmino: ({ owner, lockupAccountId, recipient, amount }: MsgSend): AminoMsgSend["value"] => {
                assertDefinedAndNotNull(owner, "missing owner");
                assertDefinedAndNotNull(lockupAccountId, "missing lockupAccountId");
                assertDefinedAndNotNull(recipient, "missing recipient");
                assertDefinedAndNotNull(amount, "missing amount");

                return {
                    owner: owner,
                    lockup_account_id: lockupAccountId.toString(),
                    recipient: recipient,
                    amount: amount,
                };
            },
            fromAmino: ({
                owner,
                lockup_account_id,
                recipient,
                amount,
            }: AminoMsgSend["value"]): MsgSend => {
                return create(MsgSendSchema, {
                    owner: owner,
                    lockupAccountId: BigInt(lockup_account_id),
                    recipient: recipient,
                    amount: [...amount],
                });
            },
        },
    };
}
