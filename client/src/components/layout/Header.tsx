import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add box shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary">
          <span className="text-blue-500">John</span>Doe
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#about" className="text-muted-foreground hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#projects" className="text-muted-foreground hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#skills" className="text-muted-foreground hover:text-blue-500 transition-colors">Skills</a></li>
          <li><a href="#resume" className="text-muted-foreground hover:text-blue-500 transition-colors">Resume</a></li>
          <li>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
              <a href="#contact">Contact</a>
            </Button>
          </li>
        </ul>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-gray-100 px-4 py-2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-3 py-2">
          <li><a href="#about" onClick={closeMenu} className="block text-muted-foreground py-2 hover:text-blue-500 transition-colors">About</a></li>
          <li><a href="#projects" onClick={closeMenu} className="block text-muted-foreground py-2 hover:text-blue-500 transition-colors">Projects</a></li>
          <li><a href="#skills" onClick={closeMenu} className="block text-muted-foreground py-2 hover:text-blue-500 transition-colors">Skills</a></li>
          <li><a href="#resume" onClick={closeMenu} className="block text-muted-foreground py-2 hover:text-blue-500 transition-colors">Resume</a></li>
          <li><a href="#contact" onClick={closeMenu} className="block text-muted-foreground py-2 hover:text-blue-500 transition-colors">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
