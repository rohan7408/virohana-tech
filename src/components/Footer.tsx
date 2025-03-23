import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and scroll to about
      navigate('/', { state: { scrollTo: 'about' } });
    } else {
      // If already on home page, just scroll to about
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const yOffset = -80;
        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    if (location.pathname !== '/services') {
      // If not on services page, navigate to services first
      navigate('/services', { state: { scrollTo: serviceId } });
    } else {
      // If already on services page, just scroll
      const serviceSection = document.getElementById(serviceId);
      if (serviceSection) {
        const yOffset = -80;
        const y = serviceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="group">
              <img 
                src="/assets/logo.png" 
                alt="Virohana Tech Logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-400 mt-4">
              Crafting digital excellence with cutting-edge solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  onClick={handleAboutClick}
                  className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#web-development"
                  onClick={(e) => handleServiceClick(e, 'web-development')}
                  className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#technical-support"
                  onClick={(e) => handleServiceClick(e, 'technical-support')}
                  className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300"
                >
                  Technical Support
                </a>
              </li>
              <li>
                <a
                  href="#it-consulting"
                  onClick={(e) => handleServiceClick(e, 'it-consulting')}
                  className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300"
                >
                  IT Consulting
                </a>
              </li>
              <li>
                <a
                  href="#digital-marketing"
                  onClick={(e) => handleServiceClick(e, 'digital-marketing')}
                  className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Utah, USA
              </li>
              <li>
                <a href="mailto:info@virohanatech.com" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                  info@virohanatech.com
                </a>
              </li>
              <li>
                <a href="tel:+13852075748" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                  +13852075748
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Virohana Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.facebook.com/profile.php?id=61574694175194" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#42dcdb] transition-colors duration-300">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;