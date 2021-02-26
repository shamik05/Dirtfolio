import React from "react";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import {
  DiCss3, DiSass, DiJavascript1, DiMongodb, DiMaterializecss, DiGit,
} from "react-icons/di";
import {
  SiTypescript, SiBootstrap, SiMaterialUi, SiReactrouter, SiJquery, SiSocketDotIo, SiGithub, SiStrapi, SiHeroku, SiEslint, SiDynamics365, SiVisualstudio,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ReactComponent as SQL } from "../Assets/Icons/sql.svg";
import { ReactComponent as Handlebars } from "../Assets/Icons/handlebars.svg";
import { ReactComponent as Express } from "../Assets/Icons/express.svg";
import { ReactComponent as Sequelize } from "../Assets/Icons/sequelize.svg";
import { ReactComponent as Passport } from "../Assets/Icons/passport.svg";
import { ReactComponent as Inquirer } from "../Assets/Icons/inquirer.svg";
import { ReactComponent as Mongoose } from "../Assets/Icons/mongoose.svg";

export const Languages = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    description: "There was a time when I would inspect websites and have no idea what the language or syntax meant. Now, it's fantastic to effortlessly read the elements.",
  },
  {
    icon:
  <>
    <DiCss3 />
    <DiSass />
  </>,
    title: "CSS3/SaSS",
    description: "CSS alignment was difficult till I grew comfortable with flexbox. However, CSS files would get out of control as projects grew. Sass solved all those issues and the transition was seemless.",
  },
  {
    icon:
  <>
    <DiJavascript1 />
    <FaNodeJs />
    <SiTypescript />
  </>,
    title: "JavaScript/Node/TypeScript",
    description: "JS and Node serving both front-end and back-end along with its dynamic nature is attractive. Recently, I have started using TypeScript to reduce debugging time.",
  },
  {
    icon:
  <>
    <SQL stroke="currentColor" fill="currentColor" strokeWidth="1" height="1em" width="1em" />
    <GrMysql />

    <Sequelize stroke="currentColor" fill="currentColor" height="1em" width="1em" />
  </>,
    title: "SQL/MySQL/Sequelize",
    description: "I had to self-learn SQL on the job but the bootcamp greatly increased my understanding and potency by introducing MySQL. Sequelize is my go-to ORM if needed. I hope to learn Postgres as well.",
  },
  {
    icon:
  <>
    <DiMongodb />
    <Mongoose stroke="currentColor" fill="currentColor" strokeWidth="1" height="1.1em" width="1.1em" />
  </>,
    title: "NoSQL/MongoDB/Mongoose",
    description: "MongoDB is easier to setup and work with when I need to store data such as array and objects without worrying about any row manipulation. Mongoose is my go-to ODM.",
  },
  {
    icon: <Handlebars stroke="currentColor" fill="currentColor" strokeWidth="1" height="1.1em" width="1.1em" />,
    title: "Handlebars",
    description: "Express Handlebars was the next step after working with basic html pages. Mapping data from the back-end became significantly easier and was used in the Wheels Gone Wild project.",
  },
];

export const Frameworks = [
  {
    icon: <Express stroke="currentColor" fill="currentColor" strokeWidth="1" height="1.2em" width="1.2em" />,
    title: "Express",
    description: "Sometimes I feel guilty about being more famaliar with the express syntax more than the native node ones. I plan to refactor an existing application into pure node instead of express.",
  },
  {
    icon: <SiBootstrap />,
    title: "Bootstrap",
    description: "Can't go wrong with the simplicity of Bootstrap's layout tools. Container > Row > # of Columns was a cornerstone for a lot of my earlier work. I can't wait for Bootstrap 5!",
  },
  {
    icon: <SiMaterialUi />,
    title: "Material-UI",
    description: "Material-UI seemed to require a lot more setup time than Bootstrap. However, once setup with your theme and styling, writing jss code is enjoyable.",
  },
  {
    icon: <DiMaterializecss />,
    title: "Materialize",
    description: "Materialize was my introduction to Material Design and was used in the LSD project. It really enforced some guidelines which were helpful when learning html.",
  },
];

export const Libraries = [
  {
    icon: <FaReact />,
    title: "React",
    description: "Learning React was and is so enjoyable and it continually challenges me on a daily basis. I use the Create-React-App for my apps. I hope to setup from scratch one day.",
  },
  {
    icon: <SiReactrouter />,
    title: "React Router",
    description: "React Router's hooks to deal with history and query parameters are so underrated. There was a time when I was manually writing out code to setup query parameters. So thank you React Router.",
  },
  {
    icon: <SiJquery />,
    title: "jQuery",
    description: "I heavily used jQuery for dom manipulation and REST apis. It shortens the amount of code needing to be written.",
  },
  {
    icon: <Passport strokeWidth="1" height="1em" width="1em" />,
    title: "Passport.js",
    description: "Passport.js was my first introduction to setting up authentication for my apps. Plus, ",
  },
  {
    icon: <SiSocketDotIo />,
    title: "Socket.IO",
    description: "I encountered websockets when requiring bi-directional communication for our two player game. While Socket.IO isn't a pure websocket library, nonetheless it served as a good introduction to other protocols besides HTTP.",
  },
  {
    icon: <Inquirer fill="currentColor" />,
    title: "Inquirer.js",
    description: "Inquirer was the first JavaScript library I encountered. Although it works, it's rather bulky and requires additional modification for async operations.",
  },
];

export const Others = [
  {
    icon: <SiVisualstudio />,
    title: "Visual Studio",
    description: "Visual Studio is my choice IDE for windows. It has integrated source control support and the emmet snippets are a huge life saver when I want to quickly code something.",
  },
  {
    icon:
  <>
    <DiGit />
    <SiGithub />
  </>,
    title: "Git/GitHub",
    description: "The importance of a version control system was hammered into us at the bootcamp. Git also instilled the importance of team work and accountability as I heavily used pull requests to complete projects.",
  },
  {
    icon: <SiHeroku />,
    title: "Heroku",
    description: "I use Heroku for deploying apps that require a backend. It's intuitive UI connected with GitHub makes deploying changes trivial. The cost to the free usage is apps sleep when they remain inactive.",
  },
  {
    icon: <SiStrapi />,
    title: "Strapi",
    description: "Headless CMS introduced another layer organization once I understood how powerful it was. It is overkill for simple apps. But for web apps, having all your content seperate from your logic is a boon.",
  },
  {
    icon: <SiEslint />,
    title: "ESLint",
    description: "My favourite linter config is the Airbnb and I use it in every project. Something so satisfying being reminded of an indendation error.",
  },
  {
    icon: <SiDynamics365 />,
    title: "Dynamics CRM",
    description: "CRM was my first window into how Sales, Leads, and Customers can be managed from a single app. Also, it taught me the importance of importing and sanitizing databases.",
  },
];
