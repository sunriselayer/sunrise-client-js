import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryAllInvalidityRequestSchema,
  QueryAllInvalidityResponseSchema,
  QueryAllPublishedDataRequestSchema,
  QueryAllPublishedDataResponseSchema,
  QueryAllValidityProofsRequestSchema,
  QueryAllValidityProofsResponseSchema,
  QueryInvalidityRequestSchema,
  QueryInvalidityResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryProofDeputyRequestSchema,
  QueryProofDeputyResponseSchema,
  QueryPublishedDataRequestSchema,
  QueryPublishedDataResponseSchema,
  QueryValidityProofRequestSchema,
  QueryValidityProofResponseSchema,
  QueryZkpProofThresholdRequestSchema,
  QueryZkpProofThresholdResponseSchema,
} from "../types/sunrise/da";

export type DaExtension = ReturnType<typeof setupDaExtension>;

export function setupDaExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.da.v0.Query";

  return {
    da: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      publishedData: queryFactory(
        rpc,
        service,
        "PublishedData",
        QueryPublishedDataRequestSchema,
        QueryPublishedDataResponseSchema,
      ),
      allPublishedData: queryFactory(
        rpc,
        service,
        "AllPublishedData",
        QueryAllPublishedDataRequestSchema,
        QueryAllPublishedDataResponseSchema,
      ),
      validityProof: queryFactory(
        rpc,
        service,
        "ValidityProof",
        QueryValidityProofRequestSchema,
        QueryValidityProofResponseSchema,
      ),
      allValidityProofs: queryFactory(
        rpc,
        service,
        "AllValidityProofs",
        QueryAllValidityProofsRequestSchema,
        QueryAllValidityProofsResponseSchema,
      ),
      invalidity: queryFactory(
        rpc,
        service,
        "Invalidity",
        QueryInvalidityRequestSchema,
        QueryInvalidityResponseSchema,
      ),
      allInvalidity: queryFactory(
        rpc,
        service,
        "AllInvalidity",
        QueryAllInvalidityRequestSchema,
        QueryAllInvalidityResponseSchema,
      ),
      zkpProofThreshold: queryFactory(
        rpc,
        service,
        "ZkpProofThreshold",
        QueryZkpProofThresholdRequestSchema,
        QueryZkpProofThresholdResponseSchema,
      ),
      proofDeputy: queryFactory(
        rpc,
        service,
        "ProofDeputy",
        QueryProofDeputyRequestSchema,
        QueryProofDeputyResponseSchema,
      ),
    },
  };
}
