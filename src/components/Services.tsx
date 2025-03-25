import { motion } from "framer-motion";
import { FC } from "react";
import Footer from './Footer';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Decorative Components
const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute w-72 h-72 rounded-full opacity-20 blur-[100px] animate-pulse ${className}`} />
);

const GlowingLine = ({ className }: { className?: string }) => (
  <div className={`absolute w-[1px] bg-gradient-to-b from-transparent via-[#42dcdb] to-transparent opacity-30 ${className}`} />
);

const FloatingShape = ({ className }: { className?: string }) => (
  <div className={`absolute border-2 border-[#42dcdb20] rounded-lg animate-float opacity-30 ${className}`} />
);

interface ServicesProps {}

const Services: FC<ServicesProps> = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to service section when navigating from footer
    if (location.state?.scrollTo) {
      const serviceSection = document.getElementById(location.state.scrollTo);
      if (serviceSection) {
        const yOffset = -80;
        const y = serviceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // Clear the state after scrolling
        history.replaceState({}, document.title);
      }
    }
  }, [location.state?.scrollTo]);

  return (
    <div className="min-h-screen bg-[#0f1729] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <FloatingOrb className="bg-[#42dcdb] top-20 left-20" />
      <FloatingOrb className="bg-[#8558ff] bottom-20 right-20" />
      <GlowingLine className="h-96 top-0 right-1/4" />
      <GlowingLine className="h-96 bottom-0 left-1/3" />
      <FloatingShape className="w-32 h-32 top-1/4 right-1/4 rotate-45" />
      <FloatingShape className="w-24 h-24 bottom-1/3 left-1/4 -rotate-12" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,220,219,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(66,220,219,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <Nav />

      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-['Bruno_Ace_SC'] text-[#42dcdb]">
                Our Services
              </h2>
              <p className="text-[#8558ff] text-lg font-['Bruno_Ace_SC'] max-w-2xl mx-auto">
                Empowering your digital journey with comprehensive solutions
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-12">
              {/* Website Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#42dcdb] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                    Website Development
                  </h3>
                  <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                    Crafting stunning, high-performance websites.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our expert team specializes in creating modern, responsive websites that captivate your audience. We combine cutting-edge technologies with intuitive design to deliver websites that not only look amazing but also perform exceptionally well.
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[#42dcdb] text-sm font-['Bruno_Ace_SC']">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Responsive Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">SEO Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Fast Loading Speed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Modern UI/UX</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/assets/img-services/webdev.jpg" alt="Website Development" className="w-full h-full object-cover rounded-xl" />
                </div>
              </motion.div>

              {/* WordPress Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse gap-8 bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#42dcdb] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                    WordPress Solutions
                  </h3>
                  <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                    Building dynamic, customizable WordPress websites.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Transform your online presence with our custom WordPress solutions. We create powerful, scalable, and user-friendly WordPress websites that are easy to manage and update. Our solutions include custom themes, plugins, and comprehensive maintenance services.
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[#42dcdb] text-sm font-['Bruno_Ace_SC']">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Custom Themes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Plugin Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">E-commerce Solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Regular Updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/assets/img-services/word.png" alt="WordPress Solutions" className="w-full h-full object-cover rounded-xl" />
                </div>
              </motion.div>

              {/* Web Application Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#42dcdb] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                    Web Application Development
                  </h3>
                  <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                    Creating powerful and scalable web applications.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We develop sophisticated web applications that streamline your business processes and enhance user experience. Our solutions are built using modern frameworks and follow best practices for security, scalability, and performance.
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[#42dcdb] text-sm font-['Bruno_Ace_SC']">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Custom Solutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">API Integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Cloud Deployment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Scalable Architecture</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/assets/img-services/webmob.png" alt="Web Application Development" className="w-full h-full object-cover rounded-xl" />
                </div>
              </motion.div>

              {/* Logo & Brochure Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse gap-8 bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#42dcdb] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                    Logo & Brochure Design
                  </h3>
                  <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                    Designing eye-catching branding materials.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Stand out from the competition with our professional design services. We create unique logos and marketing materials that reflect your brand's identity and values. Our designs are modern, memorable, and effective in communicating your message.
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[#42dcdb] text-sm font-['Bruno_Ace_SC']">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Custom Logo Design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Brand Guidelines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Marketing Materials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Print Ready Files</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/assets/img-services/logdes.png" alt="Logo Design" className="w-full h-full object-cover rounded-xl" />
                </div>
              </motion.div>

              {/* IT Support & Website Maintenance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#42dcdb] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                    IT Support & Website Maintenance
                  </h3>
                  <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                    Ensuring your digital platforms run smoothly.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Keep your digital infrastructure running at peak performance with our comprehensive IT support and maintenance services. We provide regular updates, security patches, performance optimization, and rapid response to technical issues.
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[#42dcdb] text-sm font-['Bruno_Ace_SC']">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">24/7 Support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Security Updates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Performance Monitoring</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Backup Management</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/assets/img-services/itsup.png" alt="IT Support" className="w-full h-full object-cover rounded-xl" />
                </div>
              </motion.div>

              {/* Customer Support Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row-reverse gap-8 bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#42dcdb] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                    Customer Support Services
                  </h3>
                  <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                    Providing reliable assistance to enhance user experience.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our dedicated customer support team is available to help your users navigate and maximize the potential of your digital solutions. We provide timely, professional, and effective support through multiple channels to ensure the highest level of user satisfaction.
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[#42dcdb] text-sm font-['Bruno_Ace_SC']">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Multi-channel Support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Quick Response Time</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Issue Tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Customer Feedback</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/assets/img-services/cussup.png" alt="Customer Support" className="w-full h-full object-cover rounded-xl" />
                </div>
              </motion.div>

              {/* Website Hosting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
              >
                <div className="flex-1 space-y-6">
                  <div className="text-[#42dcdb] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-['Bruno_Ace_SC'] text-[#42dcdb] mb-4 group-hover:text-[#8558ff] transition-colors duration-300">
                    Website Hosting
                  </h3>
                  <p className="text-[#8558ff] font-['Bruno_Ace_SC'] text-sm leading-relaxed">
                    Offering secure and efficient hosting solutions.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Experience reliable and secure hosting for your website with our advanced hosting solutions. We provide fast servers, regular backups, SSL certificates, and 24/7 monitoring to ensure your website remains accessible and secure at all times.
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-[#42dcdb] text-sm font-['Bruno_Ace_SC']">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">99.9% Uptime</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">SSL Certificates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">Daily Backups</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#42dcdb]"></div>
                        <span className="text-[#8558ff] text-sm">DDoS Protection</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <img src="/assets/img-services/hosting.png" alt="Website Hosting" className="w-full h-full object-cover rounded-xl" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services; 