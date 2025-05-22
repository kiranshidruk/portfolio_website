import { SiGithub, SiLeetcode, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-xl font-bold">
              <span className="text-blue-500">Kiran</span>Shidruk
            </a>
            <p className="text-gray-400 mt-2">AI Engineer & Data Scientist</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/kiranshidruk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <SiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/kiranshidruk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <SiLinkedin size={20} />
              </a>
              <a href="https://x.com/kiran_shidruk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <SiX size={20} />
              </a>
              <a href="https://leetcode.com/u/KiranShidruk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <SiLeetcode size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">© {currentYear} Kiran Shidruk. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
