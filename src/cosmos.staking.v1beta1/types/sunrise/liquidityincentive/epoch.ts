// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: sunrise/liquidityincentive/epoch.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Gauge } from "./gauge";

export const protobufPackage = "sunrise.liquidityincentive";

export interface Epoch {
  id: number;
  startBlock: number;
  endBlock: number;
  gauges: Gauge[];
}

function createBaseEpoch(): Epoch {
  return { id: 0, startBlock: 0, endBlock: 0, gauges: [] };
}

export const Epoch: MessageFns<Epoch> = {
  encode(message: Epoch, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.startBlock !== 0) {
      writer.uint32(16).int64(message.startBlock);
    }
    if (message.endBlock !== 0) {
      writer.uint32(24).int64(message.endBlock);
    }
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Epoch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.id = longToNumber(reader.uint64());
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.startBlock = longToNumber(reader.int64());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.endBlock = longToNumber(reader.int64());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.gauges.push(Gauge.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Epoch {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      startBlock: isSet(object.startBlock) ? globalThis.Number(object.startBlock) : 0,
      endBlock: isSet(object.endBlock) ? globalThis.Number(object.endBlock) : 0,
      gauges: globalThis.Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : [],
    };
  },

  toJSON(message: Epoch): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.startBlock !== 0) {
      obj.startBlock = Math.round(message.startBlock);
    }
    if (message.endBlock !== 0) {
      obj.endBlock = Math.round(message.endBlock);
    }
    if (message.gauges?.length) {
      obj.gauges = message.gauges.map((e) => Gauge.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Epoch>, I>>(base?: I): Epoch {
    return Epoch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Epoch>, I>>(object: I): Epoch {
    const message = createBaseEpoch();
    message.id = object.id ?? 0;
    message.startBlock = object.startBlock ?? 0;
    message.endBlock = object.endBlock ?? 0;
    message.gauges = object.gauges?.map((e) => Gauge.fromPartial(e)) || [];
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
