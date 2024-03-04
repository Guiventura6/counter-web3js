import Web3 from "web3";

const provider = "http://127.0.0.1:7545";
const contractAddress = "0xFC78877D6a1b9e4bEfC3eBC38e4d0c7A96a36ecF";

const web3 = new Web3(provider);

const getBalance = async () => {
  const balance = await web3.eth.getBalance(contractAddress);
  const balanceFormat = web3.utils.fromWei(balance, "ether");

  console.log(`ETH Balance: ${balanceFormat} ETH`);
};

getBalance();
