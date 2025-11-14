import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ onece: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4"> 
          My <span className="text-purple">Skylls</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptates libero, 
          quibusdam repellendus totam illo distinctio qui facilis porro culpa maiores. Reprehenderit.</p>
      </div>
    </motion.div>
  );
};

export default Skills;
