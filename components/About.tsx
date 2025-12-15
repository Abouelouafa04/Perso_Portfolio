import React from 'react';
import { Download, Code2, Layout, Database, FileCode, Monitor } from 'lucide-react';
import ReactIcon from './icons/ReactIcon';
import TailwindIcon from './icons/TailwindIcon';

const About: React.FC = () => {
  const skills = [
    { name: 'Html5', icon: <Code2 size={18} className="text-orange-500" /> },
    { name: 'Css3', icon: <Layout size={18} className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FileCode size={18} className="text-yellow-400" /> },
    { name: 'React', icon: <ReactIcon size={18} className="text-cyan-400" /> },
    { name: 'Tailwind Css', icon: <TailwindIcon size={18} className="text-sky-400" /> },
  ];

  return (
    <section className="py-24 bg-neutral-900/50">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Image (Reversed relative to Hero) */}
        <div className="relative flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
             {/* Primary Background Box */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary transform -translate-x-6 -translate-y-6 lg:-translate-x-8 lg:-translate-y-8 z-0"></div>
            
            {/* Image */}
            <img 
              src="" 
              alt="" 
              className="relative w-full h-full object-cover grayscale contrast-125 z-10 shadow-2xl"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">▶ About me</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Who Am I</h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              My name is Mouad Abouelouafa, and I am a passionate frontend web developer. I have always been fascinated by the intersection of design and technology, and I am thrilled to be able to bring my creative ideas to life through coding. 
              <br /><br />
              My primary focus is on frontend development, where I excel in crafting beautiful user interfaces that are both visually appealing and user-friendly. My technical skills include proficiency in HTML, CSS, JavaScript, and various frontend frameworks such as React and Next.js. I am well-versed in responsive design principles, ensuring that websites look great and function seamlessly across different devices and screen sizes.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex items-center gap-3 bg-neutral-800 border border-neutral-700 rounded-md p-3 hover:border-primary/50 transition-colors cursor-default"
              >
                {skill.icon}
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className="flex items-center gap-2 bg-primary hover:bg-gray-500 text-white text-sm font-bold px-8 py-3 rounded-sm transition-all duration-300 shadow-lg shadow-gray-900/20">
              Download CV
              <Download size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;