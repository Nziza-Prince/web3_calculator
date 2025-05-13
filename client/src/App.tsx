import { useState } from "react";
import { getCalculatorContract } from "./utils/web3";

import Web3 from "web3";

let web3: Web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  alert("Please install MetaMask!");
}

// 👇 Add this outside your component
declare global {
  interface Window {
    ethereum?: any;
  }
}

function App() {
  const [result, setResult] = useState<number>(0);
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [gasUsed, setGasUsed] = useState<number | null>(null);

  const handleCalculate = async (operation: string) => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not detected. Please install MetaMask.");
        return;
      }

      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      const account = accounts[0];
      const calculatorContract = getCalculatorContract()

      let receipt;

      const valueToSend = web3.utils.toWei("0.001", "ether"); // Convert to wei

      switch (operation) {
        case "add":
          receipt = await calculatorContract.methods.add(a, b).send({ from: account, value: valueToSend });
          break;
        case "subtract":
          receipt = await calculatorContract.methods.subtract(a, b).send({ from: account, value: valueToSend });
          break;
        case "multiply":
          receipt = await calculatorContract.methods.multiply(a, b).send({ from: account, value: valueToSend });
          break;
        case "divide":
          receipt = await calculatorContract.methods.divide(a, b).send({ from: account, value: valueToSend });
          break;
        default:
          return;
      }
      

      console.log("Gas used:", receipt.gasUsed);
      setGasUsed(Number(receipt.gasUsed)); // 👈 Fixed type error

      const newResult = await calculatorContract.methods.result().call();
      setResult(Number(newResult));
    } catch (error: any) {
      console.error("Error:", error);
      alert("Transaction failed. " + (error?.message || ""));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Blockchain Calculator</h1>
        <div className="space-y-4">
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number A"
          />
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number B"
          />
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleCalculate("add")}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
            <button
              onClick={() => handleCalculate("subtract")}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Subtract
            </button>
            <button
              onClick={() => handleCalculate("multiply")}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Multiply
            </button>
            <button
              onClick={() => handleCalculate("divide")}
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Divide
            </button>
          </div>
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h2 className="text-xl font-semibold text-gray-700">Result: {result}</h2>
            {gasUsed !== null && (
              <p className="text-sm text-gray-500 mt-2">Gas used: {gasUsed}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
