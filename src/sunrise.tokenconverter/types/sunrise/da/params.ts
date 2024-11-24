// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: sunrise/da/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "sunrise.da";

/** Params defines the parameters for the module. */
export interface Params {
  voteThreshold: string;
  slashEpoch: number;
  epochMaxFault: number;
  slashFraction: string;
  replicationFactor: string;
  minShardCount: number;
  maxShardCount: number;
  maxShardSize: number;
  challengePeriod: Duration | undefined;
  proofPeriod: Duration | undefined;
  challengeCollateral: Coin[];
  zkpProvingKey: Uint8Array;
  zkpVerifyingKey: Uint8Array;
}

function createBaseParams(): Params {
  return {
    voteThreshold: "",
    slashEpoch: 0,
    epochMaxFault: 0,
    slashFraction: "",
    replicationFactor: "",
    minShardCount: 0,
    maxShardCount: 0,
    maxShardSize: 0,
    challengePeriod: undefined,
    proofPeriod: undefined,
    challengeCollateral: [],
    zkpProvingKey: new Uint8Array(0),
    zkpVerifyingKey: new Uint8Array(0),
  };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.voteThreshold !== "") {
      writer.uint32(10).string(message.voteThreshold);
    }
    if (message.slashEpoch !== 0) {
      writer.uint32(16).uint64(message.slashEpoch);
    }
    if (message.epochMaxFault !== 0) {
      writer.uint32(24).uint64(message.epochMaxFault);
    }
    if (message.slashFraction !== "") {
      writer.uint32(34).string(message.slashFraction);
    }
    if (message.replicationFactor !== "") {
      writer.uint32(42).string(message.replicationFactor);
    }
    if (message.minShardCount !== 0) {
      writer.uint32(48).uint64(message.minShardCount);
    }
    if (message.maxShardCount !== 0) {
      writer.uint32(56).uint64(message.maxShardCount);
    }
    if (message.maxShardSize !== 0) {
      writer.uint32(64).uint64(message.maxShardSize);
    }
    if (message.challengePeriod !== undefined) {
      Duration.encode(message.challengePeriod, writer.uint32(74).fork()).join();
    }
    if (message.proofPeriod !== undefined) {
      Duration.encode(message.proofPeriod, writer.uint32(82).fork()).join();
    }
    for (const v of message.challengeCollateral) {
      Coin.encode(v!, writer.uint32(90).fork()).join();
    }
    if (message.zkpProvingKey.length !== 0) {
      writer.uint32(98).bytes(message.zkpProvingKey);
    }
    if (message.zkpVerifyingKey.length !== 0) {
      writer.uint32(106).bytes(message.zkpVerifyingKey);
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

          message.voteThreshold = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.slashEpoch = longToNumber(reader.uint64());
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.epochMaxFault = longToNumber(reader.uint64());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.slashFraction = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.replicationFactor = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.minShardCount = longToNumber(reader.uint64());
          continue;
        }
        case 7: {
          if (tag !== 56) {
            break;
          }

          message.maxShardCount = longToNumber(reader.uint64());
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.maxShardSize = longToNumber(reader.uint64());
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.challengePeriod = Duration.decode(reader, reader.uint32());
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.proofPeriod = Duration.decode(reader, reader.uint32());
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.challengeCollateral.push(Coin.decode(reader, reader.uint32()));
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.zkpProvingKey = reader.bytes();
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.zkpVerifyingKey = reader.bytes();
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
      voteThreshold: isSet(object.voteThreshold) ? globalThis.String(object.voteThreshold) : "",
      slashEpoch: isSet(object.slashEpoch) ? globalThis.Number(object.slashEpoch) : 0,
      epochMaxFault: isSet(object.epochMaxFault) ? globalThis.Number(object.epochMaxFault) : 0,
      slashFraction: isSet(object.slashFraction) ? globalThis.String(object.slashFraction) : "",
      replicationFactor: isSet(object.replicationFactor) ? globalThis.String(object.replicationFactor) : "",
      minShardCount: isSet(object.minShardCount) ? globalThis.Number(object.minShardCount) : 0,
      maxShardCount: isSet(object.maxShardCount) ? globalThis.Number(object.maxShardCount) : 0,
      maxShardSize: isSet(object.maxShardSize) ? globalThis.Number(object.maxShardSize) : 0,
      challengePeriod: isSet(object.challengePeriod) ? Duration.fromJSON(object.challengePeriod) : undefined,
      proofPeriod: isSet(object.proofPeriod) ? Duration.fromJSON(object.proofPeriod) : undefined,
      challengeCollateral: globalThis.Array.isArray(object?.challengeCollateral)
        ? object.challengeCollateral.map((e: any) => Coin.fromJSON(e))
        : [],
      zkpProvingKey: isSet(object.zkpProvingKey) ? bytesFromBase64(object.zkpProvingKey) : new Uint8Array(0),
      zkpVerifyingKey: isSet(object.zkpVerifyingKey) ? bytesFromBase64(object.zkpVerifyingKey) : new Uint8Array(0),
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.voteThreshold !== "") {
      obj.voteThreshold = message.voteThreshold;
    }
    if (message.slashEpoch !== 0) {
      obj.slashEpoch = Math.round(message.slashEpoch);
    }
    if (message.epochMaxFault !== 0) {
      obj.epochMaxFault = Math.round(message.epochMaxFault);
    }
    if (message.slashFraction !== "") {
      obj.slashFraction = message.slashFraction;
    }
    if (message.replicationFactor !== "") {
      obj.replicationFactor = message.replicationFactor;
    }
    if (message.minShardCount !== 0) {
      obj.minShardCount = Math.round(message.minShardCount);
    }
    if (message.maxShardCount !== 0) {
      obj.maxShardCount = Math.round(message.maxShardCount);
    }
    if (message.maxShardSize !== 0) {
      obj.maxShardSize = Math.round(message.maxShardSize);
    }
    if (message.challengePeriod !== undefined) {
      obj.challengePeriod = Duration.toJSON(message.challengePeriod);
    }
    if (message.proofPeriod !== undefined) {
      obj.proofPeriod = Duration.toJSON(message.proofPeriod);
    }
    if (message.challengeCollateral?.length) {
      obj.challengeCollateral = message.challengeCollateral.map((e) => Coin.toJSON(e));
    }
    if (message.zkpProvingKey.length !== 0) {
      obj.zkpProvingKey = base64FromBytes(message.zkpProvingKey);
    }
    if (message.zkpVerifyingKey.length !== 0) {
      obj.zkpVerifyingKey = base64FromBytes(message.zkpVerifyingKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.voteThreshold = object.voteThreshold ?? "";
    message.slashEpoch = object.slashEpoch ?? 0;
    message.epochMaxFault = object.epochMaxFault ?? 0;
    message.slashFraction = object.slashFraction ?? "";
    message.replicationFactor = object.replicationFactor ?? "";
    message.minShardCount = object.minShardCount ?? 0;
    message.maxShardCount = object.maxShardCount ?? 0;
    message.maxShardSize = object.maxShardSize ?? 0;
    message.challengePeriod = (object.challengePeriod !== undefined && object.challengePeriod !== null)
      ? Duration.fromPartial(object.challengePeriod)
      : undefined;
    message.proofPeriod = (object.proofPeriod !== undefined && object.proofPeriod !== null)
      ? Duration.fromPartial(object.proofPeriod)
      : undefined;
    message.challengeCollateral = object.challengeCollateral?.map((e) => Coin.fromPartial(e)) || [];
    message.zkpProvingKey = object.zkpProvingKey ?? new Uint8Array(0);
    message.zkpVerifyingKey = object.zkpVerifyingKey ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
