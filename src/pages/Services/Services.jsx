import React from 'react';

const Services = () => {
  return (
    <div className="services" style={{ backgroundColor: '#fff', padding: '100px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3em', color: '#333', marginBottom: '30px' }}>Our Services</h2>
        <div className="service-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h3 style={{ fontSize: '2em', color: '#333', marginBottom: '15px' }}>Web Development</h3>
            <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>We create modern, responsive websites tailored to your business needs using the latest web technologies.</p>
          </div>
          <div style={{ flex: 1, marginLeft: '20px' }}>
            <h3 style={{ fontSize: '2em', color: '#333', marginBottom: '15px' }}>Mobile App Development</h3>
            <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>We design and develop custom mobile applications for iOS and Android platforms, ensuring seamless user experiences.</p>
          </div>
        </div>
        <div className="service-item" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h3 style={{ fontSize: '2em', color: '#333', marginBottom: '15px' }}>UI/UX Design</h3>
            <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>Our talented designers create stunning user interfaces and engaging user experiences to enhance your brand image.</p>
          </div>
          <div style={{ flex: 1, marginLeft: '20px' }}>
            <h3 style={{ fontSize: '2em', color: '#333', marginBottom: '15px' }}>Digital Marketing</h3>
            <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>We offer comprehensive digital marketing services including SEO, social media management, and PPC advertising to help your business grow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
