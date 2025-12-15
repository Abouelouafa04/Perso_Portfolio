import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 space-y-6 z-10">
          <span className="text-primary font-semibold tracking-wide text-lg">
            Hello, My Name Is
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight tracking-tight">
            Mouad <br />
            <span className="text-white">Abouelouafa</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            A passionate and dedicated junior web developer, driven by the ever-evolving world of technology and its limitless possibilities.
          </p>
          
          <div className="pt-4">
            <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-gray-500 text-white font-semibold px-8 py-3 rounded-sm transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-gray-900/20"
            >
                Contact me
                <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
             {/* Primary Background Box */}
            <div className="absolute top-0 right-0 w-full h-full bg-primary transform translate-x-6 -translate-y-6 lg:translate-x-8 lg:-translate-y-8 z-0"></div>
            
            {/* Image */}
            <img 
              src="" 
              alt="" 
              className="relative w-full h-full object-cover grayscale contrast-125 z-10 shadow-2xl"
            />
            
            {/* Overlay Elements (Icons on shirt in design) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white opacity-20 pointer-events-none">
                <span className="text-6xl font-mono">{'</>'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;