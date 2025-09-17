import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plane, 
  Ship, 
  Truck, 
  Building2, 
  FileText, 
  Package,
  Clock,
  Shield,
  Globe,
  CheckCircle
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments across the globe.',
      features: ['Express delivery options', 'Temperature-controlled transport', '24/7 tracking', 'Customs clearance'],
      color: 'from-blue-500/20 to-blue-600/20 border-blue-400/30',
      iconColor: 'text-blue-400'
    },
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Cost-effective sea freight solutions for large volume shipments worldwide.',
      features: ['FCL & LCL options', 'Port-to-port delivery', 'Specialized containers', 'Maritime insurance'],
      color: 'from-teal-500/20 to-teal-600/20 border-teal-400/30',
      iconColor: 'text-teal-400'
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      description: 'End-to-end supply chain optimization and management services.',
      features: ['Inventory management', 'Demand forecasting', 'Vendor management', 'Process optimization'],
      color: 'from-green-500/20 to-green-600/20 border-green-400/30',
      iconColor: 'text-green-400'
    },
    {
      icon: Building2,
      title: 'Exhibition Logistics',
      description: 'Specialized logistics services for trade shows, exhibitions, and events.',
      features: ['Event coordination', 'On-site support', 'Equipment handling', 'Return logistics'],
      color: 'from-purple-500/20 to-purple-600/20 border-purple-400/30',
      iconColor: 'text-purple-400'
    },
    {
      icon: FileText,
      title: 'Customs Management',
      description: 'Expert customs clearance and documentation services for smooth border crossings.',
      features: ['Documentation preparation', 'Duty optimization', 'Compliance consulting', 'Regulatory updates'],
      color: 'from-orange-500/20 to-orange-600/20 border-orange-400/30',
      iconColor: 'text-orange-400'
    },
    {
      icon: Package,
      title: 'Warehousing',
      description: 'Secure storage and distribution solutions with advanced warehouse management.',
      features: ['Climate-controlled storage', 'Pick & pack services', 'Cross-docking', 'Real-time inventory'],
      color: 'from-red-500/20 to-red-600/20 border-red-400/30',
      iconColor: 'text-red-400'
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Fast & Reliable',
      description: 'Quick turnaround times with 99.8% on-time delivery rate'
    },
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'Advanced security measures and comprehensive insurance coverage'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide network covering 50+ countries and major trade routes'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'ISO certified processes and continuous quality improvement'
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100"
          >
            Comprehensive logistics solutions tailored to your needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-2xl p-8 text-white border hover:scale-105 transform transition-all duration-300`}
              >
                <div className="mb-6 flex justify-center">
                  <service.icon className={`w-16 h-16 ${service.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-blue-100 mb-6 leading-relaxed text-center">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the FairFox advantage in every shipment
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20 hover:border-teal-400/50 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <advantage.icon className="w-12 h-12 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-blue-100 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-12 text-white border border-white/20"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a customized logistics solution that meets your unique business needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-xl"
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};