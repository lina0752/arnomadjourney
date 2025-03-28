import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="font-['Montserrat'] font-bold text-[#1A3A63] text-lg">AR</span>
              </div>
              <span className="font-['Montserrat'] font-bold text-xl">AR Nomad</span>
            </div>
            <p className="mb-4">
              Bringing Kyrgyzstan's cultural heritage to life through augmented reality technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#C75D3A] transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-[#C75D3A] transition-colors">Home</Link></li>
              <li><Link href="/burana-tower" className="hover:text-[#C75D3A] transition-colors">Burana Tower</Link></li>
              <li><Link href="/ar-features" className="hover:text-[#C75D3A] transition-colors">AR Features</Link></li>
              <li><Link href="/gallery" className="hover:text-[#C75D3A] transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-[#C75D3A] transition-colors">About Us</Link></li>
              <li>
                <a 
                  href="https://kyrgyzstan.travel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#C75D3A] transition-colors"
                >
                  Kyrgyzstan Tourism <i className="fas fa-external-link-alt text-xs"></i>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-envelope text-[#C75D3A] mr-3"></i>
                <a href="mailto:info@arnomad.kg" className="hover:text-[#C75D3A] transition-colors">info@arnomad.kg</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-[#C75D3A] mr-3"></i>
                <a href="tel:+996700123456" className="hover:text-[#C75D3A] transition-colors">+996 (700) 123-456</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-[#C75D3A] mr-3"></i>
                <span>Bishkek, Kyrgyzstan</span>
              </li>
            </ul>
            
            <h4 className="font-['Montserrat'] font-semibold text-lg mt-6 mb-2">Subscribe to Updates</h4>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-dark"
              />
              <button 
                type="submit" 
                className="bg-[#C75D3A] hover:bg-opacity-90 px-4 py-2 rounded-r-md transition-colors"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-center text-sm">
          <p>© {new Date().getFullYear()} AR Nomad. All rights reserved.</p>
          <p className="mt-2">
            Created by <strong>Aibek Japarov</strong> | Group: <strong>Digital Heritage KG-21</strong> | Email: <a href="mailto:a.japarov@example.com" className="text-[#C75D3A]">a.japarov@example.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
