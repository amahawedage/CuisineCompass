import React, { useState } from 'react';
import '../styles/LoginPage.css';
import Navbar from '../components//navbar/Navbar'; // Adjust path if necessary


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    // Add login logic here (e.g., API request)
  };

  return (
    <div className="login-page">
        <Navbar />
      

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <p>Sign in to your Cuisine Compass account</p>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-dark">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
