import React from 'react';
import './About.css';
import AboutLogo from '../../Assets/Asset 23.png';
import Box from '../../Assets/Asset 20.png';
import Mint from '../../Assets/Asset 26n.png';


const About = () => {
  return (
    <div className='container relative about-sec'>
      <img className='about-logo' src={AboutLogo} alt="" />
      <div className='relative'>
        <p className='text-white about-text'>In a world where truth is becoming increasingly difficult to find, translations of the bible are being bought up and manipulated by
          secular forces. With the rise of AI, knowledge is becoming controlled by biased sources with conflicting agendas. But what happens
          when even the AI-generated information about the bible is tampered with? That's where CyberBibles steps in. Our mission is to
          preserve the word of God on decentralized networks, ensuring that it will never be altered or deleted. In a future where biblical
          truth may come at great cost, CyberBibles will stand as the last shining light, guiding souls to Jesus Christ - the only truth, the only
          life, and the only way to salvation. HIS WORDS SHALL NEVER PASS AWAY.</p>
      </div>

      <div className="all-box flex justify-center relative flex-wrap">
        <div className="box-group relative">
          <div className="">
            <img src={Box} alt="" />
            <h1 className='text-5xl  text-white title-box'> Title</h1>
          </div>
        </div>
        <div className="box-group relative">
          <div className="">
            <img src={Box} alt="" />
            <h1 className='text-5xl  text-white title-box'> Title</h1>
          </div>
        </div>
        <div className="box-group relative">
          <div className="">
            <img src={Box} alt="" />
            <h1 className='text-5xl  text-white title-box'> Title</h1>
          </div>
        </div>
      </div>

      <div className="relative mint-logo flex justify-center">
        <img src={Mint} alt="" />
        
        <p className='text-4xl mint-date text-white'>3/23/23</p>
      </div>
      

    </div>
  );
};

export default About;