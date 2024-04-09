import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio" style={{ backgroundColor: '#f9f9f9', padding: '100px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3em', color: '#333', marginBottom: '30px' }}>Portfolio</h2>
        <div className="portfolio-item" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="item" style={{ width: '300px', margin: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px', overflow: 'hidden' }}>
            <img src="https://via.placeholder.com/300" alt="Project 1" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="item-details" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5em', color: '#333', marginBottom: '10px' }}>Project 1</h3>
              <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>Description of project 1 goes here.</p>
              <a href="#" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#ff6347', color: '#fff', textDecoration: 'none', borderRadius: '3px', marginTop: '10px' }}>View Details</a>
            </div>
          </div>
          <div className="item" style={{ width: '300px', margin: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '5px', overflow: 'hidden' }}>
            <img src="https://via.placeholder.com/300" alt="Project 2" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div className="item-details" style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '1.5em', color: '#333', marginBottom: '10px' }}>Project 2</h3>
              <p style={{ fontSize: '1.1em', color: '#777', lineHeight: '1.6' }}>Description of project 2 goes here.</p>
              <a href="#" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#ff6347', color: '#fff', textDecoration: 'none', borderRadius: '3px', marginTop: '10px' }}>View Details</a>
            </div>
          </div>
          {/* Add more portfolio items as needed */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
