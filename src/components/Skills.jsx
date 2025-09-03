import htmlLogo from '../assets/skills/html.png';
import cssLogo from '../assets/skills/css.png';
import reactjsLogo from '../assets/skills/reactjs.png';
import nextjsLogo from '../assets/skills/nextjs1.png';
import mysqlLogo from '../assets/skills/mysql.png';
import mongodbLogo from '../assets/skills/mongodb.png';
import tailwindcssLogo from '../assets/skills/tailwindcss.png';
import nodejsLogo from '../assets/skills/nodejs.png';
import expressjsLogo from '../assets/skills/express.png';
import pythonLogo from '../assets/skills/python.png';
import cppLogo from '../assets/skills/cpp.png';
import cLogo from '../assets/skills/c.png';
import gitLogo from '../assets/skills/git.png';
import githubLogo from '../assets/skills/github.png';
import postmanLogo from '../assets/skills/postman.png';
import javascriptLogo from '../assets/skills/javascript.png';
import materialuiLogo from '../assets/skills/materialui.png';
import bootstrapLogo from '../assets/skills/bootstrap.png';
import vscodeLogo from '../assets/skills/vscode.png'
import vercelLogo from '../assets/skills/vercel.png'
import firebaseLogo from '../assets/skills/firebase.png'
import netlifyLogo from '../assets/skills/netlify.png'
import mcLogo from '../assets/skills/mc.png'
import Tilt from 'react-parallax-tilt';


const SkillINfo = [
   {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },


      { name: 'Next JS', logo: nextjsLogo },
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
      { name: 'Firebase', logo: firebaseLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },

      { name: 'Python', logo: pythonLogo },
      
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
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
]


const Skills = () => {
  return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">My 
            <span className="text-primary"> Skills</span></h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"> 
          {
            SkillINfo.map((category)=>(
              <div key={category.title} className="bg-card rounded-lg p-6 shadow-xs card-hover">
                <h3 className="font-semibold text-2xl pb-3">
                    {category.title}
                </h3>

                     <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
                
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                  {category.skills.map((skill)=>(
                    <div key={skill.name} className='flex items-center justify-center space-x-2 bg-transparent border-2 rounded-3xl py-2 px-2'>
                      <img src={skill.logo} alt={skill.name} className='w-6 h-6 sm:w-8 sm:h-8 ' />
                      <span className='text-xs sm:text-sm'>{skill.name}</span>
                    </div>
                  ))}
                </div>

                </Tilt>
              </div>
            ))
          }
          
         
        </div>
    </div>
  </section>;
};

export default Skills;
