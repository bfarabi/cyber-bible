import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import HeroSection from '../Hero-section/HeroSection';
import Navbar from '../Navbar/Navbar';
import Price from '../Price/Price';
import Team from '../Team&Faqs/Team';
import WhiteList from '../WhiteList/WhiteList';
import './Home.css';

const Home = () => {
  return (
    <div className='home container mx-auto'>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <WhiteList></WhiteList>
      <Price></Price>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default Home;