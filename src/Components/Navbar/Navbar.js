import React from 'react';
import Logo from '../../Assets/Asset 6n.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar container nav-bar justify-between items-center absolute">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact uppercase dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>story</a></li>
            <li><a>about</a></li>
            <li><a>mint</a></li>
            <li><a>benefits</a></li>
            <li><a>team</a></li>
            <li><a>faqs</a></li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        <div className=''>
          <img className='' src={Logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal uppercase px-1 pr-6">
          <li><a>story</a></li>
          <li><a>about</a></li>
          <li><a>mint</a></li>
          <li><a>benefits</a></li>
          <li><a>team</a></li>
          <li><a>faqs</a></li>
          <li><a className="border text-white px-4">Lorem</a></li>
        </ul>
      </div>
      {/* <div className="">
        
      </div> */}
    </div>
  );
};

export default Navbar;