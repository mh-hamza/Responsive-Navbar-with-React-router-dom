import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '30px 20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Services</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
      <div>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Facebook</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Twitter</a>
        <a href="#" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Instagram</a>
      </div>
      <div style={{ marginTop: '20px' }}>
        <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
