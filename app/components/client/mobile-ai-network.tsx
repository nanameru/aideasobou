'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ClientAINetworkAnimation } from './ai-network-client';

export function MobileAINetwork() {
  return (
    <motion.div
      className="relative h-[250px] mt-12 mb-8 block md:hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <div className="relative w-full h-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 shadow-xl overflow-hidden card-3d">
        <div className="card-3d-inner">
          <ClientAINetworkAnimation />
        </div>
      </div>
    </motion.div>
  );
}
