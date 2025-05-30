// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/liquidityincentive/v1/query.proto (package sunrise.liquidityincentive.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb";
import { file_cosmos_base_query_v1beta1_pagination } from "../../../cosmos/base/query/v1beta1/pagination_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import type { Epoch } from "./epoch_pb";
import { file_sunrise_liquidityincentive_v1_epoch } from "./epoch_pb";
import type { Gauge, Vote } from "./gauge_pb";
import { file_sunrise_liquidityincentive_v1_gauge } from "./gauge_pb";
import type { Params } from "./params_pb";
import { file_sunrise_liquidityincentive_v1_params } from "./params_pb";
import type { Bribe, BribeAllocation } from "./bribe_pb";
import { file_sunrise_liquidityincentive_v1_bribe } from "./bribe_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/liquidityincentive/v1/query.proto.
 */
export const file_sunrise_liquidityincentive_v1_query: GenFile = /*@__PURE__*/
  fileDesc("CilzdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS9xdWVyeS5wcm90bxIdc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEiFAoSUXVlcnlQYXJhbXNSZXF1ZXN0IlIKE1F1ZXJ5UGFyYW1zUmVzcG9uc2USOwoGcGFyYW1zGAEgASgLMiUuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUGFyYW1zQgTI3h8AIh8KEVF1ZXJ5RXBvY2hSZXF1ZXN0EgoKAmlkGAEgASgEIk8KElF1ZXJ5RXBvY2hSZXNwb25zZRI5CgVlcG9jaBgBIAEoCzIkLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLkVwb2NoQgTI3h8AIlAKElF1ZXJ5RXBvY2hzUmVxdWVzdBI6CgpwYWdpbmF0aW9uGAEgASgLMiYuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVxdWVzdCKOAQoTUXVlcnlFcG9jaHNSZXNwb25zZRI6CgZlcG9jaHMYASADKAsyJC5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5FcG9jaEIEyN4fABI7CgpwYWdpbmF0aW9uGAIgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UiIwoQUXVlcnlWb3RlUmVxdWVzdBIPCgdhZGRyZXNzGAEgASgJIkwKEVF1ZXJ5Vm90ZVJlc3BvbnNlEjcKBHZvdGUYASABKAsyIy5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5Wb3RlQgTI3h8AIk8KEVF1ZXJ5Vm90ZXNSZXF1ZXN0EjoKCnBhZ2luYXRpb24YASABKAsyJi5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXF1ZXN0IosBChJRdWVyeVZvdGVzUmVzcG9uc2USOAoFdm90ZXMYASADKAsyIy5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5Wb3RlQgTI3h8AEjsKCnBhZ2luYXRpb24YAiABKAsyJy5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXNwb25zZSI3ChJRdWVyeUJyaWJlc1JlcXVlc3QSEAoIZXBvY2hfaWQYASABKAkSDwoHcG9vbF9pZBgCIAEoCSJRChNRdWVyeUJyaWJlc1Jlc3BvbnNlEjoKBmJyaWJlcxgBIAMoCzIkLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLkJyaWJlQgTI3h8AIh8KEVF1ZXJ5QnJpYmVSZXF1ZXN0EgoKAmlkGAEgASgEIk8KElF1ZXJ5QnJpYmVSZXNwb25zZRI5CgVicmliZRgBIAEoCzIkLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLkJyaWJlQgTI3h8AIkEKHFF1ZXJ5QnJpYmVBbGxvY2F0aW9uc1JlcXVlc3QSDwoHYWRkcmVzcxgBIAEoCRIQCghlcG9jaF9pZBgCIAEoCSJwCh1RdWVyeUJyaWJlQWxsb2NhdGlvbnNSZXNwb25zZRJPChFicmliZV9hbGxvY2F0aW9ucxgBIAMoCzIuLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLkJyaWJlQWxsb2NhdGlvbkIEyN4fACJRChtRdWVyeUJyaWJlQWxsb2NhdGlvblJlcXVlc3QSDwoHYWRkcmVzcxgBIAEoCRIQCghlcG9jaF9pZBgCIAEoCRIPCgdwb29sX2lkGAMgASgJIm4KHFF1ZXJ5QnJpYmVBbGxvY2F0aW9uUmVzcG9uc2USTgoQYnJpYmVfYWxsb2NhdGlvbhgBIAEoCzIuLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLkJyaWJlQWxsb2NhdGlvbkIEyN4fACIZChdRdWVyeVRhbGx5UmVzdWx0UmVxdWVzdCJyChhRdWVyeVRhbGx5UmVzdWx0UmVzcG9uc2USGgoSdG90YWxfdm90aW5nX3Bvd2VyGAEgASgDEjoKBmdhdWdlcxgCIAMoCzIkLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLkdhdWdlQgTI3h8AMtANCgVRdWVyeRKeAQoGUGFyYW1zEjEuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlQYXJhbXNSZXF1ZXN0GjIuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlQYXJhbXNSZXNwb25zZSItgtPkkwInEiUvc3VucmlzZS9saXF1aWRpdHlpbmNlbnRpdmUvdjEvcGFyYW1zEqABCgVFcG9jaBIwLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLlF1ZXJ5RXBvY2hSZXF1ZXN0GjEuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlFcG9jaFJlc3BvbnNlIjKC0+STAiwSKi9zdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS9lcG9jaHMve2lkfRKeAQoGRXBvY2hzEjEuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlFcG9jaHNSZXF1ZXN0GjIuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlFcG9jaHNSZXNwb25zZSItgtPkkwInEiUvc3VucmlzZS9saXF1aWRpdHlpbmNlbnRpdmUvdjEvZXBvY2hzEqEBCgRWb3RlEi8uc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlWb3RlUmVxdWVzdBowLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLlF1ZXJ5Vm90ZVJlc3BvbnNlIjaC0+STAjASLi9zdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS92b3Rlcy97YWRkcmVzc30SmgEKBVZvdGVzEjAuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlWb3Rlc1JlcXVlc3QaMS5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5RdWVyeVZvdGVzUmVzcG9uc2UiLILT5JMCJhIkL3N1bnJpc2UvbGlxdWlkaXR5aW5jZW50aXZlL3YxL3ZvdGVzEp4BCgZCcmliZXMSMS5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5RdWVyeUJyaWJlc1JlcXVlc3QaMi5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5RdWVyeUJyaWJlc1Jlc3BvbnNlIi2C0+STAicSJS9zdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS9icmliZXMSoAEKBUJyaWJlEjAuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlCcmliZVJlcXVlc3QaMS5zdW5yaXNlLmxpcXVpZGl0eWluY2VudGl2ZS52MS5RdWVyeUJyaWJlUmVzcG9uc2UiMoLT5JMCLBIqL3N1bnJpc2UvbGlxdWlkaXR5aW5jZW50aXZlL3YxL2JyaWJlcy97aWR9EscBChBCcmliZUFsbG9jYXRpb25zEjsuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlCcmliZUFsbG9jYXRpb25zUmVxdWVzdBo8LnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLlF1ZXJ5QnJpYmVBbGxvY2F0aW9uc1Jlc3BvbnNlIjiC0+STAjISMC9zdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS9icmliZS1hbGxvY2F0aW9ucxLjAQoPQnJpYmVBbGxvY2F0aW9uEjouc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlCcmliZUFsbG9jYXRpb25SZXF1ZXN0Gjsuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlCcmliZUFsbG9jYXRpb25SZXNwb25zZSJXgtPkkwJREk8vc3VucmlzZS9saXF1aWRpdHlpbmNlbnRpdmUvdjEvYnJpYmUtYWxsb2NhdGlvbnMve2FkZHJlc3N9L3tlcG9jaF9pZH0ve3Bvb2xfaWR9EqwBCgtUYWxseVJlc3VsdBI2LnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxLlF1ZXJ5VGFsbHlSZXN1bHRSZXF1ZXN0Gjcuc3VucmlzZS5saXF1aWRpdHlpbmNlbnRpdmUudjEuUXVlcnlUYWxseVJlc3VsdFJlc3BvbnNlIiyC0+STAiYSJC9zdW5yaXNlL2xpcXVpZGl0eWluY2VudGl2ZS92MS90YWxseUKBAgohY29tLnN1bnJpc2UubGlxdWlkaXR5aW5jZW50aXZlLnYxQgpRdWVyeVByb3RvUAFaOmdpdGh1Yi5jb20vc3VucmlzZWxheWVyL3N1bnJpc2UveC9saXF1aWRpdHlpbmNlbnRpdmUvdHlwZXOiAgNTTFiqAh1TdW5yaXNlLkxpcXVpZGl0eWluY2VudGl2ZS5WMcoCHVN1bnJpc2VcTGlxdWlkaXR5aW5jZW50aXZlXFYx4gIpU3VucmlzZVxMaXF1aWRpdHlpbmNlbnRpdmVcVjFcR1BCTWV0YWRhdGHqAh9TdW5yaXNlOjpMaXF1aWRpdHlpbmNlbnRpdmU6OlYxYgZwcm90bzM", [file_cosmos_base_query_v1beta1_pagination, file_gogoproto_gogo, file_google_api_annotations, file_sunrise_liquidityincentive_v1_epoch, file_sunrise_liquidityincentive_v1_gauge, file_sunrise_liquidityincentive_v1_params, file_sunrise_liquidityincentive_v1_bribe]);

