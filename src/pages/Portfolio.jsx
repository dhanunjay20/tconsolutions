import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Code, Smartphone, Cloud, Brain, ArrowRight, 
  Star, TrendingUp, Users, Award, CheckCircle, Sparkles,
  Calendar, Globe, Zap, Shield, BarChart, Target, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      category: 'web',
      client: 'RetailCo',
      description: 'A modern e-commerce solution with AI-powered recommendations, real-time inventory, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
      color: 'from-blue-500 to-cyan-500',
      metrics: {
        revenue: '300% increase',
        users: '1M+ active',
        performance: '99.9% uptime'
      },
      year: '2024',
      duration: '4 months'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'web',
      client: 'MedTech Solutions',
      description: 'Comprehensive patient management system with telemedicine capabilities, AI diagnostics, and HIPAA compliance.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tech: ['Next.js', 'PostgreSQL', 'AWS', 'TensorFlow', 'WebRTC'],
      color: 'from-purple-500 to-pink-500',
      metrics: {
        patients: '50k+ served',
        efficiency: '10x faster',
        satisfaction: '95% rating'
      },
      year: '2024',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      client: 'FitLife',
      description: 'Cross-platform mobile app with workout tracking, nutrition planning, social features, and wearable integration.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      tech: ['React Native', 'Firebase', 'GraphQL', 'Stripe', 'HealthKit'],
      color: 'from-green-500 to-emerald-500',
      metrics: {
        downloads: '100k+',
        rating: '4.8 stars',
        retention: '80% active'
      },
      year: '2024',
      duration: '3 months'
    },
    {
      id: 4,
      title: 'Real Estate Marketplace',
      category: 'web',
      client: 'PropTech Inc',
      description: 'Property listing platform with 3D virtual tours, mortgage calculator, AI-based valuation, and agent matching.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      tech: ['React', 'Python', 'PostgreSQL', 'Three.js', 'Mapbox', 'AI'],
      color: 'from-orange-500 to-red-500',
      metrics: {
        listings: '50k+ properties',
        views: '5M+ monthly',
        conversions: '25% higher'
      },
      year: '2023',
      duration: '5 months'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Migration',
      category: 'cloud',
      client: 'Enterprise Corp',
      description: 'Enterprise-scale migration from on-premise to AWS with zero downtime, cost optimization, and auto-scaling.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins', 'Prometheus'],
      color: 'from-indigo-500 to-purple-500',
      metrics: {
        uptime: '99.99%',
        cost: '40% reduction',
        scale: '10x capacity'
      },
      year: '2024',
      duration: '8 months'
    },
    {
      id: 6,
      title: 'AI-Powered Customer Service',
      category: 'ai',
      client: 'ServiceHub',
      description: 'Intelligent chatbot with NLP, multi-language support, sentiment analysis, and seamless human handoff.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
      tech: ['Python', 'OpenAI', 'FastAPI', 'React', 'LangChain', 'PostgreSQL'],
      color: 'from-yellow-500 to-orange-500',
      metrics: {
        queries: '1M+ handled',
        accuracy: '94%',
        savings: '60% cost'
      },
      year: '2024',
      duration: '4 months'
    },
    {
      id: 7,
      title: 'FinTech Payment Platform',
      category: 'web',
      client: 'PayStream',
      description: 'Secure digital payment platform with blockchain integration, fraud detection, and multi-currency support.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      tech: ['React', 'Node.js', 'Blockchain', 'PostgreSQL', 'Stripe', 'AI'],
      color: 'from-pink-500 to-rose-500',
      metrics: {
        transactions: '$10M+',
        users: '500k+',
        secure: '100% compliant'
      },
      year: '2023',
      duration: '6 months'
    },
    {
      id: 8,
      title: 'Food Delivery Super App',
      category: 'mobile',
      client: 'QuickEats',
      description: 'Multi-vendor food delivery platform with real-time tracking, live order updates, and smart recommendations.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
      tech: ['Flutter', 'Firebase', 'Node.js', 'Google Maps', 'Socket.io'],
      color: 'from-green-500 to-teal-500',
      metrics: {
        orders: '500k+ monthly',
        restaurants: '5k+ partners',
        delivery: '25 min avg'
      },
      year: '2023',
      duration: '5 months'
    },
    {
      id: 9,
      title: 'Smart IoT Dashboard',
      category: 'cloud',
      client: 'IoTech Solutions',
      description: 'Real-time IoT device monitoring and control platform with predictive maintenance and analytics.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      tech: ['React', 'Python', 'AWS IoT', 'TimescaleDB', 'MQTT', 'ML'],
      color: 'from-cyan-500 to-blue-500',
      metrics: {
        devices: '100k+ connected',
        data: '1B+ points',
        alerts: '99.9% accurate'
      },
      year: '2024',
      duration: '7 months'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Sparkles, count: projects.length },
    { id: 'web', label: 'Web Apps', icon: Code, count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', icon: Smartphone, count: projects.filter(p => p.category === 'mobile').length },
    { id: 'cloud', label: 'Cloud', icon: Cloud, count: projects.filter(p => p.category === 'cloud').length },
    { id: 'ai', label: 'AI/ML', icon: Brain, count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const successMetrics = [
    { 
      icon: Award, 
      value: '150+', 
      label: 'Projects Delivered', 
      desc: 'Successfully completed',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Users, 
      value: '120+', 
      label: 'Happy Clients', 
      desc: 'Across 15+ industries',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: TrendingUp, 
      value: '99.9%', 
      label: 'Uptime', 
      desc: 'System reliability',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Star, 
      value: '100%', 
      label: 'Satisfaction', 
      desc: 'Client retention',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const industries = [
    { name: 'E-Commerce', count: 25 },
    { name: 'Healthcare', count: 18 },
    { name: 'FinTech', count: 22 },
    { name: 'Real Estate', count: 15 },
    { name: 'Education', count: 12 },
    { name: 'Food & Beverage', count: 20 },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Enhanced Header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 left-20 w-64 md:w-96 h-64 md:h-96 bg-[#10B981]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 right-20 w-80 md:w-[500px] h-80 md:h-[500px] bg-[#8B5CF6]/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10B981]/20 to-[#06B6D4]/20 border border-[#10B981]/30 rounded-full backdrop-blur-sm"
          >
            <Award size={14} className="text-[#10B981]" />
            <span className="text-[#10B981] text-xs md:text-sm font-medium">
              OUR PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight px-2"
          >
            Projects That{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Transform Businesses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Explore our showcase of successful projects delivering measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 pt-4 md:pt-8"
          >
            <div className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <CheckCircle size={16} className="text-[#10B981] md:w-5 md:h-5" />
              <span className="text-white font-semibold text-sm md:text-base">{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Globe size={16} className="text-[#10B981] md:w-5 md:h-5" />
              <span className="text-white font-semibold text-sm md:text-base">15+ Industries</span>
            </div>
            <div className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Star size={16} className="text-[#10B981] md:w-5 md:h-5" />
              <span className="text-white font-semibold text-sm md:text-base">100% Success</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Filter Buttons */}
      <section className="py-8 md:py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 backdrop-blur-lg bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(cat.id)}
                  className={`relative px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all flex items-center gap-2 md:gap-3 text-sm md:text-base cursor-pointer ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white shadow-lg shadow-[#10B981]/20'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={16} className="md:w-5 md:h-5" />
                  <span className="hidden sm:inline">{cat.label}</span>
                  <span className="sm:hidden">{cat.label.split(' ')[0]}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    filter === cat.id
                      ? 'bg-white/20'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#10B981]/10 transition-all cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 dark:text-white">
                      {project.category.toUpperCase()}
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                      <Calendar size={12} />
                      {project.year}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-6 md:pb-8"
                    >
                      <button className="px-4 md:px-6 py-2 md:py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl text-sm md:text-base">
                        View Case Study
                        <ExternalLink size={16} className="md:w-5 md:h-5" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 md:p-8 space-y-3 md:space-y-4">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      <Users size={14} className="md:w-4 md:h-4" />
                      <span>{project.client}</span>
                      <span className="text-gray-400">•</span>
                      <Clock size={14} className="md:w-4 md:h-4" />
                      <span>{project.duration}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 md:gap-3 py-3 md:py-4 border-y border-gray-200 dark:border-gray-700">
                      {Object.entries(project.metrics).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-base md:text-lg font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[#10B981] font-semibold group-hover:gap-3 transition-all pt-2 text-sm md:text-base cursor-pointer"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-gray-400" />
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-400">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              SUCCESS METRICS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Delivering Measurable Results
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Our projects consistently exceed expectations and drive real business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center p-4 md:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                  <metric.icon size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-1">{metric.label}</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              INDUSTRIES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Serving Diverse Markets
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Our expertise spans across multiple industries and verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="p-4 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                    {industry.name}
                  </h3>
                  <div className="px-3 py-1 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 rounded-full">
                    <span className="text-[#10B981] font-bold text-sm">{industry.count}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6"
          >
            <Target size={36} className="text-[#10B981] md:w-12 md:h-12" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight px-2">
            Let's Create Your{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Success Story
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Ready to join our portfolio of successful clients? Let's discuss your project.
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

            <Link to="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all text-base md:text-lg cursor-pointer"
              >
                Explore Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
