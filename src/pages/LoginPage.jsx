import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../styles/LoginPage.css';
import Navbar from '../components//navbar/Navbar'; // Adjust path if necessary


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate


  const handleLogin = async(e) => {
    e.preventDefault();

    try {
      //const response = await axios.post('/api/login', { email, password });
      //const response = await axios.post('/api/v1/auth/login', { email, password });
      const response = await axios.post('http://localhost:9002/api/v1/auth/login', { email, password });

      console.log('Loged in successfully:', response.data);
      // Add logic to handle successful login here
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userEmail', email); // Store email globally

      setError('');
      // Redirect to home page or dashboard
       navigate('/home');
    } catch (err) {
      setError('Invalid email or password');
    }
    }
    //console.log('Logging in with:', { email, password });
    // Add login logic here (e.g., API request)


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
