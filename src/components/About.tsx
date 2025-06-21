
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-srilankan-emerald/10 to-srilankan-ocean/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Your Trusted <span className="text-gradient">Sri Lanka</span> Guide
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With over 15 years of experience in Sri Lankan tourism, Ceylon Explorer 
                has been crafting unforgettable journeys for travelers from around the world. 
                We are passionate locals who know every hidden gem, cultural nuance, and 
                breathtaking vista our beautiful island has to offer.
              </p>
              <p>
                Our expert team specializes in personalized itineraries that showcase the 
                authentic spirit of Sri Lanka - from ancient kingdoms and sacred temples 
                to pristine beaches and misty mountain retreats.
              </p>
              <p>
                Whether you're seeking adventure, relaxation, cultural immersion, or 
                wildlife encounters, we'll design the perfect Sri Lankan experience 
                tailored just for you.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-srilankan-emerald mb-2">500+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-srilankan-emerald mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-srilankan-emerald mb-2">50+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-srilankan-emerald hover:bg-srilankan-emerald/90 rounded-full px-8 py-3"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800"
                alt="Sri Lanka landscape"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-srilankan-emerald/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
