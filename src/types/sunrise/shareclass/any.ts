import { create, Message, MessageInitShape, toBinary } from "@bufbuild/protobuf";
import { GenMessage } from "@bufbuild/protobuf/codegenv1";
import { Any, AnySchema } from "@bufbuild/protobuf/wkt";

export function packAny<T extends Message>(
  schema: GenMessage<T>,
  message: MessageInitShape<GenMessage<T>>,
): Any {
  return create(AnySchema, {
    typeUrl: `/${schema.typeName}`,
    value: toBinary(schema, create(schema, message)),
  });
}
