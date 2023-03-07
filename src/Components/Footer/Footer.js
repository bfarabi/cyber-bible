import React from "react";
import "./Footer.css";
import FooterImg from "../../Assets/Asset 90.png";
import Logo from "../../Assets/Asset 6n.png";
import facebook from "../../Assets/Asset 80.png";
import twitter from "../../Assets/Asset 79.png";
import insta from "../../Assets/Asset 86.png";

const Footer = () => {
  return (
    <div className="container relative">
      <img className="w-full pt-20 footer-img" src={FooterImg} alt="" />
      <div className="footer-two-part ">
        <div className="flex-part flex">
        <div className="footer-left w-1/2">
          <p style={{fontFamily:'HallFetica'}} className="w-4/5 pt-10 font-bold">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut soluta
            laudantium tenetur vel in quas cum dolore voluptates reiciendis
            adipisci!{" "}
          </p>
        </div>
        <div className="footer-right w-1/2">
          <div className="footer-logo flex ">
            <div className="social-logo flex">
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
            </div>
            <img className="w-3/5 footer-cyber" src={Logo} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
