import React from 'react';
import PriceLogo from '../../Assets/Asset 44.png';
import PreSale from '../../Assets/Asset 43.png';
import PublicSale from '../../Assets/Asset 42.png';
import Benefit from '../../Assets/Asset 51.png';

const Price = () => {
  return (
    <div>
      <img className='mx-auto' src={PriceLogo} alt="" />
      <div className="two-part flex justify-center">
        <div className="pre-sale">
          <img src={PreSale} alt="" />
        </div>

        <div className="public-sale">
          <img src={PublicSale} alt="" />
        </div>
      </div>
      <div className="relative pt-8">
        <img className='mx-auto' src={Benefit} alt="" />
      </div>

    </div>
  );
};

export default Price;