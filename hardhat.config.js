require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config();
require("solidity-coverage")
require("hardhat-deploy")

//You need to export an object to set up your config file
// Go to https://hardhat.org/config/ to learn

/*
* @type import('hardhat/config').HardhatUserConfig
*/

const COINMARKET_API_KEY = process.env.COINMARKET_API_KEY|| ""
const GOERLI_RPC_URL= process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    solidity: {
        compilers: [
          {
            version: "0.5.7"
          },
          {
            version: "0.8.7"
          },
          {
            version: "0.6.12"
          }
        ]
      },
      
    defaultNetwork: "hardhat",

    networks: {
      
      
        hardhat: {
            chainId:31337,
            // gasPrice: 130000000000,
        }, 
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        // mainnet: {
        //     // url: process.env.MAINNET_RPC_URL,
        //     // accounts: [PRIVATE_KEY],
        //     // chainId:1,
        //     // blockConfirmations: 6,
        // },
      
               
            
        
        // etherscan: {
        //     apiKey: ETHERSCAN_API_KEY,
        // },
        // gasReporter: {
        //     enabled: true,
        //     currency: "USD",
        //     outputFile: "gas-report.txt",
        //     noColors: true,
        //     // coinmarketcap: COINMARKETCAP_API_KEY,
        // },
        // namedAccounts: {
        //     deployer: {
        //         default: 0, // here this will by default take the first account as deployer
        //         1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        //     },
        // },
        // mocha: {
        //     timeout: 200000, // 200 seconds max for running tests
        // },
    }
}