# Eco KMS Signer

Modern TypeScript library for signing Ethereum transactions using KMS providers (AWS/GCP) and HD wallets.

> Based on [web3-kms-signer](https://github.com/JonathanOkz/web3-kms-signer) by Jonathan Okz

## Quick Start

### Installation

```bash
# Choose your wallet type
npm install @eco-foundation/eco-kms-signer-core @eco-foundation/eco-kms-signer-hd-wallets
# OR
npm install @eco-foundation/eco-kms-signer-core @eco-foundation/eco-kms-signer-kms-wallets @eco-foundation/eco-kms-signer-kms-provider-aws
```

### HD Wallets

```typescript
import { Signer } from '@eco-foundation/eco-kms-signer-core'
import { HDWallets } from '@eco-foundation/eco-kms-signer-hd-wallets'

const signer = new Signer(new HDWallets('your mnemonic phrase'), 1)

const signedTx = await signer.signTransaction(
  { keyId: "0'/0/0" },
  {
    to: '0x742d35Cc6634C0532925a3b8D7389c15cd00a5f7',
    value: '0x1000000000000000000', // 1 ETH
    gasLimit: '0x5208',
    gasPrice: '0x174876e800',
  }
)
```

### AWS KMS

```typescript
import { Signer } from '@eco-foundation/eco-kms-signer-core'
import { KMSWallets } from '@eco-foundation/eco-kms-signer-kms-wallets'
import { KMSProviderAWS } from '@eco-foundation/eco-kms-signer-kms-provider-aws'

const provider = new KMSProviderAWS({
  region: 'us-east-1',
  credentials: { accessKeyId: '...', secretAccessKey: '...' },
})

const signer = new Signer(new KMSWallets(provider), 1)
const keyId = await provider.createKey()

const signedTx = await signer.signTransaction({ keyId }, txData)
```

### GCP KMS

```typescript
import { Signer } from '@eco-foundation/eco-kms-signer-core'
import { KMSWallets } from '@eco-foundation/eco-kms-signer-kms-wallets'
import { KMSProviderGCP } from '@eco-foundation/eco-kms-signer-kms-provider-gcp'

const provider = new KMSProviderGCP({ keyFilename: 'service-account.json' })
provider.setPath({
  projectId: 'your-project',
  locationId: 'us-central1',
  keyRingId: 'your-keyring',
})

const signer = new Signer(new KMSWallets(provider), 1)
```

## API Reference

### Core Classes

- **`Signer`** - Main signing interface
- **`HDWallets`** - HD wallet implementation
- **`KMSWallets`** - KMS wallet implementation
- **`KMSProviderAWS`** - AWS KMS provider
- **`KMSProviderGCP`** - GCP KMS provider

### Methods

```typescript
// Sign transaction
signer.signTransaction(account, txData) → Promise<string>

// Sign message
signer.signMessage(account, message) → Promise<string>

// Get address
wallets.getAddress(keyId) → Promise<Buffer>
```

## Packages

| Package                                           | Description                |
| ------------------------------------------------- | -------------------------- |
| `@eco-foundation/eco-kms-signer-core`             | Core signing functionality |
| `@eco-foundation/eco-kms-signer-hd-wallets`       | HD wallet support          |
| `@eco-foundation/eco-kms-signer-kms-wallets`      | KMS wallet support         |
| `@eco-foundation/eco-kms-signer-kms-provider-aws` | AWS KMS provider           |
| `@eco-foundation/eco-kms-signer-kms-provider-gcp` | GCP KMS provider           |

## Development

```bash
pnpm install    # Install dependencies
pnpm build      # Build all packages
pnpm test       # Run tests
pnpm lint       # Lint code
```

## Features

- ✅ TypeScript with full type safety
- ✅ Modern ES modules
- ✅ EIP-155 transaction signing
- ✅ AWS & GCP KMS support
- ✅ HD wallet (BIP44) support
- ✅ Message signing
- ✅ Modular architecture

## License

MIT - Based on [web3-kms-signer](https://github.com/JonathanOkz/web3-kms-signer) by Jonathan Okz
