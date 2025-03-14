import React, { ReactNode } from 'react';

interface EnhancedFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tags?: string[];
  delay?: number;
}

export function EnhancedFeatureCard({ icon, title, description, tags = [] }: EnhancedFeatureCardProps) {
  return (
    <div className="enhanced-card bg-white dark:bg-black">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
        <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0">
          {icon}
        </div>
        
        <div>
          <h3 className="font-semibold text-xl mb-4 tracking-tight">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
          
          {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="notion-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function EnhancedCard({ children, className = "" }: EnhancedCardProps) {
  return (
    <div className={`enhanced-card bg-white dark:bg-black ${className}`}>
      {children}
    </div>
  );
}

interface EnhancedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function EnhancedButton({ children, className = "", onClick }: EnhancedButtonProps) {
  return (
    <button
      className={`enhanced-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export function PricingCard({ title, price, period, features, ctaText, ctaLink }: PricingCardProps) {
  return (
    <div className="enhanced-card glass-card bg-white dark:bg-black p-8 rounded-xl">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
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
        </div>
        
        <h3 className="font-bold text-2xl mb-3 tracking-tight">
          {title}
        </h3>
        
        <p className="text-4xl font-bold mb-4">
          {price}
        </p>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {period}
        </p>
      </div>
      
      <div className="notion-divider"></div>
      
      <ul className="space-y-5 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
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
          </li>
        ))}
      </ul>
      
      <a href={ctaLink} className="notion-button w-full text-center flex items-center justify-center text-base">
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
      </a>
    </div>
  );
}
