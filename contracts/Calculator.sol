// contracts/Calculator.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {
    uint256 public result;

    modifier costs(uint256 amount) {
        require(msg.value >= amount, "Insufficient Ether sent");
        _;
    }

    function add(uint256 a, uint256 b) public payable costs(1e15) {
        result = a + b;
    }

    function subtract(uint256 a, uint256 b) public payable costs(1e15) {
        result = a - b;
    }

    function multiply(uint256 a, uint256 b) public payable costs(1e15) {
        result = a * b;
    }

    function divide(uint256 a, uint256 b) public payable costs(1e15) {
        require(b != 0, "Cannot divide by zero");
        result = a / b;
    }

    // Allow withdrawals (optional admin feature)
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}
