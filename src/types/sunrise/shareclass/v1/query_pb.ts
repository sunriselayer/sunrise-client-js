// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/shareclass/v1/query.proto (package sunrise.shareclass.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_base_query_v1beta1_pagination } from "../../../cosmos/base/query/v1beta1/pagination_pb";
import type { Coin } from "../../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../../cosmos/base/v1beta1/coin_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import type { Unbonding, ValidatorBond } from "./bond_pb";
import { file_sunrise_shareclass_v1_bond } from "./bond_pb";
import type { Params } from "./params_pb";
import { file_sunrise_shareclass_v1_params } from "./params_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/shareclass/v1/query.proto.
 */
export const file_sunrise_shareclass_v1_query: GenFile = /*@__PURE__*/
  fileDesc("CiFzdW5yaXNlL3NoYXJlY2xhc3MvdjEvcXVlcnkucHJvdG8SFXN1bnJpc2Uuc2hhcmVjbGFzcy52MSIUChJRdWVyeVBhcmFtc1JlcXVlc3QiSgoTUXVlcnlQYXJhbXNSZXNwb25zZRIzCgZwYXJhbXMYASABKAsyHS5zdW5yaXNlLnNoYXJlY2xhc3MudjEuUGFyYW1zQgTI3h8AInEKIlF1ZXJ5Q2FsY3VsYXRlQm9uZGluZ0Ftb3VudFJlcXVlc3QSPAoRdmFsaWRhdG9yX2FkZHJlc3MYASABKAlCIdK0LR1jb3Ntb3MuVmFsaWRhdG9yQWRkcmVzc1N0cmluZxINCgVzaGFyZRgCIAEoCSJWCiNRdWVyeUNhbGN1bGF0ZUJvbmRpbmdBbW91bnRSZXNwb25zZRIvCgZhbW91bnQYASABKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CBMjeHwAiagoaUXVlcnlDYWxjdWxhdGVTaGFyZVJlcXVlc3QSPAoRdmFsaWRhdG9yX2FkZHJlc3MYASABKAlCIdK0LR1jb3Ntb3MuVmFsaWRhdG9yQWRkcmVzc1N0cmluZxIOCgZhbW91bnQYAiABKAkiWQobUXVlcnlDYWxjdWxhdGVTaGFyZVJlc3BvbnNlEjoKBXNoYXJlGAEgASgJQivI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50IkYKGVF1ZXJ5QWRkcmVzc0JvbmRlZFJlcXVlc3QSKQoHYWRkcmVzcxgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nIlcKGlF1ZXJ5QWRkcmVzc0JvbmRlZFJlc3BvbnNlEjkKBWJvbmRzGAEgAygLMiQuc3VucmlzZS5zaGFyZWNsYXNzLnYxLlZhbGlkYXRvckJvbmRCBMjeHwAihwEKHFF1ZXJ5Q2xhaW1hYmxlUmV3YXJkc1JlcXVlc3QSKQoHYWRkcmVzcxgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEjwKEXZhbGlkYXRvcl9hZGRyZXNzGAIgASgJQiHStC0dY29zbW9zLlZhbGlkYXRvckFkZHJlc3NTdHJpbmcifAodUXVlcnlDbGFpbWFibGVSZXdhcmRzUmVzcG9uc2USWwoGYW1vdW50GAEgAygLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQjDI3h8Aqt8fKGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnMiSQocUXVlcnlBZGRyZXNzVW5ib25kaW5nUmVxdWVzdBIpCgdhZGRyZXNzGAEgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmciWwodUXVlcnlBZGRyZXNzVW5ib25kaW5nUmVzcG9uc2USOgoKdW5ib25kaW5ncxgBIAMoCzIgLnN1bnJpc2Uuc2hhcmVjbGFzcy52MS5VbmJvbmRpbmdCBMjeHwAy6ggKBVF1ZXJ5EoYBCgZQYXJhbXMSKS5zdW5yaXNlLnNoYXJlY2xhc3MudjEuUXVlcnlQYXJhbXNSZXF1ZXN0Giouc3VucmlzZS5zaGFyZWNsYXNzLnYxLlF1ZXJ5UGFyYW1zUmVzcG9uc2UiJYLT5JMCHxIdL3N1bnJpc2Uvc2hhcmVjbGFzcy92MS9wYXJhbXMS5AEKFkNhbGN1bGF0ZUJvbmRpbmdBbW91bnQSOS5zdW5yaXNlLnNoYXJlY2xhc3MudjEuUXVlcnlDYWxjdWxhdGVCb25kaW5nQW1vdW50UmVxdWVzdBo6LnN1bnJpc2Uuc2hhcmVjbGFzcy52MS5RdWVyeUNhbGN1bGF0ZUJvbmRpbmdBbW91bnRSZXNwb25zZSJTgtPkkwJNEksvc3VucmlzZS9zaGFyZWNsYXNzL3YxL2NhbGN1bGF0ZS1ib25kaW5nLWFtb3VudC97dmFsaWRhdG9yX2FkZHJlc3N9L3tzaGFyZX0SxAEKDkNhbGN1bGF0ZVNoYXJlEjEuc3VucmlzZS5zaGFyZWNsYXNzLnYxLlF1ZXJ5Q2FsY3VsYXRlU2hhcmVSZXF1ZXN0GjIuc3VucmlzZS5zaGFyZWNsYXNzLnYxLlF1ZXJ5Q2FsY3VsYXRlU2hhcmVSZXNwb25zZSJLgtPkkwJFEkMvc3VucmlzZS9zaGFyZWNsYXNzL3YxL2NhbGN1bGF0ZS1zaGFyZS97dmFsaWRhdG9yX2FkZHJlc3N9L3thbW91bnR9EqUBCg1BZGRyZXNzQm9uZGVkEjAuc3VucmlzZS5zaGFyZWNsYXNzLnYxLlF1ZXJ5QWRkcmVzc0JvbmRlZFJlcXVlc3QaMS5zdW5yaXNlLnNoYXJlY2xhc3MudjEuUXVlcnlBZGRyZXNzQm9uZGVkUmVzcG9uc2UiL4LT5JMCKRInL3N1bnJpc2Uvc2hhcmVjbGFzcy92MS9ib25kZWQve2FkZHJlc3N9Es0BChBDbGFpbWFibGVSZXdhcmRzEjMuc3VucmlzZS5zaGFyZWNsYXNzLnYxLlF1ZXJ5Q2xhaW1hYmxlUmV3YXJkc1JlcXVlc3QaNC5zdW5yaXNlLnNoYXJlY2xhc3MudjEuUXVlcnlDbGFpbWFibGVSZXdhcmRzUmVzcG9uc2UiToLT5JMCSBJGL3N1bnJpc2Uvc2hhcmVjbGFzcy92MS9jbGFpbWFibGUtcmV3YXJkcy97YWRkcmVzc30ve3ZhbGlkYXRvcl9hZGRyZXNzfRKxAQoQQWRkcmVzc1VuYm9uZGluZxIzLnN1bnJpc2Uuc2hhcmVjbGFzcy52MS5RdWVyeUFkZHJlc3NVbmJvbmRpbmdSZXF1ZXN0GjQuc3VucmlzZS5zaGFyZWNsYXNzLnYxLlF1ZXJ5QWRkcmVzc1VuYm9uZGluZ1Jlc3BvbnNlIjKC0+STAiwSKi9zdW5yaXNlL3NoYXJlY2xhc3MvdjEvdW5ib25kaW5nL3thZGRyZXNzfULRAQoZY29tLnN1bnJpc2Uuc2hhcmVjbGFzcy52MUIKUXVlcnlQcm90b1ABWjJnaXRodWIuY29tL3N1bnJpc2VsYXllci9zdW5yaXNlL3gvc2hhcmVjbGFzcy90eXBlc6ICA1NTWKoCFVN1bnJpc2UuU2hhcmVjbGFzcy5WMcoCFVN1bnJpc2VcU2hhcmVjbGFzc1xWMeICIVN1bnJpc2VcU2hhcmVjbGFzc1xWMVxHUEJNZXRhZGF0YeoCF1N1bnJpc2U6OlNoYXJlY2xhc3M6OlYxYgZwcm90bzM", [file_cosmos_base_query_v1beta1_pagination, file_cosmos_base_v1beta1_coin, file_cosmos_proto_cosmos, file_gogoproto_gogo, file_google_api_annotations, file_sunrise_shareclass_v1_bond, file_sunrise_shareclass_v1_params]);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message sunrise.shareclass.v1.QueryParamsRequest
 */