/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryParamsRequest
 */
export type QueryParamsRequest = Message<"sunrise.liquidityincentive.v1.QueryParamsRequest"> & {
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryParamsRequest.
 * Use `create(QueryParamsRequestSchema)` to create a new message.
 */
export const QueryParamsRequestSchema: GenMessage<QueryParamsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 0);

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryParamsResponse
 */
export type QueryParamsResponse = Message<"sunrise.liquidityincentive.v1.QueryParamsResponse"> & {
  /**
   * params holds all the parameters of this module.
   *
   * @generated from field: sunrise.liquidityincentive.v1.Params params = 1;
   */
  params?: Params;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema: GenMessage<QueryParamsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 1);

/**
 * QueryEpochRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryEpochRequest
 */
export type QueryEpochRequest = Message<"sunrise.liquidityincentive.v1.QueryEpochRequest"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryEpochRequest.
 * Use `create(QueryEpochRequestSchema)` to create a new message.
 */
export const QueryEpochRequestSchema: GenMessage<QueryEpochRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 2);

/**
 * QueryEpochResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryEpochResponse
 */
export type QueryEpochResponse = Message<"sunrise.liquidityincentive.v1.QueryEpochResponse"> & {
  /**
   * @generated from field: sunrise.liquidityincentive.v1.Epoch epoch = 1;
   */
  epoch?: Epoch;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryEpochResponse.
 * Use `create(QueryEpochResponseSchema)` to create a new message.
 */
export const QueryEpochResponseSchema: GenMessage<QueryEpochResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 3);

