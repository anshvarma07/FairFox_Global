import React from 'react';
import { motion } from 'framer-motion';

export const ShipAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Ship */}
      <motion.div
        className="absolute top-12"
        initial={{ x: -300 }}
        animate={{ x: window.innerWidth + 300 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          width="200"
          height="120"
          viewBox="0 0 200 120"
          className="text-white drop-shadow-2xl"
        >
          {/* Ship hull - main body */}
          <path
            d="M20 70 Q15 75 15 80 Q15 85 20 88 L160 88 Q170 85 175 80 Q180 75 175 70 L20 70 Z"
            fill="currentColor"
            className="opacity-95"
          />
          
          {/* Hull shading */}
          <path
            d="M20 70 Q15 75 15 80 Q15 82 17 84 L160 84 Q170 82 175 80 Q180 75 175 70 L20 70 Z"
            fill="currentColor"
            className="opacity-80"
          />
          
          {/* Deck */}
          <rect x="25" y="65" width="140" height="5" fill="currentColor" className="opacity-90" rx="2" />
          
          {/* Superstructure - main cabin */}
          <rect x="60" y="45" width="80" height="20" fill="currentColor" className="opacity-85" rx="2" />
          
          {/* Bridge/wheelhouse */}
          <rect x="75" y="35" width="50" height="10" fill="currentColor" className="opacity-90" rx="1" />
          
          {/* Funnel/smokestack */}
          <rect x="90" y="20" width="12" height="15" fill="#f97316" rx="2" />
          <rect x="88" y="18" width="16" height="4" fill="#f97316" rx="2" />
          
          {/* Smoke from funnel */}
          <motion.circle
            cx="96"
            cy="15"
            r="2"
            fill="#94a3b8"
            className="opacity-60"
            animate={{
              cy: [15, 5, -5],
              opacity: [0.6, 0.3, 0],
              scale: [1, 1.5, 2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
          <motion.circle
            cx="98"
            cy="12"
            r="1.5"
            fill="#94a3b8"
            className="opacity-40"
            animate={{
              cy: [12, 2, -8],
              opacity: [0.4, 0.2, 0],
              scale: [1, 1.8, 2.5]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeOut',
              delay: 0.5
            }}
          />
          
          {/* Masts */}
          <rect x="48" y="15" width="2" height="30" fill="currentColor" className="opacity-80" />
          <rect x="145" y="25" width="2" height="25" fill="currentColor" className="opacity-80" />
          
          {/* Cargo containers */}
          <rect x="30" y="55" width="12" height="10" fill="#dc2626" rx="1" />
          <rect x="44" y="55" width="12" height="10" fill="#16a34a" rx="1" />
          <rect x="30" y="45" width="12" height="10" fill="#2563eb" rx="1" />
          <rect x="44" y="45" width="12" height="10" fill="#ca8a04" rx="1" />
          
          {/* More containers on the back */}
          <rect x="150" y="55" width="10" height="10" fill="#7c3aed" rx="1" />
          <rect x="162" y="55" width="10" height="10" fill="#dc2626" rx="1" />
          
          {/* Ship details - portholes */}
          <circle cx="70" cy="55" r="2" fill="#1e293b" className="opacity-60" />
          <circle cx="80" cy="55" r="2" fill="#1e293b" className="opacity-60" />
          <circle cx="90" cy="55" r="2" fill="#1e293b" className="opacity-60" />
          <circle cx="100" cy="55" r="2" fill="#1e293b" className="opacity-60" />
          <circle cx="110" cy="55" r="2" fill="#1e293b" className="opacity-60" />
          <circle cx="120" cy="55" r="2" fill="#1e293b" className="opacity-60" />
          
          {/* Bow wave */}
          <motion.path
            d="M15 80 Q10 85 8 90 Q12 88 15 85"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="opacity-70"
            animate={{
              strokeDasharray: ['0 20', '10 10', '0 20'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          {/* Navigation lights */}
          <circle cx="175" cy="75" r="1.5" fill="#dc2626" className="opacity-80" />
          <circle cx="25" cy="75" r="1.5" fill="#16a34a" className="opacity-80" />
          
          {/* Anchor */}
          <path
            d="M25 75 L25 78 M23 76 L27 76 M25 78 Q23 80 25 82 Q27 80 25 78"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="opacity-60"
          />
        </svg>
      </motion.div>

      {/* Water ripples and wake */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-8 w-16 h-3 rounded-full bg-white/20"
          initial={{ x: -100, opacity: 0 }}
          animate={{ 
            x: window.innerWidth + 100, 
            opacity: [0, 0.4, 0.6, 0.3, 0],
            scaleX: [1, 1.5, 2, 2.5, 3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2,
          }}
        />
      ))}
      
      {/* Additional wake effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`wake-${i}`}
          className="absolute bottom-6 w-12 h-2 rounded-full bg-white/15"
          initial={{ x: -80, opacity: 0 }}
          animate={{ 
            x: window.innerWidth + 80, 
            opacity: [0, 0.3, 0.5, 0.2, 0],
            scaleX: [1, 2, 3, 4, 5]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 1.5 + 1,
          }}
        />
      ))}
    </div>
  );
};