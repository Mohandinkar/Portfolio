

const skills = [
  //Frontend
  {
    name: "HTML",
    value: 90,
    category: "Frontend"
  },
  {
    name: "CSS",
    value: 80,
    category: "Frontend"
  },
  {
    name: "JavaScript",
    value: 85,
    category: "Frontend"
  },
  {
    name: "React",
    value: 75,
    category: "Frontend"
  },
  {
    name: "Next.js",
    value: 70,
    category: "Frontend"
  },
  {name:"Tailwind CSS", value: 60, category: "Frontend"},

  //Backend
  {name: "Node.js", value: 80, category: "Backend"},
  {name: "Express", value: 75, category: "Backend"},
  {name: "MongoDB", value: 70, category: "Backend"},
  {name: "MySql", value: 75, category: "Backend"},
  {name: "Django", value: 60, category: "Backend"},

  //Tools
  {name:"Git/GitHub", value: 80, category: "Tools"},
  {name:"VS code", value: 95, category: "Tools"},
  {name:"Postman", value: 70, category: "Tools"},
  {name:"Firebase", value: 65, category: "Tools"},
  {name:"Vercel / Netlify / Render", value: 70, category: "Tools"}
];

const Skills = () => {
  return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">My 
            <span className="text-primary"> Skills</span></h1>
    </div>
  </section>;
};

export default Skills;
