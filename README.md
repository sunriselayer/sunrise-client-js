# Sunrise Client JS

A JavaScript/TypeScript client for the Sunrise blockchain.

## Installation

This client is designed to be used with [CosmJS](https://cosmos.github.io/cosmjs/).

```shell
npm install @sunriselayer/client @cosmjs/proto-signing @cosmjs/stargate
# or
pnpm add @sunriselayer/client @cosmjs/proto-signing @cosmjs/stargate
# or
yarn add @sunriselayer/client @cosmjs/proto-signing @cosmjs/stargate
```

## Usage

### Querying the Chain

The `SunriseClient` provides a convenient way to create a query client that is pre-configured with all of Sunrise's custom modules.

```ts
import { SunriseClient } from "@sunriselayer/client";

// This should be the Tendermint RPC endpoint of your node
const RPC_ENDPOINT = "http://localhost:26657";

async function queryChain() {
  // Connect to a node
  const client = await SunriseClient.connect(RPC_ENDPOINT);

  // Get the query client
  const queryClient = client.getQueryClient();
  if (!queryClient) {
    throw new Error("Failed to get query client");
  }

  // You can now query any module
  const daParams = await queryClient.da.params({});
  console.log("DA Module Params:", daParams);

  const swapParams = await queryClient.swap.params({});
  console.log("Swap Module Params:", swapParams);

  // Example: Query a specific liquidity pool
  const pool = await queryClient.liquiditypool.pool({ poolId: 1n });
  console.log("Pool 1:", pool);
}

queryChain().catch(console.error);
```

### Sending Transactions

For sending transactions, you should use CosmJS's `SigningStargateClient` with the custom type registry provided by `@sunriselayer/client`.

Here's an example of how to create a concentrated liquidity position:

```ts
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { coin, SigningStargateClient } from "@cosmjs/stargate";
import { createEncodeObject, sunriseTypesRegistry } from "@sunriselayer/client";
import { MsgCreatePositionSchema } from "@sunriselayer/client/types/liquiditypool";

const RPC_ENDPOINT = "https://goldberg-rpc.sunrise.node"; // Replace with your node's RPC
const SENDER_MNEMONIC = process.env.MNEMONIC!; // Never commit private keys

// This is a simplified example. In a real application, you would fetch pool details
// from a query client and calculate ticks from user-provided prices.
const MOCK_POOL_ID = 1n; // NOTE: Use BigInt for uint64 fields
const MOCK_LOWER_TICK = -20000n;
const MOCK_UPPER_TICK = 20000n;

async function main() {
  // 1. Create a wallet and a signer from a mnemonic
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(SENDER_MNEMONIC, {
    prefix: "sunrise", // The Bech32 address prefix for Sunrise
  });
  const [account] = await signer.getAccounts();
  const senderAddress = account.address;
  console.log("Sender address:", senderAddress);

  // 2. Create a signing client with the signer and type registry
  const client = await SigningStargateClient.connectWithSigner(RPC_ENDPOINT, signer, {
    registry: sunriseTypesRegistry, // The custom type registry for Sunrise messages
  });
  console.log("Successfully connected to", RPC_ENDPOINT);

  // 3. Prepare a 'Create Position' transaction message
  // All message fields are fully typed and validated.
  const msg = createEncodeObject(MsgCreatePositionSchema, {
    sender: senderAddress,
    poolId: MOCK_POOL_ID,
    lowerTick: MOCK_LOWER_TICK,
    upperTick: MOCK_UPPER_TICK,
    // Use the `coin` helper from @cosmjs/stargate to create Coin objects
    tokenBase: coin("1000000", "urise"), // 1 RISE
    tokenQuote: coin("5000000", "uusdc"), // 5 USDC (example)
    minAmountBase: "0", // Slippage protection
    minAmountQuote: "0", // Slippage protection
  });

  // 4. Define the fee and sign and broadcast the transaction
  const fee = {
    amount: [coin("10000", "urise")],
    gas: "400000", // Gas limit
  };
  const memo = "Created position via @sunriselayer/client";

  console.log("Broadcasting transaction...");
  const { transactionHash } = await client.signAndBroadcast(senderAddress, [msg], fee, memo);

  console.log("Successfully created position!");
  console.log("Transaction hash:", transactionHash);
}

main().catch(console.error);
```
