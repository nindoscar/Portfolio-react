import React from "react";
import { motion } from "framer-motion";
// import profileImg from "../assets/profile.avif";
import { aboutInfo } from "../assets/assets";
import { div } from "framer-motion/client";
import profileImg from "../assets/profile02.jpeg";
import presentation from "./presentation";

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
              <h3 className="text-2xl font-semibold mb-6">Mon profil</h3>
              {/* <p className="text-2xl text-gray-300 mb-6">
                Je suis une personne disponible, serviable, et toujours prête à
                me surpasser. Doté d’un grand sens du service, je travaille
                efficacement sous pression tout en conservant un haut niveau de
                concentration et de professionnalisme. Ma forte motivation me
                pousse à apprendre continuellement et à évoluer dans le domaine
                de l'informatique.
              </p> */}
              <p className=" text-gray-300 mb-6">
                Titulaire d’une Licence en Génie Logiciel de HEC Abidjan et
                disposant du niveau Master 2, je suis un professionnel
                dynamique, rigoureux et passionné par les technologies du
                numérique. J’ai démarré ma carrière par un stage de 6 mois à
                Risque Informatique, où j’ai acquis une solide expérience
                pratique en installation, maintenance et assistance technique.
                Cet apprentissage m’a permis de développer une réelle aisance
                dans les environnements informatiques et dans la résolution de
                problèmes techniques.  
              </p>
              <p className=" text-gray-300 mb-6">De 2018 à 2024, j’ai occupé le poste de
                Correspondant Fichier à l’Institut Technique Secondaire
                Professionnel et Technique. J’y ai assuré la gestion complète
                des bases de données élèves, l’archivage numérique, la mise à
                jour des dossiers, la préparation de documents administratifs et
                un support informatique constant. Cette expérience m’a permis
                d’acquérir une grande rigueur, une bonne organisation et une
                aisance dans la manipulation de données sensibles.</p>
                <p className=" text-gray-300 mb-6">En 2024–2025,
                j’ai suivi la formation we.code by Epitech, un programme
                intensif axé sur le développement web et mobile. Au cours de
                cette formation, j’ai réalisé plus de 28 projets dans de
                nombreuses technologies modernes : HTML, CSS, JavaScript, PHP,
                Laravel, SQL, Vue.js, Python, Next.js, Nest.js, etc. Au-delà des
                compétences techniques, we.code m’a également permis de
                développer des compétences professionnelles essentielles,
                notamment : le leadership, la gestion de projet, la
                communication professionnelle, le travail en équipe, la prise de
                décision, la capacité à présenter et défendre un projet. J’ai eu
                l’opportunité d’être chef de projet à deux reprises, où j’ai
                dirigé des équipes, réparti les tâches, géré les délais, assuré
                le suivi technique et présenté les résultats finaux. Ces
                expériences m’ont préparé à évoluer efficacement dans un
                environnement professionnel exigeant.</p>
              <p className="text-gray-300 mb-12"></p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
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
