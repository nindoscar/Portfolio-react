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
      Skills
    </motion.div>
  );
};

export default Skills;
