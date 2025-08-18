// Create Amino converter for the stable module.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgUpdateParamsSchema,
    type MsgUpdateParams,
    type Params,
    MsgMintSchema,
    type MsgMint,
    MsgBurnSchema,
    type MsgBurn,
} from '../types/sunrise/stable';

export interface AminoMsgUpdateParams extends AminoMsg {
    readonly type: 'sunrise/stable/MsgUpdateParams';
    readonly value: {
        readonly authority: string;
        readonly params: Params;
    };
}

export interface AminoMsgMint extends AminoMsg {
    readonly type: 'sunrise/stable/MsgMint';
    readonly value: {
        readonly sender: string;
        readonly amount: string;
    };
}

export interface AminoMsgBurn extends AminoMsg {
    readonly type: 'sunrise/stable/MsgBurn';
    readonly value: {
        readonly sender: string;
        readonly amount: readonly Coin[];
    };
}

export function createStableAminoConverters(): AminoConverters {
    return {
        '/sunrise.stable.v1.MsgUpdateParams': {
            aminoType: 'sunrise/stable/MsgUpdateParams',
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
        '/sunrise.stable.v1.MsgMint': {
            aminoType: 'sunrise/stable/MsgMint',
            toAmino: ({
                sender,
                amount,
            }: MsgMint): AminoMsgMint['value'] => {
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
            }: AminoMsgMint['value']): MsgMint => {
                return create(MsgMintSchema, {
                    sender: sender,
                    amount: amount,
                });
            }
        },
        '/sunrise.stable.v1.MsgBurn': {
            aminoType: 'sunrise/stable/MsgBurn',
            toAmino: ({
                sender,
                amount,
            }: MsgBurn): AminoMsgBurn['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    sender: sender,
                    amount: [...amount],
                };
            },
            fromAmino: ({
                sender,
                amount,
            }: AminoMsgBurn['value']): MsgBurn => {
                return create(MsgBurnSchema, {
                    sender: sender,
                    amount: [...amount],
                });
            }
        },
    };
}