/**
 * QueryEpochsRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryEpochsRequest
 */
export type QueryEpochsRequest = Message<"sunrise.liquidityincentive.v1.QueryEpochsRequest"> & {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryEpochsRequest.
 * Use `create(QueryEpochsRequestSchema)` to create a new message.
 */
export const QueryEpochsRequestSchema: GenMessage<QueryEpochsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 4);

/**
 * QueryEpochsResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryEpochsResponse
 */
export type QueryEpochsResponse = Message<"sunrise.liquidityincentive.v1.QueryEpochsResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquidityincentive.v1.Epoch epochs = 1;
   */
  epochs: Epoch[];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryEpochsResponse.
 * Use `create(QueryEpochsResponseSchema)` to create a new message.
 */
export const QueryEpochsResponseSchema: GenMessage<QueryEpochsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 5);

/**
 * QueryVoteRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryVoteRequest
 */
export type QueryVoteRequest = Message<"sunrise.liquidityincentive.v1.QueryVoteRequest"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryVoteRequest.
 * Use `create(QueryVoteRequestSchema)` to create a new message.
 */
export const QueryVoteRequestSchema: GenMessage<QueryVoteRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 6);

/**
 * QueryVoteResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryVoteResponse
 */
export type QueryVoteResponse = Message<"sunrise.liquidityincentive.v1.QueryVoteResponse"> & {
  /**
   * @generated from field: sunrise.liquidityincentive.v1.Vote vote = 1;
   */
  vote?: Vote;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryVoteResponse.
 * Use `create(QueryVoteResponseSchema)` to create a new message.
 */
export const QueryVoteResponseSchema: GenMessage<QueryVoteResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 7);

/**
 * QueryVotesRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryVotesRequest
 */
export type QueryVotesRequest = Message<"sunrise.liquidityincentive.v1.QueryVotesRequest"> & {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryVotesRequest.
 * Use `create(QueryVotesRequestSchema)` to create a new message.
 */
export const QueryVotesRequestSchema: GenMessage<QueryVotesRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 8);

/**
 * QueryVotesResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryVotesResponse
 */
