// AddSupplier.js
import React, { useState } from 'react';
import supplierService from '../service/supplier.service';
import { Link } from 'react-router-dom';

const AddSupplier= () => {
    const backgroundStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/welcome.jpg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '89.5vh',
      padding: '35px',
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
  
  const [supplier, setSupplier] = useState({
    name: '',
    phone: '',
    supplyingItem: '',
    address: '',
    email: '',
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSupplier({ ...supplier, [e.target.name]: value });
  };

  const addSupplier = (e) => {
    e.preventDefault();

    supplierService.saveSupplier(supplier).then((res) => {
      setMsg('Supplier Added Successfully');
      setSupplier({
        name: '',
        phone: '',
        supplyingItem: '',
        address: '',
        email: '',
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={containerBackground} className="text-center text-light">
            <h3 style={headingStyles}>Add Supplier</h3>
            <br />
            {msg && <p style={paragraphStyles}>{msg}</p>}
            <form onSubmit={(e) => addSupplier(e)}>
              <div className="mb-3">
                <label style={headingStyles}>Supplier Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={supplier.name}
                />
              </div>
              <div className="mb-3">
                <label style={headingStyles}>Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={supplier.phone}
                />
              </div>
              <div className="mb-3">
                <label style={headingStyles}>Supplying Item</label>
                <input
                  type="text"
                  name="supplyingItem"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={supplier.supplyingItem}
                />
              </div>
              <div className="mb-3">
                <label style={headingStyles}>Address</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={supplier.address}
                />
              </div>
              <div className="mb-3">
                <label style={headingStyles}>Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={supplier.email}
                />
              </div>
              <button className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
                Submit
              </button>
            </form>
            <Link to="/supplier" className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSupplier;
