import React from "react";
import Logo1 from "../assets/logos/hubspot.png";
import Logo2 from "../assets/logos/zoom.png";
import Logo3 from "../assets/logos/notion.png";
import Logo4 from "../assets/logos/netflix.png";
import Logo5 from "../assets/logos/dribble.png";
import Logo6 from "../assets/logos/amazon.png";

const LogoCaro = () => {
  return (
    <div className="pt-24 overflow-hidden">
      <div className="flex space-x-12 justify-between items-center  *:">
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
        <img src={Logo5} alt="" />
        <img src={Logo6} alt="" />
      </div>
    </div>
  );
};

export default LogoCaro;
