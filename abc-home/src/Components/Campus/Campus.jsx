import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/0000544995.jpg";
import gallery_2 from "../../assets/0000547206.jpg";
import gallery_3 from "../../assets/0000548595.jpg";
import gallery_4 from "../../assets/192102.jpg";

import gallery_5 from "../../assets/0000547416.jpg";
import gallery_6 from "../../assets/1397005253-612x612.jpg";
import gallery_7 from "../../assets/istockphoto-1220777762-612x612.jpg";
import gallery_8 from "../../assets/0000456432.jpg";

import gallery_9 from "../../assets/0000689578.jpg";
import gallery_10 from "../../assets/unit-bath-0001-0002-0001.jpg";
import gallery_11 from "../../assets/0000547183.jpg";
import gallery_12 from "../../assets/0000547414.jpg";


import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-scroll";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>

      <div className="gallery">
        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_7} alt="" />
        <img src={gallery_8} alt="" />
      </div>

      <div className="gallery">
        <img src={gallery_9} alt="" />
        <img src={gallery_10} alt="" />
        <img src={gallery_11} alt="" />
        <img src={gallery_12} alt="" />
      </div>
      <Link
        to="contact"
        smooth={true}
        offset={-260}
        duration={500}
        className="btn dark-btn"
      >
        当社のサービスに関するお問い合わせは、ここをクリックしてください。見積りも可能です。{" "}
        <img src={white_arrow} alt="" />
      </Link>
    </div>
  );
};

export default Campus;
