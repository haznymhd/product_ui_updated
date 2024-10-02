import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
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

  const pinkButtonHoverStyles = {
    background: '#ad1457', // Darker shade on hover
  };
  const containerBackground= {
    background: 'rgba(255, 255, 255, 0.75)', 
    backgroundPosition: 'center',
    minHeight: '10vh',
    padding: '40px',
  };
    
  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={ containerBackground} className="text-center text-light">
            <h3 style={headingStyles }>Product Management System</h3>
            <p style={paragraphStyles}>Manage your products in here.</p>
            <Link to="/ViewProduct" className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
              View Product
            </Link>
            <Link to="/addProduct" className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
              Add Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

