import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGlobe, FaSeedling, FaMobileAlt, FaPalette, FaUtensils, FaPlane } from 'react-icons/fa';
import Footer from './Footer';
import Nav from './Nav';

// Decorative Components
const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute w-72 h-72 rounded-full opacity-20 blur-[100px] animate-pulse ${className}`} />
);

const GlowingLine = ({ className }: { className?: string }) => (
  <div className={`absolute w-[1px] bg-gradient-to-b from-transparent via-[#42dcdb] to-transparent opacity-30 ${className}`} />
);

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  icon: React.ReactNode;
  delay: number;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  category,
  technologies,
  icon,
  delay,
  liveLink
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="group relative h-full"
    >
      <div className="relative overflow-hidden rounded-3xl bg-[#1a103c] border border-[#42dcdb20] shadow-[0_0_30px_rgba(66,220,219,0.1)] h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a103c] via-[#1a103c80] to-transparent opacity-60"></div>
          
          {/* Animated Corner Lines */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#42dcdb] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#42dcdb] to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#42dcdb] to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#42dcdb] to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
          </div>
          
          {/* Floating Elements */}
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
            className="absolute -z-10 top-4 -right-8 w-32 h-32 border-2 border-dashed border-[#42dcdb20] rounded-full opacity-40"
          />
        </div>

        {/* Content Container */}
        <div className="relative p-8 space-y-6 flex-grow flex flex-col">
          {/* Title and Category */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-3xl text-[#42dcdb] bg-[#42dcdb20] backdrop-blur-lg p-4 rounded-xl"
            >
              {icon}
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-[#42dcdb] font-['Bruno_Ace_SC']">{title}</h3>
              <p className="text-[#8558ff] font-['Bruno_Ace_SC']">{category}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 line-clamp-3 flex-grow">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + index * 0.1 }}
                className="px-3 py-1 text-sm bg-[#42dcdb20] text-[#42dcdb] rounded-full backdrop-blur-lg border border-[#42dcdb40]"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="w-full bg-[#42dcdb] text-gray-900 px-8 py-3 rounded-xl font-['Bruno_Ace_SC'] text-sm flex items-center justify-center gap-2 group"
              >
                <span>Visit Site</span>
                <svg 
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#42dcdb10] to-[#8558ff10]"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-[#42dcdb] to-[#8558ff] opacity-10 blur-xl"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Virohana",
      description: "A modern and responsive web application built with Vite and React. Features a sleek user interface with Tailwind CSS, seamless data management with MongoDB, and optimized JavaScript for smooth performance.",
      image: "/assets/works/virohana.png",
      category: "Herbs & Botanical",
      technologies: ["Vite", "React", "Tailwind CSS", "MongoDB", "JavaScript"],
      icon: <FaSeedling />,
      liveLink: "https://virohana.com"
    },
    {
      title: "PK Himalayan Adventure",
      description: "An adventure tourism platform developed using Vite and React, featuring a responsive design with Tailwind CSS. Implements MongoDB for efficient data handling and modern JavaScript for enhanced user experience.",
      image: "/assets/works/pk.png",
      category: "Tourism",
      technologies: ["Vite", "React", "Tailwind CSS", "MongoDB", "JavaScript"],
      icon: <FaPlane />,
      liveLink: "https://pkhimalayasadventure.com"
    },
    {
      title: "Hilltown",
      description: "A dynamic restaurant platform built with Vite and React, showcasing delicious cuisines with a responsive design. Utilizes Tailwind CSS for modern styling, MongoDB for menu management, and optimized JavaScript functionality.",
      image: "/assets/works/hilltown.png",
      category: "Restaurants",
      technologies: ["Vite", "React", "Tailwind CSS", "MongoDB", "JavaScript"],
      icon: <FaUtensils />,
      liveLink: "https://hilltown.vercel.app"
    },
    {
      title: "Brand Hosting",
      description: "A cutting-edge hosting platform designed for seamless brand management and website deployment. Built with React and enhanced with Tailwind CSS for modern styling.",
      image: "/assets/works/brand.png",
      category: "Web Development",
      technologies: ["React", "Tailwind CSS", "Python", "RESTful API"],
      icon: <FaGlobe />
    },
    {
      title: "Greenhorn Aroma",
      description: "An innovative e-commerce platform with a responsive design. Built using React and styled with Tailwind CSS for a modern shopping experience.",
      image: "/assets/works/greenhorn.png",
      category: "E-commerce",
      technologies: ["React", "Tailwind CSS", "Python", "Redux"],
      icon: <FaPalette />
    },
    {
      title: "Luxi Rides",
      description: "A modern vehicle rental application with responsive design. Developed using React and styled with Tailwind CSS for optimal user experience in booking and managing rentals.",
      image: "/assets/works/luxi.png",
      category: "Rental Services",
      technologies: ["React", "Tailwind CSS", "Python", "Socket.io"],
      icon: <FaMobileAlt />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f1729] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <FloatingOrb className="bg-[#42dcdb] top-20 -left-20" />
      <FloatingOrb className="bg-[#8558ff] bottom-20 -right-20" />
      <GlowingLine className="h-96 top-0 right-1/4" />
      <GlowingLine className="h-96 bottom-0 left-1/3" />
      
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
          <div className="text-center mb-12 md:mb-16 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#42dcdb] mb-3 md:mb-4 lg:mb-6 font-['Bruno_Ace_SC']"
            >
              Our Projects
            </motion.h2>
            <div className="w-24 md:w-32 lg:w-40 h-0.5 md:h-1 bg-gradient-to-r from-[#42dcdb] to-[#8558ff] mx-auto rounded-full mb-4 md:mb-6 lg:mb-8"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-xl lg:text-2xl text-[#8558ff] max-w-3xl mx-auto font-['Bruno_Ace_SC'] px-4"
            >
              Showcasing our innovative solutions and creative excellence
            </motion.p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects; 