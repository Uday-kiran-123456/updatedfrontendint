import React from 'react';
import styles from '../styles/InsuranceCards.module.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../landing/Footer';
import Nagentfooter from './Nagentfooter';

const InsuranceCards = () => {
  const cards1 = [
    { 
      title: "Health Insurance", 
      description: "Comprehensive health coverage for your peace of mind.",
      imgSrc: "https://res.cloudinary.com/do6twjc6g/image/upload/v1729147589/health_fu7fd6.webp"  
    },
    { 
      title: "Life Insurance", 
      description: "Secure your family's future with our life insurance plans.",
      imgSrc: "https://res.cloudinary.com/do6twjc6g/image/upload/v1729147736/life_gwqbpr.jpg"  
    }];
    const cards2 = [
    { 
      title: "Vehicle Insurance", 
      description: "Protect your vehicle against accidents and theft.",
      imgSrc: "https://res.cloudinary.com/do6twjc6g/image/upload/v1729148331/Vehicle-Insurance_kmq6h7.jpg"  
    },
    { 
      title: "Travel Insurance", 
      description: "Enjoy your travels with confidence and coverage.",
      imgSrc: "https://res.cloudinary.com/do6twjc6g/image/upload/v1729147674/Travel_dhe90q.jpg"  
    }
  ];

  return (
    <><Navbar />
    <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src="https://res.cloudinary.com/do6twjc6g/image/upload/v1729147589/health_fu7fd6.webp"  alt="Health Insurance" className={styles.cardImage} />
          <h3>Health Insurance</h3>
          <p>Comprehensive health coverage for your peace of mind.</p>
          <Link to="/health-policy-update">
            <button className={styles.learnMore}>Choose</button>
          </Link>
        </div>
        <div className={styles.card}>
          <img src="https://res.cloudinary.com/do6twjc6g/image/upload/v1729147736/life_gwqbpr.jpg"   alt="Life Insurance" className={styles.cardImage} />
          <h3>Life Insurance</h3>
          <p>Secure your family's future with our life insurance plans.</p>
          <Link to="/life-policy-update">
            <button className={styles.learnMore}>Choose</button>
          </Link>
        </div>
        <div className={styles.card}>
          <img src="https://res.cloudinary.com/do6twjc6g/image/upload/v1729147674/Travel_dhe90q.jpg"  alt="Travel Insurance" className={styles.cardImage} />
          <h3>Travel Insurance</h3>
          <p>Enjoy your travels with confidence and coverage.</p>
          <Link to="/travel-policy-update">
            <button className={styles.learnMore}>Choose</button>
          </Link>
        </div>
        <div className={styles.card}>
          <img src="https://res.cloudinary.com/do6twjc6g/image/upload/v1729148331/Vehicle-Insurance_kmq6h7.jpg"  alt="Vehicle Insurance" className={styles.cardImage} />
          <h3>Vehicle Insurance</h3>
          <p>Protect your vehicle against accidents and theft.</p>
          <Link to="/motor-policy-update">
            <button className={styles.learnMore}>Choose</button>
          </Link>
        </div>
    </div>
    <Nagentfooter />
    </>
  );
};

export default InsuranceCards;