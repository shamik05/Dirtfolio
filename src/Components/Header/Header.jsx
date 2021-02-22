/* eslint-disable */
import React from "react";
import Scrollspy from "react-scrollspy";
import SocialShare from "../../Constants/SocialShare";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ homeLink, color }) => {
  window.addEventListener("load", () => {
    console.log("All assets are loaded");
  });

  window.addEventListener("scroll", () => {
    const value = window.scrollY;
    if (value > 100) {
      document.querySelector(".header--fixed").classList.add("sticky");
    } else {
      document.querySelector(".header--fixed").classList.remove("sticky");
    }
  });

  const elements = document.querySelectorAll(".has-droupdown > a");
  console.log(elements);
  for (const i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].onclick = function () {
        this.parentElement.querySelector(".submenu").classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  return (
    <header className={`header-area header-style-two header--fixed ${color}`}>
      <div className="header-wrapper">
        <div className="header-left d-flex align-items-center">
          <div className="logo">
            <a href={homeLink}>
              {/* {logoUrl} */}
              {/* <img src={require("../../logo_size.jpg").default} alt="Website Logo" /> */}
            </a>
          </div>
          <div className="social-share-inner">
            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
              {SocialShare.map(({ key, link, Social }) => (
                <li key={key}><a href={`${link}`} target="_blank" rel="noreferrer noopener">{Social}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="header-right">
        <nav className="mainmenunav d-lg-block ml--50">
            <Scrollspy className="mainmenu" items={["home", "about", "skills", "projects"]} currentClassName="is-current" offset={-200}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </Scrollspy>
          </nav>
          <div className="header-btn">
            <a className="rn-btn" href="./">
              <span>HIRE ME</span>
            </a>
          </div>

          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
