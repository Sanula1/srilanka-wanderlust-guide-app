
import { Card, CardContent } from '@/components/ui/card';

const Experiences = () => {
  const experiences = [
    {
      icon: "🐘",
      title: "Wildlife Safaris",
      description: "Encounter majestic elephants, elusive leopards, and exotic birds in their natural habitat"
    },
    {
      icon: "🍃",
      title: "Tea Plantation Tours",
      description: "Walk through emerald tea fields and learn about Ceylon tea production from field to cup"
    },
    {
      icon: "🏛️",
      title: "Cultural Heritage",
      description: "Explore ancient temples, royal palaces, and archaeological sites dating back millennia"
    },
    {
      icon: "🏖️",
      title: "Beach Paradise",
      description: "Relax on pristine golden beaches with crystal clear waters and vibrant coral reefs"
    },
    {
      icon: "🌿",
      title: "Ayurvedic Wellness",
      description: "Rejuvenate with traditional healing therapies and holistic wellness treatments"
    },
    {
      icon: "🚂",
      title: "Scenic Train Rides",
      description: "Journey through misty mountains on one of the world's most beautiful train routes"
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Unforgettable <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in the rich tapestry of Sri Lankan culture, nature, and adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {experience.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-srilankan-emerald transition-colors">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