export type QueryParamsRequest = Message<"sunrise.shareclass.v1.QueryParamsRequest"> & {
};

/**
 * Describes the message sunrise.shareclass.v1.QueryParamsRequest.
 * Use `create(QueryParamsRequestSchema)` to create a new message.
 */
export const QueryParamsRequestSchema: GenMessage<QueryParamsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 0);

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message sunrise.shareclass.v1.QueryParamsResponse
 */
export type QueryParamsResponse = Message<"sunrise.shareclass.v1.QueryParamsResponse"> & {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: sunrise.shareclass.v1.Params params = 1;
   */
  params?: Params;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema: GenMessage<QueryParamsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 1);

/**
 * QueryCalculateAmountRequest
 *
 * @generated from message sunrise.shareclass.v1.QueryCalculateBondingAmountRequest
 */
export type QueryCalculateBondingAmountRequest = Message<"sunrise.shareclass.v1.QueryCalculateBondingAmountRequest"> & {
  /**
   * @generated from field: string validator_address = 1;
   */
  validatorAddress: string;

  /**
   * @generated from field: string share = 2;
   */
  share: string;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryCalculateBondingAmountRequest.
 * Use `create(QueryCalculateBondingAmountRequestSchema)` to create a new message.
 */
export const QueryCalculateBondingAmountRequestSchema: GenMessage<QueryCalculateBondingAmountRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 2);

