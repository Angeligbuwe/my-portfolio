
import logo from '../assets/logo.png';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: "Home", href: "#home", color: "hover:text-red-400"},
  { label: "About", href: "#about", color: "hover:text-blue-400" },
  { label: "Experience", href: "#experience", color: "hover:text-green-400" },
  { label: "Projects", href: "#projects", color: "hover:text-purple-400" },
  { label: "Resume", href: "#resume", color: "hover:text-yellow-400" }, 
  { label: "AI Features", href: "#ai-section", color: "hover:text-cyan-400" }, 
  { label: "Contact", href: "#contact", color: "hover:text-pink-400" },
  
];

export const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg"
           : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
       <div className="flex items-center gap-3">
        <a href="#home">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover hover:scale-110 
            transition duration-300"
          />
        </a>
      </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`transition duration-300 ${link.color}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};