import React from 'react';
import { PenTool, Code, Layout, ShoppingBag, Headset, Flag } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-[#111] p-8 rounded-lg group hover:bg-[#161616] transition-all duration-300 border border-transparent hover:border-neutral-800 flex flex-col items-center text-center">
    <div className="mb-6 text-primary p-4 rounded-full bg-neutral-900 group-hover:bg-neutral-800 transition-colors">
      {icon}
    </div>
    <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
    <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Creative Design",
      description: "Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences.",
      icon: <PenTool size={24} />
    },
    {
      title: "Clean Code",
      description: "Writing code that is well-structured, readable, and maintainable. It involves following coding best practices.",
      icon: <Code size={24} />
    },
    {
      title: "User Interface",
      description: "Creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience.",
      icon: <Layout size={24} />
    },
    {
      title: "User Experience",
      description: "Understanding user behaviors, needs, and preferences to create interfaces that are intuitive, efficient, and enjoyable to use.",
      icon: <ShoppingBag size={24} />
    },
    {
      title: "Fast Support",
      description: "Addressing and resolving user-reported issues or inquiries related to the website or application efficiently.",
      icon: <Headset size={24} />
    },
    {
      title: "Branding",
      description: "Creating consistent and cohesive brand experiences through the use of logos, color schemes, typography, and other branding assets.",
      icon: <Flag size={24} />
    }
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="mb-16">
           <div className="flex items-center gap-2 mb-2">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">▶ My Services</span>
            </div>
          <h2 className="text-3xl font-bold text-white">What Can I Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;