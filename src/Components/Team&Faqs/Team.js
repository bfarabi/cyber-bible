import React from "react";
import TeamLogo from "../../Assets/Asset 58n.png";
import Single from "../../Assets/Asset 61.png";

const Team = () => {
  return (
    <div className="">
      <img className="mx-auto" src={TeamLogo} alt="" />

      <div className="team-group flex justify-center">
      
        <div className="single-box mx-8">
            <img className="w-full" src={Single} alt="" />
        </div>
        <div className="single-box mx-8">
            <img className="w-full" src={Single} alt="" />
        </div>
        <div className="single-box mx-8">
            <img className="w-full" src={Single} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Team;
