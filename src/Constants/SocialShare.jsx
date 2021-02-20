import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const SocialShare = [
  { key: "linkedin", Social: <FaLinkedinIn />, link: "http://www.linkedin.com/in/shamik-h/" },
  { key: "github", Social: <FaGithub />, link: "https://github.com/shamik05" },
  { key: "codewars", Social: <SiCodewars />, link: "https://www.codewars.com/users/shamik05" },
  { key: "email", Social: <HiOutlineMail />, link: "mailto:shamikhaldar05@gmail.com" },
];

export default SocialShare;
