import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Container Ship at Port',
      category: 'Ocean Freight'
    },
    {
      url: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cargo Aircraft Loading',
      category: 'Air Freight'
    },
    {
      url: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Warehouse Operations',
      category: 'Warehousing'
    },
    {
      url: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Port Container Terminal',
      category: 'Ocean Freight'
    },
    {
      url: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Logistics Distribution Center',
      category: 'Supply Chain'
    },
    {
      url: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'International Trade Hub',
      category: 'Global Network'
    },
    {
      url: 'https://images.pexels.com/photos/1078057/pexels-photo-1078057.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Freight Transportation',
      category: 'Ground Transport'
    },
    {
      url: 'https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Airport Cargo Operations',
      category: 'Air Freight'
    },
    {
      url: 'https://images.pexels.com/photos/164444/pexels-photo-164444.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Maritime Logistics',
      category: 'Ocean Freight'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Camera className="w-20 h-20 text-teal-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Explore our global logistics operations and infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-teal-400/50 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-teal-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold mb-2 inline-block">
                    {image.category}
                  </div>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Global Presence</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Infrastructure and operations spanning across continents
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Countries Served' },
              { number: '100+', label: 'Partner Offices' },
              { number: '500K+', label: 'Shipments Delivered' },
              { number: '25', label: 'Warehouse Locations' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-teal-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-12 text-white border border-white/20"
          >
            <h2 className="text-4xl font-bold mb-6">Experience Our Services</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied clients who trust FairFox Global with their logistics needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-xl"
            >
              Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};