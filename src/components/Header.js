import React from "react";
import "../css/Header.css";
import Logo from "../lottie/lottie";
function Header() {
  return (
    <>
      <div id="header">
        <div>
          <Logo />
        </div>
        <div className="header_gnb">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#Portfolio">Projects</a>
          <a href="#Contact" className="contact">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
