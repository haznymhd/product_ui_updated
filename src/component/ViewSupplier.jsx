import React, { useEffect, useState } from 'react';
import supplierService from '../service/supplier.service';
import { Link } from 'react-router-dom';

const ViewSupplier = () => {
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

  const [supplierList, setSupplierList] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    supplierService.getAllSuppliers().then((res) => {
      setSupplierList(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const deleteSupplier = (id) => {
    supplierService.deleteSupplier(id).then((res) => {
      setMsg('Delete Successfully');
      init();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div style={containerBackground} className="col-md-12">
          <div className="text-center text-light">
            <h3 style={headingStyles}>All Supplier List</h3>
            {msg && <p style={paragraphStyles}>{msg}</p>}
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sl No</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Email</th>
                {/* Add more columns as needed */}
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {supplierList.map((s, num) => (
                <tr key={s.id}>
                  <td>{num + 1}</td>
                  <td>{s.supplierName}</td>
                  <td>{s.email}</td>
                  {/* Add more columns as needed */}
                  <td>
                    <Link to={`/editSupplier/${s.id}`} className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
                      Edit
                    </Link>
                    <button onClick={() => deleteSupplier(s.id)} className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/" className="btn-pink" style={{ ...pinkButtonStyles, ...pinkButtonHoverStyles }}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewSupplier;
