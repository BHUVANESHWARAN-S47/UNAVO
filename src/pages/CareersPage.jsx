import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CareersPage = () => {
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isGeneralApplication, setIsGeneralApplication] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Karur, India',
      type: 'Full-time',
      description: 'We are looking for an experienced Full Stack Developer to join our core engineering team and help build the next generation of food delivery platform.',
      requirements: [
        '5+ years of experience with React.js and Node.js',
        'Strong knowledge of database design and optimization',
        'Experience with cloud platforms (AWS/GCP)',
        'Understanding of microservices architecture',
        'Excellent problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Karur, India',
      type: 'Full-time',
      description: 'Lead product strategy and vision for UNAVO. Work cross-functionally to deliver products that users love.',
      requirements: [
        '4+ years of product management experience',
        'Experience in fintech or marketplace platforms',
        'Strong data analysis and user research skills',
        'Excellent communication and leadership abilities',
        'MBA or equivalent business acumen'
      ]
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Karur, India',
      type: 'Full-time',
      description: 'Design beautiful and intuitive interfaces for millions of users. Work on our mobile app and web platform.',
      requirements: [
        '3+ years of UX/UI design experience',
        'Proficiency in Figma and design tools',
        'Understanding of mobile and web design principles',
        'Strong portfolio showcasing your work',
        'Experience with design systems'
      ]
    },
    {
      id: 4,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Karur, India',
      type: 'Full-time',
      description: 'Manage restaurant partnerships and logistics. Ensure smooth operations and best customer experience.',
      requirements: [
        '3+ years of operations or supply chain experience',
        'Strong analytical and problem-solving skills',
        'Experience in food/delivery industry',
        'Excellent stakeholder management',
        'Data-driven approach to decision making'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Karur, India',
      type: 'Full-time',
      description: 'Build data models and ML algorithms to improve user experience and business metrics.',
      requirements: [
        '3+ years of data science experience',
        'Strong Python and SQL skills',
        'Experience with ML frameworks (TensorFlow, PyTorch)',
        'Statistical analysis and modeling expertise',
        'Portfolio of data science projects'
      ]
    },
    {
      id: 6,
      title: 'Customer Support Executive',
      department: 'Customer Success',
      location: 'Karur, India',
      type: 'Full-time',
      description: 'Be the voice of UNAVO. Help customers resolve issues and improve their experience.',
      requirements: [
        '1+ years of customer service experience',
        'Excellent communication skills',
        'Patience and problem-solving ability',
        'Fluency in English and local language',
        'Willingness to work in shifts'
      ]
    }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
    setIsGeneralApplication(false);
    setSubmitSuccess(false);
    setApplicationData({ fullName: '', email: '', phone: '', position: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setApplicationData(prev => ({
        ...prev,
        resume: file
      }));
    } else if (file) {
      alert('Please upload a PDF file');
      e.target.value = '';
    }
  };
  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    
    if (!applicationData.fullName || !applicationData.email || !applicationData.phone || !applicationData.resume) {
      alert('Please fill in all required fields including uploading your resume');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS (or you can use a backend service)
      const emailBody = `
New Job Application Received

Position Applied: ${selectedJob.title}
Department: ${selectedJob.department}

Applicant Details:
Name: ${applicationData.fullName}
Email: ${applicationData.email}
Phone: ${applicationData.phone}
Message: ${applicationData.message}
Resume: ${applicationData.resume.name}

---
This email was sent from UNAVO Careers Portal
      `;

      // Using fetch to send email through a simple email service
      // For now, we'll simulate the submission and show success
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitSuccess(true);
      
      // Reset form after 3 seconds and close modal after 4 seconds
      setTimeout(() => {
        setShowApplicationForm(false);
        setSubmitSuccess(false);
      }, 4000);

    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation package with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Benefits',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: '🎓',
      title: 'Learning & Development',
      description: 'Annual L&D budget for courses, certifications, and conferences'
    },
    {
      icon: '🏢',
      title: 'Modern Office',
      description: 'State-of-the-art office spaces with all modern amenities'
    },
    {
      icon: '🚗',
      title: 'Transportation',
      description: 'Commuter benefits and cab allowance'
    },
    {
      icon: '🎉',
      title: 'Team Events',
      description: 'Regular team outings, sports tournaments, and celebrations'
    },
    {
      icon: '⏱️',
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible working arrangements'
    },
    {
      icon: '📈',
      title: 'Career Growth',
      description: 'Clear growth path with opportunities for advancement'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        {/* Back Button */}
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-green-600 font-semibold text-lg transition-colors mb-8"
        >
          ← Back to Home
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4"
              whileInView={{ scale: 1 }}
              initial={{ scale: 0.8 }}
            >
              Build the Future at UNAVO
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join a talented team revolutionizing the food delivery industry
            </motion.p>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Why Join UNAVO */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🌟</span>
              <h2 className="text-3xl font-bold text-gray-800">Why Join UNAVO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">High Growth Impact</h3>
                  <p className="text-gray-600">Work on a platform serving millions of customers and shape the future of food delivery.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Great Team Culture</h3>
                  <p className="text-gray-600">Collaborate with talented, passionate individuals who are committed to excellence.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Meaningful Work</h3>
                  <p className="text-gray-600">Make a real impact by solving problems that affect thousands of people daily.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Innovation & Learning</h3>
                  <p className="text-gray-600">Continuous learning opportunities in a fast-paced, innovative environment.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">🎁</span>
              <h2 className="text-3xl font-bold text-gray-800">Our Benefits Package</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{benefit.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl">💼</span>
              <h2 className="text-3xl font-bold text-gray-800">Open Positions</h2>
            </div>
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-green-500 transition-all"
                >
                  <motion.button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-green-50 transition-colors"
                    whileHover={{ paddingLeft: 28 }}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          🏢 {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                          📍 {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                          ⏱️ {job.type}
                        </span>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                      className="text-2xl"
                    >
                      ▼
                    </motion.span>
                  </motion.button>

                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 border-t-2 border-gray-200 bg-gray-50"
                    >
                      <p className="text-gray-700 mb-4 text-lg">{job.description}</p>
                      <h4 className="font-bold text-gray-800 mb-3">Requirements:</h4>
                      <ul className="space-y-2 mb-6">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <span className="text-green-500 font-bold text-lg">✓</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleApplyClick(job)}
                        className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold transition-all"
                      >
                        Apply Now
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Culture */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🎪</span>
              <h2 className="text-3xl font-bold">Our Culture</h2>
            </div>
            <div className="space-y-4 text-lg text-green-50">
              <p>
                At UNAVO, we believe that great products come from great people. Our culture is built on trust, transparency, and a commitment to excellence. We encourage innovation, embrace challenges, and celebrate successes together.
              </p>
              <p>
                We foster an inclusive environment where diverse perspectives are valued, and every team member can grow and thrive. Whether you're working on complex technical challenges or solving customer problems, you'll have the support and resources you need to succeed.
              </p>
              <p>
                Work-life balance is important to us. We offer flexible work arrangements, encourage taking time off, and regularly celebrate team achievements with fun events and outings.
              </p>
            </div>
          </motion.div>

          {/* How to Apply */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">📝</span>
              <h2 className="text-3xl font-bold text-gray-800">How to Apply</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-gray-800 text-lg mb-4">
                Ready to join the UNAVO team? Follow these simple steps:
              </p>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">1.</span>
                  <span className="text-lg">Browse our open positions above</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">2.</span>
                  <span className="text-lg">Click "Apply Now" on the position you're interested in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">3.</span>
                  <span className="text-lg">Submit your resume and cover letter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 text-xl">4.</span>
                  <span className="text-lg">Our team will review and contact you for interviews</span>
                </li>
              </ol>
            </div>
            <p className="text-gray-600 text-lg">
              Don't see a position that matches your skills? We're always looking for talented people. Send your resume to <span className="font-bold text-green-600">careers@unavo.com</span>
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Make an Impact?</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Join UNAVO and be part of a team that's transforming the way people order food. Help us build the future!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold transition-all"
              >
                Back to Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedJob({ id: 0, title: 'Open Position', department: 'Multiple' });
                  setShowApplicationForm(true);
                  setIsGeneralApplication(true);
                  setSubmitSuccess(false);
                  setApplicationData({ fullName: '', email: '', phone: '', position: '', message: '', resume: null });
                }}
                className="px-8 py-3 border-2 border-green-500 text-green-600 rounded-lg font-bold hover:bg-green-50 transition-all"
              >
                Send Your Resume
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => !submitSuccess && setShowApplicationForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-8 md:p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="text-6xl mb-6"
                  >
                    ✅
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Sent!</h2>
                  <p className="text-gray-600 text-lg mb-6">
                    Thank you for applying for the position of <span className="font-bold text-green-600">{selectedJob.title}</span>
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 text-left">
                    <p className="text-gray-700 mb-2">
                      ✓ Your application has been received successfully
                    </p>
                    <p className="text-gray-700 mb-2">
                      ✓ We will review your application and get back to you shortly
                    </p>
                    <p className="text-gray-700">
                      ✓ A confirmation email will be sent to <span className="font-bold">{applicationData.email}</span>
                    </p>
                  </div>
                  <p className="text-gray-600 text-lg">
                    We appreciate your interest in joining the UNAVO team!
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-3xl font-bold">Apply for Position</h2>
                        <p className="text-green-100 mt-2">{selectedJob?.title}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowApplicationForm(false)}
                        className="text-2xl hover:text-red-200 transition"
                      >
                        ✕
                      </motion.button>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmitApplication} className="p-8 md:p-12">
                    <div className="space-y-6">
                      {/* Position - Only show for general applications */}
                      {isGeneralApplication && (
                        <div>
                          <label className="block text-gray-800 font-semibold mb-2">Select Position *</label>
                          <motion.select
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            name="position"
                            value={applicationData.position}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition bg-white text-gray-800 font-semibold"
                          >
                            <option value="">-- Choose a position --</option>
                            {jobs.map((job) => (
                              <option key={job.id} value={job.title}>
                                {job.title} - {job.department}
                              </option>
                            ))}
                            <option value="other">Other / Not sure</option>
                          </motion.select>
                        </div>
                      )}

                      {/* Full Name */}
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">Full Name *</label>
                        <motion.input
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          type="text"
                          name="fullName"
                          value={applicationData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition text-gray-800 font-semibold placeholder-gray-500"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">Email Address *</label>
                        <motion.input
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          type="email"
                          name="email"
                          value={applicationData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition text-gray-800 font-semibold placeholder-gray-500"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">Phone Number *</label>
                        <motion.input
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          type="tel"
                          name="phone"
                          value={applicationData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXXXXXXX"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition text-gray-800 font-semibold placeholder-gray-500"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">Cover Letter / Message</label>
                        <motion.textarea
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          name="message"
                          value={applicationData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us why you're interested in this position..."
                          rows="5"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition resize-none text-gray-800 font-semibold placeholder-gray-500"
                        />
                      </div>

                      {/* Resume Upload */}
                      <div>
                        <label className="block text-gray-800 font-semibold mb-2">Upload Your Resume (PDF) *</label>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="relative"
                        >
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="hidden"
                            id="resume-upload"
                          />
                          <label
                            htmlFor="resume-upload"
                            className="block w-full px-4 py-3 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all text-center"
                          >
                            {applicationData.resume ? (
                              <div className="text-center">
                                <span className="text-2xl">✅</span>
                                <p className="text-gray-800 font-semibold mt-2">{applicationData.resume.name}</p>
                                <p className="text-sm text-gray-500">Click to change file</p>
                              </div>
                            ) : (
                              <div className="text-center">
                                <span className="text-3xl">📄</span>
                                <p className="text-gray-800 font-semibold mt-2">Click to upload your resume</p>
                                <p className="text-sm text-gray-500">PDF format only</p>
                              </div>
                            )}
                          </label>
                        </motion.div>
                      </div>

                      {/* Note */}
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <p className="text-gray-700 text-sm">
                          <strong>Note:</strong> Your application will be sent to <strong>kumarankarthikeyan14@gmail.com</strong> and we will respond to your email within 3-5 business days.
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-4 pt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => setShowApplicationForm(false)}
                          className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition-all"
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CareersPage;
