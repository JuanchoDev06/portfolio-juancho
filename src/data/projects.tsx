import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { spring } from "framer-motion";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import {
  SiDocker,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiSpring,
  SiMysql,
  SiHtml5,
  SiCss3, 
  SiOracle,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ repo }: { repo?: string }) => {
  if (!repo) return null;

  return (
    <div className="flex items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={repo}
      >
        <Button variant={"default"} size={"sm"}>
          Github
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  spring: {
    title: "Spring",
    bg: "black",
    fg: "white",
    icon: <SiSpring />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  oracle: {
    title: "Oracle",
    bg: "black",
    fg: "white",
    icon: <SiOracle />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <FaAws />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[]; };
  content: React.ReactNode | any;
  github?: string;
};
const projects: Project[] = [
  {
    id: "Ecoboost",
    category: "Ecommerce platform",
    title: "Ecoboost",
    src: "/assets/projects-screenshots/ecoboost/home_page_1.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.mysql,
      ],
    },
    github: "https://github.com/caes2004/Spring_EcoBoost",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Ecoboost = Recycle + Job oportunities + Web development
          </TypographyP>
          <TypographyP className="font-mono">
            EcoBoost is an e-commerce web application focused on the buying and selling of
            recyclable products. It was developed using Java with Spring Boot, HTML, CSS,
            and a MySQL database, with the goal of promoting economic growth among sellers
            and buyers at a regional, national, and even international level.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ecoboost/register.png`,
              `${BASE_PATH}/ecoboost/login.png`,
              `${BASE_PATH}/ecoboost/home_page_1.png`,
              `${BASE_PATH}/ecoboost/home_page_2.png`,
            ]}
          />
          <br />
          <TypographyH3 className="my-4 mt-8">Problem Statement</TypographyH3>
          
          <p className="font-mono mb-2">
            Beyond expanding the reach of independent businesses, EcoBoost encourages
            recycling and environmental responsibility by providing a digital platform
            that supports sustainable practices and contributes to a cleaner, more
            sustainable planet.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ecoboost/welcome_ecoboost.png`,
              `${BASE_PATH}/ecoboost/home_user.png`,
              `${BASE_PATH}/ecoboost/profile_user.png`,
              `${BASE_PATH}/ecoboost/products_view.png`,
              `${BASE_PATH}/ecoboost/carrito_compras.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Award🏆</TypographyH3>
          <p className="font-mono mb-2">
            This project was recognized as the <strong>Best Semester Project</strong>,
            highlighting both its technical implementation and its positive social and
            environmental impact.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ecoboost/award.png`
            ]}
          />
          
        </div>
      );
    },
  },
  {
    id: "Artists JDBC project",
    category: "Spring Boot Application",
    title: "Artists JDBC",
    src: "/assets/projects-screenshots/artistasJDBC/music_homepage.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    github: "https://github.com/JuanchoDev06/ArtistasJDBC",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.mysql,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Artists JDBC is an academic project developed as part of the course
            <strong> Software Construction II</strong>. The main goal of this project was
            to strengthen my understanding of backend development using Spring Boot,
            focusing on data persistence, application layering, and direct database
            interaction through JDBC.
          </TypographyP>
          <ProjectsLinks repo={this.github} />

          <p className="font-mono mb-2 mt-4">
            The application manages information related to artists and their musical
            records, allowing users to perform full CRUD operations while interacting
            with a relational database in a structured and efficient way.
          </p>

          <SlideShow images={[
            `${BASE_PATH}/artistasJDBC/music_homepage.png`,
            `${BASE_PATH}/artistasJDBC/artist_disquera.png`,

            ]} />

          <TypographyH3 className="my-4 ">Technical Focus</TypographyH3>
          <p className="font-mono mb-2">
            This project was especially valuable for understanding how Spring Boot
            applications are structured, including controllers, services, repositories,
            and configuration layers. I worked directly with JDBC to handle database
            connections, queries, and result mapping without relying on ORM frameworks.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/artistasJDBC/fanaticos_form.png`]}/>

          <TypographyH3 className="my-4 mt-8">Backend & Database</TypographyH3>
          <TypographyP className="font-mono mb-2">
            The backend was built using Spring Boot and connected to a MySQL database.
            This approach helped me better understand SQL queries, prepared statements,
            and transaction handling, as well as best practices for separating business
            logic from data access.
          </TypographyP>
          <SlideShow 
            images={[
              `${BASE_PATH}/artistasJDBC/fanaticos.png`,
              `${BASE_PATH}/artistasJDBC/artistas_form.png`,
              ]} />
        </div>
      );
    },
  },
  {
    id: "Jobsi",
    category: "Web application",
    title: "Jobsi",
    src: "/assets/projects-screenshots/jobsi/login.png",
    screenshots: ["1.png"],
    github: "https://github.com/Jobsi-PPI",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.spring,
        PROJECT_SKILLS.oracle,
        PROJECT_SKILLS.aws,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Jobsi is a micro-jobs platform designed specifically for the community of the
            Politécnico Jaime Isaza Cadavid. It was created to help students make better
            use of their free time while simultaneously solving real, everyday needs
            within the campus, such as logistical support for events, errands, tutoring,
            translations, personal assistance, and more.
          </TypographyP>

          <ProjectsLinks  repo={this.github} />

          <TypographyP className="font-mono mt-4">
            The platform follows a simple and intuitive workflow: users can publish
            a task describing their needs along with the payment they are willing to
            offer, while other users can browse and accept these tasks based on their
            knowledge, skills, and availability.
        </TypographyP>

          <SlideShow images={[
            `${BASE_PATH}/jobsi/home_page_1.png`,
            `${BASE_PATH}/jobsi/home_page_2.png`,
            `${BASE_PATH}/jobsi/side_bar.png`,

          ]} />

            <TypographyH3 className="my-4 mt-8">Jobs</TypographyH3>
          <p className="font-mono mb-2">
            Browse and manage the jobs you have published, as well as the jobs you have applied <br />for, all in one place.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/jobsi/jobs_publicados.png`,
              `${BASE_PATH}/jobsi/jobs_postulados.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Register account</TypographyH3>
          <p className="font-mono mb-2">
            Users can register by entering their basic personal information, enabling
            them to fully interact with the platform by posting jobs or applying to
            available opportunities.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/jobsi/login.png`,
              `${BASE_PATH}/jobsi/register.png`,
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
