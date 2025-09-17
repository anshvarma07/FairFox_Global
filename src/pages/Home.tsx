import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShipAnimation } from '../components/ShipAnimation';
import { 
  Globe, 
  Shield, 
  Clock, 
  Award,
  Car,
  Plane,
  Building,
  Heart,
  Palette,
  Zap,
  Package,
  ShoppingCart,
  Cog,
  Mountain
} from 'lucide-react';

export const Home: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive worldwide logistics network spanning across continents with strategic partnerships.',
    },
    {
      icon: Shield,
      title: 'Trusted Partnerships',
      description: 'Built on decades of reliable service and transparent business practices.',
    },
    {
      icon: Clock,
      title: 'On-time Deliveries',
      description: '99.8% on-time delivery rate with real-time tracking and proactive communication.',
    },
    {
      icon: Award,
      title: 'Industry Excellence',
      description: 'Award-winning logistics solutions recognized by industry leaders globally.',
    },
  ];

  const industries = [
    { icon: Car, name: 'Automotive', color: 'text-red-400' },
    { icon: Plane, name: 'Aerospace', color: 'text-blue-400' },
    { icon: Building, name: 'Construction', color: 'text-yellow-400' },
    { icon: Heart, name: 'Healthcare', color: 'text-pink-400' },
    { icon: Palette, name: 'Handicrafts', color: 'text-purple-400' },
    { icon: Zap, name: 'Energy', color: 'text-green-400' },
    { icon: Package, name: 'Leather Products', color: 'text-amber-400' },
    { icon: ShoppingCart, name: 'Consumer Goods', color: 'text-indigo-400' },
    { icon: Cog, name: 'Machineries', color: 'text-gray-400' },
    { icon: Mountain, name: 'Minerals', color: 'text-stone-400' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <ShipAnimation />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            FairFox Global GMBH
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Delivering trust beyond borders
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/services"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Who Are We?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-blue-100">
                FairFox Global GMBH is a leading international logistics company headquartered in Hamburg, Germany. 
                With over two decades of experience in global trade and logistics, we have built our reputation on 
                trust, reliability, and exceptional service delivery.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-blue-100">
                Our vision is to bridge continents through seamless logistics solutions, enabling businesses worldwide 
                to expand their reach with confidence. We believe in transparency, innovation, and building lasting 
                partnerships that drive mutual growth and success across borders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose FairFox Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose FairFox?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover what sets us apart in the global logistics industry
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20 hover:border-teal-400/50 transform hover:scale-105 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <feature.icon className="w-12 h-12 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive logistics solutions across diverse industry sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <industry.icon className={`w-10 h-10 ${industry.color}`} />
                </div>
                <h3 className="text-sm font-semibold">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};