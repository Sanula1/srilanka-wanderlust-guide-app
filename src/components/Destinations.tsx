
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      description: "Ancient rock citadel with stunning frescoes and panoramic views",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1000",
      category: "Cultural Heritage",
      duration: "Half Day"
    },
    {
      id: 2,
      name: "Temple of the Tooth",
      description: "Sacred Buddhist temple housing the relic of Buddha's tooth",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80&w=1000",
      category: "Religious Sites",
      duration: "3-4 Hours"
    },
    {
      id: 3,
      name: "Yala National Park",
      description: "Premier wildlife destination famous for leopards and elephants",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=1000",
      category: "Wildlife Safari",
      duration: "Full Day"
    },
    {
      id: 4,
      name: "Nuwara Eliya Tea Country",
      description: "Rolling hills of emerald tea plantations and colonial charm",
      image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=1000",
      category: "Tea Plantations",
      duration: "2-3 Days"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-srilankan-emerald mr-2" />
            <span className="text-srilankan-emerald font-semibold tracking-wide uppercase text-sm">
              Top Destinations
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Must-Visit Places in <span className="text-gradient">Sri Lanka</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse beauty of Sri Lanka, from ancient wonders to natural paradises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.id} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-srilankan-emerald text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.duration}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-srilankan-emerald transition-colors">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <Button 
                  className="w-full bg-srilankan-emerald hover:bg-srilankan-emerald/90 rounded-full transition-all duration-300"
                >
                  Explore Destination
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-srilankan-emerald text-srilankan-emerald hover:bg-srilankan-emerald hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
