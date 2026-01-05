const config = {
  title: "Juan Correa | Software Developer",
  description: {
    long: "Explore the portfolio of Juancho, a Software developer focused on building modern, scalable web applications using React, Next.js, cloud technologies, 3D animations, and innovative projects. Discover my latest work, including Jobsi, Eco Boost, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Juancho, a colombian software developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Juancho",
    "portfolio",
    "software developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "cloud technologies",
    "Juan Andrés Correa",
    "Juancho dev",
    "Frontend developer",
  ],
  author: "Juan Andrés Correa",
  email: "jandrescorrea19@gmail.com",
  site: "https://juancho.dev",

  // for github stars button
  githubUsername: "JuanchoDev06",
  githubRepo: "portfolio-juancho",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/juan-andres-correa-sanchez-798346386/",
    github: "https://github.com/JuanchoDev06",
  },
};
export { config };
