import React from 'react';
import { motion } from 'framer-motion';

export const OceanBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900"></div>
      
      {/* Animated waves */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
        animate={{
          backgroundPosition: ['0px 0px', '100px 0px'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 20\'%3E%3Cpath d=\'M0 10c20 0 20-10 40-10s20 10 40 10 20-10 40-10 20 10 40 10v10H0V10z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '100px 32px',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 opacity-20"
        animate={{
          backgroundPosition: ['0px 0px', '-120px 0px'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 120 15\'%3E%3Cpath d=\'M0 7.5c30 0 30-7.5 60-7.5s30 7.5 60 7.5 30-7.5 60-7.5v7.5H0V7.5z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat-x',
          backgroundSize: '120px 24px',
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
          }}
          animate={{
            y: -50,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};