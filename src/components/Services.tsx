import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLaptopCode, FaHeadset, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';
import { useRef } from 'react';
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

interface ServiceCardProps {
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  delay: number;
  imageUrl: string;
  features: string[];
  reverse?: boolean;
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  longDescription,
  icon, 
  delay,
  imageUrl,
  features,
  reverse = false,
  id
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      id={id}
      ref={cardRef}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 mb-16 md:mb-32 relative group`}
    >
      {/* Background Effects */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#42dcdb10] to-[#8558ff10] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -z-10 inset-0 backdrop-blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      
      {/* Content Section */}
      <div className="flex-1 space-y-6 md:space-y-8 p-4 md:p-8">
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6"
          whileHover={{ x: 10 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl text-[#42dcdb] bg-[#1a103c] p-3 md:p-4 lg:p-6 rounded-2xl shadow-[0_0_15px_rgba(66,220,219,0.3)] relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#42dcdb20] to-[#8558ff20] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {icon}
          </motion.div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#42dcdb] font-['Bruno_Ace_SC'] text-center md:text-left">{title}</h3>
        </motion.div>

        <div className="space-y-4">
          <p className="text-base md:text-lg lg:text-xl text-[#8558ff] font-['Bruno_Ace_SC'] text-center md:text-left">{description}</p>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed text-center md:text-left">{longDescription}</p>
        </div>

        {/* Features List */}
        <div className="space-y-2 md:space-y-3 lg:space-y-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.1 * index }}
              className="flex items-center gap-3"
            >
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#42dcdb]"></div>
              <p className="text-[#8558ff] text-xs md:text-sm lg:text-base">{feature}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(66,220,219,0.5)' }}
          className="w-full md:w-auto bg-gradient-to-r from-[#42dcdb] to-[#8558ff] text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-xl font-['Bruno_Ace_SC'] text-xs md:text-sm lg:text-base transition-all duration-300 hover:from-[#8558ff] hover:to-[#42dcdb]"
        >
          Learn More
        </motion.button>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative group">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#42dcdb20] to-[#8558ff20] rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
        
        {/* Main Image Container */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative z-10 rounded-3xl overflow-hidden border-2 border-[#42dcdb20] shadow-[0_0_30px_rgba(66,220,219,0.2)] group-hover:border-[#8558ff40] transition-all duration-500"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] via-[#0f172920] to-transparent opacity-50 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          {/* Animated Corner Lines */}
          <div className="absolute top-0 left-0 w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#42dcdb] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#42dcdb] to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
          </div>
          <div className="absolute top-0 right-0 w-20 h-20">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#42dcdb] to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#42dcdb] to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20">
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#8558ff] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#8558ff] to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20">
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#8558ff] to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[#8558ff] to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
          </div>
        </motion.div>
        
        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -z-10 top-8 -right-8 w-32 h-32 border-2 border-dashed border-[#42dcdb20] rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 border-2 border-dashed border-[#8558ff20] rounded-full opacity-30"
        />
        
        {/* Glowing Dots */}
        <div className="absolute top-1/4 -right-2 w-1 h-1 bg-[#42dcdb] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 -left-2 w-1 h-1 bg-[#8558ff] rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/2 -right-2 w-1 h-1 bg-[#42dcdb] rounded-full animate-ping delay-700"></div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const location = useLocation();
  const services = [
    {
      id: 'web-development',
      title: "Web Application Development",
      description: "Custom web solutions built with cutting-edge technologies",
      longDescription: "Our expert team crafts responsive, scalable, and high-performance web applications using the latest technologies and frameworks. We focus on creating intuitive user experiences while ensuring robust backend functionality and seamless integration with existing systems.",
      icon: <FaLaptopCode />,
      imageUrl: "/assets/img-services/webdev.jpeg",
      features: [
        "Responsive Design for All Devices",
        "Modern Frontend Frameworks (React, Vue, Angular)",
        "Scalable Backend Architecture",
        "Performance Optimization",
        "SEO-Friendly Development"
      ]
    },
    {
      id: 'technical-support',
      title: "Technical Support",
      description: "24/7 expert technical assistance for your systems",
      longDescription: "Round-the-clock technical support to keep your digital infrastructure running smoothly. Our dedicated team provides quick resolution to technical issues, system maintenance, and proactive monitoring to prevent potential problems before they impact your business.",
      icon: <FaHeadset />,
      imageUrl: "/assets/img-services/tecsup.jpeg",
      features: [
        "24/7 Support Availability",
        "Quick Response Time",
        "Proactive System Monitoring",
        "Regular Maintenance",
        "Technical Documentation"
      ]
    },
    {
      id: 'customer-support',
      title: "Customer Support",
      description: "Dedicated service to ensure client satisfaction",
      longDescription: "Our customer support team is committed to providing exceptional service and ensuring your complete satisfaction. We offer multiple channels of communication, quick response times, and personalized solutions to address your unique needs and concerns.",
      icon: <FaUsers />,
      imageUrl: "/assets/img-services/cussup.jpeg",
      features: [
        "Multi-Channel Support",
        "Personalized Solutions",
        "Quick Issue Resolution",
        "Customer Feedback Integration",
        "Regular Follow-ups"
      ]
    },
    {
      id: 'it-consulting',
      title: "IT Consulting",
      description: "Strategic technology consulting for business growth",
      longDescription: "Transform your business with our expert IT consulting services. We help you navigate the complex technology landscape, make informed decisions, and implement solutions that drive efficiency, innovation, and competitive advantage in your industry.",
      icon: <FaLightbulb />,
      imageUrl: "/assets/img-services/itcon.jpeg",
      features: [
        "Technology Strategy Development",
        "Digital Transformation",
        "Infrastructure Planning",
        "Security Assessment",
        "Cost Optimization"
      ]
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Data-driven strategies for online success",
      longDescription: "Boost your online presence and drive growth with our comprehensive digital marketing solutions. From SEO and content marketing to social media management and PPC campaigns, we create targeted strategies that deliver measurable results and ROI.",
      icon: <FaChartLine />,
      imageUrl: "/assets/img-services/seo.jpeg",
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing",
        "PPC Campaign Management",
        "Analytics & Reporting"
      ]
    },
  ];

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

      <section className="py-12 md:py-16 lg:py-32 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto relative z-10"
        >
          <div className="text-center mb-12 md:mb-16 lg:mb-24 relative">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#42dcdb] mb-3 md:mb-4 lg:mb-6 font-['Bruno_Ace_SC']"
            >
              Our Services
            </motion.h2>
            <div className="w-24 md:w-32 lg:w-40 h-0.5 md:h-1 bg-gradient-to-r from-[#42dcdb] to-[#8558ff] mx-auto rounded-full mb-4 md:mb-6 lg:mb-8"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg lg:text-2xl text-[#8558ff] max-w-3xl mx-auto font-['Bruno_Ace_SC'] px-4"
            >
              Comprehensive digital solutions to help your business thrive in the modern world
            </motion.p>
          </div>
          
          <div className="space-y-12 md:space-y-16 lg:space-y-32">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.2}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Services; 