/**
 * QueryCalculateBondingAmountResponse
 *
 * @generated from message sunrise.shareclass.v1.QueryCalculateBondingAmountResponse
 */
export type QueryCalculateBondingAmountResponse = Message<"sunrise.shareclass.v1.QueryCalculateBondingAmountResponse"> & {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
   */
  amount?: Coin;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryCalculateBondingAmountResponse.
 * Use `create(QueryCalculateBondingAmountResponseSchema)` to create a new message.
 */
export const QueryCalculateBondingAmountResponseSchema: GenMessage<QueryCalculateBondingAmountResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 3);

/**
 * QueryCalculateShareRequest
 *
 * @generated from message sunrise.shareclass.v1.QueryCalculateShareRequest
 */
export type QueryCalculateShareRequest = Message<"sunrise.shareclass.v1.QueryCalculateShareRequest"> & {
  /**
   * @generated from field: string validator_address = 1;
   */
  validatorAddress: string;

  /**
   * @generated from field: string amount = 2;
   */
  amount: string;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryCalculateShareRequest.
 * Use `create(QueryCalculateShareRequestSchema)` to create a new message.
 */
export const QueryCalculateShareRequestSchema: GenMessage<QueryCalculateShareRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 4);

/**
 * QueryCalculateShareResponse
 *
 * @generated from message sunrise.shareclass.v1.QueryCalculateShareResponse
 */
export type QueryCalculateShareResponse = Message<"sunrise.shareclass.v1.QueryCalculateShareResponse"> & {
  /**
   * @generated from field: string share = 1;
   */
  share: string;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryCalculateShareResponse.
 * Use `create(QueryCalculateShareResponseSchema)` to create a new message.
 */
export const QueryCalculateShareResponseSchema: GenMessage<QueryCalculateShareResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 5);

/**
 * QueryAddressBondedRequest
 *
 * @generated from message sunrise.shareclass.v1.QueryAddressBondedRequest
 */
export type QueryAddressBondedRequest = Message<"sunrise.shareclass.v1.QueryAddressBondedRequest"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryAddressBondedRequest.
 * Use `create(QueryAddressBondedRequestSchema)` to create a new message.
 */
export const QueryAddressBondedRequestSchema: GenMessage<QueryAddressBondedRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 6);

/**
 * QueryAddressBondedResponse
 *
 * @generated from message sunrise.shareclass.v1.QueryAddressBondedResponse
 */
export type QueryAddressBondedResponse = Message<"sunrise.shareclass.v1.QueryAddressBondedResponse"> & {
  /**
   * @generated from field: repeated sunrise.shareclass.v1.ValidatorBond bonds = 1;
   */
  bonds: ValidatorBond[];
};

/**
 * Describes the message sunrise.shareclass.v1.QueryAddressBondedResponse.
 * Use `create(QueryAddressBondedResponseSchema)` to create a new message.
 */
export const QueryAddressBondedResponseSchema: GenMessage<QueryAddressBondedResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 7);

/**
 * QueryClaimableRewardsRequest
 *
 * @generated from message sunrise.shareclass.v1.QueryClaimableRewardsRequest
 */
export type QueryClaimableRewardsRequest = Message<"sunrise.shareclass.v1.QueryClaimableRewardsRequest"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress: string;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryClaimableRewardsRequest.
 * Use `create(QueryClaimableRewardsRequestSchema)` to create a new message.
 */
