// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file sunrise/lockup/v1/lockup_account.proto (package sunrise.lockup.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_amino_amino } from "../../../amino/amino_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file sunrise/lockup/v1/lockup_account.proto.
 */
export const file_sunrise_lockup_v1_lockup_account: GenFile = /*@__PURE__*/
  fileDesc("CiZzdW5yaXNlL2xvY2t1cC92MS9sb2NrdXBfYWNjb3VudC5wcm90bxIRc3VucmlzZS5sb2NrdXAudjEi9gMKDUxvY2t1cEFjY291bnQSKQoHYWRkcmVzcxgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEicKBW93bmVyGAIgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmcSEQoCaWQYAyABKARCBajnsCoBEhIKCnN0YXJ0X3RpbWUYBCABKAMSEAoIZW5kX3RpbWUYBSABKAMSRQoQb3JpZ2luYWxfbG9ja2luZxgGIAEoCUIryN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludBJDCg5kZWxlZ2F0ZWRfZnJlZRgHIAEoCUIryN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludBJGChFkZWxlZ2F0ZWRfbG9ja2luZxgIIAEoCUIryN4fANreHxVjb3Ntb3NzZGsuaW8vbWF0aC5JbnTStC0KY29zbW9zLkludBI7Cg51bmJvbmRfZW50cmllcxgJIAEoCzIjLnN1bnJpc2UubG9ja3VwLnYxLlVuYm9uZGluZ0VudHJpZXMSRwoSYWRkaXRpb25hbF9sb2NraW5nGAogASgJQivI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50IkYKEFVuYm9uZGluZ0VudHJpZXMSMgoHZW50cmllcxgBIAMoCzIhLnN1bnJpc2UubG9ja3VwLnYxLlVuYm9uZGluZ0VudHJ5IrYBCg5VbmJvbmRpbmdFbnRyeRIXCg9jcmVhdGlvbl9oZWlnaHQYASABKAMSEAoIZW5kX3RpbWUYAiABKAMSOwoGYW1vdW50GAMgASgJQivI3h8A2t4fFWNvc21vc3Nkay5pby9tYXRoLkludNK0LQpjb3Ntb3MuSW50EjwKEXZhbGlkYXRvcl9hZGRyZXNzGAQgASgJQiHStC0dY29zbW9zLlZhbGlkYXRvckFkZHJlc3NTdHJpbmdCwQEKFWNvbS5zdW5yaXNlLmxvY2t1cC52MUISTG9ja3VwQWNjb3VudFByb3RvUAFaLmdpdGh1Yi5jb20vc3VucmlzZWxheWVyL3N1bnJpc2UveC9sb2NrdXAvdHlwZXOiAgNTTFiqAhFTdW5yaXNlLkxvY2t1cC5WMcoCEVN1bnJpc2VcTG9ja3VwXFYx4gIdU3VucmlzZVxMb2NrdXBcVjFcR1BCTWV0YWRhdGHqAhNTdW5yaXNlOjpMb2NrdXA6OlYxYgZwcm90bzM", [file_amino_amino, file_cosmos_proto_cosmos, file_gogoproto_gogo]);

/**
 * LockupAccount defines the lockup account.
 *
 * @generated from message sunrise.lockup.v1.LockupAccount
 */
export type LockupAccount = Message<"sunrise.lockup.v1.LockupAccount"> & {
  /**
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * @generated from field: string owner = 2;
   */
  owner: string;

  /**
   * @generated from field: uint64 id = 3;
   */
  id: bigint;

  /**
   * @generated from field: int64 start_time = 4;
   */
  startTime: bigint;

  /**
   * @generated from field: int64 end_time = 5;
   */
  endTime: bigint;

  /**
   * @generated from field: string original_locking = 6;
   */
  originalLocking: string;

  /**
   * @generated from field: string delegated_free = 7;
   */
  delegatedFree: string;

  /**
   * @generated from field: string delegated_locking = 8;
   */
  delegatedLocking: string;

  /**
   * @generated from field: sunrise.lockup.v1.UnbondingEntries unbond_entries = 9;
   */
  unbondEntries?: UnbondingEntries;

  /**
   * @generated from field: string additional_locking = 10;
   */
  additionalLocking: string;
};

/**
 * Describes the message sunrise.lockup.v1.LockupAccount.
 * Use `create(LockupAccountSchema)` to create a new message.
 */
export const LockupAccountSchema: GenMessage<LockupAccount> = /*@__PURE__*/
  messageDesc(file_sunrise_lockup_v1_lockup_account, 0);

/**
 * UnbondingEntries list of elements
 *
 * @generated from message sunrise.lockup.v1.UnbondingEntries
 */
export type UnbondingEntries = Message<"sunrise.lockup.v1.UnbondingEntries"> & {
  /**
   * @generated from field: repeated sunrise.lockup.v1.UnbondingEntry entries = 1;
   */
  entries: UnbondingEntry[];
};

/**
 * Describes the message sunrise.lockup.v1.UnbondingEntries.
 * Use `create(UnbondingEntriesSchema)` to create a new message.
 */
export const UnbondingEntriesSchema: GenMessage<UnbondingEntries> = /*@__PURE__*/
  messageDesc(file_sunrise_lockup_v1_lockup_account, 1);

/**
 * UnbondingEntry defines an entry tracking the lockup account unbonding operation.
 *
 * @generated from message sunrise.lockup.v1.UnbondingEntry
 */
export type UnbondingEntry = Message<"sunrise.lockup.v1.UnbondingEntry"> & {
  /**
   * @generated from field: int64 creation_height = 1;
   */
  creationHeight: bigint;

  /**
   * end time of entry
   *
   * @generated from field: int64 end_time = 2;
   */
  endTime: bigint;

  /**
   * unbond amount
   *
   * @generated from field: string amount = 3;
   */
  amount: string;

  /**
   * validator address
   *
   * @generated from field: string validator_address = 4;
   */
  validatorAddress: string;
};

/**
 * Describes the message sunrise.lockup.v1.UnbondingEntry.
 * Use `create(UnbondingEntrySchema)` to create a new message.
 */
export const UnbondingEntrySchema: GenMessage<UnbondingEntry> = /*@__PURE__*/
  messageDesc(file_sunrise_lockup_v1_lockup_account, 2);

