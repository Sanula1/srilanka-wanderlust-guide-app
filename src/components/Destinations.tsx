
import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    name: "Sigiriya Rock Fortress",
    location: "Matale District",
    rating: 4.9,
    image: "/placeholder.svg",
    description: "Ancient rock fortress with stunning frescoes and panoramic views"
  },
  {
    name: "Temple of the Tooth",
    location: "Kandy",
    rating: 4.8,
    image: "/placeholder.svg",
    description: "Sacred Buddhist temple housing a relic of Buddha's tooth"
  },
  {
    name: "Galle Fort",
    location: "Galle",
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Historic Dutch colonial fort by the Indian Ocean"
  },
  {
    name: "Adam's Peak",
    location: "Central Province",
    rating: 4.8,
    image: "/placeholder.svg",
    description: "Sacred mountain peak with breathtaking sunrise views"
  },
  {
    name: "Yala National Park",
    location: "Southern Province",
    rating: 4.6,
    image: "/placeholder.svg",
    description: "Wildlife sanctuary famous for leopard sightings"
  },
  {
    name: "Nine Arch Bridge",
    location: "Ella",
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Iconic railway bridge surrounded by tea plantations"
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Sri Lanka's most captivating locations, from ancient wonders to natural beauties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{destination.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {destination.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
