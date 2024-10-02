import React from 'react';

const Location= () => {
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
    minHeight: 'auto',
    padding: '10px',
  };

  const paragraphStyles = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    textAlign:'center',
  };

  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div style={containerBackground} className="col-md-12">
          <div className="text-center text-light">
            <h3 style={headingStyles}>Location Details</h3>
          </div>
          <p style={paragraphStyles}>
            Colombo Headoffice<br></br>
            No.10,Galle Road<br></br>
            Colombo<br></br>
            Googlemap location - https://www.google.com/maps/Bcas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
