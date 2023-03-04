import React from 'react';
import About from '../About/About';
import HeroSection from '../Hero-section/HeroSection';
import Navbar from '../Navbar/Navbar';
import Price from '../Price/Price';
import WhiteList from '../WhiteList/WhiteList';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <WhiteList></WhiteList>
      <Price></Price>
    </div>
  );
};

export default Home;