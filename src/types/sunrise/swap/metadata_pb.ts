// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/swap/metadata.proto (package sunrise.swap, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../amino/amino_pb";
import { file_cosmos_proto_cosmos } from "../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import type { Route } from "./route_pb";
import { file_sunrise_swap_route } from "./route_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/swap/metadata.proto.
 */
export const file_sunrise_swap_metadata: GenFile = /*@__PURE__*/
  fileDesc("ChtzdW5yaXNlL3N3YXAvbWV0YWRhdGEucHJvdG8SDHN1bnJpc2Uuc3dhcCI6Cg5QYWNrZXRNZXRhZGF0YRIoCgRzd2FwGAEgASgLMhouc3VucmlzZS5zd2FwLlN3YXBNZXRhZGF0YSKXAQoPRm9yd2FyZE1ldGFkYXRhEhAKCHJlY2VpdmVyGAEgASgJEgwKBHBvcnQYAiABKAkSDwoHY2hhbm5lbBgDIAEoCRI0Cgd0aW1lb3V0GAQgASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQgjI3h8AmN8fARIPCgdyZXRyaWVzGAUgASgNEgwKBG5leHQYBiABKAkiWQoNRXhhY3RBbW91bnRJbhJICg5taW5fYW1vdW50X291dBgBIAEoCUIwyN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludKjnsCoBIoUBCg5FeGFjdEFtb3VudE91dBJECgphbW91bnRfb3V0GAEgASgJQjDI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50qOewKgESLQoGY2hhbmdlGAIgASgLMh0uc3VucmlzZS5zd2FwLkZvcndhcmRNZXRhZGF0YSKDAgoMU3dhcE1ldGFkYXRhEhoKEmludGVyZmFjZV9wcm92aWRlchgBIAEoCRIiCgVyb3V0ZRgCIAEoCzITLnN1bnJpc2Uuc3dhcC5Sb3V0ZRI2Cg9leGFjdF9hbW91bnRfaW4YAyABKAsyGy5zdW5yaXNlLnN3YXAuRXhhY3RBbW91bnRJbkgAEjgKEGV4YWN0X2Ftb3VudF9vdXQYBCABKAsyHC5zdW5yaXNlLnN3YXAuRXhhY3RBbW91bnRPdXRIABIuCgdmb3J3YXJkGAUgASgLMh0uc3VucmlzZS5zd2FwLkZvcndhcmRNZXRhZGF0YUIRCg9hbW91bnRfc3RyYXRlZ3lCoAEKEGNvbS5zdW5yaXNlLnN3YXBCDU1ldGFkYXRhUHJvdG9QAVosZ2l0aHViLmNvbS9zdW5yaXNlbGF5ZXIvc3VucmlzZS94L3N3YXAvdHlwZXOiAgNTU1iqAgxTdW5yaXNlLlN3YXDKAgxTdW5yaXNlXFN3YXDiAhhTdW5yaXNlXFN3YXBcR1BCTWV0YWRhdGHqAg1TdW5yaXNlOjpTd2FwYgZwcm90bzM", [file_amino_amino, file_cosmos_proto_cosmos, file_gogoproto_gogo, file_sunrise_swap_route, file_google_protobuf_duration, file_google_protobuf_any]);

/**
 * @generated from message sunrise.swap.PacketMetadata
 */
export type PacketMetadata = Message<"sunrise.swap.PacketMetadata"> & {
  /**
   * @generated from field: sunrise.swap.SwapMetadata swap = 1;
   */
  swap?: SwapMetadata;
};

/**
 * Describes the message sunrise.swap.PacketMetadata.
 * Use `create(PacketMetadataSchema)` to create a new message.
 */
export const PacketMetadataSchema: GenMessage<PacketMetadata> = /*@__PURE__*/
  messageDesc(file_sunrise_swap_metadata, 0);

/**
 * @generated from message sunrise.swap.ForwardMetadata
 */
export type ForwardMetadata = Message<"sunrise.swap.ForwardMetadata"> & {
  /**
   * @generated from field: string receiver = 1;
   */
  receiver: string;

  /**
   * @generated from field: string port = 2;
   */
  port: string;

  /**
   * @generated from field: string channel = 3;
   */
  channel: string;

  /**
   * @generated from field: google.protobuf.Duration timeout = 4;
   */
  timeout?: Duration;

  /**
   * @generated from field: uint32 retries = 5;
   */
  retries: number;

  /**
   * @generated from field: string next = 6;
   */
  next: string;
};

/**
 * Describes the message sunrise.swap.ForwardMetadata.
 * Use `create(ForwardMetadataSchema)` to create a new message.
 */
export const ForwardMetadataSchema: GenMessage<ForwardMetadata> = /*@__PURE__*/
  messageDesc(file_sunrise_swap_metadata, 1);

/**
 * @generated from message sunrise.swap.ExactAmountIn
 */
export type ExactAmountIn = Message<"sunrise.swap.ExactAmountIn"> & {
  /**
   * @generated from field: string min_amount_out = 1;
   */
  minAmountOut: string;
};

/**
 * Describes the message sunrise.swap.ExactAmountIn.
 * Use `create(ExactAmountInSchema)` to create a new message.
 */
export const ExactAmountInSchema: GenMessage<ExactAmountIn> = /*@__PURE__*/
  messageDesc(file_sunrise_swap_metadata, 2);

/**
 * @generated from message sunrise.swap.ExactAmountOut
 */
export type ExactAmountOut = Message<"sunrise.swap.ExactAmountOut"> & {
  /**
   * @generated from field: string amount_out = 1;
   */
  amountOut: string;

  /**
   * @generated from field: sunrise.swap.ForwardMetadata change = 2;
   */
  change?: ForwardMetadata;
};

/**
 * Describes the message sunrise.swap.ExactAmountOut.
 * Use `create(ExactAmountOutSchema)` to create a new message.
 */
export const ExactAmountOutSchema: GenMessage<ExactAmountOut> = /*@__PURE__*/
  messageDesc(file_sunrise_swap_metadata, 3);

/**
 * @generated from message sunrise.swap.SwapMetadata
 */
export type SwapMetadata = Message<"sunrise.swap.SwapMetadata"> & {
  /**
   * @generated from field: string interface_provider = 1;
   */
  interfaceProvider: string;

  /**
   * @generated from field: sunrise.swap.Route route = 2;
   */
  route?: Route;

  /**
   * @generated from oneof sunrise.swap.SwapMetadata.amount_strategy
   */
  amountStrategy: {
    /**
     * @generated from field: sunrise.swap.ExactAmountIn exact_amount_in = 3;
     */
    value: ExactAmountIn;
    case: "exactAmountIn";
  } | {
    /**
     * @generated from field: sunrise.swap.ExactAmountOut exact_amount_out = 4;
     */
    value: ExactAmountOut;
    case: "exactAmountOut";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: sunrise.swap.ForwardMetadata forward = 5;
   */
  forward?: ForwardMetadata;
};

/**
 * Describes the message sunrise.swap.SwapMetadata.
 * Use `create(SwapMetadataSchema)` to create a new message.
 */
export const SwapMetadataSchema: GenMessage<SwapMetadata> = /*@__PURE__*/
  messageDesc(file_sunrise_swap_metadata, 4);

