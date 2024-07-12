// projects.jsx

import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Modal from "./Modal";
import MPPSProjectInfo from "./MPPSProjectInfo";
import SNYProjectInfo from "./SNYProjectInfo"; // Importar o novo componente

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="border-b border-neutral-300 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <h6 className="font-semibold text-center lg:text-left mr-4">
                  {project.title}
                </h6>
                {project.title === "Mobile Price Prediction System" && (
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-sm px-2 py-1 rounded text-green-800"
                    onClick={() => handleViewClick(project.title)}
                  >
                    View
                  </button>
                )}
                {project.title === "Braga Tourism Website" && (
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-sm px-2 py-1 rounded text-green-800"
                    onClick={() => window.open("https://zepedro29.github.io/Braga-Tourism/paginaInicial.html", "_blank")}
                  >
                    View
                  </button>
                )}
                {project.title === "Analysis of data on the Quality of Life of Squirrels in New York" && (
                  <button
                    className="bg-gray-200 hover:bg-gray-300 text-sm px-2 py-1 rounded text-green-800"
                    onClick={() => handleViewClick(project.title)}
                  >
                    View
                  </button>
                )}
                
              </div>
              <p className="mb-4 text-neutral-400 text-justify">
                {project.description}
              </p>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal onClose={handleCloseModal}>
          {selectedProject === "Mobile Price Prediction System" && (
            <MPPSProjectInfo />
          )}
          {selectedProject === "Analysis of data on the Quality of Life of Squirrels in New York" && (
            <SNYProjectInfo />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Projects;
