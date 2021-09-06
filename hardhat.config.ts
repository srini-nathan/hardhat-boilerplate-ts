import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const API_KEY = process.env.API_KEY ?? '';
const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  gasReporter: {
    currency: 'CHF',
    gasPrice: 1,
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    mainnet: {
      url: 'https://mainnet.infura.io/v3/' + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/' + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/' + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    kovan: {
      url: 'https://kovan.infura.io/v3/' + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    gorli: {
      url: 'https://goerli.infura.io/v3/' + API_KEY,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    // Binance Smart Chain
    bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    bsc_testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    // xDai
    xdai: {
      url: 'https://dai.poa.network',
      chainId: 100,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
      gasPrice: 'auto',
    },
    // Polygon
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com/',
      chainId: 137,
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      chainId: 80001,
      accounts: [PRIVATE_KEY],
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  },
};

export default config;
