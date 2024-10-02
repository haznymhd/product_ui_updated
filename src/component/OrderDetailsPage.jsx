import React from 'react';

const OrderDetailsPage = () => {
  const order = {
    orderId: '123456789',
    date: 'February 19, 2024',
    totalAmount: '$150.00',
    items: [
      { id: 1, name: 'Product 1', quantity: 2, price: '$50.00' },
      { id: 2, name: 'Product 2', quantity: 1, price: '$50.00' },
      { id: 3, name: 'Product 3', quantity: 1, price: '$50.00' },
    ],
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
    minHeight: '75vh',
    padding: '35px',
  };

  const headingStyles = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const tableStyles = {
    marginBottom: '20px',
  };

  const totalAmountStyles = {
    fontWeight: 'bold',
  };

  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div className="col-md-8 offset-md-2" style={containerBackground}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" style={headingStyles}>
                Order Details
              </h3>
              <div className="mb-3">
                <strong>Order ID:</strong> {order.orderId}
              </div>
              <div className="mb-3">
                <strong>Date:</strong> {order.date}
              </div>
              <table className="table" style={tableStyles}>
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center" style={totalAmountStyles}>
                <strong>Total Amount:</strong> {order.totalAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
