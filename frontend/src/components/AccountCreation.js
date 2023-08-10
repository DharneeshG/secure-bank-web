import React, { useState } from 'react';
import axios from 'axios';

const AccountCreation = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [balance, setBalance] = useState('');

  const handleAccountCreation = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please log in to create an account');
        return;
      }

      const response = await axios.post(
        'http://localhost:5000/accounts',
        {
          accountNumber,
          balance: parseFloat(balance),
        }
       
      );

      alert('Account created successfully');
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Account Creation</h2>
      <form onSubmit={handleAccountCreation}>
        <input
          type="text"
          placeholder="Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <input
          type="number"
          placeholder="Initial Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AccountCreation;
