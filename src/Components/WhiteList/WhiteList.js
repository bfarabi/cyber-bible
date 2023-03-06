import React from 'react';
import './WhiteList.css';
import WhitList from '../../Assets/Asset 34n.png';
import JoinBox from '../../Assets/Asset 31.png';

const WhiteList = () => {
  return (
    
    <div className='relative text-center container '>
      <img className='mx-auto' src={WhitList} alt="" />
      <p style={{fontFamily:"Orbitron"}} className='text-3xl text-white '>Reserve your Whitelist Spot
      </p>
      <p style={{fontFamily:"HallFetica"}} className='pt-6 text-white'>1. Follow <span className='text-cyan-500'>@CyberBibles</span> on Twitter [Link] <br />
        2. Like, Comment, Retweet & Tag 2 friends on a recent post <br />
        3. Join the Discord [Invite link] <br />
        4. Submit ETH wallet address <br />
        5. [Field] <br />
        6. [Email field (optional)] <br />
        7. *Visit Discord to confirm your WL reservation</p>
      <div className="relative mx-auto">
        <img className=" mx-auto" src={JoinBox} alt="" />
        <p style={{fontFamily:"Orbitron"}} className='text-3xl text-white join-text'>JOIN WHITELIST</p>
      </div>

      <label className="input-group group-input justify-center ">
        <input type="text" placeholder="" className="input border-gray-300 w-1/3 bg-slate-700 text-white" />
        <span style={{fontFamily:"ExoRoman"}} className='text-md bg-teal-300 w-1/12 cursor-pointer '>Submit</span>
      </label>

    </div>
  );
};

export default WhiteList;