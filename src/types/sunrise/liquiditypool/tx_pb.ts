// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/tx.proto (package sunrise.liquiditypool, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../amino/amino_pb";
import { file_cosmos_msg_v1_msg } from "../../cosmos/msg/v1/msg_pb";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import type { Coin } from "../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../cosmos/base/v1beta1/coin_pb";
import type { Params } from "./params_pb";
import { file_sunrise_liquiditypool_params } from "./params_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquiditypool/tx.proto.
 */
export const file_sunrise_liquiditypool_tx: GenFile = /*@__PURE__*/
  fileDesc("Ch5zdW5yaXNlL2xpcXVpZGl0eXBvb2wvdHgucHJvdG8SFXN1bnJpc2UubGlxdWlkaXR5cG9vbCK0AQoPTXNnVXBkYXRlUGFyYW1zEisKCWF1dGhvcml0eRgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEjgKBnBhcmFtcxgCIAEoCzIdLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5QYXJhbXNCCcjeHwCo57AqATo6guewKglhdXRob3JpdHmK57AqJ3N1bnJpc2UveC9saXF1aWRpdHlwb29sL01zZ1VwZGF0ZVBhcmFtcyIZChdNc2dVcGRhdGVQYXJhbXNSZXNwb25zZSKxAQoNTXNnQ3JlYXRlUG9vbBIrCglhdXRob3JpdHkYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxISCgpkZW5vbV9iYXNlGAIgASgJEhMKC2Rlbm9tX3F1b3RlGAMgASgJEhAKCGZlZV9yYXRlGAQgASgJEhMKC3ByaWNlX3JhdGlvGAUgASgJEhMKC2Jhc2Vfb2Zmc2V0GAYgASgJOg6C57AqCWF1dGhvcml0eSIjChVNc2dDcmVhdGVQb29sUmVzcG9uc2USCgoCaWQYASABKAQihQMKEU1zZ0NyZWF0ZVBvc2l0aW9uEigKBnNlbmRlchgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEg8KB3Bvb2xfaWQYAiABKAQSEgoKbG93ZXJfdGljaxgDIAEoAxISCgp1cHBlcl90aWNrGAQgASgDEjMKCnRva2VuX2Jhc2UYBSABKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CBMjeHwASNAoLdG9rZW5fcXVvdGUYBiABKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CBMjeHwASSQoPbWluX2Ftb3VudF9iYXNlGAcgASgJQjDI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50qOewKgESSgoQbWluX2Ftb3VudF9xdW90ZRgIIAEoCUIwyN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludKjnsCoBOguC57AqBnNlbmRlciKBAgoZTXNnQ3JlYXRlUG9zaXRpb25SZXNwb25zZRIKCgJpZBgBIAEoBBJFCgthbW91bnRfYmFzZRgCIAEoCUIwyN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludKjnsCoBEkYKDGFtb3VudF9xdW90ZRgDIAEoCUIwyN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludKjnsCoBEkkKCWxpcXVpZGl0eRgEIAEoCUI2yN4fANreHxtjb3Ntb3NzZGsuaW8vbWF0aC5MZWdhY3lEZWPStC0KY29zbW9zLkRlY6jnsCoBIv8CChRNc2dJbmNyZWFzZUxpcXVpZGl0eRIoCgZzZW5kZXIYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxIKCgJpZBgCIAEoBBJFCgthbW91bnRfYmFzZRgDIAEoCUIwyN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludKjnsCoBEkYKDGFtb3VudF9xdW90ZRgEIAEoCUIwyN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludKjnsCoBEkkKD21pbl9hbW91bnRfYmFzZRgFIAEoCUIwyN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludKjnsCoBEkoKEG1pbl9hbW91bnRfcXVvdGUYBiABKAlCMMjeHwDa3h8VY29zbW9zc2RrLmlvL21hdGguSW500rQtCmNvc21vcy5JbnSo57AqAToLguewKgZzZW5kZXIiwgEKHE1zZ0luY3JlYXNlTGlxdWlkaXR5UmVzcG9uc2USEwoLcG9zaXRpb25faWQYASABKAQSRQoLYW1vdW50X2Jhc2UYAiABKAlCMMjeHwDa3h8VY29zbW9zc2RrLmlvL21hdGguSW500rQtCmNvc21vcy5JbnSo57AqARJGCgxhbW91bnRfcXVvdGUYAyABKAlCMMjeHwDa3h8VY29zbW9zc2RrLmlvL21hdGguSW500rQtCmNvc21vcy5JbnSo57AqASJsChRNc2dEZWNyZWFzZUxpcXVpZGl0eRIoCgZzZW5kZXIYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxIKCgJpZBgCIAEoBBIRCglsaXF1aWRpdHkYAyABKAk6C4LnsCoGc2VuZGVyIq0BChxNc2dEZWNyZWFzZUxpcXVpZGl0eVJlc3BvbnNlEkUKC2Ftb3VudF9iYXNlGAEgASgJQjDI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50qOewKgESRgoMYW1vdW50X3F1b3RlGAIgASgJQjDI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50qOewKgEiXgoPTXNnQ2xhaW1SZXdhcmRzEigKBnNlbmRlchgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEhQKDHBvc2l0aW9uX2lkcxgCIAMoBDoLguewKgZzZW5kZXIifgoXTXNnQ2xhaW1SZXdhcmRzUmVzcG9uc2USYwoOY29sbGVjdGVkX2ZlZXMYASADKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CMMjeHwCq3x8oZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2luczKaBQoDTXNnEmYKDFVwZGF0ZVBhcmFtcxImLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Nc2dVcGRhdGVQYXJhbXMaLi5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuTXNnVXBkYXRlUGFyYW1zUmVzcG9uc2USYAoKQ3JlYXRlUG9vbBIkLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Nc2dDcmVhdGVQb29sGiwuc3VucmlzZS5saXF1aWRpdHlwb29sLk1zZ0NyZWF0ZVBvb2xSZXNwb25zZRJsCg5DcmVhdGVQb3NpdGlvbhIoLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Nc2dDcmVhdGVQb3NpdGlvbhowLnN1bnJpc2UubGlxdWlkaXR5cG9vbC5Nc2dDcmVhdGVQb3NpdGlvblJlc3BvbnNlEnUKEUluY3JlYXNlTGlxdWlkaXR5Eisuc3VucmlzZS5saXF1aWRpdHlwb29sLk1zZ0luY3JlYXNlTGlxdWlkaXR5GjMuc3VucmlzZS5saXF1aWRpdHlwb29sLk1zZ0luY3JlYXNlTGlxdWlkaXR5UmVzcG9uc2USdQoRRGVjcmVhc2VMaXF1aWRpdHkSKy5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuTXNnRGVjcmVhc2VMaXF1aWRpdHkaMy5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuTXNnRGVjcmVhc2VMaXF1aWRpdHlSZXNwb25zZRJmCgxDbGFpbVJld2FyZHMSJi5zdW5yaXNlLmxpcXVpZGl0eXBvb2wuTXNnQ2xhaW1SZXdhcmRzGi4uc3VucmlzZS5saXF1aWRpdHlwb29sLk1zZ0NsYWltUmV3YXJkc1Jlc3BvbnNlGgWA57AqAULQAQoZY29tLnN1bnJpc2UubGlxdWlkaXR5cG9vbEIHVHhQcm90b1ABWjVnaXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvbGlxdWlkaXR5cG9vbC90eXBlc6ICA1NMWKoCFVN1bnJpc2UuTGlxdWlkaXR5cG9vbMoCFVN1bnJpc2VcTGlxdWlkaXR5cG9vbOICIVN1bnJpc2VcTGlxdWlkaXR5cG9vbFxHUEJNZXRhZGF0YeoCFlN1bnJpc2U6OkxpcXVpZGl0eXBvb2xiBnByb3RvMw", [file_amino_amino, file_cosmos_msg_v1_msg, file_cosmos_proto_cosmos, file_gogoproto_gogo, file_cosmos_base_v1beta1_coin, file_sunrise_liquiditypool_params]);

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message sunrise.liquiditypool.MsgUpdateParams
 */
