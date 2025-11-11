import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.avif";
import { aboutInfo } from "../assets/assets";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ onece: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          A propos
          <span className="text-purple"> de moi</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          En savoir plus sur mon parcours et ma passion
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image  */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ onece: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={profileImg}
              alt="Mon profil"
            />
          </div>
          {/* texte  */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ onece: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contenu 01</h3>
              <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quibusdam corporis! Corporis dolore architecto fuga eligendi numquam laudantium, 
                eveniet ipsum neque omnis accusantium similique nam exercitationem perspiciatis facilis cupiditate mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nostrum, reiciendis illo excepturi 
                consequatur accusamus doloribus dicta recusandae minus culpa iure quis ut amet dolorum blanditiis nulla fuga quas nisi.
                consequatur accusamus doloribus dicta recusandae minus culpa iure quis ut amet dolorum blanditiis nulla fuga quas nisi.
                consequatur accusamus doloribus dicta recusandae minus culpa iure quis ut amet dolorum blanditiis nulla fuga quas nisi.</p>

                 <p className="text-gray-300 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quibusdam corporis! Corporis dolore architecto fuga eligendi numquam laudantium, 
                eveniet ipsum neque omnis accusantium similique nam exercitationem perspiciatis facilis cupiditate mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor nostrum, reiciendis illo excepturi 
                consequatur accusamus doloribus dicta recusandae minus culpa iure quis ut amet dolorum blanditiis nulla fuga quas nisi.
                consequatur accusamus doloribus dicta recusandae minus culpa iure quis ut amet dolorum blanditiis nulla fuga quas nisi.
                consequatur accusamus doloribus dicta recusandae minus culpa iure quis ut amet dolorum blanditiis nulla fuga quas nisi.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {
                    aboutInfo.map((data, index)=>(
                      <div key={index} className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                        <div className="text-purple text-4xl mb-4">
                          <data.icon/> 

                        </div>
                        <h3 className="text-xl font-semibold">{data.title}</h3>
                        <p className="text-gray-400">{data.description}</p>
                      </div>

                    ))
                  }

                </div>

            </div>
          </motion.div>
        </div>
      </div>
      {/* Image plus le journal  */}
    </motion.div>
  );
};

export default About;
