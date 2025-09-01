import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* <h3 className='text-2xl font-semibold'>Web Developer</h3> */}

            <p className="text-muted-foreground leading-relaxed">
              I’m a final-year Computer Engineering student and Full-Stack Developer skilled in React, Node.js, and the MERN stack. I’ve built projects like an AI Mock Interview System, travel platforms, and other web applications, and gained hands-on experience as a Software Developer Intern.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-8">
              I’m also a Google Student Ambassador 2025 and GDG member, passionate about exploring emerging technologies like AI and Cloud, and creating solutions that are both practical and innovative.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/RESUME.pdf"
                download="Resume.pdf"
                target="_blank"               
                rel="noopener noreferrer" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p>Creating responsive websites and web applications with modern frameworks.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend & User Experience</h4>
                  <p>Crafting clean, responsive, and user-friendly interfaces that focus on usability and performance.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Industry Experience</h4>
                  <p>Worked as a Software Developer Intern, contributing to production-ready projects.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
