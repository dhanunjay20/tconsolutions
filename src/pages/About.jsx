import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, Award, Target, Heart, CheckCircle, Zap, Shield, Clock,
  Code, Lightbulb, Rocket, TrendingUp, Globe, Sparkles,
  MessageSquare, BarChart, Lock, Star, ArrowRight, CheckCheck,
  Brain, Cpu, Database, Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      desc: 'Your success is our ultimate mission. We prioritize your goals above all else.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      desc: 'Pushing boundaries with cutting-edge technology and creative solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Quality',
      desc: 'Excellence in every line of code, design, and customer interaction.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      desc: 'We genuinely love what we do and it shows in our work.',
      color: 'from-pink-500 to-rose-500'
    },
  ];

  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '150+', label: 'Projects Delivered', icon: Rocket },
    { value: '120+', label: 'Happy Clients', icon: Users },
    { value: '99%', label: 'Client Satisfaction', icon: Star },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'World-Class Team',
      desc: '50+ certified developers, designers, and strategists with 15+ years of combined experience.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Agile Methodology',
      desc: 'Flexible, iterative development with 2-week sprints and continuous delivery.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Cutting-Edge Stack',
      desc: 'React, Node.js, Python, AWS, AI/ML - we use the latest tech to build future-proof solutions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      desc: 'Round-the-clock technical support with 99.9% uptime guarantee.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      desc: 'Daily updates, weekly demos, and full visibility into development progress.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      desc: '150+ successful projects across healthcare, fintech, e-commerce, and more.',
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Research',
      desc: 'Deep dive into your business, competitors, and target audience through comprehensive workshops and analysis.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      desc: 'Create detailed roadmap with milestones, resource allocation, and risk mitigation strategies.',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Design & Prototyping',
      desc: 'Craft stunning UI/UX with interactive prototypes for validation and user testing.',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500'
    },
    {
      step: '04',
      title: 'Development & Testing',
      desc: 'Build with best practices, CI/CD pipelines, and comprehensive QA at every stage.',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '05',
      title: 'Launch & Deployment',
      desc: 'Smooth production rollout with zero downtime, monitoring, and comprehensive documentation.',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '06',
      title: 'Growth & Optimization',
      desc: 'Continuous improvement with analytics-driven insights, feature enhancements, and scaling.',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=12',
      expertise: 'Enterprise Architecture',
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=5',
      expertise: 'AI & Machine Learning',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: 'https://i.pravatar.cc/300?img=33',
      expertise: 'Full-Stack Development',
    },
    {
      name: 'Emily Johnson',
      role: 'Design Director',
      image: 'https://i.pravatar.cc/300?img=1',
      expertise: 'UI/UX Design',
    },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'GraphQL', icon: '◈', category: 'API' },
  ];

  const achievements = [
    { icon: Award, text: 'Top Rated on Clutch & Upwork' },
    { icon: Star, text: '5-Star Average Client Rating' },
    { icon: Globe, text: 'Serving 15+ Countries' },
    { icon: CheckCheck, text: 'ISO 9001:2015 Certified' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-1/2 w-60 md:w-80 h-60 md:h-80 bg-[#06B6D4]/20 rounded-full blur-3xl"
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
            <Sparkles size={16} className="text-[#10B981]" />
            <span className="text-[#10B981] text-xs md:text-sm font-medium">
              ABOUT TCON SOLUTIONS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Building the Future{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              One Innovation at a Time
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We're a passionate team of developers, designers, and strategists dedicated to transforming businesses through cutting-edge technology and creative solutions.
          </motion.p>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 md:gap-6 pt-4 md:pt-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 cursor-pointer"
              >
                <achievement.icon size={16} className="text-[#10B981] md:w-5 md:h-5" />
                <span className="text-xs md:text-sm text-white font-medium">{achievement.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center p-4 md:p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full">
                <span className="text-[#10B981] text-xs md:text-sm font-semibold">OUR MISSION</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Empowering Businesses Through Technology
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe every business deserves world-class software solutions. Our mission is to democratize access to cutting-edge technology, helping companies of all sizes compete and thrive in the digital age.
              </p>
              <div className="space-y-3 md:space-y-4">
                {[
                  'Deliver exceptional value through innovation',
                  'Build long-term partnerships based on trust',
                  'Create solutions that drive real business results',
                  'Foster a culture of continuous learning',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-white md:w-4 md:h-4" />
                    </div>
                    <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
                <p className="text-white text-xl md:text-2xl font-bold mb-2">
                  "Technology is best when it brings people together."
                </p>
                <p className="text-gray-300 text-sm md:text-base">— Our Core Philosophy</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              OUR CORE VALUES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision, every line of code, and every client interaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                <div className="p-6 md:p-8 bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all h-full">
                  <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                    <value.icon size={28} className="text-white md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {value.desc}
                  </p>
                  <div className="mt-4 md:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] transition-all duration-500 rounded-full mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Your Success Partner
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that drive real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer"
              >
                <div className="p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all h-full">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon size={24} className="text-white md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              Powered by Modern Tech
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We leverage the best tools and frameworks to build scalable, performant solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all text-center group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </h3>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven methodology that consistently delivers exceptional results
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#10B981] via-[#06B6D4] to-[#8B5CF6]" />

            <div className="space-y-12 md:space-y-16">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all group cursor-pointer"
                    >
                      <div className={`flex items-center gap-3 md:gap-4 mb-4 md:mb-6 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                          <item.icon size={28} className="text-white md:w-8 md:h-8" />
                        </div>
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className={`mt-4 md:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] transition-all duration-500 rounded-full ${index % 2 === 0 ? 'lg:ml-auto' : ''}`} />
                    </motion.div>
                  </div>

                  <div className="hidden lg:flex w-6 h-6 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-full z-10 items-center justify-center shadow-lg">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              MEET THE TEAM
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
              The Minds Behind TCON
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate experts dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                      <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-[#10B981] font-medium text-sm md:text-base mb-1 md:mb-2">{member.role}</p>
                      <p className="text-gray-300 text-xs md:text-sm">{member.expertise}</p>
                    </div>
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
            <Rocket size={36} className="text-[#10B981] md:w-12 md:h-12" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Ready to Start Your{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your vision into reality. Schedule a free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-2xl font-bold shadow-2xl hover:shadow-[#10B981]/50 transition-all text-base md:text-lg inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <Sparkles size={20} className="md:w-6 md:h-6" />
                Get Started Today
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </motion.button>
            </Link>

            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all text-base md:text-lg inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                View Our Work
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
