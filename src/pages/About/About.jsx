import React from 'react';

const About = () => {
  return (
    <div className="about" style={{ backgroundColor: '#f4f4f4', padding: '100px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3em', color: '#333', marginBottom: '30px' }}>About Us</h2>
        <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '40px' }}>We are a team of passionate individuals dedicated to providing the best services and solutions.</p>
        <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec justo ut odio mollis sodales. Nulla facilisi. Integer sodales lectus nec justo volutpat, vel blandit lorem viverra. Proin sed augue at sapien vestibulum pulvinar. Sed non convallis neque. Curabitur fermentum vehicula dolor nec hendrerit. Vivamus id metus consequat, hendrerit justo eget, elementum neque. Fusce eget suscipit eros. Nam eleifend, urna eget tristique varius, orci leo feugiat tellus, ut vehicula leo eros vel sem. Cras commodo lorem vitae justo tempor, nec hendrerit nunc posuere. Vivamus fermentum quam nec ante tincidunt, sit amet egestas odio accumsan.</p>
        <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>In our spare time, we enjoy exploring new technologies, contributing to open source projects, and participating in community events. Our mission is to make a positive impact on the world through our work and dedication.</p>
      </div>
    </div>
  );
};

export default About;
