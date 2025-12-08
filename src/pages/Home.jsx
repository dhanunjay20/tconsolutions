import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Zap, Shield, Clock, Users, Star,
  ChevronDown, ChevronUp, Award, Target, TrendingUp, Code,
  Smartphone, Cloud, Database, Cpu, Globe, Sparkles,
  Rocket, BarChart, Lock, MessageSquare, Lightbulb,
  CheckCheck, ArrowUpRight, Play
} from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const stats = [
    { label: 'Projects Delivered', value: '150+', icon: CheckCheck },
    { label: 'Happy Customers', value: '120+', icon: Users },
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Technologies', value: '50+', icon: Code },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      desc: '99.9% uptime optimized performance',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      desc: 'Enterprise-grade encryption & compliance',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Fast Deployment',
      desc: 'Agile approach with 2-week sprints',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: BarChart,
      title: 'Data-Driven',
      desc: 'Analytics-based insights & optimization',
      color: 'from-green-400 to-emerald-500'
    },
  ];

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Modern, responsive web applications built with latest technologies',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      desc: 'Native and cross-platform apps for iOS and Android',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      desc: 'Scalable cloud infrastructure and serverless architectures',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      desc: 'Sophisticated AI and ML-driven smart systems',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      desc: 'Scalable backend infrastructure and high-performance APIs',
      technologies: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      desc: 'Full security audits and penetration testing',
      technologies: ['Encryption', 'OAuth', 'SSL/TLS', 'GDPR'],
      color: 'from-red-500 to-pink-500'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://i.pravatar.cc/150?img=1',
      content: 'TCON Solutions transformed our business with a cutting-edge e-commerce platform. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, HealthCare Plus',
      image: 'https://i.pravatar.cc/150?img=13',
      content: 'Working with TCON was a game-changer. They delivered beyond expectations, on time and within budget.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, FitLife App',
      image: 'https://i.pravatar.cc/150?img=5',
      content: 'The mobile app they built has over 100k downloads and 4.8-star ratings. Attention to detail is unmatched.',
      rating: 5,
    },
    {
      name: 'David Kumar',
      role: 'VP Engineering, FinTech Pro',
      image: 'https://i.pravatar.cc/150?img=33',
      content: 'Their expertise in blockchain and fintech is exceptional. Built our payment infrastructure with zero downtime.',
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      title: 'E-Commerce Revolution',
      client: 'RetailCo',
      result: '300% increase in online sales',
      description: 'Built a scalable e-commerce platform with AI-powered recommendations',
      metrics: ['300% ROI', '1M+ users', '99.9% uptime'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      category: 'E-Commerce'
    },
    {
      title: 'Healthcare Innovation',
      client: 'MedTech Solutions',
      result: '10x faster patient processing',
      description: 'Developed an AI-powered healthcare management system',
      metrics: ['50k patients', '95% satisfaction', '60% cost reduction'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      category: 'Healthcare'
    },
    {
      title: 'FinTech Platform',
      client: 'BankTech',
      result: '$10M transactions processed',
      description: 'Created a secure digital banking platform with blockchain',
      metrics: ['100% secure', '500k users', 'PCI compliant'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      category: 'FinTech'
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Research',
      desc: 'Get to know your business objectives and customers',
      icon: Lightbulb
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      desc: 'Develop in-depth roadmap with milestones',
      icon: Target
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      desc: 'Design beautiful interfaces with responsive prototypes',
      icon: Sparkles
    },
    {
      number: '04',
      title: 'Development & Testing',
      desc: 'Develop with best practices and thorough QA',
      icon: Code
    },
    {
      number: '05',
      title: 'Deployment & Launch',
      desc: 'Easy production deployment with monitoring',
      icon: Rocket
    },
    {
      number: '06',
      title: 'Support & Growth',
      desc: 'Maintenance and optimization over time',
      icon: TrendingUp
    },
  ];

  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Python', logo: '🐍' },
    { name: 'AWS', logo: '☁️' },
    { name: 'MongoDB', logo: '🍃' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '☸️' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'GraphQL', logo: '◈' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'Redis', logo: '🔴' },
    { name: 'Next.js', logo: '▲' },
  ];

  const faqs = [
    {
      question: 'What technologies are you expert in? ',
      answer: 'We expert in web and mobile tech including React, Next.js, Node.js, Python, React Native, AWS, Azure, Docker, Kubernetes, and AI/ML frameworks.',
    },
    {
      question: 'What is the average project duration',
      answer: 'The duration of the project depends on the complexity. A simple website might take 4-6 weeks, while complex enterprise applications could take 3-6 months.'
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes! We also provide support after the launch which consists of 24/7 monitoring, maintenance updates, and feature enhancements.',
    },
    {
      question: 'What is your development procedure?',
      answer: 'We use an agile methodology with regular sprints, daily standups, and ongoing user communication providing total visibility.',
    },
    {
      question: 'Could you collaborate with our existing team?',
      answer: 'Absolutely! We can seamlessly integrate with your current team and either provide extra resources or take over specific modules.',
    },
    {
      question: 'What industries do you target?',
      answer: 'We operate across more than 15 sectors and those include healthcare, finance, e-commerce, education, real estate, logistics, and manufacturing among others.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: '15+ Years Excellence',
      desc: '150+ successful projects'
    },
    {
      icon: Users,
      title: 'Expert Team',
      desc: '50+ certified developers'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      desc: '98% on schedule'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      desc: 'Comprehensive testing'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      desc: 'Regular updates'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      desc: 'Built to grow'
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
          <div className="absolute inset-0">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-[#10B981]/20 to-[#06B6D4]/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-80 md:w-[500px] h-80 md:h-[500px] bg-gradient-to-r from-[#8B5CF6]/20 to-[#EC4899]/20 rounded-full blur-3xl"
            />
          </div>
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10B981]/20 to-[#06B6D4]/20 border border-[#10B981]/30 rounded-full backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-[#10B981]" />
              <span className="text-[#10B981] text-xs md:text-sm font-medium">
                Award-Winning Software Development
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Transforming Ideas Into{' '}
              <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
                Digital Reality
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300"
            >
              We create innovative software solutions that make businesses thrive in the digital realm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-xl font-semibold shadow-2xl hover:shadow-[#10B981]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Start Your Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play size={16} className="md:w-5 md:h-5" />
                  Watch Demo
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-start p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 cursor-pointer"
                >
                  <stat.icon size={20} className="text-[#10B981] mb-2 md:w-6 md:h-6" />
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Feature Cards - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="absolute bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl cursor-pointer group"
                style={{
                  top: `${index * 22}%`,
                  left: `${index % 2 === 0 ? '0%' : '45%'}`,
                  width: '280px',
                }}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-white/50" />
        </motion.div>
      </section>

      {/* Technology Marquee */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-8">
          <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
            Trusted by 120+ Companies Worldwide
          </p>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 md:gap-12 items-center"
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 whitespace-nowrap"
              >
                <span className="text-2xl md:text-3xl">{tech.logo}</span>
                <span className="font-semibold text-sm md:text-base text-gray-700 dark:text-gray-300">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Complete Digital Solutions
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              From concept to deployment, end-to-end software development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg`}>
                  <service.icon size={28} className="text-white md:w-8 md:h-8" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-[#10B981] font-semibold text-sm md:text-base cursor-pointer"
                >
                  Learn More
                  <ArrowRight size={16} className="md:w-5 md:h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Your Success Is Our Priority
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <item.icon size={24} className="text-white md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Transforming Businesses Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                    {study.category}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                    {study.title}
                  </h3>

                  <p className="text-base md:text-lg font-semibold text-[#10B981] mb-3 md:mb-4 flex items-center gap-2">
                    <TrendingUp size={18} className="md:w-5 md:h-5" />
                    {study.result}
                  </p>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
                    {study.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-2 md:px-3 py-1 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 text-[#10B981] rounded-full text-xs md:text-sm font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer text-sm md:text-base"
              >
                View All Case Studies
                <ArrowUpRight size={18} className="md:w-5 md:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400 md:w-4 md:h-4" />
                  ))}
                </div>

                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-gray-200 dark:border-gray-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 ring-[#10B981]/20"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs md:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              How We Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-xl flex items-center justify-center">
                    <step.icon size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Got Questions?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 md:p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFaq === index ? (
                      <ChevronUp className="text-[#10B981] flex-shrink-0" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer text-sm md:text-base"
              >
                <MessageSquare size={18} className="md:w-5 md:h-5" />
                Contact Our Team
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-96 md:w-[600px] h-96 md:h-[600px] bg-[#10B981] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-0 w-96 md:w-[600px] h-96 md:h-[600px] bg-[#06B6D4] rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-10"
        >
          <div className="inline-block p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6">
            <Rocket size={36} className="text-[#10B981] md:w-12 md:h-12" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Extraordinary?
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Let's transform your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-2xl font-bold shadow-2xl hover:shadow-[#10B981]/50 transition-all text-base md:text-lg inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <Sparkles size={20} className="md:w-6 md:h-6" />
                Start Your Project
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </motion.button>
            </Link>

            <Link to="/portfolio" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all text-base md:text-lg cursor-pointer"
              >
                View Portfolio
              </motion.button>
            </Link>
          </div>

          <div className="pt-6 md:pt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-white/80 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#10B981] md:w-5 md:h-5" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#10B981] md:w-5 md:h-5" />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#10B981] md:w-5 md:h-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
