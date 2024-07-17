
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from '../img/prison2.jpeg'; // Adjust the path relative to Home.js

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <div className="flex-grow-1 bg-light" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '85vh' }}>
        <div className="container text-center py-5">
          <img src={backgroundImage} alt="Home" className="img-fluid rounded-circle shadow" style={{ maxWidth: '300px' }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;




