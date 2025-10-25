import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code, Smartphone, Cloud, Database, Cpu, Zap, Shield,
  TrendingUp, CheckCircle, Star, Sparkles, Award, Target,
  Rocket, BarChart, Globe, Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const technologies = {
    frontend: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-blue-400 to-cyan-500', proficiency: 95 },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'from-gray-700 to-gray-900', proficiency: 90 },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: 'from-blue-500 to-blue-700', proficiency: 92 },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'from-cyan-400 to-blue-500', proficiency: 95 },
      { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: 'from-green-400 to-emerald-600', proficiency: 88 },
      { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: 'from-red-500 to-red-700', proficiency: 85 },
    ],
    backend: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: 'from-green-500 to-green-700', proficiency: 93 },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: 'from-blue-400 to-yellow-500', proficiency: 90 },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'from-red-500 to-orange-600', proficiency: 87 },
      { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: 'from-cyan-400 to-blue-500', proficiency: 82 },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: 'from-purple-500 to-indigo-600', proficiency: 85 },
      { name: 'Ruby', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', color: 'from-red-600 to-pink-600', proficiency: 80 },
    ],
    mobile: [
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-blue-400 to-cyan-500', proficiency: 92 },
      { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: 'from-blue-500 to-cyan-400', proficiency: 88 },
      { name: 'Swift', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', color: 'from-orange-500 to-red-500', proficiency: 85 },
      { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', color: 'from-purple-500 to-pink-500', proficiency: 86 },
    ],
    database: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-500 to-emerald-600', proficiency: 93 },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: 'from-blue-600 to-indigo-700', proficiency: 90 },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: 'from-blue-500 to-cyan-600', proficiency: 88 },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: 'from-red-500 to-red-700', proficiency: 87 },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'from-yellow-500 to-orange-600', proficiency: 89 },
    ],
    cloud: [
      { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: 'from-orange-400 to-yellow-600', proficiency: 91 },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', color: 'from-blue-500 to-cyan-600', proficiency: 86 },
      { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: 'from-blue-400 to-green-500', proficiency: 84 },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: 'from-blue-500 to-blue-700', proficiency: 92 },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: 'from-blue-600 to-purple-600', proficiency: 88 },
    ],
    aiml: [
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: 'from-orange-500 to-red-600', proficiency: 85 },
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: 'from-red-500 to-orange-600', proficiency: 83 },
      { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', color: 'from-green-400 to-emerald-600', proficiency: 87 },
      { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', color: 'from-orange-400 to-blue-500', proficiency: 82 },
    ],
  };

  const categories = [
    { key: 'all', title: 'All Technologies', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { key: 'frontend', title: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', title: 'Backend', icon: Database, color: 'from-green-500 to-emerald-500' },
    { key: 'mobile', title: 'Mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { key: 'database', title: 'Databases', icon: Database, color: 'from-orange-500 to-red-500' },
    { key: 'cloud', title: 'Cloud & DevOps', icon: Cloud, color: 'from-indigo-500 to-purple-500' },
    { key: 'aiml', title: 'AI & ML', icon: Cpu, color: 'from-yellow-500 to-orange-500' },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      desc: 'Optimized for speed and efficiency to handle millions of users with sub-second response times.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      desc: 'Battle-tested technologies with built-in security features and regular updates.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      desc: 'Horizontal and vertical scaling capabilities to grow with your business needs.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Future-Proof Solutions',
      desc: 'Modern frameworks that evolve with technology trends and industry standards.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Community Support',
      desc: 'Backed by millions of developers worldwide ensuring long-term sustainability.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Rapid Development',
      desc: 'Powerful tools and frameworks that accelerate development without compromising quality.',
      color: 'from-orange-500 to-red-500'
    },
  ];

  const stats = [
    { icon: Code, value: '50+', label: 'Technologies Mastered', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '15+', label: 'Years Combined Experience', color: 'from-purple-500 to-pink-500' },
    { icon: Star, value: '150+', label: 'Projects Delivered', color: 'from-green-500 to-emerald-500' },
    { icon: CheckCircle, value: '100%', label: 'Tech Stack Optimization', color: 'from-orange-500 to-red-500' },
  ];

  const getAllTechnologies = () => {
    return Object.values(technologies).flat();
  };

  const getFilteredTechnologies = () => {
    if (activeCategory === 'all') {
      return getAllTechnologies();
    }
    return technologies[activeCategory] || [];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Enhanced Header */}
      <section className="relative py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-[#10B981]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#8B5CF6]/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#10B981]/20 to-[#06B6D4]/20 border border-[#10B981]/30 rounded-full backdrop-blur-sm"
          >
            <Cpu size={16} className="text-[#10B981]" />
            <span className="text-[#10B981] text-sm font-medium">
              TECHNOLOGY STACK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Powered by{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We leverage the most powerful and innovative technologies to build robust, scalable, and future-proof solutions for your business.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Category Filter - CHANGED: sticky only on desktop */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 md:sticky md:top-20 md:z-40 md:backdrop-blur-lg md:bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`relative px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-3 cursor-pointer ${
                    activeCategory === cat.key
                      ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  {cat.title}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-sm font-semibold mb-4">
              OUR EXPERTISE
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Industry-leading tools and frameworks for building exceptional solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {getFilteredTechnologies().map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -8 }}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 hover:shadow-2xl hover:shadow-[#10B981]/10 transition-all cursor-pointer"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />

                <div className="relative flex flex-col items-center space-y-4">
                  {/* Logo */}
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className={`hidden w-full h-full bg-gradient-to-br ${tech.color} rounded-2xl items-center justify-center`}>
                      <span className="text-white font-bold text-3xl">{tech.name[0]}</span>
                    </div>
                  </div>

                  {/* Name */}
                  <span className="text-gray-900 dark:text-white font-bold text-center group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                    {tech.name}
                  </span>

                  {/* Proficiency Bar */}
                  {tech.proficiency && (
                    <div className="w-full">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Proficiency</span>
                        <span className="text-xs font-bold text-[#10B981]">{tech.proficiency}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.03 }}
                          className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden relative">
        {/* Simplified Background - Less CPU intensive */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#10B981] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8B5CF6] rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10B981]/20 border border-[#10B981]/30 rounded-full backdrop-blur-sm mb-4">
            <Sparkles size={16} className="text-[#10B981]" />
            <span className="text-[#10B981] text-sm font-medium">
              TOOLS & TECHNOLOGIES
            </span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            And Many More Technologies...
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Constantly expanding our expertise to deliver cutting-edge solutions
          </p>
        </motion.div>

        {/* Scrolling Tech Logos */}
        <div className="relative">
          {/* Edge Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-4 md:gap-6"
            >
              {[
                { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
                { name: 'Webpack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
                { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
                { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
                { name: 'Apache', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
                { name: 'RabbitMQ', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
                { name: 'Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
                { name: 'Elasticsearch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
                { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
                { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
                { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
                { name: 'Cypress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg' },
                { name: 'Selenium', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
                { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
                { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
                { name: 'Slack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
                // Duplicate for seamless loop
                { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
                { name: 'Webpack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
                { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
                { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
                { name: 'Apache', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
                { name: 'RabbitMQ', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg' },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                >
                  <div className="flex flex-col items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors">
                    {/* Tech Logo */}
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center p-2">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-full h-full object-contain brightness-0 invert"
                        loading="lazy"
                      />
                    </div>

                    {/* Tech Name */}
                    <span className="text-white font-medium text-xs md:text-sm whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4"
        >
          {[
            { value: '50+', label: 'Technologies' },
            { value: '1000+', label: 'Libraries' },
            { value: '24/7', label: 'Updating' },
            { value: '100%', label: 'Modern' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#06B6D4] bg-clip-text text-transparent mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>


      {/* Why Our Stack */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-sm font-semibold mb-4">
              WHY CHOOSE OUR STACK
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Built for Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We carefully select technologies that deliver exceptional results and long-term value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#10B981] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#06B6D4] rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <Rocket size={48} className="text-[#10B981]" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Ready to Build with the{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Best Technology?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our technology stack can power your next project and drive your business forward.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-2xl font-bold shadow-2xl hover:shadow-[#10B981]/50 transition-all text-lg inline-flex items-center gap-3 cursor-pointer"
              >
                <Sparkles size={24} />
                Start Your Project
              </motion.button>
            </Link>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all text-lg inline-flex items-center gap-3 cursor-pointer"
              >
                View Services
              </motion.button>
            </Link>
          </div>

          <div className="pt-10 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#10B981]" />
              <span>Expert Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#10B981]" />
              <span>Latest Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-[#10B981]" />
              <span>Best Practices</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default TechStack;