export type MsgUpdateParams = Message<"sunrise.liquiditypool.MsgUpdateParams"> & {
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
   * @generated from field: sunrise.liquiditypool.Params params = 2;
   */
  params?: Params;
};

/**
 * Describes the message sunrise.liquiditypool.MsgUpdateParams.
 * Use `create(MsgUpdateParamsSchema)` to create a new message.
 */
export const MsgUpdateParamsSchema: GenMessage<MsgUpdateParams> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 0);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message sunrise.liquiditypool.MsgUpdateParamsResponse
 */
export type MsgUpdateParamsResponse = Message<"sunrise.liquiditypool.MsgUpdateParamsResponse"> & {
};

/**
 * Describes the message sunrise.liquiditypool.MsgUpdateParamsResponse.
 * Use `create(MsgUpdateParamsResponseSchema)` to create a new message.
 */
export const MsgUpdateParamsResponseSchema: GenMessage<MsgUpdateParamsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 1);

/**
 * @generated from message sunrise.liquiditypool.MsgCreatePool
 */
export type MsgCreatePool = Message<"sunrise.liquiditypool.MsgCreatePool"> & {
  /**
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * @generated from field: string denom_base = 2;
   */
  denomBase: string;

  /**
   * @generated from field: string denom_quote = 3;
   */
  denomQuote: string;

  /**
   * @generated from field: string fee_rate = 4;
   */
  feeRate: string;

  /**
   * Basically 1.0001
   *
   * @generated from field: string price_ratio = 5;
   */
  priceRatio: string;

  /**
   * basically 0 and (-1,0]. In the 1:1 stable pair, -0.5 would work
   *
   * @generated from field: string base_offset = 6;
   */
  baseOffset: string;
};

