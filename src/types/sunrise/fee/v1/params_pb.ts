// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/fee/v1/params.proto (package sunrise.fee.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/fee/v1/params.proto.
 */
export const file_sunrise_fee_v1_params: GenFile = /*@__PURE__*/
  fileDesc("ChtzdW5yaXNlL2ZlZS92MS9wYXJhbXMucHJvdG8SDnN1bnJpc2UuZmVlLnYxIkUKBlBhcmFtcxIRCglmZWVfZGVub20YASABKAkSIgoKYnVybl9yYXRpbxgCIAEoCUIO0rQtCmNvc21vcy5EZWM6BOigHwFCqAEKEmNvbS5zdW5yaXNlLmZlZS52MUILUGFyYW1zUHJvdG9QAVorZ2l0aHViLmNvbS9zdW5yaXNlbGF5ZXIvc3VucmlzZS94L2ZlZS90eXBlc6ICA1NGWKoCDlN1bnJpc2UuRmVlLlYxygIOU3VucmlzZVxGZWVcVjHiAhpTdW5yaXNlXEZlZVxWMVxHUEJNZXRhZGF0YeoCEFN1bnJpc2U6OkZlZTo6VjFiBnByb3RvMw", [file_cosmos_proto_cosmos, file_gogoproto_gogo]);

/**
 * Params defines the parameters for the module.
 *
 * @generated from message sunrise.fee.v1.Params
 */
export type Params = Message<"sunrise.fee.v1.Params"> & {
  /**
   * @generated from field: string fee_denom = 1;
   */
  feeDenom: string;

  /**
   * @generated from field: string burn_ratio = 2;
   */
  burnRatio: string;
};

/**
 * Describes the message sunrise.fee.v1.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params> = /*@__PURE__*/
  messageDesc(file_sunrise_fee_v1_params, 0);

