import Image from 'next/image';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const accentColor = isEven ? '#769656' : '#b58863';

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12 mb-20`}>
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="relative rounded-xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-chess-green transition-all duration-300">
            <div className="relative aspect-video">
              <Image
                src={project.gif || project.image}
                alt={`${project.title} ${project.gif ? 'demo' : 'screenshot'}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized={!!project.gif}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex space-x-3">
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-chess-dark px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 shadow-md text-sm"
                  >
                    View Live
                  </a>
                )}
                <a 
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-chess-green text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 shadow-md text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="flex items-center space-x-3 mb-3">
          <h3 className="text-2xl lg:text-3xl font-bold text-chess-dark">
            {project.title}
          </h3>
          <div 
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: accentColor }}
          ></div>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="font-semibold text-chess-dark mb-3 text-lg">Key Features</h4>
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

        <div className="mb-6">
          <h4 className="font-semibold text-chess-dark mb-3 text-lg">Technologies Used</h4>
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

        <div className="flex space-x-4">
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg flex items-center space-x-2 text-sm lg:text-base"
              style={{ 
                backgroundColor: accentColor,
                color: 'white'
              }}
            >
              <span>View Live Demo →</span>
            </a>
          )}
          <a 
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:scale-105 flex items-center space-x-2 text-sm lg:text-base"
            style={{ 
              borderColor: accentColor,
              color: accentColor
            }}
          >
            <span>View Source Code {"</>"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
