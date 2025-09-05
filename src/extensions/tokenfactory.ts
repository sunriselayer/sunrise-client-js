// This file provides a client extension for interacting with the tokenfactory module.
// It includes methods for querying tokenfactory parameters, denom authority metadata, and denoms from a creator.
// The main functionality is exposed through the setupTokenFactoryExtension function.

import { createProtobufRpcClient, QueryClient } from "@cosmjs/stargate";

import { queryFactory } from "../internal/query-factory";
import {
    QueryParamsRequestSchema,
    QueryParamsResponseSchema,
    QueryDenomAuthorityMetadataRequestSchema,
    QueryDenomAuthorityMetadataResponseSchema,
    QueryDenomsFromCreatorRequestSchema,
    QueryDenomsFromCreatorResponseSchema,
} from "../types/sunrise/tokenfactory";

export type TokenFactoryExtension = ReturnType<
    typeof setupTokenFactoryExtension
>;

export function setupTokenFactoryExtension(base: QueryClient) {
    const rpc = createProtobufRpcClient(base);
    const service = "sunrise.tokenfactory.v1.Query";

    return {
        tokenfactory: {
            params: queryFactory(
                rpc,
                service,
                "Params",
                QueryParamsRequestSchema,
                QueryParamsResponseSchema
            ),
            denomAuthorityMetadata: queryFactory(
                rpc,
                service,
                "DenomAuthorityMetadata",
                QueryDenomAuthorityMetadataRequestSchema,
                QueryDenomAuthorityMetadataResponseSchema
            ),
            denomsFromCreator: queryFactory(
                rpc,
                service,
                "DenomsFromCreator",
                QueryDenomsFromCreatorRequestSchema,
                QueryDenomsFromCreatorResponseSchema
            ),
        },
    };
}
