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
    id: "3.0", parent: "2.2", name: "Sass", value: 1,
  },
  {
    id: "2.3", parent: "1.0", name: "JAVASCRIPT", value: 1,
  },
  {
    id: "3.1", parent: "2.3", name: "Node.js", value: 1,
  },
  {
    id: "3.2", parent: "2.3", name: "TypeScript.js", value: 1,
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
  // {
  //   id: "2.23", parent: "1.3", name: "Git Version Control", value: 1,
  // },
  {
    id: "2.24", parent: "1.3", name: "GitHub", value: 1,
  },
  {
    id: "2.25", parent: "1.3", name: "Heroku", value: 1,
  },
  {
    id: "2.26", parent: "1.3", name: "ESLint", value: 1,
  },
  {
    id: "2.27", parent: "1.3", name: "Dynamics CRM", value: 1,
  },
];

const options = {
  chart: {
    height: "54%",
    // width: 1000,
    backgroundColor: "rgb(213 228 255)",
    shadow: true,
    type: "sunburst",
    style: {
      fontFamily: "Arial",
    },
    margin: [0, 0, 0, 0],
  },
  title: {
    text: undefined,
  },
  credits: {
    enabled: false,
  },
  loading: {
    hideDuration: 1000,
    showDuration: 1000,
  },
  series: [{
    type: "sunburst",
    data,
    allowDrillToNode: true,
    allowTraversingTree: true,
    cursor: "pointer",
    accessibility: {
      description: "A sunburst chart of my skills",
      enabled: true,
      exposeAsGroupOnly: true,
    },
    animation: {
      duration: 1500,
    },
    borderColor: null,
    dataLabels: {
      enabled: true,
      crop: true,
      format: "{point.name}",
      padding: 0,
      // rotationMode: "circular",
      shadow: true,
      style: {
        fontSize: "20px",
        color: "black",
        textOutline: "0px",
      },
    },
    description: "A sunburst chart of my skills",
    shadow: true,
    size: "100%",
    traverseUpButton: {
      align: "right",
    },
    levels: [{
      level: 1,
      levelIsConstant: true,
      levelSize: {
        unit: "pixels",
        value: 0,
      },
    },
    {
      level: 2,
      colorByPoint: true,
      levelSize: {
        unit: "percentage",
        value: 35,
      },
    },
    {
      level: 3,
      colorVariation: {
        key: "brightness",
        to: -0.2,
      },
    }],
  }],
  plotOptions: {
    sunburst: {
      center: ["50%", "50%"],
    },
  },
  tooltip: {
    headerFormat: "",
    pointFormat: "{point.name}",
    fontSize: "100",
    fontWeight: "bold",
    backgroundColor: {
      linearGradient: [0, 0, 0, 60],
      stops: [
        [0, "#FFFFFF"],
        [1, "#E0E0E0"],
      ],
    },
    borderWidth: 1,
    borderColor: "#AAA",
  },
};

export default options;
