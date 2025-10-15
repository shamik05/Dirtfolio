import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">
            Featured Projects
          </h2>
        </div>

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
  
  // Define colors based on index
  const accentColor = isEven ? '#769656' : '#b58863';

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
      {/* Image/Visual Side */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          {/* Placeholder for project screenshot */}
          <div 
            className="w-full h-80 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center transition-transform group-hover:scale-105 relative"
            style={{ border: `4px solid ${accentColor}` }}
          >
            <div className="text-center p-8">
              <div className="text-6xl mb-4" style={{ color: accentColor }}>
                ♟️
              </div>
              <p className="text-gray-500 font-semibold">
                {project.title} Screenshot
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Add your project screenshot here
              </p>
            </div>
            
            {/* Chess piece indicator */}
            <div 
              className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              {index + 1}
            </div>
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
                  style={{ backgroundColor: accentColor }}
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
                  borderColor: accentColor,
                  color: accentColor,
                  backgroundColor: `${accentColor}10`
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
                backgroundColor: accentColor,
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
              borderColor: accentColor,
              color: accentColor
            }}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}