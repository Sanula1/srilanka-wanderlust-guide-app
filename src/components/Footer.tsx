
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Ceylon Explorer</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your gateway to discovering the enchanting beauty of Sri Lanka. 
              From ancient wonders to natural paradises, we create unforgettable 
              experiences that showcase the true spirit of the Pearl of the Indian Ocean.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-srilankan-emerald rounded-full flex items-center justify-center hover:bg-srilankan-emerald/80 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-srilankan-emerald rounded-full flex items-center justify-center hover:bg-srilankan-emerald/80 transition-colors cursor-pointer">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-srilankan-emerald rounded-full flex items-center justify-center hover:bg-srilankan-emerald/80 transition-colors cursor-pointer">
                <span className="text-white font-bold">i</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-srilankan-golden">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#experiences" className="text-gray-400 hover:text-white transition-colors">Experiences</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-srilankan-golden">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Group Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wildlife Safaris</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cultural Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beach Holidays</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Ceylon Explorer. All rights reserved. | Designed with ❤️ for Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