export type QueryVotesResponse = Message<"sunrise.liquidityincentive.v1.QueryVotesResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquidityincentive.v1.Vote votes = 1;
   */
  votes: Vote[];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryVotesResponse.
 * Use `create(QueryVotesResponseSchema)` to create a new message.
 */
export const QueryVotesResponseSchema: GenMessage<QueryVotesResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 9);

/**
 * QueryBribesRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribesRequest
 */
export type QueryBribesRequest = Message<"sunrise.liquidityincentive.v1.QueryBribesRequest"> & {
  /**
   * Optional filter by epoch_id. If empty, not applied.
   *
   * @generated from field: string epoch_id = 1;
   */
  epochId: string;

  /**
   * Optional filter by pool_id. If empty, not applied.
   *
   * @generated from field: string pool_id = 2;
   */
  poolId: string;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribesRequest.
 * Use `create(QueryBribesRequestSchema)` to create a new message.
 */
export const QueryBribesRequestSchema: GenMessage<QueryBribesRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 10);

/**
 * QueryBribesResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribesResponse
 */
export type QueryBribesResponse = Message<"sunrise.liquidityincentive.v1.QueryBribesResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquidityincentive.v1.Bribe bribes = 1;
   */
  bribes: Bribe[];
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribesResponse.
 * Use `create(QueryBribesResponseSchema)` to create a new message.
 */
export const QueryBribesResponseSchema: GenMessage<QueryBribesResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 11);

/**
 * QueryBribeRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribeRequest
 */
export type QueryBribeRequest = Message<"sunrise.liquidityincentive.v1.QueryBribeRequest"> & {
  /**
   * @generated from field: uint64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribeRequest.
 * Use `create(QueryBribeRequestSchema)` to create a new message.
 */
export const QueryBribeRequestSchema: GenMessage<QueryBribeRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 12);

/**
 * QueryBribeResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribeResponse
 */
export type QueryBribeResponse = Message<"sunrise.liquidityincentive.v1.QueryBribeResponse"> & {
  /**
   * @generated from field: sunrise.liquidityincentive.v1.Bribe bribe = 1;
   */
  bribe?: Bribe;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribeResponse.
 * Use `create(QueryBribeResponseSchema)` to create a new message.
 */
export const QueryBribeResponseSchema: GenMessage<QueryBribeResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 13);

/**
 * QueryBribeAllocationsRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribeAllocationsRequest
 */
export type QueryBribeAllocationsRequest = Message<"sunrise.liquidityincentive.v1.QueryBribeAllocationsRequest"> & {
  /**
   * Optional filter by address. If empty, not applied.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * Optional filter by epoch_id. If empty, not applied.
   *
   * @generated from field: string epoch_id = 2;
   */
  epochId: string;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribeAllocationsRequest.
 * Use `create(QueryBribeAllocationsRequestSchema)` to create a new message.
 */
export const QueryBribeAllocationsRequestSchema: GenMessage<QueryBribeAllocationsRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 14);

/**
 * QueryBribeAllocationsResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribeAllocationsResponse
 */
export type QueryBribeAllocationsResponse = Message<"sunrise.liquidityincentive.v1.QueryBribeAllocationsResponse"> & {
  /**
   * @generated from field: repeated sunrise.liquidityincentive.v1.BribeAllocation bribe_allocations = 1;
   */
  bribeAllocations: BribeAllocation[];
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribeAllocationsResponse.
 * Use `create(QueryBribeAllocationsResponseSchema)` to create a new message.
 */
export const QueryBribeAllocationsResponseSchema: GenMessage<QueryBribeAllocationsResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 15);

/**
 * QueryBribeAllocationRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribeAllocationRequest
 */
export type QueryBribeAllocationRequest = Message<"sunrise.liquidityincentive.v1.QueryBribeAllocationRequest"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: string epoch_id = 2;
   */
  epochId: string;

  /**
   * @generated from field: string pool_id = 3;
   */
  poolId: string;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribeAllocationRequest.
 * Use `create(QueryBribeAllocationRequestSchema)` to create a new message.
 */
export const QueryBribeAllocationRequestSchema: GenMessage<QueryBribeAllocationRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 16);

/**
 * QueryBribeAllocationResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryBribeAllocationResponse
 */
