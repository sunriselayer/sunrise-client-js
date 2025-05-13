import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryBribeAllocationRequestSchema,
  QueryBribeAllocationResponseSchema,
  QueryBribeAllocationsRequestSchema,
  QueryBribeAllocationsResponseSchema,
  QueryBribeRequestSchema,
  QueryBribeResponseSchema,
  QueryBribesRequestSchema,
  QueryBribesResponseSchema,
  QueryEpochRequestSchema,
  QueryEpochResponseSchema,
  QueryEpochsRequestSchema,
  QueryEpochsResponseSchema,
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
      bribeAllocations: queryFactory(
        rpc,
        service,
        "BribeAllocations",
        QueryBribeAllocationsRequestSchema,
        QueryBribeAllocationsResponseSchema,
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
      vote: queryFactory(rpc, service, "Vote", QueryVoteRequestSchema, QueryVoteResponseSchema),
      votes: queryFactory(rpc, service, "Votes", QueryVotesRequestSchema, QueryVotesResponseSchema),
    },
  };
}
