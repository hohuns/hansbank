import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <Link to="header" spy={true} smooth={true} offset={50} duration={500}>
            <li className="nav-item">Home</li>
          </Link>
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="nav-item">Feature</li>
          </Link>
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="nav-item">Operation</li>
          </Link>
          <Link
            to="section3"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <li className="nav-item">Testimonials</li>
          </Link>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2022 HansBank, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
