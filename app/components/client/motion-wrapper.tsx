'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ClientMotionProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}

export function ClientMotion({ 
  children, 
  className = "", 
  initial, 
  animate, 
  transition 
}: ClientMotionProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
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
  duration = 6 
}: { 
  children: ReactNode; 
  className?: string; 
  duration?: number; 
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
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
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
