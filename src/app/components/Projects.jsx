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
    technologies: ["React", "Node.js", "Express", "CoinCap API", "NewsAPI", "Amazon SES"],
    liveLink: "https://your-lsd-app.vercel.app",
    codeLink: "https://github.com/your-username/LSD-Snapshot",
    image: "/images/lsd-screenshot.png", // You'll add this later
    accentColor: "#769656" // Chess green
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
    liveLink: "https://your-employee-directory.vercel.app",
    codeLink: "https://github.com/your-username/employee-directory",
    image: "/images/employee-directory.png",
    accentColor: "#b58863" // Chess brown
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
    liveLink: null, // CLI app might not have live demo
    codeLink: "https://github.com/your-username/employee-cms",
    image: "/images/employee-cms.png",
    accentColor: "#1a1a1a" // Chess dark
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each project is a strategic move in my development journey
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Project Card Component
function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
      {/* Image/Visual Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          {/* Placeholder for project screenshot */}
          <div 
            className="w-full h-80 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center transition-transform group-hover:scale-105"
            style={{ border: `4px solid ${project.accentColor}` }}
          >
            <div className="text-center p-8">
              <div className="text-6xl mb-4" style={{ color: project.accentColor }}>
                ♟️
              </div>
              <p className="text-gray-500 font-semibold">
                {project.title} Screenshot
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Add your project screenshot here
              </p>
            </div>
          </div>
          
          {/* Chess piece indicator */}
          <div 
            className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
            style={{ backgroundColor: project.accentColor }}
          >
            {index + 1}
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl font-bold text-chess-dark mb-4">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Features List */}
        <div className="mb-6">
          <h4 className="font-semibold text-chess-dark mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span 
                  className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                  style={{ backgroundColor: project.accentColor }}
                ></span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h4 className="font-semibold text-chess-dark mb-3">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 rounded-full text-sm font-medium border"
                style={{ 
                  borderColor: project.accentColor,
                  color: project.accentColor,
                  backgroundColor: `${project.accentColor}10`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex space-x-4">
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              style={{ 
                backgroundColor: project.accentColor,
                color: 'white'
              }}
            >
              Live Demo →
            </a>
          )}
          <a 
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105"
            style={{ 
              borderColor: project.accentColor,
              color: project.accentColor
            }}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}