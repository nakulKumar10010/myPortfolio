// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';

import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import ghpsLogo from './assets/education_logo/ghps_logo.png';
import dtuLogo from './assets/education_logo/DTU_logo.png';


// Project Section Logo's
import tripzyLogo from './assets/work_logo/tripzy.png';
import ForecastLogo from './assets/work_logo/forecastNow.png';
import formLogo from './assets/work_logo/form.png';
import tictactoeLogo from './assets/work_logo/tic-tac-toe.png';


//skill section data
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];
  
// Education Section Data
  export const education = [
    {
      id: 0,
      img: dtuLogo,
      school: "Delhi Technological University, Delhi",
      date: "2022 - Present",
      grade: "7.89 CGPA",
      desc: "Currently pursuing a B.Tech in Computer Science and Engineering with a strong foundation in data structures, algorithms, and programming languages (C, C++, Python). Skilled in frontend development (HTML, CSS, JavaScript, Bootstrap) with hands-on experience in building interactive projects such as a Tic-Tac-Toe game and a Quiz Form. Possess knowledge of machine learning concepts, compiler design, and computer forensics. Solved 300+ problems on coding platforms, demonstrating problem-solving and analytical abilities.",
      degree: "Bacholers of Technology - B.Tech (Computer Science & Engineering)",
    },
    {
      id: 1,
      img: ghpsLogo,
      school: "Guru Harkrishan Public School, Loni Road",
      date: "Apr 2020 - March 2021",
      grade: "90.8%",
      desc: "I completed my class 12 education from Guru Harkrishan Public School, Loni Road, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: ghpsLogo,
      school: "Guru Harkrishan Public School, Hargobind Enclave",
      date: "Apr 2018 - March 2019",
      grade: "84.3%",
      desc: "I completed my class 10 education from Guru Harkrishan Public School, Hargobind Enclave, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
// Projects Section Data
  export const projects = [
    {
      id: 0,
      title: "Tripzy",
      description:
        "Tripzy is a full-fledged web platform. It allows users to explore, book, and list unique stays around the world. Designed with modern travel needs in mind, Tripzy focuses on simplicity, security, and seamless interactions for both hosts and guests.",
      image: tripzyLogo,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "bootstrap", "EJS", "MongoDB", "passport.js"],
      github: "https://github.com/nakulKumar10010/Tripzy",
      webapp: "https://tripzy-zbkc.onrender.com/",
    },
    {
      id: 1,
      title: "ForecastNow",
      description:
        "ForecastNow is a simple React weather app that shows real-time weather information using the OpenWeatherMap API.",
      image: ForecastLogo,
      tags: ["React JS", "Material UI", "API"],
      github: "https://github.com/nakulKumar10010/ForecastNow",
      webapp: "https://nakulkumar10010.github.io/ForecastNow/",
    },
    {
      id: 2,
      title: "Tic-Tac-Toe",
      description:
        "A simple yet interactive 3x3 grid game built with HTML, CSS, and JavaScript. Features include real-time two-player mode, win/draw detection, and reset functionality. Showcases DOM manipulation, event handling, and front-end problem-solving skills.",
      image: tictactoeLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/nakulKumar10010/Tic-Tac-Toe",
      webapp: "https://nakulkumar10010.github.io/Tic-Tac-Toe/",
    },
    {
      id: 3,
      title: "Simple Quiz Form",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: formLogo,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/nakulKumar10010/form",
      webapp: "https://nakulkumar10010.github.io/form/",
    },
  ];  