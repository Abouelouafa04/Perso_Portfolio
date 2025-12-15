import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <div id="home">
            <Hero />
        </div>
        <div id="about">
            <About />
        </div>
        <div id="resume">
            <Services />
        </div>
        <div id="contact">
            <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;