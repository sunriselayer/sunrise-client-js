import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgVerifyInvariant } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/crisis/v1beta1/tx";
import { GenesisState } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/crisis/v1beta1/genesis";
import { MsgVerifyInvariantResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/crisis/v1beta1/tx";
import { MsgUpdateParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/crisis/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/crisis/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant],
    ["/cosmos.crisis.v1beta1.GenesisState", GenesisState],
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse", MsgVerifyInvariantResponse],
    ["/cosmos.crisis.v1beta1.MsgUpdateParams", MsgUpdateParams],
    ["/cosmos.crisis.v1beta1.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }