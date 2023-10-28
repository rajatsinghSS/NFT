require("@nomicfoundation/hardhat-toolbox");
//require("dotenv").config;    //use later

/** @type import('hardhat/config').HardhatUserConfig */
//const {API_URL,PRIVATE_KEY} process.env;     //use latter
const AAPI_URL="https://eth-sepolia.g.alchemy.com/v2/92bJ6_urd8GlhwZ1aVr6obRof9XsdP97";
const API_URL="92bJ6_urd8GlhwZ1aVr6obRof9XsdP97";
const PRIVATE_KEY="31edab02511a557acb2eabc1b9462ec628fe8dd4ad2fd40216e12fae7490fae3";
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${API_URL}`,
      accounts: [PRIVATE_KEY]
    }
  }
};
