import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.jpeg";

export const HERO_CONTENT = 
"I am a passionate Python Full Stack Developer specializing in building scalable, secure, and high-performance web applications. I work extensively with Django, Django REST Framework, and MySQL, along with modern front-end technologies like React, HTML, CSS, and JavaScript. With a strong foundation in backend architecture and API development, my goal is to deliver efficient solutions that solve real-world problems and enhance user experience.";

export const ABOUT_TEXT = 
"I am a dedicated Python Full Stack Developer with strong expertise in Django, MySQL, and REST API development. I have built real-world applications focusing on authentication systems, CRUD operations, backend optimization, and secure data handling. I follow clean architecture principles and write maintainable, scalable code for production-ready applications.";

export const ABOUT_TEXT1 = 
"I enjoy solving complex backend challenges and designing efficient database structures. Along with backend development, I also work with front-end technologies like React, HTML, CSS, and JavaScript to create complete end-to-end solutions. I continuously learn new technologies and aim to build impactful products that improve user experience and support business growth.";

export const EXPERIENCES = [
  "Python Full Stack Intern – QSpiders Bangalore",
  "Developed and contributed to real-world web applications using Django and MySQL",
  "Built REST APIs, implemented authentication systems, and optimized backend performance"
];

export const PROJECTS = [
  {
    title: "Django Travel Booking System",
    image: project1,
    description:
      "A full-stack travel booking web application built using Django that allows users to explore destinations, register/login securely, and manage bookings with a structured MySQL database.",
    technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    url:"https://your-deployment-link.com"
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A modern and responsive portfolio website built using React and Tailwind CSS to showcase my projects, backend expertise, and technical skills.",
    technologies: ["React.js","Tailwind CSS","Framer Motion"],
    url:""
  },
  {
    title: "Django Authentication System",
    image: project3,
    description:
      "A secure authentication system built using Django and Django REST Framework featuring user registration, login, password reset, JWT authentication, and role-based access control.",
    technologies: ["Python", "Django", "Django REST Framework", "MySQL", "JWT"],
    url:"https://github.com/govindpatel552006/Auth-app"
  },
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 9301693381",
  email: "govindpatel2510734@gmail.com",
};