export const QueryClaimableRewardsRequestSchema: GenMessage<QueryClaimableRewardsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 8);

/**
 * QueryClaimableRewardsResponse
 *
 * @generated from message sunrise.shareclass.v1.QueryClaimableRewardsResponse
 */
export type QueryClaimableRewardsResponse = Message<"sunrise.shareclass.v1.QueryClaimableRewardsResponse"> & {
  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
   */
  amount: Coin[];
};

/**
 * Describes the message sunrise.shareclass.v1.QueryClaimableRewardsResponse.
 * Use `create(QueryClaimableRewardsResponseSchema)` to create a new message.
 */
export const QueryClaimableRewardsResponseSchema: GenMessage<QueryClaimableRewardsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 9);

/**
 * QueryAddressUnbondingRequest
 *
 * @generated from message sunrise.shareclass.v1.QueryAddressUnbondingRequest
 */
export type QueryAddressUnbondingRequest = Message<"sunrise.shareclass.v1.QueryAddressUnbondingRequest"> & {
  /**
   * cosmos.base.query.v1beta1.PageRequest pagination = 2;
   *
   * @generated from field: string address = 1;
   */
  address: string;
};

/**
 * Describes the message sunrise.shareclass.v1.QueryAddressUnbondingRequest.
 * Use `create(QueryAddressUnbondingRequestSchema)` to create a new message.
 */
export const QueryAddressUnbondingRequestSchema: GenMessage<QueryAddressUnbondingRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 10);

/**
 * QueryAddressUnbondingResponse
 *
 * @generated from message sunrise.shareclass.v1.QueryAddressUnbondingResponse
 */
export type QueryAddressUnbondingResponse = Message<"sunrise.shareclass.v1.QueryAddressUnbondingResponse"> & {
  /**
   * cosmos.base.query.v1beta1.PageResponse pagination = 2;
   *
   * @generated from field: repeated sunrise.shareclass.v1.Unbonding unbondings = 1;
   */
  unbondings: Unbonding[];
};

/**
 * Describes the message sunrise.shareclass.v1.QueryAddressUnbondingResponse.
 * Use `create(QueryAddressUnbondingResponseSchema)` to create a new message.
 */
export const QueryAddressUnbondingResponseSchema: GenMessage<QueryAddressUnbondingResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_shareclass_v1_query, 11);

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service sunrise.shareclass.v1.Query
 */
export const Query: GenService<{
  /**
   * Parameters queries the parameters of the module.
   *
   * @generated from rpc sunrise.shareclass.v1.Query.Params
   */
  params: {
    methodKind: "unary";
    input: typeof QueryParamsRequestSchema;
    output: typeof QueryParamsResponseSchema;
  },
  /**
   * CalculateBondingAmount
   *
   * @generated from rpc sunrise.shareclass.v1.Query.CalculateBondingAmount
   */
  calculateBondingAmount: {
    methodKind: "unary";
    input: typeof QueryCalculateBondingAmountRequestSchema;
    output: typeof QueryCalculateBondingAmountResponseSchema;
  },
  /**
   * CalculateShare
   *
   * @generated from rpc sunrise.shareclass.v1.Query.CalculateShare
   */
  calculateShare: {
    methodKind: "unary";
    input: typeof QueryCalculateShareRequestSchema;
    output: typeof QueryCalculateShareResponseSchema;
  },
  /**
   * AddressBonded
   *
   * @generated from rpc sunrise.shareclass.v1.Query.AddressBonded
   */
  addressBonded: {
    methodKind: "unary";
    input: typeof QueryAddressBondedRequestSchema;
    output: typeof QueryAddressBondedResponseSchema;
  },
  /**
   * ClaimableRewards
   *
   * @generated from rpc sunrise.shareclass.v1.Query.ClaimableRewards
   */
  claimableRewards: {
    methodKind: "unary";
    input: typeof QueryClaimableRewardsRequestSchema;
    output: typeof QueryClaimableRewardsResponseSchema;
  },
  /**
   * AddressUnbonding
   *
   * @generated from rpc sunrise.shareclass.v1.Query.AddressUnbonding
   */
  addressUnbonding: {
    methodKind: "unary";
    input: typeof QueryAddressUnbondingRequestSchema;
    output: typeof QueryAddressUnbondingResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_sunrise_shareclass_v1_query, 0);

