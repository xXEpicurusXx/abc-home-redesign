import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo-1.png";
import menu_icon from "../../assets/menu-icon.png"
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobilemenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobilemenu(false) : setMobilemenu(true);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?'': 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-180} duration={500}>
            会社案内
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-280} duration={500}>
            リフォーム事例
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
          画廊
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-310} duration={500}>
            お客様の声
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            お問い合わせ
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
