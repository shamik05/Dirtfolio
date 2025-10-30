export const projects = [
  {
    id: 0,
    title: "LSD Snapshot",
    description: "A comprehensive cryptocurrency tracking platform providing real-time market data, historical charts, and crypto news aggregation to help traders make informed decisions.",
    features: [
      "Real-time cryptocurrency price tracking from multiple exchanges",
      "Interactive historical price charts with multiple timeframes", 
      "News aggregation from top crypto publications",
      "Responsive design optimized for desktop and mobile",
      "Contact system with automated email notifications"
    ],
    technologies: ["React", "Node.js", "Express", "CoinCap API", "NewsAPI", "Amazon SES", "Chart.js", "Tailwind CSS"],
    liveLink: "https://lsd-snapshot.vercel.app",
    codeLink: "https://github.com/shamik05/LSD-Snapshot",
    image: "/images/lsd-screenshot.png",
    gif: "/images/lsd.gif",
    status: "Live"
  },
  {
    id: 1,
    title: "Employee Directory",
    description: "A modern React application for managing employee information with advanced search, filtering, and sorting capabilities.",
    features: [
      "Advanced search by name, department, or role",
      "Multi-criteria filtering system", 
      "Sortable employee data tables",
      "Responsive mobile-first design",
      "Clean, intuitive user interface"
    ],
    technologies: ["React", "Next.js", "JavaScript", "Context API", "Custom Hooks", "CSS3", "HTML5"],
    liveLink: "https://employee-directory-topaz-eight.vercel.app",
    codeLink: "https://github.com/shamik05/employee-directory",
    gif: "/images/employee-directory.gif",
    image: "/images/employee-directory.png",
    status: "Live"
  },
  {
    id: 2,
    title: "Employee CMS",
    description: "A command-line interface application for comprehensive employee management with MySQL database integration.",
    features: [
      "Full CRUD operations for employees, roles, and departments",
      "MySQL database with complex relational data", 
      "Command-line interface with interactive prompts",
      "Budget tracking and department management",
      "Data validation and error handling"
    ],
    technologies: ["Node.js", "MySQL", "Inquirer", "Database Design", "CLI"],
    liveLink: null,
    codeLink: "https://github.com/shamik05/employee-cms",
    image: "/images/employee-cms.png",
    gif: "/images/employee-cms.gif",
    status: "Completed"
  }
];