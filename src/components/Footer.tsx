import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a103c] via-[#251844] to-[#0f1729]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(66,220,219,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(133,88,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 border-t border-[#42dcdb20] backdrop-blur-sm"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="text-[#42dcdb] text-2xl font-['Bruno_Ace_SC'] hover:text-[#8558ff] transition-colors duration-300 inline-block">
              Virohana Tech
            </Link>
            <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
              Crafting innovative digital solutions for tomorrow's challenges.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 hover:scale-110 transform"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 hover:scale-110 transform"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 hover:scale-110 transform"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#42dcdb] font-['Bruno_Ace_SC'] text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#42dcdb] font-['Bruno_Ace_SC'] text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/web-development" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300 font-['Bruno_Ace_SC'] text-sm">
                  Tech Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#42dcdb] font-['Bruno_Ace_SC'] text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2 group">
                <HiLocationMarker className="w-6 h-6 text-[#42dcdb] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm group-hover:text-[#42dcdb] transition-colors duration-300">
                  Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-start space-x-2 group">
                <HiMail className="w-6 h-6 text-[#42dcdb] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm group-hover:text-[#42dcdb] transition-colors duration-300">
                  info@virohanatech.com
                </span>
              </li>
              <li className="flex items-start space-x-2 group">
                <HiPhone className="w-6 h-6 text-[#42dcdb] mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm group-hover:text-[#42dcdb] transition-colors duration-300">
                  +977 9876543210
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#42dcdb20]">
          <div className="text-center">
            <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm">
              © {new Date().getFullYear()} Virohana Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;