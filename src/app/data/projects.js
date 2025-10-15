export const projects = [
  {
    id: 1,
    title: "LSD Snapshot",
    description: "LSD is an exchange-neutral tool designed for modern cryptocurrency traders. Provides real-time prices, historical data, crypto podcasts, and news to help traders make informed decisions.",
    features: [
      "Track real-time cryptocurrency prices",
      "Historical price data and charts", 
      "Crypto news integration",
      "Contact form with email notifications"
    ],
    technologies: ["React", "Node.js", "Express", "CoinCap API", "NewsAPI", "Amazon SES", "Materialize"],
    liveLink: "https://lsd-snapshot.vercel.app/",
    codeLink: "https://github.com/shamik05/LSD-Snapshot",
    image: "/images/lsd-screenshot.png",
  },
  {
    id: 2,
    title: "Employee Directory",
    description: "A React frontend application for managing and viewing employee information with search and filter capabilities.",
    features: [
      "Employee search and filtering",
      "Responsive design",
      "Modern React hooks"
    ],
    technologies: ["React", "CSS3", "JavaScript"],
    liveLink: "https://employee-directory-topaz-eight.vercel.app/",
    codeLink: "https://github.com/shamik05/Employee-Directory",
    image: "/images/employee-directory.png",
  },
  {
    id: 3,
    title: "Employee CMS",
    description: "A CLI Node.js application for employee management with MySQL database integration.",
    features: [
      "Command-line interface",
      "MySQL database integration", 
      "CRUD operations for employees"
    ],
    technologies: ["Node.js", "MySQL", "Inquirer", "CLI"],
    liveLink: null,
    codeLink: "https://github.com/shamik05/Employee-CMS",
    image: "/images/employee-cms.png",
  }
];