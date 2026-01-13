import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TeamPage = () => {
  const navigate = useNavigate();
  const [hoveredMember, setHoveredMember] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const teamMembers = [
    {
      id: 1,
      name: 'Kumaran',
      role: 'Founder & CEO',
      department: 'Leadership',
      bio: 'Visionary leader and co-founder driving UNAVO\'s mission in food delivery innovation',
      image: '👨‍💼',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Strategy', 'Leadership', 'Innovation']
    },
    {
      id: 2,
      name: 'Bhuvaneshwaran',
      role: 'Co-Founder & CEO',
      department: 'Leadership',
      bio: 'Dynamic co-founder revolutionizing the food delivery experience with passion and expertise',
      image: '👨‍💼',
      color: 'from-indigo-500 to-blue-500',
      skills: ['Operations', 'Business Growth', 'Vision']
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      department: 'Technology',
      bio: 'Tech innovator building scalable food delivery solutions',
      image: '👩‍💻',
      color: 'from-purple-500 to-pink-500',
      skills: ['Full Stack', 'Cloud', 'Databases']
    },
    {
      id: 4,
      name: 'Amit Patel',
      role: 'Head of Product',
      department: 'Product',
      bio: 'User-focused product manager crafting seamless experiences',
      image: '👨‍🔬',
      color: 'from-green-500 to-emerald-500',
      skills: ['UX Design', 'Analytics', 'Product Strategy']
    },
    {
      id: 5,
      name: 'Sarah Johnson',
      role: 'Chief Marketing Officer',
      department: 'Marketing',
      bio: 'Marketing strategist building UNAVO brand presence',
      image: '👩‍🎨',
      color: 'from-red-500 to-orange-500',
      skills: ['Branding', 'Growth', 'Social Media']
    },
    {
      id: 6,
      name: 'Vikram Singh',
      role: 'Head of Operations',
      department: 'Operations',
      bio: 'Logistics expert ensuring fast and reliable delivery',
      image: '👨‍⚙️',
      color: 'from-yellow-500 to-orange-500',
      skills: ['Logistics', 'Supply Chain', 'Optimization']
    },
    {
      id: 7,
      name: 'Anjali Desai',
      role: 'Head of Finance',
      department: 'Finance',
      bio: 'Finance strategist managing UNAVO growth and investments',
      image: '👩‍💼',
      color: 'from-indigo-500 to-purple-500',
      skills: ['Finance', 'Investments', 'Planning']
    },
    {
      id: 8,
      name: 'Rohan Verma',
      role: 'Lead Engineer',
      department: 'Engineering',
      bio: 'Full-stack engineer creating robust food delivery platform',
      image: '👨‍💻',
      color: 'from-teal-500 to-blue-500',
      skills: ['React', 'Node.js', 'Databases']
    },
    {
      id: 9,
      name: 'Neha Gupta',
      role: 'Customer Success Manager',
      department: 'Customer Support',
      bio: 'Dedicated to delivering exceptional customer experiences',
      image: '👩‍💼',
      color: 'from-pink-500 to-rose-500',
      skills: ['Customer Care', 'Communication', 'Problem Solving']
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Mission-Driven',
      description: 'We\'re committed to connecting food lovers with their favorite restaurants'
    },
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'We work together, respecting diverse perspectives and ideas'
    },
    {
      icon: '💡',
      title: 'Innovative',
      description: 'Constantly pushing boundaries to create cutting-edge solutions'
    },
    {
      icon: '🌱',
      title: 'Sustainable',
      description: 'Building a responsible business that cares for people and planet'
    },
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, big or small'
    },
    {
      icon: '🔒',
      title: 'Trustworthy',
      description: 'Your trust is our most valuable asset, we protect it with integrity'
    }
  ];

  const departments = [
    { name: 'Leadership', count: 2, icon: '👑' },
    { name: 'Technology', count: 3, icon: '💻' },
    { name: 'Product', count: 1, icon: '📦' },
    { name: 'Marketing', count: 1, icon: '📢' },
    { name: 'Operations', count: 1, icon: '⚙️' },
    { name: 'Finance', count: 1, icon: '💰' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            The passionate people behind UNAVO, dedicated to revolutionizing food delivery
          </motion.p>
        </motion.div>

        {/* Department Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <motion.div
                key={dept.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-200"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dept.name}</h3>
                <p className="text-2xl font-bold text-green-600">{dept.count} Member{dept.count > 1 ? 's' : ''}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        >
          <h2 className="text-4xl font-black text-gray-800 mb-12 text-center">Our Team Members</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
                className="perspective"
              >
                <motion.div
                  animate={{
                    rotateX: hoveredMember === member.id ? 8 : 0,
                    rotateY: hoveredMember === member.id ? 8 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ perspective: '1000px' }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-200 h-full"
                >
                  {/* Avatar */}
                  <div className={`bg-gradient-to-br ${member.color} h-32 flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      animate={{
                        rotate: hoveredMember === member.id ? 360 : 0,
                        scale: hoveredMember === member.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-7xl"
                    >
                      {member.image}
                    </motion.div>
                    {/* Background animation */}
                    <motion.div
                      animate={{
                        opacity: hoveredMember === member.id ? 0.3 : 0,
                      }}
                      className="absolute inset-0 bg-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className={`text-green-600 font-semibold mb-1 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{member.department}</p>

                    {/* Bio - Expanded on Hover */}
                    <AnimatePresence>
                      {hoveredMember === member.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-3"
                        >
                          <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                          <div className="flex flex-wrap gap-1">
                            {member.skills.map((skill, idx) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-4">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="#"
                        className="text-gray-400 hover:text-green-600 text-lg"
                      >
                        👔
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href="#"
                        className="text-gray-400 hover:text-blue-600 text-lg"
                      >
                        💼
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 py-16 px-4 my-16"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-12 text-center">Our Core Values</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white bg-opacity-95 rounded-lg p-6 backdrop-blur"
                >
                  <motion.div
                    animate={{ rotate: hoveredMember === `value-${idx}` ? 360 : 0 }}
                    onHoverStart={() => setHoveredMember(`value-${idx}`)}
                    onHoverEnd={() => setHoveredMember(null)}
                    className="text-5xl mb-4"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-white rounded-xl shadow-2xl p-12 border-2 border-green-200">
            <h2 className="text-4xl font-black text-gray-800 mb-4">Want to Join Our Team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for food delivery innovation
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/careers')}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition-all"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg font-bold hover:bg-green-50 transition-all"
              >
                Back to Home
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '9+', label: 'Team Members' },
              { number: '6', label: 'Departments' },
              { number: '5+', label: 'Years Experience Avg' },
              { number: '100%', label: 'Passionate' }
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <motion.h3
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: idx * 0.3 }}
                  className="text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-xl text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default TeamPage;
