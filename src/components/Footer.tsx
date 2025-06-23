
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-400">Sri Lanka Guide</h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for authentic Sri Lankan experiences. 
              Discover the pearl of the Indian Ocean with expert local guidance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-orange-400 transition-colors">Destinations</a></li>
              <li><a href="#experiences" className="text-gray-300 hover:text-orange-400 transition-colors">Experiences</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Popular Tours</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Cultural Triangle</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Hill Country</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Southern Coast</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Wildlife Safari</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Tea Plantation Tour</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Galle Road, Colombo</p>
              <p>Sri Lanka</p>
              <p>Phone: +94 11 123 4567</p>
              <p>Email: info@srilankaguide.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sri Lanka Guide. All rights reserved. | Made with ❤️ for travelers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
