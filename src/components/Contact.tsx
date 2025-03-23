import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Nav from './Nav';
import Footer from './Footer';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd3424bba-956d-4b76-bf02-c5883dd97d24',
          ...formData,
          subject: formData.subject || 'New Contact Form Submission',
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Utah, USA"]
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+13852075748"]
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@virohanatech.com", "support@virohanatech.com"]
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61574694175194" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "#" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#" },
    { icon: <FaLinkedinIn className="w-5 h-5" />, href: "#" }
  ];

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
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#42dcdb] mb-3 md:mb-4 lg:mb-6 font-['Bruno_Ace_SC']"
            >
              Get in Touch
            </motion.h2>
            <div className="w-24 md:w-32 lg:w-40 h-0.5 md:h-1 bg-gradient-to-r from-[#42dcdb] to-[#8558ff] mx-auto rounded-full mb-4 md:mb-6 lg:mb-8"></div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg lg:text-2xl text-[#8558ff] max-w-3xl mx-auto font-['Bruno_Ace_SC'] px-4"
            >
              Let's discuss how we can help bring your vision to life
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#42dcdb20] shadow-[0_0_30px_rgba(66,220,219,0.1)]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#42dcdb] text-sm mb-2 font-['Bruno_Ace_SC']">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f1729] border border-[#42dcdb20] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcdb] focus:ring-1 focus:ring-[#42dcdb] transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#42dcdb] text-sm mb-2 font-['Bruno_Ace_SC']">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f1729] border border-[#42dcdb20] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcdb] focus:ring-1 focus:ring-[#42dcdb] transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[#42dcdb] text-sm mb-2 font-['Bruno_Ace_SC']">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0f1729] border border-[#42dcdb20] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcdb] focus:ring-1 focus:ring-[#42dcdb] transition-colors duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#42dcdb] text-sm mb-2 font-['Bruno_Ace_SC']">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#0f1729] border border-[#42dcdb20] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcdb] focus:ring-1 focus:ring-[#42dcdb] transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-[#42dcdb] to-[#8558ff] text-white py-4 rounded-lg font-['Bruno_Ace_SC'] text-sm transition-all duration-300 hover:from-[#8558ff] hover:to-[#42dcdb] relative overflow-hidden ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : submitStatus === 'success' ? (
                    'Message Sent Successfully!'
                  ) : submitStatus === 'error' ? (
                    'Error Sending Message'
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(66,220,219,0.1)]"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-[#42dcdb] p-3 bg-[#0f1729] rounded-lg shadow-[0_0_15px_rgba(66,220,219,0.2)] group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-[#42dcdb] font-['Bruno_Ace_SC'] text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-400 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-8 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group">
                <h3 className="text-[#42dcdb] font-['Bruno_Ace_SC'] text-xl mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0f1729] text-[#42dcdb] hover:text-[#8558ff] transition-colors duration-300 shadow-[0_0_15px_rgba(66,220,219,0.2)]"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map or Additional Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="bg-[#1a103c] bg-opacity-50 backdrop-blur-xl rounded-2xl p-6 border border-[#42dcdb20] hover:border-[#42dcdb40] transition-all duration-300 group relative overflow-hidden h-[300px]"
              >
                {/* Contact Image with Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#42dcdb20] to-[#8558ff20] opacity-50 z-10"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#42dcdb10_1px,transparent_1px),linear-gradient(-45deg,#8558ff10_1px,transparent_1px)] bg-[size:20px_20px] z-20"></div>
                
                {/* Contact Image */}
                <img
                  src="/assets/contact.jpeg"
                  alt="Contact Us"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {/* Animated Corner Lines */}
                <div className="absolute top-0 left-0 w-20 h-20 z-30">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#42dcdb] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#42dcdb] to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 z-30">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#42dcdb] to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-[#42dcdb] to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 z-30">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#8558ff] to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-[#8558ff] to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20 z-30">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#8558ff] to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-gradient-to-t from-[#8558ff] to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 