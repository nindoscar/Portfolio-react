import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets"; 

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Mes <span className="text-purple">Compétences</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-dark-300 rounded-2xl p-6 transition duration-300 cursor-pointer hover:bg-dark-200"
          >
            <div className="text-center text-xl">
            
              <skill.icon className="text-purple text-5xl mx-auto mb-4" />

              {/* Titre */}
              <h3 className="mt-4 font-semibold text-lg">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mt-2">
                {skill.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-dark-200 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
