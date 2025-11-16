import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto  text-center px-6 mb-4">
        <h2>Mes
            <span className="text-purple"> Experience</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">Mes pexperience professionelles </p>
      </div>
    </motion.div>
  );
};

export default Work;
