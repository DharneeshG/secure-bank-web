import React, { useState } from 'react';
import axios from 'axios';

const FundTransfer = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');

  const handleFundTransfer = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please log in to perform a fund transfer');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/transfer',
        {
          fromAccount,
          toAccount,
          amount: parseFloat(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Fund transfer successful');
    } catch (error) {
      console.error('Error transferring funds:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Fund Transfer</h2>
      <form onSubmit={handleFundTransfer}>
        <input
          type="text"
          placeholder="From Account Number"
          value={fromAccount}
          onChange={(e) => setFromAccount(e.target.value)}
        />
        <input
          type="text"
          placeholder="To Account Number"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default FundTransfer;
