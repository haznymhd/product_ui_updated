import React, { useState } from 'react';

const AddOrderPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderId: '',
    date: '',
    items: [],
  });

  const [newItem, setNewItem] = useState({
    item: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleAddItem = () => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      items: [...prevDetails.items, { ...newItem }],
    }));
    setNewItem({ item: '', quantity: '', price: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit order details
    console.log('Order Details:', orderDetails);
    // Reset form fields
    setOrderDetails({ orderId: '', date: '', items: [] });
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/welcome.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '89.5vh',
    padding: '35px',
  };

  const containerBackground = {
    background: 'rgba(255, 255, 255, 0.75)',
    backgroundPosition: 'center',
    minHeight: '10vh',
    padding: '40px',
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
    background: '#e91e63',
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
    background: '#ad1457',
  };

  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div className="col-md-8 offset-md-2" style={containerBackground}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" style={headingStyles}>
                Add Order
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="orderId" style={headingStyles1}>
                    Order ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="orderId"
                    name="orderId"
                    value={orderDetails.orderId}
                    onChange={handleChange}
                    placeholder="Enter order ID"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date" style={headingStyles1}>
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={orderDetails.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="item" style={headingStyles1}>
                    Item
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="item"
                    name="item"
                    value={newItem.item}
                    onChange={handleNewItemChange}
                    placeholder="Enter item"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity" style={headingStyles1}>
                    Quantity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    value={newItem.quantity}
                    onChange={handleNewItemChange}
                    placeholder="Enter quantity"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price" style={headingStyles1}>
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    value={newItem.price}
                    onChange={handleNewItemChange}
                    placeholder="Enter price"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-success mb-3"
                  onClick={handleAddItem}
                  style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}
                >
                  Add Item
                </button>
                <div>
                  {orderDetails.items.map((item, index) => (
                    <div key={index} style={paragraphStyles}>
                      <strong>Item:</strong> {item.item}, <strong>Quantity:</strong> {item.quantity}, <strong>Price:</strong> {item.price}
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}
                >
                  Submit Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrderPage;
