import abi from "../artifacts/contracts/Transactions.sol/Transactions.json";
import { ethers } from "ethers";

const address = "0x029290c564Ef921c56a784AA16C97E930dAF7372";
const contractABI = abi.abi;

const { ethereum } = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return transactionsContract;
};