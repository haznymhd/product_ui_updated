import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/welcome.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '89.5vh',
    padding: '35px',
  };

  const headingStyles = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
  };

  const paragraphStyles = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'justify',
  };

  const pinkButtonStyles = {
    margin: '20px',
    background: '#e91e63', 
    border: 'none',
    color: 'white',
    padding: '10px 30px',
    borderRadius: '50px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background 0.3s',
  };

  const pinkButtonHoverStyles = {
    background: '#ad1457', 
  };

  const containerBackground= {
    background: 'rgba(255, 255, 255, 0.75)', 
    backgroundPosition: 'center',
    minHeight: '10vh',
    padding: '35px',
    
  };
  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={containerBackground} className="text-center text-light">
            <h3 style={headingStyles}>Welcome to the Product Management System</h3>
            <p style={paragraphStyles}> The goal of the web-based PIM system is to provide an interactive platform with features like 
order processing and inventory tracking for effective PIM management. For a dependable user 
experience, the system stresses security, performance, and scalability and is integrated with 
MySQL for strong data management. Future improvements and ongoing maintenance will 
continue to emphasize flexibility by broadening the scope to include tools for reporting that offer 
insightful data on inventory and sales.
</p>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;