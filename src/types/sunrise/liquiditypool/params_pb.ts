// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/params.proto (package sunrise.liquiditypool, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../amino/amino_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquiditypool/params.proto.
 */
export const file_sunrise_liquiditypool_params: GenFile = /*@__PURE__*/
  fileDesc("CiJzdW5yaXNlL2xpcXVpZGl0eXBvb2wvcGFyYW1zLnByb3RvEhVzdW5yaXNlLmxpcXVpZGl0eXBvb2wi3AEKBlBhcmFtcxJRChF3aXRoZHJhd19mZWVfcmF0ZRgBIAEoCUI2yN4fANreHxtjb3Ntb3NzZGsuaW8vbWF0aC5MZWdhY3lEZWPStC0KY29zbW9zLkRlY6jnsCoBElYKFnN3YXBfdHJlYXN1cnlfdGF4X3JhdGUYAiABKAlCNsjeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVj0rQtCmNvc21vcy5EZWOo57AqATon6KAfAYrnsCoec3VucmlzZS94L2xpcXVpZGl0eXBvb2wvUGFyYW1zQtQBChljb20uc3VucmlzZS5saXF1aWRpdHlwb29sQgtQYXJhbXNQcm90b1ABWjVnaXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvbGlxdWlkaXR5cG9vbC90eXBlc6ICA1NMWKoCFVN1bnJpc2UuTGlxdWlkaXR5cG9vbMoCFVN1bnJpc2VcTGlxdWlkaXR5cG9vbOICIVN1bnJpc2VcTGlxdWlkaXR5cG9vbFxHUEJNZXRhZGF0YeoCFlN1bnJpc2U6OkxpcXVpZGl0eXBvb2xiBnByb3RvMw", [file_amino_amino, file_gogoproto_gogo, file_cosmos_proto_cosmos]);

/**
 * Params defines the parameters for the module.
 *
 * @generated from message sunrise.liquiditypool.Params
 */
export type Params = Message<"sunrise.liquiditypool.Params"> & {
  /**
   * @generated from field: string withdraw_fee_rate = 1;
   */
  withdrawFeeRate: string;

  /**
   * @generated from field: string swap_treasury_tax_rate = 2;
   */
  swapTreasuryTaxRate: string;
};

/**
 * Describes the message sunrise.liquiditypool.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params> = /*@__PURE__*/
  messageDesc(file_sunrise_liquiditypool_params, 0);

