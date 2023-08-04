import React from 'react';
import ItemsDisplay from '../components/ItemsDisplay';
import { Fragment } from 'react';
import Footer from '../components/Footer';
import HeroImage from '../images/laura-chouette-fPL339HWo68-unsplash.jpg'; // Import the image
import RegisterForm from '../components/RegisterForm';
import Login from '../components/Login';

function Home() {
  return (
    <Fragment>
      <h2>Welcome to JAZACART</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <header
          style={{
            paddingLeft: 0,
            backgroundImage: `url(${HeroImage})`,
            height: 557,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '6px',
            width: '100%',
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          ></div>
        </header>
      </div>
      <ItemsDisplay />
      <Footer />
      <Login />
    </Fragment>
  );
}

export default Home;
