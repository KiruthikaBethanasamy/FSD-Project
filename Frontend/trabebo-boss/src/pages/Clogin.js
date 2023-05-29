import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send GET request to validate login
      const response = await axios.get(`http://localhost:8082/api/customers/${id}`);

      // Check if the customer exists and the password matches
      const customers = response.data;

      if (customers && customers.customerPassword === password) {
        // Perform actions after successful login
        console.log('Logged in successfully');
        navigate('/book', { state: { customerId: customers.id } });
      } else {
        setError('Invalid ID or password.');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <form style={{ boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.3)', width: '30%', padding: '3rem', backgroundColor: '#f3f3f3', borderRadius: '8px' }} onSubmit={handleLogin}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', color: '#333' }}>Login</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '18px', color: '#555' }}>ID:</label>
            <br></br><input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)} required style={{ padding: '10px', fontSize: '16px' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '18px', color: '#555' }}>Password:</label>
            <input type="password" name="customerPassword" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '10px', fontSize: '16px' }} />
          </div>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }} type="submit">Login</button>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>Don't have an account? <Link to="/Signup1" style={{ textDecoration: 'none', color: '#4caf50', fontWeight: 'bold' }}>Sign up</Link></p>
        </div>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;