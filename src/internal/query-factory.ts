import { create, fromBinary, Message, MessageInitShape, toBinary } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { ProtobufRpcClient } from "@cosmjs/stargate";

export function queryFactory<Req extends Message, Res extends Message>(
  rpc: ProtobufRpcClient,
  service: string,
  method: string,
  reqSchema: GenMessage<Req>,
  resSchema: GenMessage<Res>,
): (req: MessageInitShape<GenMessage<Req>>) => Promise<Res> {
  return async (req) => {
    const reqBinary = toBinary(reqSchema, create(reqSchema, req));
    const resBinary = await rpc.request(service, method, reqBinary);
    const res = fromBinary(resSchema, resBinary);

    return res;
  };
}
