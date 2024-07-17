

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import prisonImage from '../img/prison2.jpeg';

const About = () => {
  return (
    <div className="d-flex flex-column">
      <main className="container mt-5 text-center flex-grow-1 " style={{ height: '616px' }}>
        <h2>ABOUT</h2>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img src={prisonImage} alt="Home" className="img-fluid rounded-circle mb-4" style={{ maxWidth: '300px' }} />
          <div style={{ maxWidth: '400px' }}>
            <p className="mb-4">
              Primak is a software application designed to manage inmate records within a correctional facility. The system allows a comprehensive record-keeping by enabling staff members, who are authorized and added by an administrator, to input and update inmate data. This data can include personal information, criminal history, current incarceration details, and any other relevant records. Primak streamlines the process of maintaining accurate and up-to-date information, thereby enhancing the efficiency and reliability of inmate management.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

