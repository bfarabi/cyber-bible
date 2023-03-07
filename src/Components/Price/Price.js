import React from "react";
import "./Price.css";
import PriceLogo from "../../Assets/Asset 44n.png";
import PreSale from "../../Assets/Asset 43.png";
import PublicSale from "../../Assets/Asset 42.png";
import Benefit from "../../Assets/Asset 51.png";
import SupplyBg from "../../Assets/Asset 96n.png";
import SyberMap from "../../Assets/Asset 87.png";
import benefitLg from "../../Assets/Asset 46n.png";
import Tringle from "../../Assets/Asset 47.png";
import supplyLg from "../../Assets/Asset 52.png";
import MapLogo from "../../Assets/Asset 54.png";
import leftArrow from "../../Assets/Asset 89.png";
import rightArrow from "../../Assets/Asset 88.png";

const Price = () => {
  return (
    <div className="container Price-sec relative">
      <img className="mx-auto" src={PriceLogo} alt="" />
      <div className="two-part mb-24 flex justify-center">
        <div className="pre-sale relative">
          <img src={PreSale} alt="" />
          <div className="price-box ">
            <div
              style={{ fontFamily: "ExoRoman" }}
              className="price-text-box justify-center font-semibold flex"
            >
              <p className="text-7xl text-white mx-1">0.015</p>
              <p className=" text-white mx-1">
                E <br />
                T <br /> H
              </p>
            </div>
            <p
              style={{ fontFamily: "Orbitron" }}
              className="text-lg text-center text-white"
            >
              PRE SALE
            </p>
          </div>
        </div>

        <div className="public-sale relative">
          <img src={PublicSale} alt="" />
          <div className="public-box ">
            <div
              style={{ fontFamily: "ExoRoman" }}
              className="price-text-box justify-center font-semibold flex"
            >
              <p className="text-8xl text-white mx-1">0.025</p>
              <p className=" text-white font-bold mx-1 text-lg">
                E <br />
                T <br /> H
              </p>
            </div>
            <p
              style={{ fontFamily: "Orbitron" }}
              className="text-2xl text-center text-white"
            >
              PUBLIC SALE
            </p>
          </div>
        </div>
      </div>

      {/* benefit area */}

      <div className="relative pt-8 ">
        <img className="mx-auto w-4/5 benefit-bg" src={Benefit} alt="" />
        <img className="benefit-logo" src={benefitLg} alt="" />
        <div className="benefit-box flex ">
          <div className="benefit-left w-2/5">
           <div className="benefit-text">
           <p className="text-cyan-400">
              <span className="inline-flex">
                <img src={Tringle} alt="" />
              </span>{" "}
              OWN A PIECE OF HISTORY
            </p>
            <small className="text-white ">
              For the FIRST time ever, the greatest selling book of all time is
              stored permanently on the blockchain. 
            </small>
           </div>
           <div className="benefit-text">
           <p className="text-cyan-400">
              <span className="inline-flex">
                <img src={Tringle} alt="" />
              </span>{" "}
              OWN A PIECE OF HISTORY
            </p>
            <small className="text-white ">
              For the FIRST time ever, the greatest selling book of all time is
              stored permanently on the blockchain. 
            </small>
           </div>
           <div className="benefit-text">
           <p className="text-cyan-400">
              <span className="inline-flex">
                <img src={Tringle} alt="" />
              </span>{" "}
              OWN A PIECE OF HISTORY
            </p>
            <small className="text-white ">
              For the FIRST time ever, the greatest selling book of all time is
              stored permanently on the blockchain. 
            </small>
           </div>
            
            
          </div>
          <div className="benefit-right w-2/5">
          <div className="benefit-text">
           <p className="text-cyan-400">
              <span className="inline-flex">
                <img src={Tringle} alt="" />
              </span>{" "}
              OWN A PIECE OF HISTORY
            </p>
            <small className="text-white ">
              For the FIRST time ever, the greatest selling book of all time is
              stored permanently on the blockchain. 
            </small>
           </div>
          <div className="benefit-text">
           <p className="text-cyan-400">
              <span className="inline-flex">
                <img src={Tringle} alt="" />
              </span>{" "}
              OWN A PIECE OF HISTORY
            </p>
            <small className="text-white ">
              For the FIRST time ever, the greatest selling book of all time is
              stored permanently on the blockchain. 
            </small>
           </div>
          <div className="benefit-text">
           <p className="text-cyan-400">
              <span className="inline-flex">
                <img src={Tringle} alt="" />
              </span>{" "}
              OWN A PIECE OF HISTORY
            </p>
            <small className="text-white ">
              For the FIRST time ever, the greatest selling book of all time is
              stored permanently on the blockchain.
            </small>
           </div>
          </div>
        </div>
      </div>

      <div className="supply-box relative">
        <img className="mx-auto w-9/12 opacity-40 " src={SupplyBg} alt="" />
        <div className="logo-text">
          <img className="supply-logo" src={supplyLg} alt="" />
          <p style={{ fontFamily: "ExoRoman" }} className="text-8xl text-white">12,000</p>
          <img className="Map-logo" src={MapLogo} alt="" />
        </div>
      </div>

      <div className="cyber-map pt-6 relative">
        
        <div className="two-arrow flex justify-around items-center ">
          <img className="arrow" src={leftArrow} alt="" />
          <img className=" " src={SyberMap} alt="" />
          <img className="arrow" src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Price;
