import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
    QueryParamsRequestSchema,
    QueryParamsResponseSchema,
} from "../types/sunrise/stable";

export type StableExtension = ReturnType<typeof setupStableExtension>;

export function setupStableExtension(base: QueryClient) {
    const rpc = createProtobufRpcClient(base);
    const service = "sunrise.stable.v1.Query";

    return {
        stable: {
            params: queryFactory(
                rpc,
                service,
                "Params",
                QueryParamsRequestSchema,
                QueryParamsResponseSchema,
            ),
        },
    };
}
