
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Camera, Utensils, TreePine, Waves } from 'lucide-react';

const experiences = [
  {
    icon: Camera,
    title: "Wildlife Safari",
    description: "Spot elephants, leopards, and exotic birds in their natural habitat",
    image: "/placeholder.svg"
  },
  {
    icon: Utensils,
    title: "Culinary Journey",
    description: "Taste authentic Sri Lankan cuisine and learn traditional cooking",
    image: "/placeholder.svg"
  },
  {
    icon: TreePine,
    title: "Tea Plantation Tours",
    description: "Explore lush tea gardens and learn about Ceylon tea production",
    image: "/placeholder.svg"
  },
  {
    icon: Waves,
    title: "Beach Adventures",
    description: "Surf, snorkel, and relax on pristine tropical beaches",
    image: "/placeholder.svg"
  }
];

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unique Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in unforgettable adventures that showcase the best of Sri Lankan culture and nature
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mb-6">
                    <img 
                      src={experience.image} 
                      alt={experience.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