/**
 * Describes the message sunrise.liquiditypool.MsgCreatePool.
 * Use `create(MsgCreatePoolSchema)` to create a new message.
 */
export const MsgCreatePoolSchema: GenMessage<MsgCreatePool> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 2);

/**
 * @generated from message sunrise.liquiditypool.MsgCreatePoolResponse
 */
export type MsgCreatePoolResponse = Message<"sunrise.liquiditypool.MsgCreatePoolResponse"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message sunrise.liquiditypool.MsgCreatePoolResponse.
 * Use `create(MsgCreatePoolResponseSchema)` to create a new message.
 */
export const MsgCreatePoolResponseSchema: GenMessage<MsgCreatePoolResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 3);

/**
 * @generated from message sunrise.liquiditypool.MsgCreatePosition
 */
export type MsgCreatePosition = Message<"sunrise.liquiditypool.MsgCreatePosition"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId: bigint;

  /**
   * @generated from field: int64 lower_tick = 3;
   */
  lowerTick: bigint;

  /**
   * @generated from field: int64 upper_tick = 4;
   */
  upperTick: bigint;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_base = 5;
   */
  tokenBase?: Coin;

  /**
   * @generated from field: cosmos.base.v1beta1.Coin token_quote = 6;
   */
  tokenQuote?: Coin;

  /**
   * @generated from field: string min_amount_base = 7;
   */
  minAmountBase: string;

  /**
   * @generated from field: string min_amount_quote = 8;
   */
  minAmountQuote: string;
};

/**
 * Describes the message sunrise.liquiditypool.MsgCreatePosition.
 * Use `create(MsgCreatePositionSchema)` to create a new message.
 */
export const MsgCreatePositionSchema: GenMessage<MsgCreatePosition> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 4);

/**
 * @generated from message sunrise.liquiditypool.MsgCreatePositionResponse
 */
export type MsgCreatePositionResponse = Message<"sunrise.liquiditypool.MsgCreatePositionResponse"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string amount_base = 2;
   */
  amountBase: string;

  /**
   * @generated from field: string amount_quote = 3;
   */
  amountQuote: string;

  /**
   * @generated from field: string liquidity = 4;
   */
  liquidity: string;
};

/**
 * Describes the message sunrise.liquiditypool.MsgCreatePositionResponse.
 * Use `create(MsgCreatePositionResponseSchema)` to create a new message.
 */
export const MsgCreatePositionResponseSchema: GenMessage<MsgCreatePositionResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 5);

/**
 * @generated from message sunrise.liquiditypool.MsgIncreaseLiquidity
 */
export type MsgIncreaseLiquidity = Message<"sunrise.liquiditypool.MsgIncreaseLiquidity"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * @generated from field: uint64 id = 2;
   */
  id: bigint;

  /**
   * @generated from field: string amount_base = 3;
   */
  amountBase: string;

  /**
   * @generated from field: string amount_quote = 4;
   */
  amountQuote: string;

  /**
   * @generated from field: string min_amount_base = 5;
   */
  minAmountBase: string;

  /**
   * @generated from field: string min_amount_quote = 6;
   */
  minAmountQuote: string;
};

/**
 * Describes the message sunrise.liquiditypool.MsgIncreaseLiquidity.
 * Use `create(MsgIncreaseLiquiditySchema)` to create a new message.
 */
export const MsgIncreaseLiquiditySchema: GenMessage<MsgIncreaseLiquidity> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 6);

/**
 * @generated from message sunrise.liquiditypool.MsgIncreaseLiquidityResponse
 */
export type MsgIncreaseLiquidityResponse = Message<"sunrise.liquiditypool.MsgIncreaseLiquidityResponse"> & {
  /**
   * @generated from field: uint64 position_id = 1;
   */
  positionId: bigint;

  /**
   * @generated from field: string amount_base = 2;
   */
  amountBase: string;

  /**
   * @generated from field: string amount_quote = 3;
   */
  amountQuote: string;
};

/**
 * Describes the message sunrise.liquiditypool.MsgIncreaseLiquidityResponse.
 * Use `create(MsgIncreaseLiquidityResponseSchema)` to create a new message.
 */
