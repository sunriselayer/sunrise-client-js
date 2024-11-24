// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: sunrise/liquidityincentive/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "sunrise.liquidityincentive";

/** Params defines the parameters for the module. */
export interface Params {
  epochBlocks: number;
  stakingRewardRatio: string;
}

function createBaseParams(): Params {
  return { epochBlocks: 0, stakingRewardRatio: "" };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.epochBlocks !== 0) {
      writer.uint32(8).int64(message.epochBlocks);
    }
    if (message.stakingRewardRatio !== "") {
      writer.uint32(18).string(message.stakingRewardRatio);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.epochBlocks = longToNumber(reader.int64());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.stakingRewardRatio = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      epochBlocks: isSet(object.epochBlocks) ? globalThis.Number(object.epochBlocks) : 0,
      stakingRewardRatio: isSet(object.stakingRewardRatio) ? globalThis.String(object.stakingRewardRatio) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.epochBlocks !== 0) {
      obj.epochBlocks = Math.round(message.epochBlocks);
    }
    if (message.stakingRewardRatio !== "") {
      obj.stakingRewardRatio = message.stakingRewardRatio;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.epochBlocks = object.epochBlocks ?? 0;
    message.stakingRewardRatio = object.stakingRewardRatio ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}