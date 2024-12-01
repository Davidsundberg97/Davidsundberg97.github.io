import React from 'react';
import { myProjects } from '../constants/index.js';

const Projects = () => {
  return (
    <section className="c-space my-20" id="projects">
      <h2 className="text-3xl font-semibold mb-8 text-center text-white">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div key={project.title} className="bg-black-200 p-5 rounded-lg shadow-md">
            <div className="relative">
              <img src={project.spotlight} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <img src={project.image} alt={`${project.title} image`} className="absolute inset-0 w-full h-full object-contain rounded-md" /> {/* Changed object-cover to object-contain */}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-500 mb-4">{project.desc}</p>
            <a href={project.href} className="field-btn" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;