import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Smartphone, Cloud, Brain, Palette, TrendingUp, ArrowRight, 
  CheckCircle, Zap, Shield, Clock, Rocket, Database, Globe, 
  Cpu, Lock, BarChart, Sparkles, Star, Target, Lightbulb,
  Package, Settings, Users, MessageSquare, CheckCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Elevated, tailored enterprise-grade solutions developed from scratch to address your specific business challenges with maintainable, scalable code.',
      features: ['Full-stack Development', 'API Integration', 'Database Design', 'Microservices Architecture', 'Legacy System Migration', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'PostgreSQL', 'Redis'],
      benefits: ['Scalable Architecture', 'High Performance', 'Security First', 'Future-Proof']
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Create stunning, adaptable applications that not only look great but also perform excellently with the help of native-like performance and deliver great user experience across all devices and platforms.',
      features: ['React & Next.js', 'React Native', 'Progressive Web Apps', 'Native iOS & Android', 'Cross-Platform Solutions', 'App Store Optimization'],
      color: 'from-purple-500 to-pink-500',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'PWA', 'Expo'],
      benefits: ['Cross-Platform', 'Quick Development', 'Native Feel', 'Offline Support']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Create a solid and strong cloud base that is enlargeable with automated deployment procedures, live monitoring, and cycle-leading security practices.',
      features: ['AWS & Azure & GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Auto-Scaling', 'Load Balancing'],
      color: 'from-green-500 to-emerald-500',
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      benefits: ['Uptime 99.9%', 'Automatic Scaling', 'Cost Management', 'Global CDN']
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Utilize the abilities of AI along with ML to perform different activities automatically, extract valuable information, and develop smart applications.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Custom AI Models', 'Deep Learning', 'Neural Networks'],
      color: 'from-orange-500 to-red-500',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'GPT'],
      benefits: ['Smart Automation', 'Data Insights', 'Cost Reduction', 'Competitive Edge']
    },
    {
      icon: Palette,
      title: 'UI/UX Design Services',
      description: 'By conducting user research along with data-driven design decisions, astonishing and user-friendly interfaces will be created that will lead to higher engagement and conversions.',
      features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Usability Testing', 'Brand Identity', 'Motion Design'],
      color: 'from-pink-500 to-rose-500',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle', 'InVision'],
      benefits: ['User-Centered', 'Conversion Focused', 'Brand Consistency', 'Accessibility']
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation',
      description: 'Strategic guidance and execution for the purpose of enhancing your business operations, introducing new technologies, and being in the forefront of the competition.',
      features: ['Technology Strategy', 'Process Optimization', 'Change Management', 'Digital Roadmapping', 'Legacy Modernization', 'Team Training'],
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Agile', 'Scrum', 'DevOps', 'Cloud', 'Analytics', 'Automation'],
      benefits: ['Increased Efficiency', 'Cost Savings', 'Market Leadership', 'Innovation Culture']
    },
  ];

  const processSteps = [
    {
      step: '01',
      icon: Lightbulb,
      title: 'Discovery & Research',
      desc: 'Apply various workshops and research in order to deeply understand the business goals, target audience, and competitors',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      icon: Target,
      title: 'Strategy & Planning',
      desc: 'Compose a comprehensive plan featuring the main milestones, manpower distribution, and the measures for risk reduction.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      icon: Palette,
      title: 'Design & Prototyping',
      desc: 'Create user-friendly interfaces with the help of interactive prototypes for the purpose of usability testing and obtaining feedback.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      step: '04',
      icon: Code,
      title: 'Development',
      desc: 'Follow best practices, produce neat codes, and utilize continuous integration for ensuring quality.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      icon: CheckCheck,
      title: 'Testing & QA',
      desc: 'Conduct a thorough testing procedure that encompasses unit tests, integration tests, and full end-to-end tests to guarantee a bug-free release.',
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '06',
      icon: Rocket,
      title: 'Launch & Scale',
      desc: 'The most straightforward transfer into production with complete monitoring, analytical support, and ongoing optimization.',
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const additionalServices = [
    {
      icon: Database,
      title: 'Database Management',
      desc: 'Creation, tuning and regular care of powerful database systems.'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      desc: 'Thorough vulnerabilities assessments and penetration testing.'
    },
    {
      icon: BarChart,
      title: 'Analytics & BI',
      desc: 'Data pulling and demand forecasting through the other BI methods.'
    },
    {
      icon: Settings,
      title: 'API Development',
      desc: 'Overall RESTful and GraphQL API design and execution.'
    },
    {
      icon: Package,
      title: 'E-commerce Solutions',
      desc: 'Total online store construction with transaction embedding.'
    },
    {
      icon: Globe,
      title: 'SEO & Performance',
      desc: 'Superfast and world-class search engine optimization.'
    },
  ];

  const whyChooseOurServices = [
    {
      icon: Users,
      title: ' More than 50 Expert Developers',
      desc: 'Certified experts with strong knowledge'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Technical support available 24 hours a day'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      desc: 'Thorough testing and reviewing of code'
    },
    {
      icon: Zap,
      title: 'Quick Delivery',
      desc: '2-week sprint cycles for faster results'
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$5,000',
      duration: 'Starting from',
      features: [
        'Basic web application',
        '4-6 weeks delivery',
        'Up to 10 pages',
        'Responsive design',
        'Basic SEO optimization',
        '30 days support'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000',
      duration: 'Starting from',
      features: [
        'Advanced web/mobile app',
        '8-12 weeks delivery',
        'Unlimited pages',
        'Custom design system',
        'API integration',
        'Cloud deployment',
        '90 days support',
        'Performance monitoring'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'Let\'s talk',
      features: [
        'Complex enterprise solution',
        'Custom timeline',
        'Dedicated team',
        'Advanced architecture',
        'AI/ML integration',
        'Multi-platform',
        '1 year support',
        '24/7 monitoring',
        'Priority support'
      ],
      color: 'from-orange-500 to-red-500',
      popular: false
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Enhanced Header */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Animated Background */}
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
            <Sparkles size={14} className="text-[#10B981]" />
            <span className="text-[#10B981] text-xs md:text-sm font-medium">
              COMPREHENSIVE SERVICES
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight px-2"
          >
            Change Your Business with{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Advanced Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            We offer total software development services from idea to launch with the latest technologies.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 md:pt-8"
          >
            {whyChooseOurServices.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 cursor-pointer"
              >
                <item.icon size={20} className="text-[#10B981] md:w-6 md:h-6" />
                <div className="text-left">
                  <div className="text-white font-semibold text-xs md:text-sm">{item.title}</div>
                  <div className="text-gray-400 text-xs">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Our Core Services
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Comprehensive solutions designed to accelerate your digital transformation
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
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#10B981]/10 transition-all cursor-pointer"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="relative p-6 md:p-8">
                  {/* Icon */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <service.icon size={28} className="text-white md:w-8 md:h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">Key Features:</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs md:text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle size={14} className="text-[#10B981] mr-2 flex-shrink-0 mt-0.5 md:w-4 md:h-4" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4 md:mb-6 grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                        <Star size={10} className="text-[#10B981] md:w-3 md:h-3" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#10B981] font-semibold group-hover:gap-3 transition-all text-sm md:text-base cursor-pointer"
                  >
                    Get Started
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              ADDITIONAL EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              More Ways We Can Help
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Professional services to enhance your project specifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
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
              How We Deliver Success
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              A proven methodology ensuring quality, transparency, and on-time delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                    {item.step}
                  </div>
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className="text-white md:w-6 md:h-6" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 md:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Choose Your Plan
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Flexible pricing options to fit projects of any size
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: tier.popular ? 1.05 : 1.02 }}
                className={`relative p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all cursor-pointer ${
                  tier.popular
                    ? 'border-[#10B981] shadow-xl scale-105'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 px-3 md:px-4 py-1 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-full text-xs md:text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent mb-2">
                    {tier.price}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{tier.duration}</p>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-[#10B981] flex-shrink-0 mt-0.5 md:w-5 md:h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 md:py-4 rounded-xl font-semibold transition-all text-sm md:text-base cursor-pointer ${
                      tier.popular
                        ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
              All plans include free consultation and project discovery phase
            </p>
            <Link to="/contact" className="text-[#10B981] font-semibold hover:underline text-sm md:text-base cursor-pointer">
              Need a custom quote? Contact us →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
            <Rocket size={36} className="text-[#10B981] md:w-12 md:h-12" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight px-2">
            Ready to Turn Your{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Business Around?
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            From web & mobile applications to UI/UX and AI solutions, we have everything you require all in one place
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-2xl font-bold shadow-2xl hover:shadow-[#10B981]/50 transition-all text-base md:text-lg inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <Sparkles size={20} className="md:w-6 md:h-6" />
                Get Started
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
              <span>No Obligation Quote</span>
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

export default Services;
