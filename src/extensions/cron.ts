// This file provides a client extension for interacting with the cron module.
// It includes methods for querying cron parameters and schedules.
// The main functionality is exposed through the setupCronExtension function.

import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
    QueryParamsRequestSchema,
    QueryParamsResponseSchema,
    QueryGetScheduleRequestSchema,
    QueryGetScheduleResponseSchema,
    QuerySchedulesRequestSchema,
    QuerySchedulesResponseSchema,
} from "../types/sunrise/cron";

export type CronExtension = ReturnType<typeof setupCronExtension>;

export function setupCronExtension(base: QueryClient) {
    const rpc = createProtobufRpcClient(base);
    const service = "sunrise.cron.v1.Query";

    return {
        cron: {
            params: queryFactory(
                rpc,
                service,
                "Params",
                QueryParamsRequestSchema,
                QueryParamsResponseSchema
            ),
            schedule: queryFactory(
                rpc,
                service,
                "Schedule",
                QueryGetScheduleRequestSchema,
                QueryGetScheduleResponseSchema
            ),
            schedules: queryFactory(
                rpc,
                service,
                "Schedules",
                QuerySchedulesRequestSchema,
                QuerySchedulesResponseSchema
            ),
        },
    };
}
