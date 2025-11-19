import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
// import profileImg from '../assets/profile.avif'
import profileImg from "../assets/profile001.png";
import cvFile from '../assets/Oscar_NINDEBAHI_CV.pdf'
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ onece: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, Je suis <span className="text-purple">Oscar NINDEBAHI</span>
          </h1>
          <h2
            className="text-2xl md:text-4xl font-semibold mb-6
          "
          >
            Dévelopeur Full Stack
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Je suis titulaire d'une licence en Genie Logicile.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              Mes Projets
            </a>
            <a
              href={cvFile} 
              download="Oscar_NINDEBAHI_CV"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300"
            >
              Télécharge mon CV
            </a>
            {/* <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300"
            >
              Contacter Moi
            </a> */}
          </div>
        </div>
        {/* image  */}
        <div className="md:w-1/2 flex justify-center ">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="basolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink aminates-plues-slow opacity-70">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 md:w-80 md:h-80 object-cover z-10 animate-float"
                src={profileImg}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
