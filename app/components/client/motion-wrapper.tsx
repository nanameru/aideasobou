'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ClientMotionProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
}

export function ClientMotion({ 
  children, 
  className = "", 
  initial, 
  animate, 
  transition,
  whileHover,
  whileTap
}: ClientMotionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
}

export function ClientHoverScale({ 
  children, 
  scale = 1.03, 
  className = "" 
}: { 
  children: ReactNode; 
  scale?: number; 
  className?: string; 
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

export function ClientFloatingAnimation({ 
  children, 
  className = "", 
  duration = 8 
}: { 
  children: ReactNode; 
  className?: string; 
  duration?: number; 
}) {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 1, 0, -1, 0],
        scale: [1, 1.02, 1, 1.02, 1]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

export function ClientPulseAnimation({ 
  children, 
  className = "", 
  duration = 3 
}: { 
  children: ReactNode; 
  className?: string; 
  duration?: number; 
}) {
  return (
    <motion.div
      className={className}
      animate={{ 
        opacity: [0.6, 1, 0.6],
        scale: [0.98, 1.02, 0.98]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export function ClientAnimatedText({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string; 
}) {
  return (
    <div className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4,
            delay: 0.05 * index,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          whileHover={{ 
            scale: 1.2, 
            color: '#000', 
            transition: { duration: 0.2 } 
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}

export function ClientGlowingText({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string; 
}) {
  return (
    <motion.div 
      className={`${className} relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        className="absolute inset-0 blur-lg opacity-50 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.span>
      <span className="relative z-10">{text}</span>
    </motion.div>
  );
}
