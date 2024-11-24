// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: sunrise/da/tx.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Params } from "./params";

export const protobufPackage = "sunrise.da";

/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params | undefined;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}

export interface MsgPublishData {
  sender: string;
  metadataUri: string;
  parityShardCount: number;
  shardDoubleHashes: Uint8Array[];
  dataSourceInfo: string;
}

export interface MsgPublishDataResponse {
}

export interface MsgChallengeForFraud {
  sender: string;
  metadataUri: string;
}

export interface MsgChallengeForFraudResponse {
}

export interface MsgSubmitProof {
  sender: string;
  metadataUri: string;
  indices: number[];
  proofs: Uint8Array[];
  isValidData: boolean;
}

export interface MsgSubmitProofResponse {
}

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", params: undefined };
}

export const MsgUpdateParams: MessageFns<MsgUpdateParams> = {
  encode(message: MsgUpdateParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse: MessageFns<MsgUpdateParamsResponse> = {
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

function createBaseMsgPublishData(): MsgPublishData {
  return { sender: "", metadataUri: "", parityShardCount: 0, shardDoubleHashes: [], dataSourceInfo: "" };
}

export const MsgPublishData: MessageFns<MsgPublishData> = {
  encode(message: MsgPublishData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadataUri !== "") {
      writer.uint32(18).string(message.metadataUri);
    }
    if (message.parityShardCount !== 0) {
      writer.uint32(24).uint64(message.parityShardCount);
    }
    for (const v of message.shardDoubleHashes) {
      writer.uint32(34).bytes(v!);
    }
    if (message.dataSourceInfo !== "") {
      writer.uint32(42).string(message.dataSourceInfo);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgPublishData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPublishData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.metadataUri = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 24) {
            break;
          }

          message.parityShardCount = longToNumber(reader.uint64());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.shardDoubleHashes.push(reader.bytes());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.dataSourceInfo = reader.string();
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

  fromJSON(object: any): MsgPublishData {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      metadataUri: isSet(object.metadataUri) ? globalThis.String(object.metadataUri) : "",
      parityShardCount: isSet(object.parityShardCount) ? globalThis.Number(object.parityShardCount) : 0,
      shardDoubleHashes: globalThis.Array.isArray(object?.shardDoubleHashes)
        ? object.shardDoubleHashes.map((e: any) => bytesFromBase64(e))
        : [],
      dataSourceInfo: isSet(object.dataSourceInfo) ? globalThis.String(object.dataSourceInfo) : "",
    };
  },

  toJSON(message: MsgPublishData): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.metadataUri !== "") {
      obj.metadataUri = message.metadataUri;
    }
    if (message.parityShardCount !== 0) {
      obj.parityShardCount = Math.round(message.parityShardCount);
    }
    if (message.shardDoubleHashes?.length) {
      obj.shardDoubleHashes = message.shardDoubleHashes.map((e) => base64FromBytes(e));
    }
    if (message.dataSourceInfo !== "") {
      obj.dataSourceInfo = message.dataSourceInfo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPublishData>, I>>(base?: I): MsgPublishData {
    return MsgPublishData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPublishData>, I>>(object: I): MsgPublishData {
    const message = createBaseMsgPublishData();
    message.sender = object.sender ?? "";
    message.metadataUri = object.metadataUri ?? "";
    message.parityShardCount = object.parityShardCount ?? 0;
    message.shardDoubleHashes = object.shardDoubleHashes?.map((e) => e) || [];
    message.dataSourceInfo = object.dataSourceInfo ?? "";
    return message;
  },
};

function createBaseMsgPublishDataResponse(): MsgPublishDataResponse {
  return {};
}

export const MsgPublishDataResponse: MessageFns<MsgPublishDataResponse> = {
  encode(_: MsgPublishDataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgPublishDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPublishDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgPublishDataResponse {
    return {};
  },

  toJSON(_: MsgPublishDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgPublishDataResponse>, I>>(base?: I): MsgPublishDataResponse {
    return MsgPublishDataResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgPublishDataResponse>, I>>(_: I): MsgPublishDataResponse {
    const message = createBaseMsgPublishDataResponse();
    return message;
  },
};

function createBaseMsgChallengeForFraud(): MsgChallengeForFraud {
  return { sender: "", metadataUri: "" };
}

export const MsgChallengeForFraud: MessageFns<MsgChallengeForFraud> = {
  encode(message: MsgChallengeForFraud, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadataUri !== "") {
      writer.uint32(18).string(message.metadataUri);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeForFraud {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeForFraud();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.metadataUri = reader.string();
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

  fromJSON(object: any): MsgChallengeForFraud {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      metadataUri: isSet(object.metadataUri) ? globalThis.String(object.metadataUri) : "",
    };
  },

  toJSON(message: MsgChallengeForFraud): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.metadataUri !== "") {
      obj.metadataUri = message.metadataUri;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChallengeForFraud>, I>>(base?: I): MsgChallengeForFraud {
    return MsgChallengeForFraud.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgChallengeForFraud>, I>>(object: I): MsgChallengeForFraud {
    const message = createBaseMsgChallengeForFraud();
    message.sender = object.sender ?? "";
    message.metadataUri = object.metadataUri ?? "";
    return message;
  },
};

function createBaseMsgChallengeForFraudResponse(): MsgChallengeForFraudResponse {
  return {};
}

export const MsgChallengeForFraudResponse: MessageFns<MsgChallengeForFraudResponse> = {
  encode(_: MsgChallengeForFraudResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgChallengeForFraudResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeForFraudResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgChallengeForFraudResponse {
    return {};
  },

  toJSON(_: MsgChallengeForFraudResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgChallengeForFraudResponse>, I>>(base?: I): MsgChallengeForFraudResponse {
    return MsgChallengeForFraudResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgChallengeForFraudResponse>, I>>(_: I): MsgChallengeForFraudResponse {
    const message = createBaseMsgChallengeForFraudResponse();
    return message;
  },
};

function createBaseMsgSubmitProof(): MsgSubmitProof {
  return { sender: "", metadataUri: "", indices: [], proofs: [], isValidData: false };
}

export const MsgSubmitProof: MessageFns<MsgSubmitProof> = {
  encode(message: MsgSubmitProof, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadataUri !== "") {
      writer.uint32(18).string(message.metadataUri);
    }
    writer.uint32(26).fork();
    for (const v of message.indices) {
      writer.int64(v);
    }
    writer.join();
    for (const v of message.proofs) {
      writer.uint32(34).bytes(v!);
    }
    if (message.isValidData !== false) {
      writer.uint32(40).bool(message.isValidData);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.metadataUri = reader.string();
          continue;
        }
        case 3: {
          if (tag === 24) {
            message.indices.push(longToNumber(reader.int64()));

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.indices.push(longToNumber(reader.int64()));
            }

            continue;
          }

          break;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.proofs.push(reader.bytes());
          continue;
        }
        case 5: {
          if (tag !== 40) {
            break;
          }

          message.isValidData = reader.bool();
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

  fromJSON(object: any): MsgSubmitProof {
    return {
      sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
      metadataUri: isSet(object.metadataUri) ? globalThis.String(object.metadataUri) : "",
      indices: globalThis.Array.isArray(object?.indices) ? object.indices.map((e: any) => globalThis.Number(e)) : [],
      proofs: globalThis.Array.isArray(object?.proofs) ? object.proofs.map((e: any) => bytesFromBase64(e)) : [],
      isValidData: isSet(object.isValidData) ? globalThis.Boolean(object.isValidData) : false,
    };
  },

  toJSON(message: MsgSubmitProof): unknown {
    const obj: any = {};
    if (message.sender !== "") {
      obj.sender = message.sender;
    }
    if (message.metadataUri !== "") {
      obj.metadataUri = message.metadataUri;
    }
    if (message.indices?.length) {
      obj.indices = message.indices.map((e) => Math.round(e));
    }
    if (message.proofs?.length) {
      obj.proofs = message.proofs.map((e) => base64FromBytes(e));
    }
    if (message.isValidData !== false) {
      obj.isValidData = message.isValidData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitProof>, I>>(base?: I): MsgSubmitProof {
    return MsgSubmitProof.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitProof>, I>>(object: I): MsgSubmitProof {
    const message = createBaseMsgSubmitProof();
    message.sender = object.sender ?? "";
    message.metadataUri = object.metadataUri ?? "";
    message.indices = object.indices?.map((e) => e) || [];
    message.proofs = object.proofs?.map((e) => e) || [];
    message.isValidData = object.isValidData ?? false;
    return message;
  },
};

function createBaseMsgSubmitProofResponse(): MsgSubmitProofResponse {
  return {};
}

export const MsgSubmitProofResponse: MessageFns<MsgSubmitProofResponse> = {
  encode(_: MsgSubmitProofResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProofResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitProofResponse {
    return {};
  },

  toJSON(_: MsgSubmitProofResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSubmitProofResponse>, I>>(base?: I): MsgSubmitProofResponse {
    return MsgSubmitProofResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitProofResponse>, I>>(_: I): MsgSubmitProofResponse {
    const message = createBaseMsgSubmitProofResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  PublishData(request: MsgPublishData): Promise<MsgPublishDataResponse>;
  ChallengeForFraud(request: MsgChallengeForFraud): Promise<MsgChallengeForFraudResponse>;
  SubmitProof(request: MsgSubmitProof): Promise<MsgSubmitProofResponse>;
}

export const MsgServiceName = "sunrise.da.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.PublishData = this.PublishData.bind(this);
    this.ChallengeForFraud = this.ChallengeForFraud.bind(this);
    this.SubmitProof = this.SubmitProof.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }

  PublishData(request: MsgPublishData): Promise<MsgPublishDataResponse> {
    const data = MsgPublishData.encode(request).finish();
    const promise = this.rpc.request(this.service, "PublishData", data);
    return promise.then((data) => MsgPublishDataResponse.decode(new BinaryReader(data)));
  }

  ChallengeForFraud(request: MsgChallengeForFraud): Promise<MsgChallengeForFraudResponse> {
    const data = MsgChallengeForFraud.encode(request).finish();
    const promise = this.rpc.request(this.service, "ChallengeForFraud", data);
    return promise.then((data) => MsgChallengeForFraudResponse.decode(new BinaryReader(data)));
  }

  SubmitProof(request: MsgSubmitProof): Promise<MsgSubmitProofResponse> {
    const data = MsgSubmitProof.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitProof", data);
    return promise.then((data) => MsgSubmitProofResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
