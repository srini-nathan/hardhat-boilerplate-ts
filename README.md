Boilerplate using Hardhat, which provides a development environment for compiling, deploying, testing, and debugging Ethereum software.

# Using hardhat

https://hardhat.org/getting-started/#overview

# Copy .env.template to create .env

```zsh
  cp .env.template .env
```

Enter apikey and privatekey in the generated .env

```.env
  API_KEY=
  PRIVATE_KEY=
```

## Compile Contracts

```zsh
  npx hardhat compile
```

## Testing your contracts

```zsh
  npx hardhat test
```

## Coverage your contracts

```zsh
  npx hardhat coverage
```

## Deploying your contracts

```zsh
  yarn deploy --network <Network> # ropsten, rinkeby, kovan, gorli
```

## Starts a JSON-RPC server on top of Hardhat Network

```zsh
  yarn node
```

## Sample Accounts

```zsh
  npx hardhat accounts
```

## Faucet

- Ropsten: https://faucet.dimensions.network/
- Kovan: https://gitter.im/kovan-testnet/faucet
- Rinkeby: https://faucet.rinkeby.io/
- Goerli: https://goerli-faucet.slock.it/
- Binance Smart Chain(testnet): https://testnet.binance.org/faucet-smart
- Polygon (testnet): https://faucet.matic.network/
