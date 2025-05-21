import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryConstitutionRequestSchema,
  QueryConstitutionResponseSchema,
  QueryDepositRequestSchema,
  QueryDepositResponseSchema,
  QueryDepositsRequestSchema,
  QueryDepositsResponseSchema,
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryProposalRequestSchema,
  QueryProposalResponseSchema,
  QueryProposalsRequestSchema,
  QueryProposalsResponseSchema,
  QueryTallyResultRequestSchema,
  QueryTallyResultResponseSchema,
  QueryVoteRequestSchema,
  QueryVoteResponseSchema,
  QueryVotesRequestSchema,
  QueryVotesResponseSchema,
} from "../types/cosmos/gov";

export type GovV1Extension = ReturnType<typeof setupGovV1Extension>;

export function setupGovV1Extension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "cosmos.gov.v1.Query";

  return {
    govv1: {
      constitution: queryFactory(
        rpc,
        service,
        "Constitution",
        QueryConstitutionRequestSchema,
        QueryConstitutionResponseSchema,
      ),
      proposal: queryFactory(
        rpc,
        service,
        "Proposal",
        QueryProposalRequestSchema,
        QueryProposalResponseSchema,
      ),
      proposals: queryFactory(
        rpc,
        service,
        "Proposals",
        QueryProposalsRequestSchema,
        QueryProposalsResponseSchema,
      ),
      vote: queryFactory(rpc, service, "Vote", QueryVoteRequestSchema, QueryVoteResponseSchema),
      votes: queryFactory(rpc, service, "Votes", QueryVotesRequestSchema, QueryVotesResponseSchema),
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      deposit: queryFactory(
        rpc,
        service,
        "Deposit",
        QueryDepositRequestSchema,
        QueryDepositResponseSchema,
      ),
      deposits: queryFactory(
        rpc,
        service,
        "Deposits",
        QueryDepositsRequestSchema,
        QueryDepositsResponseSchema,
      ),
      tallyResult: queryFactory(
        rpc,
        service,
        "TallyResult",
        QueryTallyResultRequestSchema,
        QueryTallyResultResponseSchema,
      ),
    },
  };
}
