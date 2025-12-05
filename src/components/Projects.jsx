import React from 'react';
import { motion } from "framer-motion";
import { PROJECTS } from '../constants/index.js';

const Projects = () => {
  return (
    <>
      <div className="text-center text-4xl font-bold mb-10">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

        {PROJECTS.map((project, index) => (
          <motion.a
            key={index}
            href={project.url} 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="border border-gray-700 bg-black/30 backdrop-blur-md 
                       rounded-xl p-4 hover:scale-105 transition duration-300 block"
          >
            <motion.img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-400 mt-1">{project.description}</p>
             
            <p className="text-sm text-gray-300 mt-3">
              <strong>Tech:</strong> {project.technologies.join(", ")}
            </p>
          </motion.a>
        ))}

      </div>
    </>
  );
};

export default Projects;






