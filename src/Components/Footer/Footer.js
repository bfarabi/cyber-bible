import React from 'react';
import './Footer.css';
import FooterImg from '../../Assets/Asset 90.png';

const Footer = () => {
    return (
        <div className='container'>
        <img className='w-full pt-20' src={FooterImg} alt="" />
        </div>
    );
};

export default Footer;