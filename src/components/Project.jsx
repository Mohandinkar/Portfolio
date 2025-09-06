import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import project1 from '../assets/project/project1.png';
import project2 from '../assets/project/project2.png';
import project3 from '../assets/project/project3.png';
import project4 from '../assets/project/project4.png';

const Projects = [
  {
    id: 1,
    title: "PrepVerse-AI-Powered Mock Interview Platform",
    description:
      "PrepVerse is an AI-powered mock interview platform designed to help job seekers practice and improve their interview skills. It offers a variety of interview questions, real-time feedback, and performance analytics to enhance the preparation process.",
    image: project1,
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    live: "https://prep-verse-jade.vercel.app/",
    github: "https://github.com/Mohandinkar/PrepVerse",
  },
  {
    id: 2,
    title: "URL Shortener",
    description:
      "A lightweight URL shortener that lets users convert long URLs into short, shareable links. It includes analytics to track link usage and helps in managing and organizing URLs efficiently.",
    image: project2,
    tags: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    live: "https://url-ixun.onrender.com/",
    github: "https://github.com/Mohandinkar/URL-Shortner",
  },
  {
    id: 3,
    title: "Simon Game",
    description:
      "A fun web-based game where you test and improve your memory by repeating color and sound patterns.",
    image: project3,
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://mohandinkar.github.io/Simon_game/",
    github: "https://github.com/Mohandinkar/Simon_game",
  },
  {
    id: 4,
    title: "Discord Chat Bot",
    description:
      "A chatbot built for Discord servers that interacts with users, answers queries, and integrates with APIs to enhance server engagement. It supports commands and provides real-time responses.",
    image: project4,
    tags: ["Node.js", "Discord.js", "Gemini API"],
    live: "",
    github: "https://github.com/Mohandinkar/Discord-Bot",
  },
];

const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project was carefully crafted to showcase my skills and expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Projects.map((project) => (
            <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
              
              {/* Image Section */}
              <div className="h-48 sm:h-56 md:h-65 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                </div>

                {/* Icons at Bottom Left */}
                <div className="flex justify-start space-x-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mohandinkar"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
