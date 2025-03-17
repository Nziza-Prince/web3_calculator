# Blockchain Calculator

A decentralized calculator built on the Ethereum blockchain using **Truffle, Ganache**, and **React Vite**. This project demonstrates how to interact with a smart contract from a React frontend.

Features
**Smart Contract Operations**: Perform addition, subtraction, multiplication, and division on the blockchain.

**React Frontend**: A modern and responsive user interface built with React and Tailwind CSS.

**Ganache Integration**: Test the application on a local Ethereum blockchain.

**MetaMask Support**: Connect your MetaMask wallet to interact with the smart contract.

# Technologies Used:

**Truffle**: Development framework for Ethereum smart contracts.

**Ganache**: Personal blockchain for Ethereum development.

**React Vite**: Fast and modern frontend framework.

**Tailwind CSS**: Utility-first CSS framework for styling.

**Web3.js**: JavaScript library to interact with the Ethereum blockchain.

**Solidity**: Programming language for writing smart contracts.

# Prerequisites
Before you begin, ensure you have the following installed:

1. **Node.js**: Download Node.js

2. **Truffle**: Install globally using npm:


```
npm install -g truffle
```

3. **Ganache**: Download Ganache

4. **MetaMask**: Download MetaMask (Browser Extension)

5. **Git**: Download Git


# Setup Instructions

1. **Clone the Repository**
Clone the project repository to your local machine:

```
git clone https://github.com/your-username/blockchain-calculator.git
cd blockchain-calculator
```

2. **Set Up the Smart Contract**
Navigate to the project root directory:
```
cd blockchain-calculator
```

Install dependencies for the Truffle project:

```
npm install
```

Compile the smart contract:

```
truffle compile
```

Start Ganache and ensure it’s running on http://127.0.0.1:7545.

Deploy the smart contract to the Ganache network:

```
truffle migrate --network development
```

Note the contract address from the deployment logs. You’ll need it for the frontend.

---


3. **Set Up the React Frontend**

Navigate to the frontend directory:

```
cd frontend
```

Install dependencies:
```
npm install

```
Update the contract address and ABI:

Open ***src/utils/web3.ts***.

Replace ***YOUR_CONTRACT_ADDRESS*** with the contract address from the deployment logs.

Replace the ***abi*** array with the ABI from ***build/contracts/Calculator.json***.

Start the development server:

```
npm run dev
```

Open your browser and navigate to ***http://localhost:5173***.

4. **Connect MetaMask**

Import an account from Ganache into MetaMask:

Copy the private key of an account from Ganache.

In MetaMask, click on the account icon → "Import Account" → Paste the private key.



# Usage

1. Enter two numbers in the input fields.

2. Click on the operation buttons (Add, Subtract, Multiply, Divide) to perform calculations on the blockchain.

3. The result will be displayed below the buttons.


# Project Structure
```
blockchain-calculator/
├── contracts/               # Smart contracts
│   └── Calculator.sol       # Calculator smart contract
├── migrations/              # Migration scripts
│   └── 2_deploy_contracts.js
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.tsx          # Main application component
│   │   ├── main.tsx         # Entry point
│   │   └── utils/
│   │       └── web3.ts      # Web3 configuration
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── test/                    # Smart contract tests
├── truffle-config.js        # Truffle configuration
└── README.md                # Project documentation
```

# Troubleshooting
**1. Sender Account Not Recognized**:
Ensure the account address is correct and exists in Ganache.

Ensure MetaMask is connected to the Ganache network.

**2. Transaction Fails**:
Check Ganache logs for error messages.

Ensure the account has sufficient ETH balance.

**3. Contract Methods Not Found**
Verify the contract ABI and address in web3.ts.

Ensure the contract was deployed successfully.

# Contributing
Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch:
```
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```
git commit -m "Add your feature"
```
4. Push to the branch:

```
git push origin feature/your-feature-name
```
5. Open a pull request.

# License

This project is licensed under the MIT License. See the LICENSE file for details.

---

# Acknowledgments
Truffle Suite for the development tools.

Vite for the fast React development environment.

Tailwind CSS for the utility-first CSS framework.

# Contact
For questions or feedback, please reach out:

Email: nzizaprince7@gmail.com

GitHub: Nziza-Prince

---

Enjoy building and interacting with your Blockchain Calculator! 🚀

---