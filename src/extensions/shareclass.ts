import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryCalculateBondingAmountRequestSchema,
  QueryCalculateBondingAmountResponseSchema,
  QueryCalculateShareRequestSchema,
  QueryCalculateShareResponseSchema,
  QueryAddressBondedRequestSchema,
  QueryAddressBondedResponseSchema,
  QueryClaimableRewardsRequestSchema,
  QueryClaimableRewardsResponseSchema,
  QueryAddressUnbondingRequestSchema,
  QueryAddressUnbondingResponseSchema,
} from "../types/sunrise/shareclass";

export type ShareClassExtension = ReturnType<typeof setupShareClassExtension>;

export function setupShareClassExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.shareclass.v1.Query";

  return {
    shareclass: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      calculateBondingAmount: queryFactory(
        rpc,
        service,
        "CalculateBondingAmount",
        QueryCalculateBondingAmountRequestSchema,
        QueryCalculateBondingAmountResponseSchema,
      ),
      calculateShare: queryFactory(
        rpc,
        service,
        "CalculateShare",
        QueryCalculateShareRequestSchema,
        QueryCalculateShareResponseSchema,
      ),
      addressBonded: queryFactory(
        rpc,
        service,
        "AddressBonded",
        QueryAddressBondedRequestSchema,
        QueryAddressBondedResponseSchema,
      ),
      claimableRewards: queryFactory(
        rpc,
        service,
        "ClaimableRewards",
        QueryClaimableRewardsRequestSchema,
        QueryClaimableRewardsResponseSchema,
      ),
      addressUnbonding: queryFactory(
        rpc,
        service,
        "AddressUnbonding",
        QueryAddressUnbondingRequestSchema,
        QueryAddressUnbondingResponseSchema,
      ),
    },
  };
}
