// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const backgroundStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/welcome.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '89.5vh',
        padding: '35px',
        textAlign : 'center',
      };
    
      const headingStyles = {
        color: '#e91e63',
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif',
        textAlign: 'justifi',
        
      };
      const headingStyles1 = {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif',
      };
    
    
      const paragraphStyles = {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif',
      };
    
      const pinkButtonStyles = {
        background: '#e91e63', // Pink color
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background 0.3s',
        margin: '10px',
      };
    const containerBackground= {
      background: 'rgba(255, 255, 255, 0.75)', 
      backgroundPosition: 'center',
      minHeight: '10vh',
      padding: '40px',
    };
      
    
      const pinkButtonHoverStyles = {
        background: '#ad1457', // Darker shade on hover
      };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/register', { username, password });
            console.log('Registered user:', response.data);
            navigate('/Welcome');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
        }
    };

    return (
        <div  style={backgroundStyle}>
            <div style={containerBackground} >
            <h2 style={headingStyles}>Register</h2>
            <input style={headingStyles} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
            <input style={headingStyles} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
            <button className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }} onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default Register;
