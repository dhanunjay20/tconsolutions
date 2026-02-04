import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Clock, DollarSign, Users, TrendingUp, Heart, 
  Coffee, ArrowRight, Search, Sparkles, Award, Zap, Lightbulb,
  Target, Rocket, Code, Palette, Shield, CheckCircle, Globe, Star,
  Calendar, Building, Laptop, AlertCircle, Loader
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const benefits = [
    { 
      icon: Heart,
      title: 'Impactful Work', 
      desc: 'Engage in initiatives that have a genuine impact.',
      color: 'from-red-500 to-pink-500'
    },
    { 
      icon: Clock, 
      title: 'Work-Life Balance', 
      desc: 'Remote-friendly policies and flexible schedules',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: TrendingUp, 
      title: 'Professional Development', 
      desc: 'Chances for career advancement and skill enhancement',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: DollarSign, 
      title: 'Competitive Pay and Benefits', 
      desc: 'Attractive benefits and compensation package',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: Users, 
      title: 'Culture of Collaboration', 
      desc: 'Work in a supportive, team-oriented environment',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Lightbulb, 
      title: 'Innovation & Creativity', 
      desc: 'Encourage ideas, experimentation, and innovation',
      color: 'from-indigo-500 to-blue-500'
    },
  ];

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8080/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const result = await response.json();
        if (result.success && result.data && result.data.content) {
          setJobListings(result.data.content);
        }
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to load jobs');
        setJobListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const departments = ['all', 'Engineering', 'Design', 'Management'];
  const locations = ['all', 'Remote', 'Hybrid', 'On-site'];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members', color: 'from-blue-500 to-cyan-500' },
    { icon: Globe, value: '15+', label: 'Countries', color: 'from-green-500 to-emerald-500' },
    { icon: Award, value: '100%', label: 'Remote', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, value: '40%', label: 'Growth', color: 'from-orange-500 to-red-500' },
  ];

  const companyValues = [
    {
      icon: Target,
      title: 'Innovation First',
      desc: 'We embrace new ideas'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      desc: 'Success together'
    },
    {
      icon: Rocket,
      title: 'Growth Mindset',
      desc: 'Continuous learning'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      desc: 'Your wellbeing matters'
    },
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

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
            <Briefcase size={14} className="text-[#10B981]" />
            <span className="text-[#10B981] text-xs md:text-sm font-medium">JOIN OUR TEAM</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Build Your Career with{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              TCON Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Join a team of passionate innovators building the future of software.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer"
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3`}>
                  <stat.icon size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              What We Believe In
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-4 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg transition-all text-center cursor-pointer"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <value.icon size={20} className="text-white md:w-6 md:h-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              BENEFITS & PERKS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Why Work With Us?
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              We believe in taking care of our team members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                  <benefit.icon size={24} className="text-white md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3 group-hover:text-[#10B981] dark:group-hover:text-[#10B981] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {benefit.desc}
                </p>
                <div className="mt-4 md:mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#10B981] to-[#06B6D4] transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-xs md:text-sm font-semibold mb-4">
              OPEN POSITIONS
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-2">
              Find Your Perfect Role
            </h2>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12 space-y-4 md:space-y-6"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#10B981] bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-base md:text-lg cursor-text"
              />
            </div>

            {/* Department Filter */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-gray-700 dark:text-gray-300" />
                <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
                  Department:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <motion.button
                    key={dept}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all text-sm md:text-base cursor-pointer ${
                      selectedDepartment === dept
                        ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white shadow-lg'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {dept === 'all' ? 'All' : dept}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-700 dark:text-gray-300" />
                <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
                  Location:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <motion.button
                    key={loc}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all text-sm md:text-base cursor-pointer ${
                      selectedLocation === loc
                        ? 'bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white shadow-lg'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {loc === 'all' ? 'All' : loc}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              Showing <span className="font-bold text-[#10B981]">{filteredJobs.length}</span> positions
            </div>
          </motion.div>

          {/* Job Listings */}
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-20"
              >
                <div className="flex justify-center mb-6">
                  <Loader className="animate-spin text-[#10B981]" size={40} />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg">Loading job positions...</p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-20"
              >
                <div className="flex justify-center mb-6">
                  <AlertCircle className="text-red-500" size={40} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Failed to Load Jobs
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
                  {error}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                >
                  Try Again
                </button>
              </motion.div>
            ) : filteredJobs.length > 0 ? (
              <div className="space-y-4 md:space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${job.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <Briefcase size={24} className="text-white md:w-7 md:h-7" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                              {job.title}
                            </h3>
                            <span className="px-2 md:px-3 py-1 bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 text-[#10B981] rounded-full text-xs font-bold whitespace-nowrap">
                              {job.experience}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Building size={14} />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1 text-[#10B981] font-semibold">
                              <DollarSign size={14} />
                              {job.salary}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {job.description}
                      </p>

                      <div>
                        <h4 className="text-xs md:text-sm font-bold text-gray-900 dark:text-white mb-2 md:mb-3">Requirements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements && job.requirements.map((req, idx) => (
                            <span
                              key={idx}
                              className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs md:text-sm font-medium"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                    <Link to={`/apply-job/${job.id}`} className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-2xl font-bold"
                      >
                        Apply Now
                      </motion.button>
                    </Link>

                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16 md:py-20"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Search size={28} className="text-gray-400 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  No positions found
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer text-sm md:text-base"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-6"
          >
            <Rocket size={32} className="text-[#10B981] md:w-12 md:h-12" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Don't See Your{' '}
            <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent">
              Dream Role?
            </span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-white rounded-2xl font-bold shadow-2xl hover:shadow-[#10B981]/50 transition-all text-base md:text-lg inline-flex items-center justify-center gap-3 cursor-pointer"
              >
                <Sparkles size={20} className="md:w-6 md:h-6" />
                Get In Touch
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </motion.button>
            </Link>

            <a href="mailto:careers@tconsolutions.com" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all text-base md:text-lg cursor-pointer"
              >
                Send Resume
              </motion.button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Careers;