export const MsgIncreaseLiquidityResponseSchema: GenMessage<MsgIncreaseLiquidityResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 7);

/**
 * @generated from message sunrise.liquiditypool.MsgDecreaseLiquidity
 */
export type MsgDecreaseLiquidity = Message<"sunrise.liquiditypool.MsgDecreaseLiquidity"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * @generated from field: uint64 id = 2;
   */
  id: bigint;

  /**
   * @generated from field: string liquidity = 3;
   */
  liquidity: string;
};

/**
 * Describes the message sunrise.liquiditypool.MsgDecreaseLiquidity.
 * Use `create(MsgDecreaseLiquiditySchema)` to create a new message.
 */
export const MsgDecreaseLiquiditySchema: GenMessage<MsgDecreaseLiquidity> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 8);

/**
 * @generated from message sunrise.liquiditypool.MsgDecreaseLiquidityResponse
 */
export type MsgDecreaseLiquidityResponse = Message<"sunrise.liquiditypool.MsgDecreaseLiquidityResponse"> & {
  /**
   * @generated from field: string amount_base = 1;
   */
  amountBase: string;

  /**
   * @generated from field: string amount_quote = 2;
   */
  amountQuote: string;
};

/**
 * Describes the message sunrise.liquiditypool.MsgDecreaseLiquidityResponse.
 * Use `create(MsgDecreaseLiquidityResponseSchema)` to create a new message.
 */
export const MsgDecreaseLiquidityResponseSchema: GenMessage<MsgDecreaseLiquidityResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 9);

/**
 * @generated from message sunrise.liquiditypool.MsgClaimRewards
 */
export type MsgClaimRewards = Message<"sunrise.liquiditypool.MsgClaimRewards"> & {
  /**
   * @generated from field: string sender = 1;
   */
  sender: string;

  /**
   * @generated from field: repeated uint64 position_ids = 2;
   */
  positionIds: bigint[];
};

/**
 * Describes the message sunrise.liquiditypool.MsgClaimRewards.
 * Use `create(MsgClaimRewardsSchema)` to create a new message.
 */
export const MsgClaimRewardsSchema: GenMessage<MsgClaimRewards> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 10);

/**
 * @generated from message sunrise.liquiditypool.MsgClaimRewardsResponse
 */
export type MsgClaimRewardsResponse = Message<"sunrise.liquiditypool.MsgClaimRewardsResponse"> & {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin collected_fees = 1;
   */
  collectedFees: Coin[];
};

/**
 * Describes the message sunrise.liquiditypool.MsgClaimRewardsResponse.
 * Use `create(MsgClaimRewardsResponseSchema)` to create a new message.
 */
export const MsgClaimRewardsResponseSchema: GenMessage<MsgClaimRewardsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_tx, 11);

/**
 * Msg defines the Msg service.
 *
 * @generated from service sunrise.liquiditypool.Msg
 */
export const Msg: GenService<{
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   *
   * @generated from rpc sunrise.liquiditypool.Msg.UpdateParams
   */
  updateParams: {
    methodKind: "unary";
    input: typeof MsgUpdateParamsSchema;
    output: typeof MsgUpdateParamsResponseSchema;
  },
  /**
   * @generated from rpc sunrise.liquiditypool.Msg.CreatePool
   */
  createPool: {
    methodKind: "unary";
    input: typeof MsgCreatePoolSchema;
    output: typeof MsgCreatePoolResponseSchema;
  },
  /**
   * @generated from rpc sunrise.liquiditypool.Msg.CreatePosition
   */
  createPosition: {
    methodKind: "unary";
    input: typeof MsgCreatePositionSchema;
    output: typeof MsgCreatePositionResponseSchema;
  },
  /**
   * @generated from rpc sunrise.liquiditypool.Msg.IncreaseLiquidity
   */
  increaseLiquidity: {
    methodKind: "unary";
    input: typeof MsgIncreaseLiquiditySchema;
    output: typeof MsgIncreaseLiquidityResponseSchema;
  },
  /**
   * @generated from rpc sunrise.liquiditypool.Msg.DecreaseLiquidity
   */
  decreaseLiquidity: {
    methodKind: "unary";
    input: typeof MsgDecreaseLiquiditySchema;
    output: typeof MsgDecreaseLiquidityResponseSchema;
  },
  /**
   * @generated from rpc sunrise.liquiditypool.Msg.ClaimRewards
   */
  claimRewards: {
    methodKind: "unary";
    input: typeof MsgClaimRewardsSchema;
    output: typeof MsgClaimRewardsResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_sunrise_liquiditypool_tx, 0);
