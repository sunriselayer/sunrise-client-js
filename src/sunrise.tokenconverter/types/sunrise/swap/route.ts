// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: sunrise/swap/route.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "sunrise.swap";

export interface RoutePool {
  poolId: number;
}

export interface RouteSeries {
  routes: Route[];
}

export interface RouteParallel {
  routes: Route[];
  weights: string[];
}

export interface Route {
  denomIn: string;
  denomOut: string;
  pool?: RoutePool | undefined;
  series?: RouteSeries | undefined;
  parallel?: RouteParallel | undefined;
}

export interface RouteResultPool {
  poolId: number;
}

export interface RouteResultSeries {
  routeResults: RouteResult[];
}

export interface RouteResultParallel {
  routeResults: RouteResult[];
}

export interface RouteResult {
  tokenIn: Coin | undefined;
  tokenOut: Coin | undefined;
  pool?: RouteResultPool | undefined;
  series?: RouteResultSeries | undefined;
  parallel?: RouteResultParallel | undefined;
}

function createBaseRoutePool(): RoutePool {
  return { poolId: 0 };
}

export const RoutePool: MessageFns<RoutePool> = {
  encode(message: RoutePool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RoutePool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoutePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.poolId = longToNumber(reader.uint64());
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

  fromJSON(object: any): RoutePool {
    return { poolId: isSet(object.poolId) ? globalThis.Number(object.poolId) : 0 };
  },

  toJSON(message: RoutePool): unknown {
    const obj: any = {};
    if (message.poolId !== 0) {
      obj.poolId = Math.round(message.poolId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoutePool>, I>>(base?: I): RoutePool {
    return RoutePool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoutePool>, I>>(object: I): RoutePool {
    const message = createBaseRoutePool();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseRouteSeries(): RouteSeries {
  return { routes: [] };
}

export const RouteSeries: MessageFns<RouteSeries> = {
  encode(message: RouteSeries, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.routes) {
      Route.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteSeries {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteSeries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.routes.push(Route.decode(reader, reader.uint32()));
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

  fromJSON(object: any): RouteSeries {
    return { routes: globalThis.Array.isArray(object?.routes) ? object.routes.map((e: any) => Route.fromJSON(e)) : [] };
  },

  toJSON(message: RouteSeries): unknown {
    const obj: any = {};
    if (message.routes?.length) {
      obj.routes = message.routes.map((e) => Route.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteSeries>, I>>(base?: I): RouteSeries {
    return RouteSeries.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteSeries>, I>>(object: I): RouteSeries {
    const message = createBaseRouteSeries();
    message.routes = object.routes?.map((e) => Route.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRouteParallel(): RouteParallel {
  return { routes: [], weights: [] };
}

export const RouteParallel: MessageFns<RouteParallel> = {
  encode(message: RouteParallel, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.routes) {
      Route.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.weights) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteParallel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteParallel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.routes.push(Route.decode(reader, reader.uint32()));
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.weights.push(reader.string());
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

  fromJSON(object: any): RouteParallel {
    return {
      routes: globalThis.Array.isArray(object?.routes) ? object.routes.map((e: any) => Route.fromJSON(e)) : [],
      weights: globalThis.Array.isArray(object?.weights) ? object.weights.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: RouteParallel): unknown {
    const obj: any = {};
    if (message.routes?.length) {
      obj.routes = message.routes.map((e) => Route.toJSON(e));
    }
    if (message.weights?.length) {
      obj.weights = message.weights;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteParallel>, I>>(base?: I): RouteParallel {
    return RouteParallel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteParallel>, I>>(object: I): RouteParallel {
    const message = createBaseRouteParallel();
    message.routes = object.routes?.map((e) => Route.fromPartial(e)) || [];
    message.weights = object.weights?.map((e) => e) || [];
    return message;
  },
};

function createBaseRoute(): Route {
  return { denomIn: "", denomOut: "", pool: undefined, series: undefined, parallel: undefined };
}

export const Route: MessageFns<Route> = {
  encode(message: Route, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.denomIn !== "") {
      writer.uint32(10).string(message.denomIn);
    }
    if (message.denomOut !== "") {
      writer.uint32(18).string(message.denomOut);
    }
    if (message.pool !== undefined) {
      RoutePool.encode(message.pool, writer.uint32(26).fork()).join();
    }
    if (message.series !== undefined) {
      RouteSeries.encode(message.series, writer.uint32(34).fork()).join();
    }
    if (message.parallel !== undefined) {
      RouteParallel.encode(message.parallel, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Route {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.denomIn = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.denomOut = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.pool = RoutePool.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.series = RouteSeries.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.parallel = RouteParallel.decode(reader, reader.uint32());
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

  fromJSON(object: any): Route {
    return {
      denomIn: isSet(object.denomIn) ? globalThis.String(object.denomIn) : "",
      denomOut: isSet(object.denomOut) ? globalThis.String(object.denomOut) : "",
      pool: isSet(object.pool) ? RoutePool.fromJSON(object.pool) : undefined,
      series: isSet(object.series) ? RouteSeries.fromJSON(object.series) : undefined,
      parallel: isSet(object.parallel) ? RouteParallel.fromJSON(object.parallel) : undefined,
    };
  },

  toJSON(message: Route): unknown {
    const obj: any = {};
    if (message.denomIn !== "") {
      obj.denomIn = message.denomIn;
    }
    if (message.denomOut !== "") {
      obj.denomOut = message.denomOut;
    }
    if (message.pool !== undefined) {
      obj.pool = RoutePool.toJSON(message.pool);
    }
    if (message.series !== undefined) {
      obj.series = RouteSeries.toJSON(message.series);
    }
    if (message.parallel !== undefined) {
      obj.parallel = RouteParallel.toJSON(message.parallel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Route>, I>>(base?: I): Route {
    return Route.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Route>, I>>(object: I): Route {
    const message = createBaseRoute();
    message.denomIn = object.denomIn ?? "";
    message.denomOut = object.denomOut ?? "";
    message.pool = (object.pool !== undefined && object.pool !== null) ? RoutePool.fromPartial(object.pool) : undefined;
    message.series = (object.series !== undefined && object.series !== null)
      ? RouteSeries.fromPartial(object.series)
      : undefined;
    message.parallel = (object.parallel !== undefined && object.parallel !== null)
      ? RouteParallel.fromPartial(object.parallel)
      : undefined;
    return message;
  },
};

function createBaseRouteResultPool(): RouteResultPool {
  return { poolId: 0 };
}

export const RouteResultPool: MessageFns<RouteResultPool> = {
  encode(message: RouteResultPool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteResultPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteResultPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.poolId = longToNumber(reader.uint64());
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

  fromJSON(object: any): RouteResultPool {
    return { poolId: isSet(object.poolId) ? globalThis.Number(object.poolId) : 0 };
  },

  toJSON(message: RouteResultPool): unknown {
    const obj: any = {};
    if (message.poolId !== 0) {
      obj.poolId = Math.round(message.poolId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteResultPool>, I>>(base?: I): RouteResultPool {
    return RouteResultPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteResultPool>, I>>(object: I): RouteResultPool {
    const message = createBaseRouteResultPool();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseRouteResultSeries(): RouteResultSeries {
  return { routeResults: [] };
}

export const RouteResultSeries: MessageFns<RouteResultSeries> = {
  encode(message: RouteResultSeries, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.routeResults) {
      RouteResult.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteResultSeries {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteResultSeries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.routeResults.push(RouteResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): RouteResultSeries {
    return {
      routeResults: globalThis.Array.isArray(object?.routeResults)
        ? object.routeResults.map((e: any) => RouteResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RouteResultSeries): unknown {
    const obj: any = {};
    if (message.routeResults?.length) {
      obj.routeResults = message.routeResults.map((e) => RouteResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteResultSeries>, I>>(base?: I): RouteResultSeries {
    return RouteResultSeries.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteResultSeries>, I>>(object: I): RouteResultSeries {
    const message = createBaseRouteResultSeries();
    message.routeResults = object.routeResults?.map((e) => RouteResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRouteResultParallel(): RouteResultParallel {
  return { routeResults: [] };
}

export const RouteResultParallel: MessageFns<RouteResultParallel> = {
  encode(message: RouteResultParallel, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.routeResults) {
      RouteResult.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteResultParallel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteResultParallel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.routeResults.push(RouteResult.decode(reader, reader.uint32()));
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

  fromJSON(object: any): RouteResultParallel {
    return {
      routeResults: globalThis.Array.isArray(object?.routeResults)
        ? object.routeResults.map((e: any) => RouteResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RouteResultParallel): unknown {
    const obj: any = {};
    if (message.routeResults?.length) {
      obj.routeResults = message.routeResults.map((e) => RouteResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteResultParallel>, I>>(base?: I): RouteResultParallel {
    return RouteResultParallel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteResultParallel>, I>>(object: I): RouteResultParallel {
    const message = createBaseRouteResultParallel();
    message.routeResults = object.routeResults?.map((e) => RouteResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRouteResult(): RouteResult {
  return { tokenIn: undefined, tokenOut: undefined, pool: undefined, series: undefined, parallel: undefined };
}

export const RouteResult: MessageFns<RouteResult> = {
  encode(message: RouteResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.tokenIn !== undefined) {
      Coin.encode(message.tokenIn, writer.uint32(10).fork()).join();
    }
    if (message.tokenOut !== undefined) {
      Coin.encode(message.tokenOut, writer.uint32(18).fork()).join();
    }
    if (message.pool !== undefined) {
      RouteResultPool.encode(message.pool, writer.uint32(26).fork()).join();
    }
    if (message.series !== undefined) {
      RouteResultSeries.encode(message.series, writer.uint32(34).fork()).join();
    }
    if (message.parallel !== undefined) {
      RouteResultParallel.encode(message.parallel, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RouteResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.tokenIn = Coin.decode(reader, reader.uint32());
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.tokenOut = Coin.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.pool = RouteResultPool.decode(reader, reader.uint32());
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.series = RouteResultSeries.decode(reader, reader.uint32());
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.parallel = RouteResultParallel.decode(reader, reader.uint32());
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

  fromJSON(object: any): RouteResult {
    return {
      tokenIn: isSet(object.tokenIn) ? Coin.fromJSON(object.tokenIn) : undefined,
      tokenOut: isSet(object.tokenOut) ? Coin.fromJSON(object.tokenOut) : undefined,
      pool: isSet(object.pool) ? RouteResultPool.fromJSON(object.pool) : undefined,
      series: isSet(object.series) ? RouteResultSeries.fromJSON(object.series) : undefined,
      parallel: isSet(object.parallel) ? RouteResultParallel.fromJSON(object.parallel) : undefined,
    };
  },

  toJSON(message: RouteResult): unknown {
    const obj: any = {};
    if (message.tokenIn !== undefined) {
      obj.tokenIn = Coin.toJSON(message.tokenIn);
    }
    if (message.tokenOut !== undefined) {
      obj.tokenOut = Coin.toJSON(message.tokenOut);
    }
    if (message.pool !== undefined) {
      obj.pool = RouteResultPool.toJSON(message.pool);
    }
    if (message.series !== undefined) {
      obj.series = RouteResultSeries.toJSON(message.series);
    }
    if (message.parallel !== undefined) {
      obj.parallel = RouteResultParallel.toJSON(message.parallel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RouteResult>, I>>(base?: I): RouteResult {
    return RouteResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RouteResult>, I>>(object: I): RouteResult {
    const message = createBaseRouteResult();
    message.tokenIn = (object.tokenIn !== undefined && object.tokenIn !== null)
      ? Coin.fromPartial(object.tokenIn)
      : undefined;
    message.tokenOut = (object.tokenOut !== undefined && object.tokenOut !== null)
      ? Coin.fromPartial(object.tokenOut)
      : undefined;
    message.pool = (object.pool !== undefined && object.pool !== null)
      ? RouteResultPool.fromPartial(object.pool)
      : undefined;
    message.series = (object.series !== undefined && object.series !== null)
      ? RouteResultSeries.fromPartial(object.series)
      : undefined;
    message.parallel = (object.parallel !== undefined && object.parallel !== null)
      ? RouteResultParallel.fromPartial(object.parallel)
      : undefined;
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