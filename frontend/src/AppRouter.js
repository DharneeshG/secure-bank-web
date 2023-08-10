import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountCreationPage from "./pages/AccountCreationPage";
import FundTransferPage from "./pages/FundTransferPage";

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/account-creation">Account Creation</Link>
          </li>
          <li>
            <Link to="/fund-transfer">Fund Transfer</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account-creation" element={<AccountCreationPage />} />
        <Route path="/fund-transfer" element={<FundTransferPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