export type QueryBribeAllocationResponse = Message<"sunrise.liquidityincentive.v1.QueryBribeAllocationResponse"> & {
  /**
   * @generated from field: sunrise.liquidityincentive.v1.BribeAllocation bribe_allocation = 1;
   */
  bribeAllocation?: BribeAllocation;
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryBribeAllocationResponse.
 * Use `create(QueryBribeAllocationResponseSchema)` to create a new message.
 */
export const QueryBribeAllocationResponseSchema: GenMessage<QueryBribeAllocationResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 17);

/**
 * QueryTallyResultRequest
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryTallyResultRequest
 */
export type QueryTallyResultRequest = Message<"sunrise.liquidityincentive.v1.QueryTallyResultRequest"> & {
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryTallyResultRequest.
 * Use `create(QueryTallyResultRequestSchema)` to create a new message.
 */
export const QueryTallyResultRequestSchema: GenMessage<QueryTallyResultRequest> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 18);

/**
 * QueryTallyResultResponse
 *
 * @generated from message sunrise.liquidityincentive.v1.QueryTallyResultResponse
 */
export type QueryTallyResultResponse = Message<"sunrise.liquidityincentive.v1.QueryTallyResultResponse"> & {
  /**
   * @generated from field: int64 total_voting_power = 1;
   */
  totalVotingPower: bigint;

  /**
   * @generated from field: repeated sunrise.liquidityincentive.v1.Gauge gauges = 2;
   */
  gauges: Gauge[];
};

/**
 * Describes the message sunrise.liquidityincentive.v1.QueryTallyResultResponse.
 * Use `create(QueryTallyResultResponseSchema)` to create a new message.
 */
export const QueryTallyResultResponseSchema: GenMessage<QueryTallyResultResponse> = /*@__PURE__*/
  messageDesc(file_sunrise_liquidityincentive_v1_query, 19);

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service sunrise.liquidityincentive.v1.Query
 */
export const Query: GenService<{
  /**
   * Parameters queries the parameters of the module.
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.Params
   */
  params: {
    methodKind: "unary";
    input: typeof QueryParamsRequestSchema;
    output: typeof QueryParamsResponseSchema;
  },
  /**
   * Epoch
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.Epoch
   */
  epoch: {
    methodKind: "unary";
    input: typeof QueryEpochRequestSchema;
    output: typeof QueryEpochResponseSchema;
  },
  /**
   * Epochs
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.Epochs
   */
  epochs: {
    methodKind: "unary";
    input: typeof QueryEpochsRequestSchema;
    output: typeof QueryEpochsResponseSchema;
  },
  /**
   * Vote
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.Vote
   */
  vote: {
    methodKind: "unary";
    input: typeof QueryVoteRequestSchema;
    output: typeof QueryVoteResponseSchema;
  },
  /**
   * Votes
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.Votes
   */
  votes: {
    methodKind: "unary";
    input: typeof QueryVotesRequestSchema;
    output: typeof QueryVotesResponseSchema;
  },
  /**
   * Bribes queries bribes with optional filters for epoch_id and pool_id.
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.Bribes
   */
  bribes: {
    methodKind: "unary";
    input: typeof QueryBribesRequestSchema;
    output: typeof QueryBribesResponseSchema;
  },
  /**
   * Bribe queries a Bribe by its ID.
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.Bribe
   */
  bribe: {
    methodKind: "unary";
    input: typeof QueryBribeRequestSchema;
    output: typeof QueryBribeResponseSchema;
  },
  /**
   * BribeAllocations queries bribe allocations with an optional filter for address.
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.BribeAllocations
   */
  bribeAllocations: {
    methodKind: "unary";
    input: typeof QueryBribeAllocationsRequestSchema;
    output: typeof QueryBribeAllocationsResponseSchema;
  },
  /**
   * BribeAllocation queries a BribeAllocation by address, epoch ID, and pool ID.
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.BribeAllocation
   */
  bribeAllocation: {
    methodKind: "unary";
    input: typeof QueryBribeAllocationRequestSchema;
    output: typeof QueryBribeAllocationResponseSchema;
  },
  /**
   * TallyResult queries the tally of next epoch.
   *
   * @generated from rpc sunrise.liquidityincentive.v1.Query.TallyResult
   */
  tallyResult: {
    methodKind: "unary";
    input: typeof QueryTallyResultRequestSchema;
    output: typeof QueryTallyResultResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_sunrise_liquidityincentive_v1_query, 0);

