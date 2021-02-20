/* eslint-disable */
import React from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from "react-scrollspy";
import SocialShare from "../Constants/SocialShare";

const Header = (props) => {
  window.addEventListener("load", () => {
    console.log("All assets are loaded");
  });

  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  };

  const CloseMenuTrigger = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  };

  window.addEventListener("scroll", () => {
    const value = window.scrollY;
    if (value > 100) {
      document.querySelector(".header--fixed").classList.add("sticky");
    } else {
      document.querySelector(".header--fixed").classList.remove("sticky");
    }
  });

  const elements = document.querySelectorAll(".has-droupdown > a");
  for (const i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
        this.classList.toggle("open");
      };
      }
    }
    const { logo, color = "default-color" } = props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src={require("../Assets/images/logo/logo-light.png").default} alt="Digital Agency" />;
    } else if (logo === "dark") {
      logoUrl = <img src={require("../Assets/images/logo/logo-dark.png").default} alt="Digital Agency" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src={require("../Assets/images/logo/logo-symbol-dark.png").default} alt="Digital Agency" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src={require("../Assets/images/logo/logo-symbol-light.png").default} alt="Digital Agency" />;
    } else {
      logoUrl = <img src={require("../Assets/images/logo/logo.png").default} alt="Digital Agency" />;
    }

  return (
    <header className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href={props.homeLink}>
              {/* {logoUrl} */}
            </a>
          </div>
          <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy className="mainmenu" items={["home", "about", "skills", "projects"]} currentClassName="is-current" offset={-200}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </Scrollspy>
          </nav>
        </div>
        <div className="header-right">
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map(({ key, link, Social }) => (
                <li key={key}><a href={`${link}`}>{Social}</a></li>
              ))}
            </ul>
          </div>
          <div className="header-btn">
            <a className="rn-btn" href="">
              <span>HIRE ME</span>
            </a>
          </div>
          {/* Start Hamburger Menu  */}
          <div className="hamburger-menu d-block d-lg-none pl--20">
            <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu /></span>
          </div>
          {/* End Hamburger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={CloseMenuTrigger} className="closeTrigger"><FiX /></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
