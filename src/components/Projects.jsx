import React from "react";
import ProjetctCard from "./ProjectCard";
import ProjectCard from "./ProjectCard";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20 bg-dark-100"
    >
      <div className="conaitner mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Mes
          <span className="text-purple"> Projets</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Mes projets réalisés dans plusieurs technoogie{" "}
        </p>
        <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/oscar-nindebahi-347b17372/" 
            className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            <span>Voir la fréquence des projets realisé à EPITECH</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
