
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-srilankan-golden mr-2" />
            <span className="text-srilankan-golden font-semibold tracking-wide uppercase text-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-srilankan-golden">Adventure?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's plan your perfect Sri Lankan journey together. Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                    />
                  </div>
                  <Input 
                    placeholder="Subject" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  <textarea
                    placeholder="Tell us about your dream Sri Lankan adventure..."
                    rows={6}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-srilankan-golden"
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-srilankan-golden hover:bg-srilankan-golden/90 text-white py-3 rounded-full font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-srilankan-golden">📞 Call Us</h4>
                <p className="text-gray-300">+94 77 123 4567</p>
                <p className="text-gray-300">+94 11 234 5678</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-srilankan-golden">✉️ Email Us</h4>
                <p className="text-gray-300">info@ceylonexplorer.com</p>
                <p className="text-gray-300">tours@ceylonexplorer.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-srilankan-golden">📍 Visit Us</h4>
                <p className="text-gray-300">123 Galle Road</p>
                <p className="text-gray-300">Colombo 03, Sri Lanka</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
