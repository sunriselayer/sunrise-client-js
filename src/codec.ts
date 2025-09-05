import { create, Message, MessageInitShape } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { Any } from "@bufbuild/protobuf/wkt";
import { Registry } from "@cosmjs/proto-signing";
import type { EncodeObject, GeneratedType } from "@cosmjs/proto-signing";
import { AminoTypes, createDefaultAminoConverters } from "@cosmjs/stargate";
import { defaultRegistryTypes } from "@cosmjs/stargate";

import * as amino from "./amino";
import { convertBufProtocGenEsTypeToPbJsType } from "./internal/registry-adapter";
import { getTypeUrl, packAny } from "./internal/type-url";

import * as bank from "./types/cosmos/bank";
import * as slashing from "./types/cosmos/slashing";
import * as upgrade from "./types/cosmos/upgrade";

import * as da from "./types/sunrise/da";
import * as fee from "./types/sunrise/fee";
import * as liquidityincentive from "./types/sunrise/liquidityincentive";
import * as liquiditypool from "./types/sunrise/liquiditypool";
import * as lockup from "./types/sunrise/lockup";
import * as shareclass from "./types/sunrise/shareclass";
import * as stable from "./types/sunrise/stable";
import * as swap from "./types/sunrise/swap";
import * as tokenconverter from "./types/sunrise/tokenconverter";

const schemas: GenMessage<Message>[] = [
  // sunrise
  da.ParamsSchema,
  da.MsgUpdateParamsSchema,
  da.MsgPublishDataSchema,
  da.MsgSubmitValidityProofSchema,
  da.MsgSubmitInvaliditySchema,
  da.MsgRegisterProofDeputySchema,
  da.MsgUnregisterProofDeputySchema,
  fee.ParamsSchema,
  fee.MsgUpdateParamsSchema,
  liquidityincentive.ParamsSchema,
  liquidityincentive.MsgUpdateParamsSchema,
  liquidityincentive.MsgStartNewEpochSchema,
  liquidityincentive.MsgVoteGaugeSchema,
  liquidityincentive.MsgRegisterBribeSchema,
  liquidityincentive.MsgClaimBribesSchema,
  liquiditypool.ParamsSchema,
  liquiditypool.MsgUpdateParamsSchema,
  liquiditypool.MsgCreatePoolSchema,
  liquiditypool.MsgCreatePositionSchema,
  liquiditypool.MsgIncreaseLiquiditySchema,
  liquiditypool.MsgDecreaseLiquiditySchema,
  liquiditypool.MsgClaimRewardsSchema,
  lockup.ParamsSchema,
  lockup.MsgUpdateParamsSchema,
  lockup.MsgInitLockupAccountSchema,
  lockup.MsgNonVotingDelegateSchema,
  lockup.MsgNonVotingUndelegateSchema,
  lockup.MsgClaimRewardsSchema,
  lockup.MsgSendSchema,
  shareclass.ParamsSchema,
  shareclass.MsgUpdateParamsSchema,
  shareclass.MsgNonVotingDelegateSchema,
  shareclass.MsgNonVotingUndelegateSchema,
  shareclass.MsgClaimRewardsSchema,
  shareclass.MsgCreateValidatorSchema,
  stable.ParamsSchema,
  stable.MsgUpdateParamsSchema,
  stable.MsgMintSchema,
  stable.MsgBurnSchema,
  swap.ParamsSchema,
  swap.MsgUpdateParamsSchema,
  swap.MsgSwapExactAmountInSchema,
  swap.MsgSwapExactAmountOutSchema,
  tokenconverter.ParamsSchema,
  tokenconverter.MsgUpdateParamsSchema,
  tokenconverter.MsgConvertSchema,
  tokenconverter.MsgSendSchema,
  // x/gov already included in cosmjs
  bank.MsgSetSendEnabledSchema,
  slashing.MsgUpdateParamsSchema,
  slashing.MsgUnjailSchema,
  upgrade.MsgSoftwareUpgradeSchema,
  upgrade.MsgCancelUpgradeSchema,
];

export const sunriseTypesRegistry = new Registry([
  ...defaultRegistryTypes,
  ...schemas.map<[string, GeneratedType]>((schema) => [
    getTypeUrl(schema),
    new convertBufProtocGenEsTypeToPbJsType(schema),
  ]),
]);

export const sunriseAminoTypes = new AminoTypes({
  ...createDefaultAminoConverters(),
  ...amino.da.createDaAminoConverters(),
  ...amino.liquidityincentive.createLiquidityincentiveAminoConverters(),
  ...amino.liquiditypool.createLiquiditypoolAminoConverters(),
  ...amino.lockup.createLockupAminoConverters(),
  ...amino.shareclass.createShareclassAminoConverters(),
  ...amino.stable.createStableAminoConverters(),
  ...amino.swap.createSwapAminoConverters(),
  ...amino.tokenconverter.createTokenconverterAminoConverters(),
});

export function createEncodeObject<T extends Message>(
  schema: GenMessage<T>,
  value: MessageInitShape<GenMessage<T>>,
): EncodeObject {
  return {
    typeUrl: getTypeUrl(schema),
    value,
  };
}

export function createAnyMessage<T extends Message>(
  schema: GenMessage<T>,
  value: MessageInitShape<GenMessage<T>>,
): Any {
  const msg = create(schema, value);
  return packAny(schema, msg);
}

export function decodeAnyMessage(message: Any) {
  const msg = sunriseTypesRegistry.decode(message);
  return msg;
}
