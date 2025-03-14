'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClientAINetworkAnimation } from './ai-network-client';

export function MobileAINetwork() {
  return (
    <motion.div
      className="relative h-[280px] mt-8 mb-6 block sm:hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full h-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 shadow-xl overflow-hidden card-3d">
        <div className="card-3d-inner">
          <ClientAINetworkAnimation />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-gray-50 dark:to-gray-900 opacity-30 pointer-events-none" />
          
          {/* Animated overlay for visual interest */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 dark:to-gray-800 opacity-0 pointer-events-none"
            animate={{ 
              opacity: [0, 0.2, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      
      {/* Decorative elements for mobile */}
      <motion.div 
        className="absolute -bottom-3 -right-3 w-12 h-12 opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="w-full h-full rounded-lg border-2 border-gray-800 dark:border-gray-200"></div>
      </motion.div>
      
      <motion.div 
        className="absolute -top-3 -left-3 w-10 h-10 opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1, rotate: -45 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-full h-full rounded-lg border-2 border-gray-800 dark:border-gray-200"></div>
      </motion.div>
      
      {/* Additional decorative element */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-10 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full border-4 border-gray-800 dark:border-gray-200"></div>
      </motion.div>
    </motion.div>
  );
}
