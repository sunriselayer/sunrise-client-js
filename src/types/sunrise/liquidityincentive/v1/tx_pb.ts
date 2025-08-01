// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquidityincentive/v1/tx.proto (package sunrise.liquidityincentive.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Coin } from "../../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_msg_v1_msg } from "../../../cosmos/msg/v1/msg_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { PoolWeight } from "./gauge_pb";
import { file_sunrise_liquidityincentive_v1_gauge } from "./gauge_pb";
import type { Params } from "./params_pb";
import { file_sunrise_liquidityincentive_v1_params } from "./params_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquidityincentive/v1/tx.proto.
 */
export const file_sunrise_liquidityincentive_v1_tx: GenFile = /*@__PURE__*/
  fileDesc("CiZzdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS90eC5wcm90bxIdc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEiiwEKD01zZ1VwZGF0ZVBhcmFtcxIrCglhdXRob3JpdHkYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxI7CgZwYXJhbXMYAiABKAsyJS5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5QYXJhbXNCBMjeHwA6DoLnsCoJYXV0aG9yaXR5IhkKF01zZ1VwZGF0ZVBhcmFtc1Jlc3BvbnNlIkkKEE1zZ1N0YXJ0TmV3RXBvY2gSKAoGc2VuZGVyGAEgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmc6C4LnsCoGc2VuZGVyIhoKGE1zZ1N0YXJ0TmV3RXBvY2hSZXNwb25zZSKMAQoMTXNnVm90ZUdhdWdlEigKBnNlbmRlchgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEkUKDHBvb2xfd2VpZ2h0cxgCIAMoCzIpLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLlBvb2xXZWlnaHRCBMjeHwA6C4LnsCoGc2VuZGVyIhYKFE1zZ1ZvdGVHYXVnZVJlc3BvbnNlIskBChBNc2dSZWdpc3RlckJyaWJlEigKBnNlbmRlchgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEhAKCGVwb2NoX2lkGAIgASgEEg8KB3Bvb2xfaWQYAyABKAQSWwoGYW1vdW50GAQgAygLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQjDI3h8Aqt8fKGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnM6C4LnsCoGc2VuZGVyIhoKGE1zZ1JlZ2lzdGVyQnJpYmVSZXNwb25zZSJaCg5Nc2dDbGFpbUJyaWJlcxIoCgZzZW5kZXIYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxIRCglicmliZV9pZHMYAiADKAQ6C4LnsCoGc2VuZGVyInUKFk1zZ0NsYWltQnJpYmVzUmVzcG9uc2USWwoGYW1vdW50GAEgAygLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQjDI3h8Aqt8fKGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMy3gQKA01zZxJ2CgxVcGRhdGVQYXJhbXMSLi5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5Nc2dVcGRhdGVQYXJhbXMaNi5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5Nc2dVcGRhdGVQYXJhbXNSZXNwb25zZRJ5Cg1TdGFydE5ld0Vwb2NoEi8uc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuTXNnU3RhcnROZXdFcG9jaBo3LnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLk1zZ1N0YXJ0TmV3RXBvY2hSZXNwb25zZRJtCglWb3RlR2F1Z2USKy5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5Nc2dWb3RlR2F1Z2UaMy5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5Nc2dWb3RlR2F1Z2VSZXNwb25zZRJ5Cg1SZWdpc3RlckJyaWJlEi8uc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuTXNnUmVnaXN0ZXJCcmliZRo3LnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLk1zZ1JlZ2lzdGVyQnJpYmVSZXNwb25zZRJzCgtDbGFpbUJyaWJlcxItLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLk1zZ0NsYWltQnJpYmVzGjUuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuTXNnQ2xhaW1CcmliZXNSZXNwb25zZRoFgOewKgFC/gEKIWNvbS5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MUIHVHhQcm90b1ABWjpnaXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvbGlxdWlkaXR5aW5jZW50aXZlL3R5cGVzogIDU0xYqgIdU3VucmlzZS5MaXF1aWRpdHlpbmNlbnRpdmUuVjHKAh1TdW5yaXNlXExpcXVpZGl0eWluY2VudGl2ZVxWMeICKVN1bnJpc2VcTGlxdWlkaXR5aW5jZW50aXZlXFYxXEdQQk1ldGFkYXRh6gIfU3VucmlzZTo6TGlxdWlkaXR5aW5jZW50aXZlOjpWMWIGcHJvdG8z", [file_cosmos_base_v1beta1_coin, file_cosmos_msg_v1_msg, file_cosmos_proto_cosmos, file_gogoproto_gogo, file_sunrise_liquidityincentive_v1_gauge, file_sunrise_liquidityincentive_v1_params]);

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgUpdateParams
 */
export type MsgUpdateParams = Message<"sunrise.liquidityincentive.v1.MsgUpdateParams"> & {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: sunrise.liquidityincentive.v1.Params params = 2;
   */
  params?: Params;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgUpdateParams.
 * Use `create(MsgUpdateParamsSchema)` to create a new message.
 */
export const MsgUpdateParamsSchema: GenMessage<MsgUpdateParams> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 0);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponse = Message<"sunrise.liquidityincentive.v1.MsgUpdateParamsResponse"> & {
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgUpdateParamsResponse.
 * Use `create(MsgUpdateParamsResponseSchema)` to create a new message.
 */
export const MsgUpdateParamsResponseSchema: GenMessage<MsgUpdateParamsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 1);

