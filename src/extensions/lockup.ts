import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
  QueryParamsRequestSchema,
  QueryParamsResponseSchema,
  QueryLockupAccountsRequestSchema,
  QueryLockupAccountsResponseSchema,
  QueryLockupAccountRequestSchema,
  QueryLockupAccountResponseSchema,
  QuerySpendableAmountRequestSchema,
  QuerySpendableAmountResponseSchema,
} from "../types/sunrise/lockup";

export type LockupExtension = ReturnType<typeof setupLockupExtension>;

export function setupLockupExtension(base: QueryClient) {
  const rpc = createProtobufRpcClient(base);
  const service = "sunrise.lockup.v1.Query";

  return {
    lockup: {
      params: queryFactory(
        rpc,
        service,
        "Params",
        QueryParamsRequestSchema,
        QueryParamsResponseSchema,
      ),
      lockupAccounts: queryFactory(
        rpc,
        service,
        "LockupAccounts",
        QueryLockupAccountsRequestSchema,
        QueryLockupAccountsResponseSchema,
      ),
      lockupAccount: queryFactory(
        rpc,
        service,
        "LockupAccount",
        QueryLockupAccountRequestSchema,
        QueryLockupAccountResponseSchema,
      ),
      spendableAmount: queryFactory(
        rpc,
        service,
        "SpendableAmount",
        QuerySpendableAmountRequestSchema,
        QuerySpendableAmountResponseSchema,
      ),
    },
  };
}
