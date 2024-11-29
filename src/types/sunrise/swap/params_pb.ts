// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/swap/params.proto (package sunrise.swap, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../amino/amino_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/swap/params.proto.
 */
export const file_sunrise_swap_params: GenFile = /*@__PURE__*/
  fileDesc("ChlzdW5yaXNlL3N3YXAvcGFyYW1zLnByb3RvEgxzdW5yaXNlLnN3YXAifAoGUGFyYW1zElIKEmludGVyZmFjZV9mZWVfcmF0ZRgBIAEoCUI2yN4fANreHxtjb3Ntb3NzZGsuaW8vbWF0aC5MZWdhY3lEZWPStC0KY29zbW9zLkRlY6jnsCoBOh7ooB8BiuewKhVzdW5yaXNlL3gvc3dhcC9QYXJhbXNCngEKEGNvbS5zdW5yaXNlLnN3YXBCC1BhcmFtc1Byb3RvUAFaLGdpdGh1Yi5jb20vc3VucmlzZWxheWVyL3N1bnJpc2UveC9zd2FwL3R5cGVzogIDU1NYqgIMU3VucmlzZS5Td2FwygIMU3VucmlzZVxTd2Fw4gIYU3VucmlzZVxTd2FwXEdQQk1ldGFkYXRh6gINU3VucmlzZTo6U3dhcGIGcHJvdG8z", [file_amino_amino, file_gogoproto_gogo, file_cosmos_proto_cosmos]);

/**
 * Params defines the parameters for the module.
 *
 * @generated from message sunrise.swap.Params
 */
export type Params = Message<"sunrise.swap.Params"> & {
  /**
   * @generated from field: string interface_fee_rate = 1;
   */
  interfaceFeeRate: string;
};

/**
 * Describes the message sunrise.swap.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params> = /*@__PURE__*/
  messageDesc(file_sunrise_swap_params, 0);
