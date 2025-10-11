"use client";

import { motion } from "framer-motion";
import { GiChessRook, GiChessKnight, GiChessBishop, GiChessQueen } from "react-icons/gi";

const skillCategories = [
  {
    icon: GiChessRook,
    title: "Frontend",
    color: "#769656",
    skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS", "Bootstrap", "React Router", "Apollo Client", "NextJS"]
  },
  {
    icon: GiChessKnight,
    title: "Backend", 
    color: "#b58863",
    skills: ["Node.js", "Express", "GraphQL", "REST APIs", "AWS Lambda", "AWS Cognito", "Hasura", "Strapi", "SendGrid"]
  },
  {
    icon: GiChessBishop,
    title: "Databases",
    color: "#769656",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    icon: GiChessQueen,
    title: "Tools & DevOps",
    color: "#b58863",
    skills: ["Docker", "AWS (Amplify, Lightsail, Route53, Elastic Beanstalk, CloudWatch)", "Serverless", "GitHub", "ESLint", "Jest", "React Testing Library"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-chess-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The strategic pieces in my development arsenal
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, index }) {
  const { icon: Icon, title, color, skills } = category;

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Category */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-chess-dark">{title}</h3>
      </div>

      {/* Skills List */}
      <ul className="space-y-3">
        {skills.map((skill, skillIndex) => (
          <motion.li 
            key={skill}
            className="flex items-center"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
            viewport={{ once: true }}
          >
            <span 
              className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
              style={{ backgroundColor: color }}
            ></span>
            <span className="text-gray-700">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}