import React from 'react';
import './HeroSection.css';
import HeroImg from '../../Assets/Asset 11.png';
import TextBg from '../../Assets/Asset 8.png';
import DotImg from '../../Assets/Asset 10.png';
import SqrImg from '../../Assets/Asset 15.png';
import StoryImg from '../../Assets/Asset 94.png';
import DropImg from '../../Assets/Asset 9.png';
import BlackImg from '../../Assets/Asset 13.png';
import videoLg from '../../Assets/Asset 12.png';

const HeroSection = () => {
  return (
    <div className='hero-sec container text-white flex justify-end flex-col relative'>
      <div className="text-side ">
        <img src={TextBg} alt="" />
        <h1 className='text-4xl hero-text'> THE LAST <br />
          TESTAMENT <br />
          OF HOPE <br />
          IN A DARK <br />
          WORLD</h1>
        <img className='dot-img w-50' src={DotImg} alt="" />
        <img className="sqr-img" src={SqrImg} alt="" />
        <img className='story-img' src={StoryImg} alt="" />
      </div>

      <div className="img-side relative ">
        <img className='hero-image relative' src={HeroImg} alt="" />
        <img className='drop-img' src={DropImg} alt="" />

        <div className="video-thumb relative">
        <img className='black-img' src={BlackImg} alt="" />
        <img className='video-logo' src={videoLg} alt="" />

        </div>
      </div>
    </div>
  );
};

export default HeroSection;