/**
 * MsgStartNewEpoch
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgStartNewEpoch
 */
export type MsgStartNewEpoch = Message<"sunrise.liquidityincentive.v1.MsgStartNewEpoch"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgStartNewEpoch.
 * Use `create(MsgStartNewEpochSchema)` to create a new message.
 */
export const MsgStartNewEpochSchema: GenMessage<MsgStartNewEpoch> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 2);

/**
 * MsgStartNewEpochResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgStartNewEpochResponse
 */
export type MsgStartNewEpochResponse = Message<"sunrise.liquidityincentive.v1.MsgStartNewEpochResponse"> & {
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgStartNewEpochResponse.
 * Use `create(MsgStartNewEpochResponseSchema)` to create a new message.
 */
export const MsgStartNewEpochResponseSchema: GenMessage<MsgStartNewEpochResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 3);

/**
 * MsgVoteGauge
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgVoteGauge
 */
export type MsgVoteGauge = Message<"sunrise.liquidityincentive.v1.MsgVoteGauge"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * @generated from field: repeated sunrise.liquidityincentive.v1.PoolWeight pool_weights = 2;
   */
  poolWeights: PoolWeight[];
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgVoteGauge.
 * Use `create(MsgVoteGaugeSchema)` to create a new message.
 */
export const MsgVoteGaugeSchema: GenMessage<MsgVoteGauge> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 4);

/**
 * MsgVoteGaugeResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgVoteGaugeResponse
 */
export type MsgVoteGaugeResponse = Message<"sunrise.liquidityincentive.v1.MsgVoteGaugeResponse"> & {
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgVoteGaugeResponse.
 * Use `create(MsgVoteGaugeResponseSchema)` to create a new message.
 */
export const MsgVoteGaugeResponseSchema: GenMessage<MsgVoteGaugeResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 5);

/**
 * MsgRegisterBribe
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgRegisterBribe
 */
export type MsgRegisterBribe = Message<"sunrise.liquidityincentive.v1.MsgRegisterBribe"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * @generated from field: uint64 epoch_id = 2;
   */
  epochId: bigint;

  /**
   * @generated from field: uint64 pool_id = 3;
   */
  poolId: bigint;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 4;
   */
  amount: Coin[];
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgRegisterBribe.
 * Use `create(MsgRegisterBribeSchema)` to create a new message.
 */
export const MsgRegisterBribeSchema: GenMessage<MsgRegisterBribe> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 6);

/**
 * MsgRegisterBribeResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgRegisterBribeResponse
 */
export type MsgRegisterBribeResponse = Message<"sunrise.liquidityincentive.v1.MsgRegisterBribeResponse"> & {
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgRegisterBribeResponse.
 * Use `create(MsgRegisterBribeResponseSchema)` to create a new message.
 */
export const MsgRegisterBribeResponseSchema: GenMessage<MsgRegisterBribeResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 7);

/**
 * MsgClaimBribes
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgClaimBribes
 */
export type MsgClaimBribes = Message<"sunrise.liquidityincentive.v1.MsgClaimBribes"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * @generated from field: repeated uint64 bribe_ids = 2;
   */
  bribeIds: bigint[];
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgClaimBribes.
 * Use `create(MsgClaimBribesSchema)` to create a new message.
 */
export const MsgClaimBribesSchema: GenMessage<MsgClaimBribes> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 8);

/**
 * MsgClaimBribesResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.MsgClaimBribesResponse
 */
export type MsgClaimBribesResponse = Message<"sunrise.liquidityincentive.v1.MsgClaimBribesResponse"> & {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[];
};

/**
 * Describes the message sunrise.liquidityincentive.v1.MsgClaimBribesResponse.
 * Use `create(MsgClaimBribesResponseSchema)` to create a new message.
 */
export const MsgClaimBribesResponseSchema: GenMessage<MsgClaimBribesResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_tx, 9);

/**
 * Msg defines the Msg service.
 *
 * @generated from service sunrise.liquidityincentive.v1.Msg
 */
export const Msg: GenService<{
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Msg.UpdateParams
   */
  updateParams: {
    methodKind: "unary";
    input: typeof MsgUpdateParamsSchema;
    output: typeof MsgUpdateParamsResponseSchema;
  },
  /**
   * StartNewEpoch
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Msg.StartNewEpoch
   */
  startNewEpoch: {
    methodKind: "unary";
    input: typeof MsgStartNewEpochSchema;
    output: typeof MsgStartNewEpochResponseSchema;
  },
  /**
   * VoteGauge
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Msg.VoteGauge
   */
  voteGauge: {
    methodKind: "unary";
    input: typeof MsgVoteGaugeSchema;
    output: typeof MsgVoteGaugeResponseSchema;
  },
  /**
   * RegisterBribe
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Msg.RegisterBribe
   */
  registerBribe: {
    methodKind: "unary";
    input: typeof MsgRegisterBribeSchema;
    output: typeof MsgRegisterBribeResponseSchema;
  },
  /**
   * ClaimBribes
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Msg.ClaimBribes
   */
  claimBribes: {
    methodKind: "unary";
    input: typeof MsgClaimBribesSchema;
    output: typeof MsgClaimBribesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_sunrise_liquidityincentive_v1_tx, 0);

