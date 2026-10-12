import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.jpeg";
import project3 from "../assets/projects/project3.png";

export const NAME = "Govind Patel";
export const ROLE = "Python Full Stack Developer";

export const HERO_CONTENT =
  "I am Govind Patel, a Python Full Stack Developer based in Bangalore who builds secure, scalable web applications. I work with Django, Django REST Framework and MySQL on the backend, and React, HTML, CSS and JavaScript on the frontend. I have shipped real projects end to end, from JWT authentication and REST APIs to OCR-powered features and live deployment, and I am looking for a software development role where I can keep building products that solve real problems.";

export const ABOUT_TEXT =
  "I am a B.Tech Computer Science student at SIRT, RGPV (CGPA 7.6) and a Python Full Stack Developer with hands-on experience in Django, MySQL and REST API development. During my internship at PySpiders Training Institute, Bangalore, I worked on real-world web applications covering authentication systems, CRUD operations, backend optimization and secure data handling. I follow clean architecture principles and write maintainable code that is ready for production.";

export const ABOUT_TEXT1 =
  "I enjoy designing efficient database structures and solving backend challenges, and I pair that with React and modern frontend tooling to deliver complete, working products. I have solved 300+ problems on LeetCode, which keeps my data structures and problem-solving skills sharp, and I hold an NPTEL certification in Python for Data Science. I am always learning, and I like building things that people can actually use.";

export const EXPERIENCES = [
  "Python Full Stack Developer Intern – PySpiders Training Institute, Bangalore (Jan 2026 – Jun 2026)",
  "Developed and contributed to real-world web applications using Python, Django and MySQL",
  "Built REST APIs and implemented JWT-based authentication and secure user flows",
  "Optimized backend performance and database queries, and integrated APIs with React frontends",
  "Used Git and GitHub for version control and collaborated on deployment of applications",
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institute: "SIRT, RGPV",
    score: "CGPA: 7.6",
  },
];

export const SKILLS = {
  Languages: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  Backend: ["Django", "Django REST Framework", "REST APIs", "JWT Authentication"],
  Frontend: ["React.js", "Bootstrap", "Tailwind CSS"],
  Databases: ["MySQL", "OracleSQL", "MongoDB", "PostgreSQL"],
  "Data & AI": ["OCR (Tesseract)", "NumPy", "Pandas"],
  Tools: ["Git", "GitHub", "Docker", "Deployment (Render, Vercel)"],
};

export const CERTIFICATIONS = [
  "Python for Data Science – NPTEL",
  "300+ problems solved on LeetCode",
];

export const PROJECTS = [
  {
    title: "Medical Data Extraction AI",
    image: project3,
    description:
      "Medical documents are often paper-based, hard to read and hard to share. This project lets a user upload a prescription or report as an image or PDF. The system reads it with OCR, extracts key details such as the patient, diagnosis and medicines, and stores them securely. It then builds a personalized 7-day diet plan from the extracted data and generates a QR code. Scanning the QR code opens a public record page, so the prescription can be shared without paper.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React.js",
      "JWT",
      "Tesseract OCR",
      "PostgreSQL",
      "Docker",
    ],
    url: "https://medical-data-extraction-ai-17s3.vercel.app/login",
    github: "https://github.com/govindpatel552006/Medical-data-extraction-AI",
  },
  {
  title: "File Arranger System",
  image: project1,  
  description:
    "A full-stack Smart Local File Organizer that instantly declutters messy folders. It sorts files in place by extension into Images, Videos, Documents and Code folders, with no uploading required. It skips sub-folders and system files for safety, renames duplicates with timestamps so nothing is lost, and shows a live, terminal-style activity feed of every file move.",
  technologies: ["Python", "Os module","Shutil",],
  url: "https://github.com/govindpatel552006/File-arranger-system",
  github: "https://github.com/govindpatel552006/File-arranger-system",
},
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A modern, responsive portfolio website built with React and Tailwind CSS to showcase my projects, backend expertise and technical skills, with smooth animations powered by Framer Motion.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    url: "",
    github: "",
  },
];

export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 9301693381",
  email: "govindpatel2510734@gmail.com",
};

export const SOCIALS = {
  linkedin: "https://linkedin.com/in/p20112004",
  github: "https://github.com/govindpatel552006",
  leetcode: "https://leetcode.com/u/Govindpatel55",
};