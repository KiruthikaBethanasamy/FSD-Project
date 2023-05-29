import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send GET request to validate login
      const response = await axios.get('http://localhost:8088/admin');

      // Check if there is an admin with the provided name and password
      const admin = response.data.find(
        (admin) =>
          admin.name === formData.name && admin.password === formData.password
      );

      if (admin) {
        // Perform actions after successful login
        console.log('Logged in successfully');
        navigate('/view'); // Redirect to /view page
      } else {
        setError('Invalid name or password.');
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
            <label style={{ fontSize: '18px', color: '#555' }}>Name:</label>
            <br></br><input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '10px', fontSize: '16px', border: 'none', borderBottom: '1px solid #ccc', backgroundColor: '#fff' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '18px', color: '#555' }}>Password:</label>
            <br></br><input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ padding: '10px', fontSize: '16px', border: 'none', borderBottom: '1px solid #ccc', backgroundColor: '#fff' }} />
          </div>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }} type="submit">Login</button>
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>Don't have an account? <Link to="/Signup" style={{ textDecoration: 'none', color: '#4caf50', fontWeight: 'bold' }}>Sign up</Link></p>
        </div>
      </form>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;