import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  links: { path: string; label: string }[];
  currentPath: string;
  onClose: () => void;
}

export function MobileMenu({ isOpen, links, currentPath, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden" id="mobileMenu">
      <div className="flex flex-col space-y-4 mt-4 pb-4">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={onClose}
            className={`hover:text-[#E8DBC5] transition-colors ${
              currentPath === link.path ? "text-[#E8DBC5]" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
