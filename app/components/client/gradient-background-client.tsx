'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ClientGradientBackground() {
  return (
    <motion.div 
      className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-70"
      animate={{ 
        background: [
          "linear-gradient(120deg, rgba(245,247,250,1) 0%, rgba(228,232,235,1) 100%)",
          "linear-gradient(120deg, rgba(240,245,250,1) 0%, rgba(225,230,240,1) 100%)",
          "linear-gradient(120deg, rgba(245,247,250,1) 0%, rgba(228,232,235,1) 100%)"
        ]
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
}
