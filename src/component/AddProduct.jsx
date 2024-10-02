import React, { useState } from 'react';
import productService from '../service/product.service';
import { Link } from 'react-router-dom';

const AddProduct = () => {
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
    textAlign: 'left',
    
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

  const [product, setProduct] = useState({
    productName: '',
    descripition: '',
    price: '',
    status: '',
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsite = (e) => {
    e.preventDefault();

    productService.saveProduct(product).then((res) => {
      console.log('Product Added Successfully');
      setMsg('Product Added Successfully');
      setProduct({
        productName: '',
        descripition: '',
        price: '',
        status: '',
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
            <h3 style={headingStyles1}>Add Product</h3>
            <br />
            {msg && <p style={paragraphStyles}>{msg}</p>}
            <form onSubmit={(e) => ProductRegsite(e)}>
              <div className="mb-3">
                <label style={headingStyles}>Enter Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={product.productName}
                />
              </div>
              <div className="mb-3">
                <label style={headingStyles}>Enter Description</label>
                <input
                  type="text"
                  name="descripition"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={product.descripition}
                />
              </div>
              <div className="mb-3">
                <label style={headingStyles}>Enter Price</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={product.price}
                />
              </div>
              <div className="mb-3">
                <label style={headingStyles}>Enter Status</label>
                <input
                  type="text"
                  name="status"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={product.status}
                />
              </div>
              <button className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
                Submit
              </button>
            </form>
            <Link to="/" className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;