require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');
const privateKey = fs.readFileSync('secret.txt').toString();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'localhost',
  networks:{
    hardhat: {
      chainId:4202
    },
    BitTorrent: {
      url: 'https://pre-rpc.bt.io',
      accounts: [privateKey],
      gasPrice: 1e9, // 1 Gwei = 1,000,000,000 wei
      // gasLimit: 3000000,
      // accountsBalance: '100000000000000000000000000000'
    }
  },
  solidity: "0.8.24",
  allowUnlimitedContractSize: true, // 允许部署大小不受限制的智能合约
  throwOnTransactionFailures: true, // 含义: 当交易失败时抛出异常
  throwOnCallFailures: true,        // 当合约调用失败时抛出异常
  loggingEnabled: true,

};
// npx hardhat ignition deploy ./ignition/modules/Lock.js --network BitTorrent
// npx hardhat ignition deploy ./ignition/modules/Lock.js --network BitTorrent --reset
