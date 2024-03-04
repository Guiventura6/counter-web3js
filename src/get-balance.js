import Web3 from "web3";
// https://etherscan.io/

const provider =
  "https://mainnet.infura.io/v3/5c793d33ecff451592241abb6509b520";
const contractAddress = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";

const web3 = new Web3(provider);

const getBalance = async () => {
  const balance = await web3.eth.getBalance(contractAddress);
  const balanceFormat = web3.utils.fromWei(balance, "ether");

  console.log(`ETH Balance: ${balanceFormat} ETH`);
};

getBalance();
