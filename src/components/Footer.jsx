import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter, Github, 
  Facebook, Instagram, Youtube, Sparkles, Send, CheckCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }, 1500);
  };

  const footerLinks = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Tech Stack', path: '/tech-stack' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Web Development', path: '/services' },
      { name: 'Mobile Apps', path: '/services' },
      { name: 'Cloud Solutions', path: '/services' },
      { name: 'AI/ML Integration', path: '/services' },
      { name: 'UI/UX Design', path: '/services' },
    ],
    resources: [
      { name: 'Blog', path: '#' },
      { name: 'Case Studies', path: '/portfolio' },
      { name: 'Documentation', path: '#' },
      { name: 'Support', path: '/contact' },
    ],
  };

  const socialLinks = [
    { Icon: Linkedin, url: 'https://linkedin.com', name: 'LinkedIn' },
    { Icon: Twitter, url: 'https://twitter.com', name: 'Twitter' },
    { Icon: Github, url: 'https://github.com', name: 'GitHub' },
    { Icon: Facebook, url: 'https://facebook.com', name: 'Facebook' },
    { Icon: Instagram, url: 'https://instagram.com', name: 'Instagram' },
    { Icon: Youtube, url: 'https://youtube.com', name: 'YouTube' },
  ];

  return (
    <footer className="relative bg-linear-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white overflow-hidden">
      <Toaster position="top-right" richColors />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-[#10B981] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#06B6D4] rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-[#10B981] to-[#06B6D4] rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                TCON
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transforming ideas into intelligent solutions. We build cutting-edge software that empowers businesses to thrive in the digital age.
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-gradient-to-r hover:from-[#10B981] hover:to-[#06B6D4] transition-all border border-white/10"
                    aria-label={social.name}
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#10B981] transition-colors inline-block group text-sm"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#10B981] transition-colors inline-block group text-sm"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#10B981] transition-colors inline-block group text-sm"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="mailto:contact@tconsolutions.com"
              whileHover={{ y: -2 }}
              className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#10B981]/50 transition-all group"
            >
              <div className="p-2 bg-linear-to-br from-[#10B981] to-[#06B6D4] rounded-xl">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Email</div>
                <div className="text-sm text-white group-hover:text-[#10B981] transition-colors">
                  contact@tconsolutions.com
                </div>
              </div>
            </motion.a>

            <motion.a
              href="tel:+15551234567"
              whileHover={{ y: -2 }}
              className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#10B981]/50 transition-all group"
            >
              <div className="p-2 bg-linear-to-br from-[#10B981] to-[#06B6D4] rounded-xl">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Phone</div>
                <div className="text-sm text-white group-hover:text-[#10B981] transition-colors">
                  +1 (555) 123-4567
                </div>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ y: -2 }}
              className="flex items-start space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="p-2 bg-linear-to-br from-[#10B981] to-[#06B6D4] rounded-xl">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Location</div>
                <div className="text-sm text-white">
                  Silicon Valley, CA 94025
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="text-[#10B981]" size={20} />
              <h4 className="text-lg font-semibold text-white">Subscribe to Our Newsletter</h4>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on technology trends, industry insights, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all text-white placeholder-gray-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-xl font-semibold hover:shadow-lg hover:shadow-[#10B981]/30 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 TCON Solutions. All rights reserved. Built with ❤️ in Silicon Valley.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
              Cookie Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-[#10B981] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] rounded-2xl shadow-2xl hover:shadow-[#10B981]/50 transition-all z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
};

export default Footer;
