import React from 'react';
import { Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Lets work together on your next project
            </h2>
            <p className="text-gray-400 text-sm">
              Collaboration is key! Lets join forces and combine our skills to tackle your next project with a powerful synergy that guarantees success.
            </p>
          </div>
          <div>
            <button className="bg-primary hover:bg-gray-500 text-white font-bold px-10 py-4 rounded-sm transition-all duration-300 shadow-lg shadow-gray-900/20 whitespace-nowrap">
              Contact
            </button>
          </div>
        </div>

        <div className="h-px w-full bg-neutral-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
           <div className="flex items-center gap-2">
               <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary text-xs font-bold">
                  MA
               </div>
               <span className="text-gray-500 text-sm">© 2025 Mouad Abouelouafa</span>
            </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-primary transition-colors bg-neutral-800 p-2 rounded-full hover:bg-white">
                <Instagram size={18} />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors bg-neutral-800 p-2 rounded-full hover:bg-white">
                <Facebook size={18} />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors bg-neutral-800 p-2 rounded-full hover:bg-white">
                <Linkedin size={18} />
            </a>
            <a href="#" className="text-white hover:text-primary transition-colors bg-neutral-800 p-2 rounded-full hover:bg-white">
                <Github size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;