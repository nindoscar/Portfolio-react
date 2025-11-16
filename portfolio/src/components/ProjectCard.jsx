import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <motion.div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-60 objetc-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div>
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            Voir la demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
