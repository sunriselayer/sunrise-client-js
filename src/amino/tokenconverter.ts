// Create Amino converter for the tokenconverter module.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgUpdateParamsSchema,
    type MsgUpdateParams,
    type Params,
    MsgConvertSchema,
    type MsgConvert,
    MsgSendSchema,
    type MsgSend,
} from '../types/sunrise/tokenconverter';

export interface AminoMsgUpdateParams extends AminoMsg {
    readonly type: 'sunrise/tokenconverter/MsgUpdateParams';
    readonly value: {
        readonly authority: string;
        readonly params: Params;
    };
}

export interface AminoMsgConvert extends AminoMsg {
    readonly type: 'sunrise/tokenconverter/MsgConvert';
    readonly value: {
        readonly sender: string;
        readonly amount: string;
    };
}

export interface AminoMsgSend extends AminoMsg {
    readonly type: 'sunrise/tokenconverter/MsgSend';
    readonly value: {
        readonly from_address: string;
        readonly to_address: string;
        readonly amount: readonly Coin[];
    };
}

export function createTokenconverterAminoConverters(): AminoConverters {
    return {
        '/sunrise.tokenconverter.v1.MsgUpdateParams': {
            aminoType: 'sunrise/tokenconverter/MsgUpdateParams',
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
        '/sunrise.tokenconverter.v1.MsgConvert': {
            aminoType: 'sunrise/tokenconverter/MsgConvert',
            toAmino: ({
                sender,
                amount,
            }: MsgConvert): AminoMsgConvert['value'] => {
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
            }: AminoMsgConvert['value']): MsgConvert => {
                return create(MsgConvertSchema, {
                    sender: sender,
                    amount: amount,
                });
            }
        },
        '/sunrise.tokenconverter.v1.MsgSend': {
            aminoType: 'sunrise/tokenconverter/MsgSend',
            toAmino: ({
                fromAddress,
                toAddress,
                amount,
            }: MsgSend): AminoMsgSend['value'] => {
                assertDefinedAndNotNull(fromAddress, 'missing from_address');
                assertDefinedAndNotNull(toAddress, 'missing to_address');
                assertDefinedAndNotNull(amount, 'missing amount');

                return {
                    from_address: fromAddress,
                    to_address: toAddress,
                    amount: [...amount],
                };
            },
            fromAmino: ({
                from_address,
                to_address,
                amount,
            }: AminoMsgSend['value']): MsgSend => {
                return create(MsgSendSchema, {
                    fromAddress: from_address,
                    toAddress: to_address,
                    amount: [...amount],
                });
            }
        },
    };
}
