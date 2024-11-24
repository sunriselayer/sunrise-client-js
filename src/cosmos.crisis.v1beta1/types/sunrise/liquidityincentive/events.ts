// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: sunrise/liquidityincentive/events.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PoolWeight } from "./gauge";

export const protobufPackage = "sunrise.liquidityincentive";

export interface EventSetVote {
  address: string;
  weights: PoolWeight[];
}

function createBaseEventSetVote(): EventSetVote {
  return { address: "", weights: [] };
}

export const EventSetVote: MessageFns<EventSetVote> = {
  encode(message: EventSetVote, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.weights) {
      PoolWeight.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): EventSetVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.weights.push(PoolWeight.decode(reader, reader.uint32()));
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

  fromJSON(object: any): EventSetVote {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      weights: globalThis.Array.isArray(object?.weights) ? object.weights.map((e: any) => PoolWeight.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventSetVote): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.weights?.length) {
      obj.weights = message.weights.map((e) => PoolWeight.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EventSetVote>, I>>(base?: I): EventSetVote {
    return EventSetVote.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EventSetVote>, I>>(object: I): EventSetVote {
    const message = createBaseEventSetVote();
    message.address = object.address ?? "";
    message.weights = object.weights?.map((e) => PoolWeight.fromPartial(e)) || [];
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
