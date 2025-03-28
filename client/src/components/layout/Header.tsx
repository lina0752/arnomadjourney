import { useState } from "react";
import { Link, useLocation } from "wouter";
import { MobileMenu } from "../ui/mobile-menu";

const Header = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/burana-tower", label: "Burana Tower" },
    { path: "/ar-features", label: "AR Features" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <nav className="sticky top-0 bg-[#1A3A63] text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="font-['Montserrat'] font-bold text-[#1A3A63] text-lg">AR</span>
            </div>
            <span className="font-['Montserrat'] font-bold text-xl">AR Nomad</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`hover:text-[#E8DBC5] transition-colors ${location === link.path ? 'text-[#E8DBC5]' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          links={navLinks} 
          currentPath={location} 
          onClose={closeMenu} 
        />
      </div>
    </nav>
  );
};

export default Header;
