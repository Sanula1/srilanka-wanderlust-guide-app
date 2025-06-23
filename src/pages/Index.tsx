
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Experiences from '../components/Experiences';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
