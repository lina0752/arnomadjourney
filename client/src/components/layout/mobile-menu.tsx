import { Link } from "wouter";

interface NavItem {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, toggleMenu, navItems }: MobileMenuProps) => {
  return (
    <div 
      className={`mobile-menu flex-col md:hidden py-4 px-4 bg-[#F5F2E9] border-b border-gray-200 ${isOpen ? 'flex' : 'hidden'}`}
    >
      {navItems.map((item) => (
        <Link 
          key={item.name} 
          href={item.path}
          onClick={toggleMenu}
        >
          <a className="py-2 text-[#333333] hover:text-[#C05640]">
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default MobileMenu;
