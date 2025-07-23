import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      setErrorMessage('Username already exists! Please choose another.');
      return;
    }

    // Save new user
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users)); // Save updated users list to localStorage
    alert('Account created successfully! You can now log in.');

    // Redirect to the home page or any other page
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#3D3D3D',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: '#FFF',
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* AppBar Section */}
        <div
          style={{
            backgroundColor: '#4A4A4A',
            padding: '15px 20px',
            borderRadius: '8px 8px 0 0',
            color: '#FFF',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          Signup
        </div>

        <h2 style={{ textAlign: 'center', color: '#3D3D3D', marginBottom: '20px' }}>
          Create New Account
        </h2>
        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <input
              type="checkbox"
              id="consent"
              style={{ marginRight: '5px', position: 'relative', top: '28px' }}
              required
            />
            <label htmlFor="consent" style={{ fontSize: '14px', color: '#3D3D3D' }}>
              I consent on sharing my info
            </label>
          </div>
          {errorMessage && (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                marginBottom: '15px',
              }}
            >
              {errorMessage}
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: '#000',
              color: '#FFF',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            Sign Up
          </button>
        </form>
        <p
          style={{
            marginTop: '15px',
            textAlign: 'center',
            fontSize: '14px',
            color: '#3D3D3D',
          }}
        >
          Registered?{' '}
          <Link to="/" style={{ color: '#3D3D3D', textDecoration: 'underline' }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
