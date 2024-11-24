// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: sunrise/tokenconverter/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "sunrise.tokenconverter";

/** Params defines the parameters for the module. */
export interface Params {
  bondDenom: string;
  feeDenom: string;
  maxSupplyFee: string;
}

function createBaseParams(): Params {
  return { bondDenom: "", feeDenom: "", maxSupplyFee: "" };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.bondDenom !== "") {
      writer.uint32(10).string(message.bondDenom);
    }
    if (message.feeDenom !== "") {
      writer.uint32(18).string(message.feeDenom);
    }
    if (message.maxSupplyFee !== "") {
      writer.uint32(26).string(message.maxSupplyFee);
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
          if (tag !== 10) {
            break;
          }

          message.bondDenom = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.feeDenom = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.maxSupplyFee = reader.string();
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
      bondDenom: isSet(object.bondDenom) ? globalThis.String(object.bondDenom) : "",
      feeDenom: isSet(object.feeDenom) ? globalThis.String(object.feeDenom) : "",
      maxSupplyFee: isSet(object.maxSupplyFee) ? globalThis.String(object.maxSupplyFee) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.bondDenom !== "") {
      obj.bondDenom = message.bondDenom;
    }
    if (message.feeDenom !== "") {
      obj.feeDenom = message.feeDenom;
    }
    if (message.maxSupplyFee !== "") {
      obj.maxSupplyFee = message.maxSupplyFee;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.bondDenom = object.bondDenom ?? "";
    message.feeDenom = object.feeDenom ?? "";
    message.maxSupplyFee = object.maxSupplyFee ?? "";
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