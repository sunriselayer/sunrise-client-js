import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryInterchainAccountResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgSendTx } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryInterchainAccountRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgUpdateParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/tx";
import { QueryParamsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/query";
import { MsgRegisterInterchainAccountResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgRegisterInterchainAccount } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgUpdateParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/tx";
import { MsgSendTxResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/tx";
import { Params } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/controller";
import { QueryParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/ibc-go/v8@v8.5.1/proto/ibc/applications/interchain_accounts/controller/v1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse", QueryInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", MsgSendTx],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest", QueryInterchainAccountRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest", QueryParamsRequest],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse", MsgRegisterInterchainAccountResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", MsgUpdateParams],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse", MsgSendTxResponse],
    ["/ibc.applications.interchain_accounts.controller.v1.Params", Params],
    ["/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }