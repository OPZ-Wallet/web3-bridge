# web3-bridge
OPZ Wallet SDK wallet module for connecting to Web3-Onboard.

### Install

**NPM**
`npm i @opzcom/web3-bridge @opzcom/web3-bridge`

**Yarn**
`yarn add @opzcom/web3-bridge @opzcom/web3-bridge`

## Usage

```typescript
import Onboard from '@web3-onboard/core'
import opzModule from '@opzcom/web3-bridge'

const opz = opzModule()

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    opz
    //... other wallets
  ]
})

const connectedWallets = await onboard.connectWallet()
console.log(connectedWallets)
```
