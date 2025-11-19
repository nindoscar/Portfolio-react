import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import presentation from '../components/presentation';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: "J'adore créer des solutions uniques à des problèmes complexes à l'aide de technologies de pointe.",
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Rigueur',
      description: "Une méthodologie sans faille et un sens aigu du détail sont les piliers de la qualité et de la fiabilité de toutes mes livraisons.",
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Code épuré',
      description: "J'écris du code facile à maintenir et efficace en suivant les meilleures pratiques et les modèles modernes.",
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Développeur Front-end ',
    icon: FaReact,
    description: "Développement front-end Création d'interfaces utilisateur réactives et interactives à l'aide de frameworks modernes.",
    tags: ['React', 'Vue.js', 'TypeScript']
  },
  {
    title: 'Développeur Backend',
    icon: FaServer,
    description: "Création d'applications côté serveur robustes et d'API RESTful.",
    tags: ['Node.js', 'Express', 'Laravel', "Flask"]
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Conception et optimisation de bases de données pour améliorer les performances et la scalabilité.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Développeur Mobile',
    icon: FaMobileAlt,
    description: "Création d'applications mobiles multiplateformes à l'aide d'outils modernes.",
    tags: ['React Native', 'Flutter']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: "Déploiement et gestion d'applications dans des environnements cloud.",
    tags: ['Docker']
  },
  {
    title: 'Outils et technologies',
    icon: FaTools,
    description: "Outils et technologies essentiels que j'utilise dans mon processus de développement.",
    tags: ['Git & GitHub', 'Figma']
  }
];



export const projects = [
  {
    title: "Free Add",
    description: "une application web dynamique, entièrement développée sous Laravel,",
    image: projectImg1,
    tech: ["Laravel", "MySql"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Burger ",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio ",
    description: "Ce site web a été entièrement conçu et développé en ReactJS afin d'assurer une expérience utilisateur (UX) rapide et fluid",
    image: projectImg4,
    tech: ["React.Js"],
    icons: [FaReact,],
    demo: "#home",
    code: "#",
  },
];


export const workData = [
  {
    role: "Dévoloppeur Full Stack junior",
    company: "We.code ",
    duration: "2025",
    description:
      "Formé à we.code by Epitech, j’ai réalisé plus de 28 projets en développement web et mobile et développé des compétences en leadership et gestion de projet. Deux fois chef de projet, j’ai dirigé des équipes et mené des projets complets jusqu’à leur présentation finale.",
    color: "purple"
  },
  {
    role: "Correspondant fichier",
    company: "Institut Technique Secondaire Professionnel ",
    duration: "2018 - 2024",
    description:
      "Correspondant Fichier à l’Institut Technique Secondaire Professionnel et Technique, où j’ai géré les données élèves et l’archivage numérique avec rigueur et précision.",
    color: "pink"
  },
  {
    role: "Stageaire",
    company: "Risque Informatique",
    duration: "2016 - 2017",
    description:
      "Mise en place d’une organisation logique des documents pour optimiser leur recherche et leur gestion, avec numérisation et archivage électronique,Organisation et classement des fichiers dans des stockages locaux ou cloud, dans le cadre d’un projet réalisé en WinDev.",
    color: "blue"
  }

];
  export const presentations = [
    {
      profil: ""
    }
  ]
