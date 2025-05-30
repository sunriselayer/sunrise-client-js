// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquidityincentive/v1/params.proto (package sunrise.liquidityincentive.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquidityincentive/v1/params.proto.
 */
export const file_sunrise_liquidityincentive_v1_params: GenFile = /*@__PURE__*/
  fileDesc("CipzdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS9wYXJhbXMucHJvdG8SHXN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxIm4KBlBhcmFtcxIUCgxlcG9jaF9ibG9ja3MYASABKAMSLAoUc3Rha2luZ19yZXdhcmRfcmF0aW8YAiABKAlCDtK0LQpjb3Ntb3MuRGVjEhoKEmJyaWJlX2NsYWltX2Vwb2NocxgDIAEoBDoE6KAfAUKCAgohY29tLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxQgtQYXJhbXNQcm90b1ABWjpnaXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvbGlxdWlkaXR5aW5jZW50aXZlL3R5cGVzogIDU0xYqgIdU3VucmlzZS5MaXF1aWRpdHlpbmNlbnRpdmUuVjHKAh1TdW5yaXNlXExpcXVpZGl0eWluY2VudGl2ZVxWMeICKVN1bnJpc2VcTGlxdWlkaXR5aW5jZW50aXZlXFYxXEdQQk1ldGFkYXRh6gIfU3VucmlzZTo6TGlxdWlkaXR5aW5jZW50aXZlOjpWMWIGcHJvdG8z", [file_cosmos_proto_cosmos, file_gogoproto_gogo]);

/**
 * Params defines the parameters for the module.
 *
 * @generated from message sunrise.liquidityincentive.v1.Params
 */
export type Params = Message<"sunrise.liquidityincentive.v1.Params"> & {
  /**
   * @generated from field: int64 epoch_blocks = 1;
   */
  epochBlocks: bigint;

  /**
   * @generated from field: string staking_reward_ratio = 2;
   */
  stakingRewardRatio: string;

  /**
   * @generated from field: uint64 bribe_claim_epochs = 3;
   */
  bribeClaimEpochs: bigint;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_params, 0);

