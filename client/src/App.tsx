import { useState } from "react";
import { calculatorContract } from "./utils/web3";

function App() {
  const [result, setResult] = useState<number>(0);
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  const handleCalculate = async (operation: string) => {
     const account = import.meta.env.VITE_ACCOUNT_ADDRESS
    switch (operation) {
      case "add":
        await calculatorContract.methods.add(a, b).send({ from: account });
        break;
      case "subtract":
        await calculatorContract.methods.subtract(a, b).send({ from: account });
        break;
      case "multiply":
        await calculatorContract.methods.multiply(a, b).send({ from: account });
        break;
      case "divide":
        await calculatorContract.methods.divide(a, b).send({ from: account });
        break;
      default:
        break;
    }

    const newResult = await calculatorContract.methods.result().call();
    setResult(Number(newResult));
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;