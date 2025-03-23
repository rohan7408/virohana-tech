/** @jsxImportSource react */
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import Footer from './Footer';
import Nav from './Nav';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#0f1729]">
      {/* Hero Section with Gradient Background */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a103c] to-[#251844] overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(66,220,219,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(133,88,255,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(66,220,219,0.05),rgba(133,88,255,0.05))] backdrop-blur-[100px]"></div>

        {/* Decorative Elements */}
        {/* Large Glowing Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#42dcdb] rounded-full opacity-[0.15] blur-[60px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#8558ff] rounded-full opacity-[0.15] blur-[60px] animate-pulse delay-700"></div>
        
        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full border-2 border-[#42dcdb] animate-bounce opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full border-2 border-[#8558ff] animate-bounce delay-300 opacity-60"></div>
        <div className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full border-2 border-[#42dcdb] animate-bounce delay-700 opacity-60"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-32 right-1/4 w-12 h-12 border-2 border-[#42dcdb] rotate-45 opacity-30 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-[#8558ff] rotate-12 opacity-30 animate-spin-slow delay-500"></div>
        <div className="absolute top-1/2 right-16 w-20 h-20 border-2 border-[#42dcdb] rotate-90 opacity-20 animate-spin-slow delay-1000"></div>
        
        {/* Animated Dots */}
        <div className="absolute top-1/3 left-16 w-2 h-2 bg-[#42dcdb] rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-1/3 right-32 w-2 h-2 bg-[#8558ff] rounded-full animate-ping delay-300 opacity-70"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#42dcdb] rounded-full animate-ping delay-700 opacity-70"></div>
        
        {/* Glowing Lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#42dcdb] to-transparent opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-[1px] h-48 bg-gradient-to-b from-transparent via-[#8558ff] to-transparent opacity-40"></div>
        <div className="absolute bottom-0 left-1/3 w-[1px] h-40 bg-gradient-to-t from-transparent via-[#42dcdb] to-transparent opacity-40"></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-20 right-20 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#42dcdb] to-transparent opacity-30 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#8558ff] to-transparent opacity-30 -rotate-45"></div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-[#42dcdb20] rounded-tl-3xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-[#8558ff20] rounded-tr-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-[#8558ff20] rounded-bl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-[#42dcdb20] rounded-br-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,220,219,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(66,220,219,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

        {/* Radial Dots Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,220,219,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
        
        <div className="relative z-10">
          <Nav />

          {/* Hero Content */}
          <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal text-[#42dcdb] mb-6 md:mb-8 lg:mb-12 font-['Bruno_Ace_SC'] tracking-wider leading-relaxed drop-shadow-[0_0_10px_rgba(66,220,219,0.3)]">
                    Welcome to Virohana Tech
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-[#8558ff] mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto md:mx-0 font-['Bruno_Ace_SC'] tracking-wide leading-relaxed drop-shadow-[0_0_8px_rgba(133,88,255,0.3)]">
                    Crafting stunning, future-ready websites that elevate your business to new heights. Your vision, our expertise.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-[#42dcdb] to-[#8558ff] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-['Bruno_Ace_SC'] transition-all duration-300 tracking-wider hover:shadow-[0_0_20px_rgba(66,220,219,0.5)] hover:scale-105 inline-block"
                  >
                    Start Your Project
                  </Link>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative">
                  <div className="relative w-full aspect-square max-w-xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#42dcdb33] to-[#8558ff33] rounded-[3rem] blur-3xl animate-pulse"></div>
                    <div className="relative z-1 rounded-[3rem] overflow-hidden border-2 border-[#42dcdb20] shadow-[0_0_15px_rgba(66,220,219,0.3)]">
                      <img 
                        src="/assets/home.jpeg" 
                        alt="Virohana Tech Illustration" 
                        className="relative z-1 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(66,220,219,0.3)]"
                      />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#42dcdb40] rounded-[2rem]"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#8558ff40] rounded-[2rem]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section with Futuristic Gradient */}
      <div id="about" className="relative bg-[linear-gradient(130deg,#0f1729_0%,#1a103c_50%,#251844_100%)] py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(66,220,219,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(133,88,255,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(66,220,219,0.05),rgba(133,88,255,0.05))] backdrop-blur-[100px]"></div>

        {/* Decorative Elements */}
        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-[#42dcdb] rotate-45 opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-[#8558ff] -rotate-12 opacity-20 animate-spin-slow delay-500"></div>
        
        {/* Glowing Dots */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#42dcdb] rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-[#8558ff] rounded-full animate-ping delay-300 opacity-50"></div>
        
        {/* Gradient Lines */}
        <div className="absolute top-0 right-1/4 w-[1px] h-40 bg-gradient-to-b from-transparent via-[#42dcdb] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-1/3 w-[1px] h-40 bg-gradient-to-t from-transparent via-[#8558ff] to-transparent opacity-30"></div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#42dcdb20] rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#8558ff20] rounded-bl-2xl"></div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            {/* About Section Title */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-normal text-[#42dcdb] font-['Bruno_Ace_SC'] tracking-wider drop-shadow-[0_0_10px_rgba(66,220,219,0.3)] mb-3 md:mb-4">
                About Us
              </h2>
              <div className="w-24 md:w-32 lg:w-40 h-0.5 md:h-1 bg-gradient-to-r from-[#42dcdb] to-[#8558ff] mx-auto rounded-full"></div>
            </div>

            {/* About Content */}
            <div className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-[#42dcdb20] shadow-[0_0_30px_rgba(66,220,219,0.1)]">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                {/* Text Content */}
                <div className="flex-1 space-y-8">
                  {/* Main Description */}
                  <div className="space-y-4">
                    <p className="text-lg md:text-xl text-[#42dcdb] font-['Bruno_Ace_SC'] leading-relaxed">
                      Virohana Tech, a subsidiary of Virohana, specializes in developing web applications using cutting-edge frameworks and tools.
                    </p>
                    <p className="text-base text-[#8558ff] font-['Bruno_Ace_SC'] leading-relaxed opacity-80">
                      With a team of skilled developers and designers, we transform complex ideas into elegant digital solutions.
                    </p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 py-6">
                    <div className="text-center p-4 rounded-xl bg-[#42dcdb15] border border-[#42dcdb20]">
                      <div className="text-3xl md:text-4xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-2">
                        <CountUp end={5} suffix="+" duration={2} enableScrollSpy scrollSpyOnce />
                      </div>
                      <div className="text-xs text-[#8558ff] font-['Bruno_Ace_SC']">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-[#8558ff15] border border-[#8558ff20]">
                      <div className="text-3xl md:text-4xl font-['Bruno_Ace_SC'] text-[#8558ff] mb-2">
                        <CountUp end={50} suffix="+" duration={2} enableScrollSpy scrollSpyOnce />
                      </div>
                      <div className="text-xs text-[#42dcdb] font-['Bruno_Ace_SC']">
                        Projects Completed
                      </div>
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <p className="text-lg md:text-xl text-[#8558ff] font-['Bruno_Ace_SC'] leading-relaxed">
                    We are committed to delivering innovative and reliable digital solutions.
                  </p>

                  {/* CTA Button */}
                  <div className="text-center md:text-left pt-6">
                    <Link
                      to="/projects"
                      className="inline-flex items-center space-x-2 bg-transparent border-2 border-[#42dcdb] text-[#42dcdb] px-8 py-3 rounded-lg text-base font-['Bruno_Ace_SC'] transition-all duration-300 hover:bg-[#42dcdb] hover:text-gray-900 hover:shadow-[0_0_20px_rgba(66,220,219,0.3)]"
                    >
                      <span>Learn More</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative">
                  <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#42dcdb33] to-[#8558ff33] rounded-2xl blur-3xl"></div>
                    <div className="relative z-1 rounded-2xl overflow-hidden border-2 border-[#42dcdb20] shadow-[0_0_20px_rgba(66,220,219,0.2)]">
                      <img 
                        src="/assets/about.jpeg" 
                        alt="About Virohana Tech" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a103c] via-transparent to-transparent opacity-40"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#42dcdb40] rounded-xl"></div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#8558ff40] rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with Different Gradient */}
      <div className="relative bg-[linear-gradient(150deg,#251844_0%,#1a103c_50%,#0f1729_100%)] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(66,220,219,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(133,88,255,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(66,220,219,0.05),rgba(133,88,255,0.05))] backdrop-blur-[100px]"></div>
        <div className="absolute inset-0 border-t border-[#42dcdb20]"></div>

        {/* Decorative Elements */}
        {/* Floating Circles */}
        <div className="absolute top-40 left-20 w-32 h-32 rounded-full border-2 border-[#42dcdb20] animate-spin-slow opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full border-2 border-[#8558ff20] animate-spin-slow delay-700 opacity-30"></div>
        
        {/* Animated Dots */}
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-[#42dcdb] rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-32 w-3 h-3 bg-[#8558ff] rounded-full animate-ping delay-500 opacity-40"></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-20 left-0 w-40 h-[1px] bg-gradient-to-r from-[#42dcdb20] to-transparent rotate-45"></div>
        <div className="absolute bottom-20 right-0 w-40 h-[1px] bg-gradient-to-l from-[#8558ff20] to-transparent -rotate-45"></div>

        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-[#42dcdb] rotate-[30deg]"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-[#8558ff] rotate-[30deg]"></div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,220,219,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(133,88,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="container mx-auto px-6 relative py-16 md:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Why Choose Us Section Title */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-normal text-[#42dcdb] font-['Bruno_Ace_SC'] tracking-wider drop-shadow-[0_0_10px_rgba(66,220,219,0.3)] mb-3 md:mb-4">
                Why Choose Us
              </h2>
              <div className="w-24 md:w-32 lg:w-40 h-0.5 md:h-1 bg-gradient-to-r from-[#42dcdb] to-[#8558ff] mx-auto rounded-full mb-4 md:mb-6"></div>
              <p className="text-base md:text-lg lg:text-xl text-[#8558ff] font-['Bruno_Ace_SC'] max-w-3xl mx-auto px-4">
                Experience excellence in digital innovation with our expert team and cutting-edge solutions
              </p>
            </div>

            {/* Content Container */}
            <div className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-[#42dcdb20] shadow-[0_0_30px_rgba(66,220,219,0.1)]">
              <div className="flex flex-col md:flex-row gap-16 items-start">
                {/* Image Container */}
                <div className="flex-1 order-2 md:order-1 sticky top-8">
                  <div className="relative w-full aspect-[3/4] max-w-xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#42dcdb33] to-[#8558ff33] rounded-3xl blur-3xl"></div>
                    <div className="relative z-1 rounded-3xl overflow-hidden border-2 border-[#42dcdb20] shadow-[0_0_30px_rgba(66,220,219,0.2)]">
                      <img 
                        src="/assets/why.jpeg" 
                        alt="Why Choose Virohana Tech" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a103c] via-transparent to-transparent opacity-40"></div>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-[#42dcdb40] rounded-full"></div>
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-[#8558ff40] rounded-full"></div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="flex-1 order-1 md:order-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Feature 1 */}
                    <div className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)] hover:-translate-y-1">
                      <div className="text-[#42dcdb] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                        Innovative Solutions
                      </h3>
                      <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                        Cutting-edge technology and creative approaches to solve complex challenges.
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)] hover:-translate-y-1">
                      <div className="text-[#42dcdb] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                        Fast Delivery
                      </h3>
                      <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                        Quick turnaround without compromising on quality and attention to detail.
                      </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)] hover:-translate-y-1">
                      <div className="text-[#42dcdb] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                        Secure & Reliable
                      </h3>
                      <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                        Built with security-first approach and robust architecture for reliability.
                      </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)] hover:-translate-y-1">
                      <div className="text-[#42dcdb] mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                        Dedicated Support
                      </h3>
                      <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                        24/7 expert support team ready to assist you with any concerns.
                      </p>
                    </div>
                  </div>

                  {/* Additional Stats */}
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-2">
                        <CountUp end={24} suffix="/7" duration={2} enableScrollSpy scrollSpyOnce />
                      </div>
                      <div className="text-sm text-[#8558ff] font-['Bruno_Ace_SC']">
                        Support
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-['Bruno_Ace_SC'] text-[#8558ff] mb-2">
                        <CountUp end={99} suffix="%" duration={2} enableScrollSpy scrollSpyOnce />
                      </div>
                      <div className="text-sm text-[#42dcdb] font-['Bruno_Ace_SC']">
                        Success Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-2">
                        <CountUp end={15} suffix="+" duration={2} enableScrollSpy scrollSpyOnce />
                      </div>
                      <div className="text-sm text-[#8558ff] font-['Bruno_Ace_SC']">
                        Technologies
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-['Bruno_Ace_SC'] text-[#8558ff] mb-2">
                        <CountUp end={4} suffix="k+" duration={2} enableScrollSpy scrollSpyOnce />
                      </div>
                      <div className="text-sm text-[#42dcdb] font-['Bruno_Ace_SC']">
                        Code Hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home; 