// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",

  // Frontend 
  ANGULAR = "angular",

    // Backend / Java
  JAVA = "java",
  SPRING = "spring",

  // Bases de datos
  MYSQL = "mysql",
  ORACLE = "oracle",

  // 🆕 Tools
  INTELLIJ = "intellij",
  POSTMAN = "postman",
  MAVEN = "maven",
  GRADLE = "gradle",
  VITE = "vite",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Partial<Record<SkillNames, Skill>> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Core language for building dynamic and interactive web applications.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Strongly typed superset of JavaScript for scalable and maintainable applications.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Standard markup language for structuring web content.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Styling language used to design responsive and modern user interfaces.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-based library for building fast and interactive user interfaces.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "React framework for production-ready applications.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS framework for building responsive designs efficiently.",
    color: "#38bdf8",
    icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8"
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript runtime for building scalable backend services and APIs.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Advanced open-source relational database for robust data management.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Distributed version control system for tracking and managing code changes.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Platform for code collaboration, version control and CI/CD workflows.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Code formatter that enforces consistent style across projects.",
    color: "#f7b93a",
    icon: "https://cdn.simpleicons.org/prettier/F7B93E"
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Package manager for installing and managing JavaScript dependencies.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud platform for deploying scalable, secure and highly available systems.",
    color: "#ff9900",
icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  [SkillNames.JAVA]: {
    id: 25,
    name: "java",
    label: "Java",
    shortDescription: "Programming language for building secure and highly backend systems.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  [SkillNames.SPRING]: {
    id: 26,
    name: "spring",
    label: "Spring Boot",
    shortDescription: "Framework for developing RESTful APIs and backend applications.",
    color: "#6db33f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  [SkillNames.ANGULAR]: {
    id: 27,
    name: "angular",
    label: "Angular",
    shortDescription: "Frontend framework for building structured and enterprise-scale applications.",
    color: "#dd0031",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 28,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational database system for structured and transactional data.",
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.ORACLE]: {
    id: 29,
    name: "oracle",
    label: "Oracle SQL",
    shortDescription: "Enterprise-grade relational database management system.",
    color: "#f80000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  [SkillNames.INTELLIJ]: {
    id: 30,
    name: "intellij",
    label: "IntelliJ IDEA",
    shortDescription: "Professional IDE for Java and backend application development.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  },
  [SkillNames.POSTMAN]: {
    id: 31,
    name: "postman",
    label: "Postman",
    shortDescription: "Tool for testing, debugging and documenting REST APIs.",
    color: "#ff6c37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  [SkillNames.MAVEN]: {
    id: 32,
    name: "maven",
    label: "Maven",
    shortDescription: "Build automation and dependency management tool for Java projects.",
    color: "#c71a36",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
  },
  [SkillNames.GRADLE]: {
    id: 33,
    name: "gradle",
    label: "Gradle",
    shortDescription: "Modern build automation system for JVM projects.",
    color: "#02303a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg",
  },
  [SkillNames.VITE]: {
    id: 34,
    name: "vite",
    label: "Vite",
    shortDescription: "Fast frontend build tool and dev server.",
    color: "#646cff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Apr 2025",
    endDate: "Oct 2025",
    title: "Junior Developer",
    company: "Tata Consultancy Services (TCS)",
    description: [
      "Delivered web solutions for diverse clients.",
      "I worked on projects and agile software lifecycles from design to deployment.",
      "I developed full-stack applications with teammates.",
    ],
    skills: [
    SkillNames.ANGULAR,
    SkillNames.SPRING,
    SkillNames.POSTGRES,
  ],
  },
  {
    id: 2,
    startDate: "Aug 2023",
    endDate: "Jun 2025",
    title: "Professional technician in information systems.",
    company: "Politecnico Jaime Isaza Cadavid",
    description: [
      "2 years of experience in software development.",
      "Studied programming languages, web frameworks and cloud technologies.",
      "I won best semester project award for developing a web application.",
    ],
    skills: [
    SkillNames.SPRING,
    SkillNames.ORACLE,
    SkillNames.REACT,
    SkillNames.AWS,
  ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

