import React from "react";
import { FiX, FiMenu } from "react-icons/fi";

const HamburgerMenu = () => {
  const menuTrigger = () => {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  };

  const CloseMenuTrigger = () => {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  };

  return (
    <>
      <div className="hamburger-menu d-block d-lg-none pl--20">
        <span onClick={menuTrigger} onKeyDown={menuTrigger} className="menutrigger text-white" role="menu" tabIndex="0"><FiMenu /></span>
      </div>
      <div className="close-menu d-block d-lg-none">
        <span onClick={CloseMenuTrigger} onKeyDown={menuTrigger} className="closeTrigger" role="menu" tabIndex="0"><FiX /></span>
      </div>
    </>
  );
};

export default HamburgerMenu;
