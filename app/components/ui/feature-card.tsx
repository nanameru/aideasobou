import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface EnhancedFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags?: string[];
  delay?: number;
}

export const EnhancedFeatureCard = ({ icon, title, description, tags = [], delay = 0 }: EnhancedFeatureCardProps) => {
  return (
    <motion.div 
      className="enhanced-card bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <motion.div 
          className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          {icon}
        </motion.div>
        
        <div>
          <motion.h3 
            className="font-semibold text-xl mb-4 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
          >
            {description}
          </motion.p>
          
          {tags && (
            <motion.div 
              className="mt-4 flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: delay + 0.6 }}
            >
              {tags.map((tag, index) => (
                <span key={index} className="notion-tag">{tag}</span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const EnhancedCard = ({ children, className = "", hoverEffect = true }: EnhancedCardProps) => {
  return (
    <motion.div
      className={`enhanced-card bg-white dark:bg-black ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={hoverEffect ? { 
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        y: -5
      } : {}}
    >
      {children}
    </motion.div>
  );
};

interface EnhancedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const EnhancedButton = ({ children, className = "", onClick }: EnhancedButtonProps) => {
  return (
    <motion.button
      className={`enhanced-button ${className}`}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export const PricingCard = ({ title, price, period, features, ctaText, ctaLink }: PricingCardProps) => {
  return (
    <motion.div 
      className="enhanced-card glass-card bg-white dark:bg-black p-8 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ 
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        y: -5
      }}
    >
      <div className="text-center">
        <motion.div 
          className="w-20 h-20 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.2
          }}
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {price}
        </motion.p>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {period}
        </motion.p>
      </div>
      
      <div className="notion-divider"></div>
      
      <motion.ul 
        className="space-y-5 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
          >
            <svg
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
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-gray-800 dark:text-gray-200">{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
      
      <motion.a 
        href={ctaLink} 
        className="notion-button w-full text-center flex items-center justify-center text-base"
        whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {ctaText}
        <svg
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
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </motion.a>
    </motion.div>
  );
};
