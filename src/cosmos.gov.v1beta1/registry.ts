import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/genesis";
import { MsgVoteResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { MsgDeposit } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { TallyParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { WeightedVoteOption } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { QueryDepositResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { Vote } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { DepositParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { MsgVoteWeightedResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { QueryVoteResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryTallyResultResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { MsgSubmitProposalResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { QueryProposalResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryProposalsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryProposalsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { TallyResult } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { TextProposal } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { QueryVotesResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryDepositsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryTallyResultRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { Proposal } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { MsgSubmitProposal } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { MsgVote } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { VotingParams } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { QueryVoteRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryDepositsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { MsgDepositResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { MsgVoteWeighted } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/tx";
import { Deposit } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/gov";
import { QueryProposalRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryVotesRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryParamsRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryParamsResponse } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";
import { QueryDepositRequest } from "./types/../../../../../go/pkg/mod/github.com/cosmos/cosmos-sdk@v0.50.10/proto/cosmos/gov/v1beta1/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/cosmos.gov.v1beta1.GenesisState", GenesisState],
    ["/cosmos.gov.v1beta1.MsgVoteResponse", MsgVoteResponse],
    ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
    ["/cosmos.gov.v1beta1.TallyParams", TallyParams],
    ["/cosmos.gov.v1beta1.WeightedVoteOption", WeightedVoteOption],
    ["/cosmos.gov.v1beta1.QueryDepositResponse", QueryDepositResponse],
    ["/cosmos.gov.v1beta1.Vote", Vote],
    ["/cosmos.gov.v1beta1.DepositParams", DepositParams],
    ["/cosmos.gov.v1beta1.MsgVoteWeightedResponse", MsgVoteWeightedResponse],
    ["/cosmos.gov.v1beta1.QueryVoteResponse", QueryVoteResponse],
    ["/cosmos.gov.v1beta1.QueryTallyResultResponse", QueryTallyResultResponse],
    ["/cosmos.gov.v1beta1.MsgSubmitProposalResponse", MsgSubmitProposalResponse],
    ["/cosmos.gov.v1beta1.QueryProposalResponse", QueryProposalResponse],
    ["/cosmos.gov.v1beta1.QueryProposalsRequest", QueryProposalsRequest],
    ["/cosmos.gov.v1beta1.QueryProposalsResponse", QueryProposalsResponse],
    ["/cosmos.gov.v1beta1.TallyResult", TallyResult],
    ["/cosmos.gov.v1beta1.TextProposal", TextProposal],
    ["/cosmos.gov.v1beta1.QueryVotesResponse", QueryVotesResponse],
    ["/cosmos.gov.v1beta1.QueryDepositsResponse", QueryDepositsResponse],
    ["/cosmos.gov.v1beta1.QueryTallyResultRequest", QueryTallyResultRequest],
    ["/cosmos.gov.v1beta1.Proposal", Proposal],
    ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
    ["/cosmos.gov.v1beta1.MsgVote", MsgVote],
    ["/cosmos.gov.v1beta1.VotingParams", VotingParams],
    ["/cosmos.gov.v1beta1.QueryVoteRequest", QueryVoteRequest],
    ["/cosmos.gov.v1beta1.QueryDepositsRequest", QueryDepositsRequest],
    ["/cosmos.gov.v1beta1.MsgDepositResponse", MsgDepositResponse],
    ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted],
    ["/cosmos.gov.v1beta1.Deposit", Deposit],
    ["/cosmos.gov.v1beta1.QueryProposalRequest", QueryProposalRequest],
    ["/cosmos.gov.v1beta1.QueryVotesRequest", QueryVotesRequest],
    ["/cosmos.gov.v1beta1.QueryParamsRequest", QueryParamsRequest],
    ["/cosmos.gov.v1beta1.QueryParamsResponse", QueryParamsResponse],
    ["/cosmos.gov.v1beta1.QueryDepositRequest", QueryDepositRequest],
    
];

export { msgTypes }