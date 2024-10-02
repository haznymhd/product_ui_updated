import React, { useState } from 'react';

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    fullName: '',
    productName: '', // Adding productName to payment details
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your payment processing logic here
    console.log('Payment Details:', paymentDetails);
    // You can add logic to process payment using a payment gateway
  };

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

  const containerBackground = {
    background: 'rgba(255, 255, 255, 0.75)',
    backgroundPosition: 'center',
    minHeight: '75vh',
    padding: '35px',
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

  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div className="col-md-6 offset-md-3" style={containerBackground}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center" style={headingStyles}>
                Payment Details
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="cardNumber" style={paragraphStyles}>
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                    placeholder="Enter card number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate" style={paragraphStyles}>
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    name="expiryDate"
                    value={paymentDetails.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv" style={paragraphStyles}>
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleChange}
                    placeholder="CVV"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fullName" style={paragraphStyles}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={paymentDetails.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="productName" style={paragraphStyles}>
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    value={paymentDetails.productName}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    required
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}
                >
                  Submit Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
