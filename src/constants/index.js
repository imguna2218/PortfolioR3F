import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';  // Example icons
import { PiReadCvLogoBold } from "react-icons/pi";
import { GiLaurelsTrophy } from "react-icons/gi";

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
    icon: FaHome,
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
    icon: FaUser,
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
    icon: FaBriefcase,
  },
  {
    id: 4,
    name: 'Achievements',
    href: '#acheieve',
    icon: GiLaurelsTrophy,
  },
  {
    id: 5,
    name: 'Resume',
    href: '#resume',
    icon: PiReadCvLogoBold,
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
    icon: FaEnvelope,
  },
];



export const myProjects = [
  {
    title: 'EvalX',
    desc: 'A Robust compiler that allows any number of users at a time to compile and run code on any platform.',
    subdesc:
      'Built with Rust and C++ for more robust and secure and faster code execution',
    href: 'https://github.com/imguna2218',
    texture: '',
    logo: '/assets/codeforge.webp',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Rust',
        path: '/assets/rust.jpg',
      },
      {
        id: 2,
        name: 'C++',
        path: 'assets/cpp.png',
      },
    ],
  },
  {
    title: 'Spotify Clone',
    desc: 'A Spotify Clone project that allows users to create and edit code snippets, view their code, and share code snippets with friends.',
    subdesc:
      'Built with TypeScript, React.js, ShadCN UI framework, NodeJS, MongoDB, Spotify ensures a smooth and efficient Music experience.',
    href: 'https://github.com/imguna2218',
    texture: '/textures/project/project2.mp4',
    logo: 'assets/spotify.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 0,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Express JS',
        path: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
      },
    ],
  },
  {
    title: 'Infinite Threads',
    desc: 'Infinite Threads is a social media platform that allows users to create and share posts, interact with other users, and follow other users.',
    subdesc:
      'Built with React.js, Chakra UI framework, NodeJS, MongoDB, Infinite Threads ensures a smooth and efficient social media experience.',
    href: 'https://github.com/imguna2218',
    texture: '/textures/project/project2.mp4',
    logo: 'https://i.pinimg.com/originals/24/11/6d/24116d1e185f552282164e3010b70381.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Express JS',
        path: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
      },
    ],
  },
  {
    title: 'Fantasy 11 - Build your squad',
    desc: 'Fantasy 11 is a fantasy sports platform that allows users to create and manage their fantasy teams, create their own squad , view their stats',
    subdesc:
      'Built with HTML, CSS, JavaScript, and JSP servlets, Fantasy 11 ensures a smooth and enjoyable fantasy sports experience.',
    href: 'https://github.com/imguna2218',
    texture: '/textures/project/project3.mp4',
    logo: 'https://png.pngtree.com/png-clipart/20230513/original/pngtree-cricket-sport-vector-logo-design-transparent-background-for-free-download-png-image_9160032.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'https://img.favpng.com/14/24/13/css3-cascading-style-sheets-logo-html-markup-language-png-favpng-Tz7AH52MR4DVA6tRKXjDuWuYs.jpg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      },
      {
        id: 4,
        name: 'JSP',
        path: 'https://www.logolynx.com/images/logolynx/0d/0dcdb7f5cb52d177935e8f0673b5e2bf.jpeg',
      },
    ],
  },

];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Winner',
    pos: 'Cyber Security Hackathon',
    duration: '2024',
    title: "Awarded 1st place in the Open Category at a cybersecurity hackathon for developing innovative solutions to real-world digital security challenges. This achievement highlights my expertise in cybersecurity and problem-solving skills.",
    icon: 'https://cdn1.iconfinder.com/data/icons/cyber-security-network-protection-4/512/cyber_security-1024.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Runner up',
    pos: 'MERN Stack Hackathon',
    duration: '2024',
    title: "Secured 2nd place in the MERN Stack Hackathon by developing a fully functional social media platform. This project demonstrated my proficiency in MongoDB, Express, React, and Node.js, and my ability to build scalable and user-friendly web applications.",
    icon: 'https://th.bing.com/th/id/OIP.Pn6fUhIppltozMCLc2gj9gAAAA?rs=1&pid=ImgDetMain',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Consistent Coder',
    pos: '100 days Badge',
    duration: '2024',
    title: "This badge symbolizes my commitment to consistent effort and achieving set goals. It’s a testament to the value of persistence, adaptability, and self-improvement in every endeavor.",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    animation: 'salute',
  },
];
