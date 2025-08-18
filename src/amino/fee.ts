// Create Amino converter for the fee module.
import type { AminoMsg } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgUpdateParamsSchema,
    type MsgUpdateParams,
    type Params,
} from '../types/sunrise/fee';

export interface AminoMsgUpdateParams extends AminoMsg {
    readonly type: 'sunrise/fee/MsgUpdateParams';
    readonly value: {
        readonly authority: string;
        readonly params: Params;
    };
}

export function createFeeAminoConverters(): AminoConverters {
    return {
        '/sunrise.fee.v1.MsgUpdateParams': {
            aminoType: 'sunrise/fee/MsgUpdateParams',
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
    };
}
