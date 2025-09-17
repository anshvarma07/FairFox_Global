import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Lightbulb, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships through reliable and honest business practices.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and clear processes in every business interaction.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Consistent delivery of promises with unwavering commitment to excellence.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our services with cutting-edge logistics solutions.',
    },
  ];

  const milestones = [
    {
      year: '2001',
      title: 'Company Founded',
      description: 'FairFox Global GMBH established in Hamburg, Germany with a vision to connect global markets.',
    },
    {
      year: '2005',
      title: 'International Expansion',
      description: 'Expanded operations to Asia-Pacific region, establishing key partnerships in major ports.',
    },
    {
      year: '2010',
      title: 'Technology Integration',
      description: 'Implemented advanced tracking systems and digital logistics platforms.',
    },
    {
      year: '2015',
      title: 'Industry Recognition',
      description: 'Awarded "Best Logistics Partner" by the German Trade Association.',
    },
    {
      year: '2020',
      title: 'Sustainable Logistics',
      description: 'Launched green logistics initiative, reducing carbon footprint by 40%.',
    },
    {
      year: '2024',
      title: 'Global Leadership',
      description: 'Serving 50+ countries with 99.8% customer satisfaction rate.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About FairFox Global
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100"
          >
            Two decades of excellence in global logistics
          </motion.p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                Founded in 2001 in the historic port city of Hamburg, FairFox Global GMBH began as a 
                small freight forwarding company with a bold vision: to create a logistics network that 
                truly delivers trust beyond borders.
              </p>
              <p className="text-lg mb-6 text-blue-100 leading-relaxed">
                Over the years, we have grown from a local German company to an international logistics 
                powerhouse, serving clients across six continents. Our success is built on the foundation 
                of trust, transparency, and an unwavering commitment to our clients' success.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Today, FairFox Global stands as a testament to what can be achieved when vision meets 
                execution, and when a company truly puts its clients' needs at the heart of everything it does.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-white"
            >
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">23+</div>
                  <div className="text-sm text-blue-100">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">50+</div>
                  <div className="text-sm text-blue-100">Countries Served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">10K+</div>
                  <div className="text-sm text-blue-100">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">99.8%</div>
                  <div className="text-sm text-blue-100">On-Time Delivery</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 text-white border border-teal-400/30"
            >
              <Target className="w-12 h-12 text-teal-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-blue-100">
                To provide world-class logistics solutions that enable our clients to expand their global 
                reach with confidence, while maintaining the highest standards of trust, transparency, and 
                reliability in every shipment we handle.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-8 text-white border border-orange-400/30"
            >
              <Eye className="w-12 h-12 text-orange-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-blue-100">
                To be the world's most trusted logistics partner, bridging continents and cultures through 
                innovative supply chain solutions that create lasting value for businesses and communities 
                around the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20 hover:border-teal-400/50 transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <value.icon className="w-12 h-12 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Key milestones in our path to becoming a global logistics leader
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-400/50"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full border-4 border-white/20"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-teal-400 mr-2" />
                        <span className="text-2xl font-bold text-teal-400">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};