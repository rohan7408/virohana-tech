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
    <footer className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl border-t border-[#42dcdb20]">
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
            <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] leading-relaxed">
              Crafting digital excellence with cutting-edge solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-['Bruno_Ace_SC'] text-[#42dcdb] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <a
                    href="#about"
                    onClick={handleAboutClick}
                    className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300"
                  >
                    About Us
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <Link 
                    to="/services" 
                    className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300"
                  >
                    Services
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <Link 
                    to="/projects" 
                    className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300"
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <Link 
                    to="/contact" 
                    className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-['Bruno_Ace_SC'] text-[#42dcdb] mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300">
                    Website Development
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300">
                    WordPress Solutions
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300">
                    Web Application Development
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300">
                    Logo & Brochure Design
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300">
                    IT Support & Website Maintenance
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300">
                    Customer Support Services
                  </p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300">
                    Website Hosting
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-['Bruno_Ace_SC'] text-[#42dcdb] mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <span className="text-[#8558ff] text-sm font-['Bruno_Ace_SC']">
                    Utah, USA
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <a 
                    href="mailto:info@virohanatech.com" 
                    className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300"
                  >
                    info@virohanatech.com
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                  <a 
                    href="tel:+13852075748" 
                    className="text-[#8558ff] text-sm font-['Bruno_Ace_SC'] group-hover:text-[#42dcdb] transition-colors duration-300"
                  >
                    +1 385 207 5748
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#42dcdb20]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#8558ff] text-sm font-['Bruno_Ace_SC']">
              © 2024 Virohana Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://www.facebook.com/profile.php?id=61574694175194" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#8558ff] hover:text-[#42dcdb] transition-colors duration-300"
              >
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