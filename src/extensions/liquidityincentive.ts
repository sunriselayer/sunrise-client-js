import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryBribeAllocationRequestSchema,
  QueryBribeAllocationResponseSchema,
  QueryBribeAllocationsByAddressRequestSchema,
  QueryBribeAllocationsByAddressResponseSchema,
  QueryBribeAllocationsRequestSchema,
  QueryBribeAllocationsResponseSchema,
  QueryBribesByEpochAndPoolIdRequestSchema,
  QueryBribesByEpochAndPoolIdResponseSchema,
  QueryBribesByEpochIdRequestSchema,
  QueryBribesByEpochIdResponseSchema,
  QueryBribesByPoolIdRequestSchema,
  QueryBribesByPoolIdResponseSchema,
  QueryBribeRequestSchema,
  QueryBribeResponseSchema,
  QueryBribesRequestSchema,
  QueryBribesResponseSchema,
  QueryEpochRequestSchema,
  QueryEpochResponseSchema,
  QueryEpochsRequestSchema,
  QueryEpochsResponseSchema,
  QueryGaugeRequestSchema,
  QueryGaugeResponseSchema,
  QueryGaugesRequestSchema,
  QueryGaugesResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryVoteRequestSchema,
  QueryVoteResponseSchema,
  QueryVotesRequestSchema,
  QueryVotesResponseSchema,
} from "../types/sunrise/liquidityincentive";

export type LiquidityIncentiveExtension = ReturnType<typeof setupLiquidityIncentiveExtension>;

export function setupLiquidityIncentiveExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.liquidityincentive.v1.Query";

  return {
    liquidityincentive: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      bribeAllocation: queryFactory(
        rpc,
        service,
        "BribeAllocation",
        QueryBribeAllocationRequestSchema,
        QueryBribeAllocationResponseSchema,
      ),
      bribeAllocationsByAddress: queryFactory(
        rpc,
        service,
        "BribeAllocationsByAddress",
        QueryBribeAllocationsByAddressRequestSchema,
        QueryBribeAllocationsByAddressResponseSchema,
      ),
      bribeAllocations: queryFactory(
        rpc,
        service,
        "BribeAllocations",
        QueryBribeAllocationsRequestSchema,
        QueryBribeAllocationsResponseSchema,
      ),
      bribesByEpochAndPoolId: queryFactory(
        rpc,
        service,
        "BribesByEpochAndPoolId",
        QueryBribesByEpochAndPoolIdRequestSchema,
        QueryBribesByEpochAndPoolIdResponseSchema,
      ),
      bribesByEpochId: queryFactory(
        rpc,
        service,
        "BribesByEpochId",
        QueryBribesByEpochIdRequestSchema,
        QueryBribesByEpochIdResponseSchema,
      ),
      bribesByPoolId: queryFactory(
        rpc,
        service,
        "BribesByPoolId",
        QueryBribesByPoolIdRequestSchema,
        QueryBribesByPoolIdResponseSchema,
      ),
      bribe: queryFactory(
        rpc,
        service,
        "Bribe",
        QueryBribeRequestSchema,
        QueryBribeResponseSchema,
      ),
      bribes: queryFactory(
        rpc,
        service,
        "Bribes",
        QueryBribesRequestSchema,
        QueryBribesResponseSchema,
      ),

      epoch: queryFactory(rpc, service, "Epoch", QueryEpochRequestSchema, QueryEpochResponseSchema),
      epochs: queryFactory(
        rpc,
        service,
        "Epochs",
        QueryEpochsRequestSchema,
        QueryEpochsResponseSchema,
      ),
      gauge: queryFactory(rpc, service, "Gauge", QueryGaugeRequestSchema, QueryGaugeResponseSchema),
      gauges: queryFactory(
        rpc,
        service,
        "Gauges",
        QueryGaugesRequestSchema,
        QueryGaugesResponseSchema,
      ),
      vote: queryFactory(rpc, service, "Vote", QueryVoteRequestSchema, QueryVoteResponseSchema),
      votes: queryFactory(rpc, service, "Votes", QueryVotesRequestSchema, QueryVotesResponseSchema),
    },
  };
}
