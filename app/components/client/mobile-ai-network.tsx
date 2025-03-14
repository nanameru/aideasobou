'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClientAINetworkAnimation } from './ai-network-client';

export function MobileAINetwork() {
  return (
    <motion.div
      className="relative h-[250px] mt-8 mb-6 block md:hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="relative w-full h-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 shadow-xl overflow-hidden card-3d">
        <div className="card-3d-inner">
          <ClientAINetworkAnimation />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-gray-50 dark:to-gray-900 opacity-30 pointer-events-none" />
        </div>
      </div>
      
      {/* Decorative elements for mobile */}
      <motion.div 
        className="absolute -bottom-2 -right-2 w-10 h-10 opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <div className="w-full h-full rounded-lg border-2 border-gray-800 dark:border-gray-200"></div>
      </motion.div>
      
      <motion.div 
        className="absolute -top-2 -left-2 w-8 h-8 opacity-70"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1, rotate: -45 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="w-full h-full rounded-lg border-2 border-gray-800 dark:border-gray-200"></div>
      </motion.div>
    </motion.div>
  );
}
