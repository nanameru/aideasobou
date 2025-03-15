'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Define the types for all component props
interface EnhancedFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
  delay?: number;
}

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

interface EnhancedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

// Client-side implementations of the components
export function ClientEnhancedFeatureCard({ icon, title, description, tags = [], delay = 0 }: EnhancedFeatureCardProps) {
  return (
    <motion.div 
      className="enhanced-card bg-white dark:bg-black"
      whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <motion.div 
          className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        
        <div>
          <motion.h3 
            className="font-semibold text-xl mb-4 tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
          >
            {description}
          </motion.p>
          
          {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.span 
                  key={index} 
                  className="notion-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.1 * index + 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ClientEnhancedCard({ children, className = "", hoverEffect = true }: EnhancedCardProps) {
  return (
    <motion.div 
      className={`enhanced-card bg-white dark:bg-black ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

export function ClientEnhancedButton({ children, className = "", onClick }: EnhancedButtonProps) {
  return (
    <motion.button
      className={`enhanced-button ${className}`}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}

export function ClientPricingCard({ title, price, period, features, ctaText, ctaLink }: PricingCardProps) {
  return (
    <motion.div 
      className="enhanced-card glass-card bg-white dark:bg-black p-8 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="text-center">
        <motion.div 
          className="w-20 h-20 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white dark:text-black"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </motion.div>
        
        <motion.h3 
          className="font-bold text-2xl mb-3 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {price}
        </motion.p>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {period}
        </motion.p>
      </div>
      
      <motion.div 
        className="notion-divider"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      ></motion.div>
      
      <ul className="space-y-5 mb-8">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.7 + index * 0.1 }}
            >
              <path d="M20 6 9 17l-5-5" />
            </motion.svg>
            <span className="text-gray-800 dark:text-gray-200">{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      <motion.a 
        href={ctaLink} 
        className="notion-button w-full text-center flex items-center justify-center text-base"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
      >
        {ctaText}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 w-5 h-5"
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
}
