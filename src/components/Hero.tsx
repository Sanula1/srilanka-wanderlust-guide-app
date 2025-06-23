
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover the 
              <span className="text-orange-600"> Pearl of the Indian Ocean</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore Sri Lanka's breathtaking landscapes, rich culture, and warm hospitality. 
              From ancient temples to pristine beaches, create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Watch Video
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-20 absolute -top-10 -right-10 w-72 h-72"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8">
              <img 
                src="/placeholder.svg" 
                alt="Sri Lanka landscape" 
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-orange-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold">UNESCO World Heritage Sites</p>
                <p className="text-sm opacity-90">8 Amazing Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
