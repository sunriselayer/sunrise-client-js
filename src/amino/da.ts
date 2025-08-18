// Create Amino converter for the da module.
import type { AminoMsg, Coin } from '@cosmjs/amino';
import type { AminoConverters } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { create } from '@bufbuild/protobuf';
import {
    MsgPublishDataSchema,
    type MsgPublishData,
    MsgSubmitInvaliditySchema,
    type MsgSubmitInvalidity,
    MsgSubmitValidityProofSchema,
    type MsgSubmitValidityProof,
    MsgRegisterProofDeputySchema,
    type MsgRegisterProofDeputy,
    MsgUnregisterProofDeputySchema,
    type MsgUnregisterProofDeputy,
    MsgVerifyDataSchema,
    type MsgVerifyData,
    MsgUpdateParamsSchema,
    type MsgUpdateParams,
    type Params,
} from '../types/sunrise/da';

export interface AminoMsgPublishData extends AminoMsg {
    readonly type: 'sunrise/da/MsgPublishData';
    readonly value: {
        readonly sender: string;
        readonly metadata_uri: string;
        readonly parity_shard_count: string;
        readonly shard_double_hashes: readonly (string | undefined)[];
        readonly data_source_info: string;
    };
}

export interface AminoMsgSubmitInvalidity extends AminoMsg {
    readonly type: 'sunrise/da/MsgSubmitInvalidity';
    readonly value: {
        readonly sender: string;
        readonly metadata_uri: string;
        readonly indices: readonly string[];
    };
}

export interface AminoMsgSubmitValidityProof extends AminoMsg {
    readonly type: 'sunrise/da/MsgSubmitValidityProof';
    readonly value: {
        readonly sender: string;
        readonly validator_address: string;
        readonly metadata_uri: string;
        readonly indices: readonly string[];
        readonly proofs: readonly (string | undefined)[];
    };
}

export interface AminoMsgRegisterProofDeputy extends AminoMsg {
    readonly type: 'sunrise/da/MsgRegisterProofDeputy';
    readonly value: {
        readonly sender: string;
        readonly deputy_address: string;
    };
}

export interface AminoMsgUnregisterProofDeputy extends AminoMsg {
    readonly type: 'sunrise/da/MsgUnregisterProofDeputy';
    readonly value: {
        readonly sender: string;
    };
}

export interface AminoMsgVerifyData extends AminoMsg {
    readonly type: 'sunrise/da/MsgVerifyData';
    readonly value: {
        readonly sender: string;
    };
}

export interface AminoMsgUpdateParams extends AminoMsg {
    readonly type: 'sunrise/da/MsgUpdateParams';
    readonly value: {
        readonly authority: string;
        readonly params: Params;
    };
}

