const data = [
  { id: "0.0", name: "My Skills" },
  { id: "1.0", parent: "0.0", name: "Languages" },
  { id: "1.1", parent: "0.0", name: "Frameworks" },
  { id: "1.2", parent: "0.0", name: "Libraries" },
  { id: "1.3", parent: "0.0", name: "Others" },

  // Languages
  {
    id: "2.0", parent: "1.0", name: "SQL", value: 1,
  },
  {
    id: "2.1", parent: "1.0", name: "HTML5", value: 1,
  },
  {
    id: "2.2", parent: "1.0", name: "CSS3", value: 1,
  },
  {
    id: "2.3", parent: "1.0", name: "JAVASCRIPT", value: 1,
  },
  {
    id: "2.4", parent: "1.0", name: "HANDLEBARS.js", value: 1,
  },
  {
    id: "2.5", parent: "1.0", name: "NoSQL", value: 1,
  },

  // Frameworks
  {
    id: "2.6", parent: "1.1", name: "Express.js", value: 1,
  },
  {
    id: "2.7", parent: "1.1", name: "Bootstrap", value: 1,
  },
  {
    id: "2.8", parent: "1.1", name: "Material-UI", value: 1,
  },
  {
    id: "2.9", parent: "1.1", name: "Materialize", value: 1,
  },

  // Libraries
  {
    id: "2.10", parent: "1.2", name: "React", value: 1,
  },
  {
    id: "2.11", parent: "1.2", name: "React-Router", value: 1,
  },
  {
    id: "2.12", parent: "1.2", name: "jQuery", value: 1,
  },
  {
    id: "2.13", parent: "1.2", name: "Mongoose.js", value: 1,
  },
  {
    id: "2.14", parent: "1.2", name: "Socket.IO", value: 1,
  },
  {
    id: "2.15", parent: "1.2", name: "Passport.js", value: 1,
  },
  {
    id: "2.16", parent: "1.2", name: "Inquirer.js", value: 1,
  },
  {
    id: "2.17", parent: "1.2", name: "Moment.js", value: 1,
  },
  {
    id: "2.18", parent: "1.2", name: "Chart.js", value: 1,
  },

  // Others
  {
    id: "2.19", parent: "1.3", name: "MySQL", value: 1,
  },
  {
    id: "2.20", parent: "1.3", name: "MongoDB", value: 1,
  },
  {
    id: "2.21", parent: "1.3", name: "Sequelize", value: 1,
  },
  {
    id: "2.22", parent: "1.3", name: "AWS", value: 1,
  },
  {
    id: "2.23", parent: "1.3", name: "Git Version Control", value: 1,
  },
  {
    id: "2.24", parent: "1.3", name: "GitHub", value: 1,
  },
  {
    id: "2.25", parent: "1.3", name: "Heroku", value: 1,
  },
  {
    id: "2.26", parent: "1.3", name: "ESLint", value: 1,
  },
];

export default data;
