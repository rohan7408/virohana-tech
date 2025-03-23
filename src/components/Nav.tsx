import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const scrollToAbout = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const yOffset = -80;
        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      // Wait for navigation and DOM update
      setTimeout(scrollToAbout, 100);
    } else {
      // If already on home page, just scroll
      scrollToAbout();
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="group">
            <img 
              src="/assets/logo.png" 
              alt="Virohana Tech Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-10 h-10 focus:outline-none group"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Hamburger Lines with Animation */}
              <span className={`block w-8 h-[2px] bg-[#42dcdb] rounded-full transition-all duration-300 mb-2 
                ${isMenuOpen ? 'rotate-45 translate-y-2.5 bg-[#8558ff]' : ''}`}></span>
              <span className={`block w-8 h-[2px] bg-[#42dcdb] rounded-full transition-all duration-300 mb-2
                ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-[2px] bg-[#42dcdb] rounded-full transition-all duration-300
                ${isMenuOpen ? '-rotate-45 -translate-y-2.5 bg-[#8558ff]' : ''}`}></span>
            </div>
            
            {/* Glowing Effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-300
              ${isMenuOpen ? 'shadow-[0_0_15px_rgba(133,88,255,0.3)]' : 'shadow-[0_0_15px_rgba(66,220,219,0.3)]'}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-[#0f1729] bg-opacity-95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out z-50
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="relative h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#42dcdb] group hover:border-[#8558ff] transition-all duration-300 z-50"
            >
              <div className="relative w-full h-full">
                {/* X Symbol */}
                <span className="absolute top-1/2 left-1/2 w-6 h-[2px] bg-[#42dcdb] group-hover:bg-[#8558ff] -translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-300"></span>
                <span className="absolute top-1/2 left-1/2 w-6 h-[2px] bg-[#42dcdb] group-hover:bg-[#8558ff] -translate-x-1/2 -translate-y-1/2 -rotate-45 transition-all duration-300"></span>
                
                {/* Glowing Ring */}
                <div className="absolute inset-0 rounded-full transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(133,88,255,0.3)] shadow-[0_0_15px_rgba(66,220,219,0.3)]"></div>
                
                {/* Pulsing Background */}
                <div className="absolute inset-0 rounded-full bg-[#42dcdb] opacity-0 group-hover:opacity-5 transition-all duration-300 animate-pulse"></div>
              </div>
            </button>

            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(66,220,219,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(133,88,255,0.1),transparent_50%)]"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(66,220,219,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(66,220,219,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            
            {/* Menu Links Container */}
            <div className="flex flex-col items-center justify-center h-full space-y-6 md:space-y-8 relative z-10">
              <a 
                href="#about"
                onClick={handleAboutClick}
                className="text-lg md:text-2xl text-[#42dcdb] hover:text-[#8558ff] transition-all duration-300 font-['Bruno_Ace_SC'] hover:scale-110 hover:shadow-[0_0_15px_rgba(66,220,219,0.3)]"
              >
                About
              </a>
              <Link 
                to="/services" 
                className="text-lg md:text-2xl text-[#42dcdb] hover:text-[#8558ff] transition-all duration-300 font-['Bruno_Ace_SC'] hover:scale-110 hover:shadow-[0_0_15px_rgba(66,220,219,0.3)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                className="text-lg md:text-2xl text-[#42dcdb] hover:text-[#8558ff] transition-all duration-300 font-['Bruno_Ace_SC'] hover:scale-110 hover:shadow-[0_0_15px_rgba(66,220,219,0.3)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-lg md:text-2xl text-[#42dcdb] hover:text-[#8558ff] transition-all duration-300 font-['Bruno_Ace_SC'] hover:scale-110 hover:shadow-[0_0_15px_rgba(66,220,219,0.3)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Action Buttons */}
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/contact"
                  className="text-[#42dcdb] hover:bg-[#42dcdb] hover:text-gray-900 px-8 py-3 rounded-lg border border-[#42dcdb] transition-all duration-300 font-['Bruno_Ace_SC'] text-lg hover:shadow-[0_0_15px_rgba(66,220,219,0.5)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
                <Link
                  to="/projects"
                  className="bg-[#42dcdb] text-gray-900 px-8 py-3 rounded-lg transition-all duration-300 font-['Bruno_Ace_SC'] text-lg hover:bg-[#8558ff] hover:text-white hover:shadow-[0_0_15px_rgba(133,88,255,0.5)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Work
                </Link>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#42dcdb20] rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-[#8558ff20] rounded-full animate-spin-slow delay-300"></div>
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a
            href="#about"
            onClick={handleAboutClick}
            className="text-sm md:text-base text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 font-['Bruno_Ace_SC']"
          >
            About
          </a>
          <Link to="/services" className="text-sm md:text-base text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 font-['Bruno_Ace_SC']">
            Services
          </Link>
          <Link to="/projects" className="text-sm md:text-base text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 font-['Bruno_Ace_SC']">
            Projects
          </Link>
          <Link to="/contact" className="text-sm md:text-base text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 font-['Bruno_Ace_SC']">
            Contact
          </Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <Link
            to="/contact"
            className="text-sm md:text-base text-[#42dcdb] hover:bg-[#42dcdb] hover:text-gray-900 px-3 md:px-4 py-2 rounded-lg border border-[#42dcdb] transition-all duration-300 font-['Bruno_Ace_SC'] hover:shadow-[0_0_15px_rgba(66,220,219,0.5)]"
          >
            Get Quote
          </Link>
          <Link
            to="/projects"
            className="text-sm md:text-base bg-[#42dcdb] text-gray-900 px-3 md:px-4 py-2 rounded-lg transition-all duration-300 font-['Bruno_Ace_SC'] hover:bg-[#8558ff] hover:text-white hover:shadow-[0_0_15px_rgba(133,88,255,0.5)]"
          >
            Our Work
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 