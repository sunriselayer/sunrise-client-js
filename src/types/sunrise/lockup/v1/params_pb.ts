// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/lockup/v1/params.proto (package sunrise.lockup.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/lockup/v1/params.proto.
 */
export const file_sunrise_lockup_v1_params: GenFile = /*@__PURE__*/
  fileDesc("Ch5zdW5yaXNlL2xvY2t1cC92MS9wYXJhbXMucHJvdG8SEXN1bnJpc2UubG9ja3VwLnYxIlAKBlBhcmFtcxJAChNtaW5fbG9ja3VwX2R1cmF0aW9uGAEgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQgjI3h8AmN8fAToE6KAfAUK6AQoVY29tLnN1bnJpc2UubG9ja3VwLnYxQgtQYXJhbXNQcm90b1ABWi5naXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvbG9ja3VwL3R5cGVzogIDU0xYqgIRU3VucmlzZS5Mb2NrdXAuVjHKAhFTdW5yaXNlXExvY2t1cFxWMeICHVN1bnJpc2VcTG9ja3VwXFYxXEdQQk1ldGFkYXRh6gITU3VucmlzZTo6TG9ja3VwOjpWMWIGcHJvdG8z", [file_gogoproto_gogo, file_google_protobuf_duration]);

/**
 * Params defines the parameters for the module.
 *
 * @generated from message sunrise.lockup.v1.Params
 */
export type Params = Message<"sunrise.lockup.v1.Params"> & {
  /**
   * @generated from field: google.protobuf.Duration min_lockup_duration = 1;
   */
  minLockupDuration?: Duration;
};

/**
 * Describes the message sunrise.lockup.v1.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params> = /*@__PURE__*/
  messageDesc(file_sunrise_lockup_v1_params, 0);