export function createDaAminoConverters(): AminoConverters {
    return {
        '/sunrise.da.v0.MsgPublishData': {
            aminoType: 'sunrise/da/MsgPublishData',
            toAmino: ({
                sender,
                metadataUri,
                parityShardCount,
                shardDoubleHashes,
                dataSourceInfo,
            }: MsgPublishData): AminoMsgPublishData['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(metadataUri, 'missing metadata_uri');
                assertDefinedAndNotNull(parityShardCount, 'missing parity_shard_count');
                assertDefinedAndNotNull(shardDoubleHashes, 'missing shard_double_hashes');
                assertDefinedAndNotNull(dataSourceInfo, 'missing data_source_info');

                return {
                    sender: sender,
                    metadata_uri: metadataUri,
                    parity_shard_count: parityShardCount.toString(),
                    shard_double_hashes: shardDoubleHashes.map((e) => Buffer.from(e).toString('base64')),
                    data_source_info: dataSourceInfo,
                };
            },
            fromAmino: ({
                sender,
                metadata_uri,
                parity_shard_count,
                shard_double_hashes,
                data_source_info,
            }: AminoMsgPublishData['value']): MsgPublishData => {
                return create(MsgPublishDataSchema, {
                    sender: sender,
                    metadataUri: metadata_uri,
                    parityShardCount: BigInt(parity_shard_count),
                    shardDoubleHashes: shard_double_hashes.map((e) => Buffer.from(e ?? "", 'base64')),
                    dataSourceInfo: data_source_info,
                });
            }
        },
        '/sunrise.da.v0.MsgSubmitInvalidity': {
            aminoType: 'sunrise/da/MsgSubmitInvalidity',
            toAmino: ({
                sender,
                metadataUri,
                indices,
            }: MsgSubmitInvalidity): AminoMsgSubmitInvalidity['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(metadataUri, 'missing metadata_uri');
                assertDefinedAndNotNull(indices, 'missing indices');

                return {
                    sender: sender,
                    metadata_uri: metadataUri,
                    indices: indices.map((e) => e.toString()),
                };
            },
            fromAmino: ({
                sender,
                metadata_uri,
                indices,
            }: AminoMsgSubmitInvalidity['value']): MsgSubmitInvalidity => {
                return create(MsgSubmitInvaliditySchema, {
                    sender: sender,
                    metadataUri: metadata_uri,
                    indices: indices.map((e) => BigInt(e)),
                });
            }
        },
        '/sunrise.da.v0.MsgSubmitValidityProof': {
            aminoType: 'sunrise/da/MsgSubmitValidityProof',
            toAmino: ({
                sender,
                validatorAddress,
                metadataUri,
                indices,
                proofs,
            }: MsgSubmitValidityProof): AminoMsgSubmitValidityProof['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(validatorAddress, 'missing validator_address');
                assertDefinedAndNotNull(metadataUri, 'missing metadata_uri');
                assertDefinedAndNotNull(indices, 'missing indices');
                assertDefinedAndNotNull(proofs, 'missing proofs');

                return {
                    sender: sender,
                    validator_address: validatorAddress,
                    metadata_uri: metadataUri,
                    indices: indices.map((e) => e.toString()),
                    proofs: proofs.map((e) => Buffer.from(e).toString('base64')),
                };
            },
            fromAmino: ({
                sender,
                validator_address,
                metadata_uri,
                indices,
                proofs,
            }: AminoMsgSubmitValidityProof['value']): MsgSubmitValidityProof => {
                return create(MsgSubmitValidityProofSchema, {
                    sender: sender,
                    validatorAddress: validator_address,
                    metadataUri: metadata_uri,
                    indices: indices.map((e) => BigInt(e)),
                    proofs: proofs.map((e) => Buffer.from(e ?? "", 'base64')),
                });
            }
        },
        '/sunrise.da.v0.MsgRegisterProofDeputy': {
            aminoType: 'sunrise/da/MsgRegisterProofDeputy',
            toAmino: ({
                sender,
                deputyAddress,
            }: MsgRegisterProofDeputy): AminoMsgRegisterProofDeputy['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');
                assertDefinedAndNotNull(deputyAddress, 'missing deputy_address');

                return {
                    sender: sender,
                    deputy_address: deputyAddress,
                };
            },
            fromAmino: ({
                sender,
                deputy_address,
            }: AminoMsgRegisterProofDeputy['value']): MsgRegisterProofDeputy => {
                return create(MsgRegisterProofDeputySchema, {
                    sender: sender,
                    deputyAddress: deputy_address,
                });
            }
        },
        '/sunrise.da.v0.MsgUnregisterProofDeputy': {
            aminoType: 'sunrise/da/MsgUnregisterProofDeputy',
            toAmino: ({
                sender,
            }: MsgUnregisterProofDeputy): AminoMsgUnregisterProofDeputy['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');

                return {
                    sender: sender,
                };
            },
            fromAmino: ({
                sender,
            }: AminoMsgUnregisterProofDeputy['value']): MsgUnregisterProofDeputy => {
                return create(MsgUnregisterProofDeputySchema, {
                    sender: sender,
                });
            }
        },
        '/sunrise.da.v0.MsgVerifyData': {
            aminoType: 'sunrise/da/MsgVerifyData',
            toAmino: ({
                sender,
            }: MsgVerifyData): AminoMsgVerifyData['value'] => {
                assertDefinedAndNotNull(sender, 'missing sender');

                return {
                    sender: sender,
                };
            },
            fromAmino: ({
                sender,
            }: AminoMsgVerifyData['value']): MsgVerifyData => {
                return create(MsgVerifyDataSchema, {
                    sender: sender,
                });
            }
        },
        '/sunrise.da.v0.MsgUpdateParams': {
            aminoType: 'sunrise/da/MsgUpdateParams',
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
