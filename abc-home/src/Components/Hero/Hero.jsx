import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>ABCホームの私たちからのご挨拶</h1>
        <p>
          一級建築士と専属のコーディネーターにお任せください！御見積もりは全て無料です。
        </p>
        <Link
          to="about"
          smooth={true}
          offset={-180}
          duration={500}
          className="btn"
        >
          探検する <img src={dark_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
