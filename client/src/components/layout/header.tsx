import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [activeHash, setActiveHash] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Handle scroll-based navigation highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        
        if (sectionTop <= 200 && sectionTop + sectionHeight > 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveHash(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we're on the home page
  const isHomePage = location === "/" || location.startsWith("/#");
  
  // Prepare navigation items
  const navItems = [
    { name: "Home", path: isHomePage ? "#home" : "/" },
    { name: "Burana Tower", path: isHomePage ? "#burana" : "/burana-tower" },
    { name: "AR Features", path: isHomePage ? "#arfeatures" : "/ar-features" },
    { name: "Gallery", path: isHomePage ? "#gallery" : "/gallery" },
    { name: "About Us", path: isHomePage ? "#about" : "/about" }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      const hash = path.substring(1);
      return hash === activeHash;
    } else {
      return location === path;
    }
  };

  return (
    <header className="bg-[#F5F2E9]/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center">
              <div className="mr-2">
                <div className="w-10 h-10 rounded-full bg-[#C05640] flex items-center justify-center">
                  <span className="text-[#F5F2E9] font-['Playfair_Display',serif] font-bold">AR</span>
                </div>
              </div>
              <h1 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#C05640]">AR Nomad</h1>
            </a>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <a className={`nav-link ${isActive(item.path) ? 'active text-[#C05640]' : 'text-[#333333]'} hover:text-[#C05640] transition relative`}>
                {item.name}
                <span className={`absolute bottom-[-2px] left-0 h-[2px] bg-[#E6B325] transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0'}`}></span>
              </a>
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden text-[#C05640] focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} navItems={navItems} />
    </header>
  );
};

export default Header;
