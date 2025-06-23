
import React from 'react';
import { Button } from './ui/button';
import { Users, Award, MapPin, Heart } from 'lucide-react';

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Travelers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "50+", label: "Destinations Covered" },
  { icon: Heart, value: "99%", label: "Customer Satisfaction" }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Guide to Sri Lanka
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience, we are passionate about showcasing the 
                beauty and culture of Sri Lanka. Our expert local guides ensure you discover 
                hidden gems and create authentic experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the misty hills of Kandy to the golden beaches of the south coast, 
                we craft personalized journeys that capture the essence of this magical island.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            <Button className="bg-orange-600 hover:bg-orange-700">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/placeholder.svg" 
                alt="Sri Lankan culture" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <img 
                src="/placeholder.svg" 
                alt="Beautiful landscape" 
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="font-semibold text-lg">Authentic Experiences</p>
              <p className="text-sm opacity-90">Crafted by Local Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
