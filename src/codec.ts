import { Message, MessageInitShape } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { Registry } from "@cosmjs/proto-signing";
import type { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";

import { convertBufProtocGenEsTypeToPbJsType } from "./internal/registry-adapter";
import { getTypeUrl } from "./internal/type-url";
import * as da from "./types/sunrise/da";
import * as fee from "./types/sunrise/fee";
import * as liquidityincentive from "./types/sunrise/liquidityincentive";
import * as liquiditypool from "./types/sunrise/liquiditypool";
import * as swap from "./types/sunrise/swap";
import * as tokenconverter from "./types/sunrise/tokenconverter";

const schemas: GenMessage<Message>[] = [
  da.MetadataSchema,
  da.ParamsSchema,
  da.MsgUpdateParamsSchema,
  da.MsgPublishDataSchema,
  da.MsgChallengeForFraudSchema,
  da.MsgSubmitProofSchema,
  fee.ParamsSchema,
  fee.MsgUpdateParamsSchema,
  liquidityincentive.ParamsSchema,
  liquidityincentive.MsgUpdateParamsSchema,
  liquidityincentive.MsgVoteGaugeSchema,
  liquidityincentive.MsgCollectVoteRewardsSchema,
  liquiditypool.ParamsSchema,
  liquiditypool.MsgUpdateParamsSchema,
  liquiditypool.MsgCreatePoolSchema,
  liquiditypool.MsgCreatePositionSchema,
  liquiditypool.MsgIncreaseLiquiditySchema,
  liquiditypool.MsgDecreaseLiquiditySchema,
  liquiditypool.MsgClaimRewardsSchema,
  swap.ParamsSchema,
  swap.MsgUpdateParamsSchema,
  swap.MsgSwapExactAmountInSchema,
  swap.MsgSwapExactAmountOutSchema,
  tokenconverter.ParamsSchema,
  tokenconverter.MsgUpdateParamsSchema,
  tokenconverter.MsgConvertSchema,
];

export const sunriseTypesRegistry = new Registry([
  ...defaultRegistryTypes,
  ...schemas.map<[string, GeneratedType]>((schema) => [
    getTypeUrl(schema),
    new convertBufProtocGenEsTypeToPbJsType(schema),
  ]),
]);

export function createEncodeObject<T extends Message>(
  schema: GenMessage<T>,
  value: MessageInitShape<GenMessage<T>>,
): EncodeObject {
  return {
    typeUrl: getTypeUrl(schema),
    value,
  };
}
