'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedFeatureCard, EnhancedCard, EnhancedButton, PricingCard } from '../ui/feature-card';

export function ClientEnhancedFeatureCard(props: React.ComponentProps<typeof EnhancedFeatureCard>) {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <EnhancedFeatureCard {...props} />
    </motion.div>
  );
}

export function ClientEnhancedCard(props: React.ComponentProps<typeof EnhancedCard>) {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <EnhancedCard {...props} />
    </motion.div>
  );
}

export function ClientEnhancedButton(props: React.ComponentProps<typeof EnhancedButton>) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <EnhancedButton {...props} />
    </motion.div>
  );
}

export function ClientPricingCard(props: React.ComponentProps<typeof PricingCard>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" 
      }}
    >
      <PricingCard {...props} />
    </motion.div>
  );
}
