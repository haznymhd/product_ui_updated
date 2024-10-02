import React from 'react';

const AboutUs = () => {
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
    padding: '35px',
  };

  const paragraphStyles = {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div className="container mt-3" style={backgroundStyle}>
      <div className="row">
        <div style={containerBackground} className="col-md-12">
          <div className="text-center text-light">
            <h3 style={headingStyles}>About Us</h3>
          </div>
          <p style={paragraphStyles}>
          The goal of the web-based PIM system is to provide an interactive platform with features like 
order processing and inventory tracking for effective PIM management. For a dependable user 
experience, the system stresses security, performance, and scalability and is integrated with 
MySQL for strong data management. Future improvements and ongoing maintenance will 
continue to emphasize flexibility by broadening the scope to include tools for reporting that offer 
insightful data on inventory and sales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
