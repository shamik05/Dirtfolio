/* eslint-disable */
import React from "react";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { DiCss3, DiSass, DiJavascript1, DiMongodb, DiMaterializecss, DiGit } from "react-icons/di";
import { SiTypescript, SiBootstrap, SiMaterialUi, SiReactrouter, SiJquery, SiSocketDotIo, SiGithub, SiStrapi, SiHeroku, SiEslint, SiDynamics365 } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ReactComponent as SQL} from "../Assets/Icons/sql.svg";
import { ReactComponent as Handlebars} from "../Assets/Icons/handlebars.svg";
import { ReactComponent as Express } from "../Assets/Icons/express.svg";
import { ReactComponent as Sequelize } from "../Assets/Icons/sequelize.svg";
import { ReactComponent as Passport } from "../Assets/Icons/passport.svg";
import { ReactComponent as Inquirer } from "../Assets/Icons/inquirer.svg";
import { ReactComponent as Mongoose } from "../Assets/Icons/mongoose.svg";

export const Languages = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <><SQL stroke="currentColor" fill="currentColor" strokeWidth="1" height="1em" width="1em" /> <GrMysql /> <Sequelize stroke="currentColor" fill="currentColor" height="1em" width="1em" /></>,
    title: "SQL",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <><DiCss3 /> <DiSass /></>,
    title: "CSS3",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <><DiJavascript1 /> <FaNodeJs /> <SiTypescript /></>,
    title: "JavaScript",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <Handlebars stroke="currentColor" fill="currentColor" strokeWidth="1" height="1.1em" width="1.1em"/>,
    title: "Handlebars",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <><DiMongodb /> <Mongoose stroke="currentColor" fill="currentColor" strokeWidth="1" height="1.1em" width="1.1em"/></>,
    title: "NoSQL",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  }
];

export const Frameworks = [
  {
    icon: <Express stroke="currentColor" fill="currentColor" strokeWidth="1" height="1.2em" width="1.2em" />,
    title: "Express",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <SiBootstrap />,
    title: "Bootstrap",
  },
  {
    icon: <SiMaterialUi />,
    title: "Material-UI",
  },
  {
    icon: <DiMaterializecss />,
    title: "Materialize"
  }
];

export const Libraries = [
  {
    icon: <FaReact />,
    title: "React",
    description: "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <SiReactrouter />,
    title: "React Router"
  },
  {
    icon: <SiJquery />,
    title: "jQuery"
  },
  {
    icon: <SiSocketDotIo />,
    title: "Socket.IO"
  },
  {
    icon: <Passport strokeWidth="1" height="1em" width="1em" />,
    title: "Passport.js",
  },
  {
    icon: <Inquirer fill="currentColor" />,
    title: "Inquirer.js",
  }
];

export const Others = [
  {
    icon: <><DiGit /> <SiGithub /></>,
    title: "Git",
  },
  {
    icon: <SiStrapi />,
    title: "Strapi"
  },
  {
    icon: <SiHeroku />,
    title: "Heroku",
  },
  {
    icon: <SiEslint />,
    title: "ESLint"
  },
  {
    icon: <SiDynamics365 />,
    title: "Dynamics CRM",
  },
];
