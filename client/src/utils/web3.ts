// web3.ts
import Web3 from "web3";

// Extend the Window interface globally
declare global {
  interface Window {
    ethereum?: any;
  }
}

let web3: Web3 | null = null;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  alert("Please install MetaMask!");
}
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS; // Replace with deployed contract address
const abi = [
    {
      "inputs": [],
      "name": "result",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "add",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "subtract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "multiply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "a",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "b",
          "type": "uint256"
        }
      ],
      "name": "divide",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]


// Export function to safely get the contract
export const getCalculatorContract = () => {
  if (!web3) throw new Error("Web3 is not initialized");
  return new web3.eth.Contract(abi as any, contractAddress);
};

export { web3 };