require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

// Use this mnemonic for testing only - replace with your own in production
const mnemonic = process.env.MNEMONIC || "praise casual kingdom piece stable refuse save shoulder shallow tag pioneer shrug";
const infuraApiKey = process.env.INFURA_API_KEY || "a8ea8bd98f44466899a7ab11441da1a6";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraApiKey}`),
      network_id: 4,
      gas: 4700000,
      gasPrice: 10000000000
    },
    sepolia: {
      provider: () => new HDWalletProvider(
        mnemonic,
        `https://sepolia.infura.io/v3/${infuraApiKey}`
      ),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    goerli: {
      provider: () => new HDWalletProvider(
        mnemonic,
        `https://goerli.infura.io/v3/${infuraApiKey}`
      ),
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        `https://mainnet.infura.io/v3/${infuraApiKey}`
      ),
      network_id: 1,
      gas: 5500000,
      gasPrice: 100000000000, // 100 gwei
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "^0.4.2"
    }
  }
};
