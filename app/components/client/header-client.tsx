'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="relative"
          >
            <Link href="/" className="block">
              <h1 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                AIで遊ぼうコミュニティー
              </h1>
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </Link>
          </motion.div>
          
          <motion.button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </motion.button>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <NavItem href="#features" delay={0.1}>特典</NavItem>
              <NavItem href="#pricing" delay={0.2}>料金</NavItem>
              <NavItem href="/terms" delay={0.3} isLink>利用規約</NavItem>
              <NavItem href="/tokushoho" delay={0.4} isLink>特定商取引法</NavItem>
              <NavItem href="#contact" delay={0.5}>お問い合わせ</NavItem>
            </ul>
          </nav>
        </div>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden mt-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul 
                className="flex flex-col space-y-3 pb-4"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.07 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                <MenuItem href="#features">特典</MenuItem>
                <MenuItem href="#pricing">料金</MenuItem>
                <MenuItem href="/terms" isLink>利用規約</MenuItem>
                <MenuItem href="/tokushoho" isLink>特定商取引法</MenuItem>
                <MenuItem href="#contact">お問い合わせ</MenuItem>
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

const NavItem = ({ 
  children, 
  href, 
  delay = 0,
  isLink = false 
}: { 
  children: React.ReactNode; 
  href: string;
  delay?: number;
  isLink?: boolean;
}) => {
  return (
    <motion.li 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -2 }}
    >
      {isLink ? (
        <Link href={href} className="relative group">
          <span className="block">{children}</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 group-hover:w-full transition-all duration-300"
            whileHover={{ width: '100%' }}
            initial={{ width: '0%' }}
            animate={{ width: '0%' }}
          />
        </Link>
      ) : (
        <a href={href} className="relative group">
          <span className="block">{children}</span>
          <motion.span 
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 group-hover:w-full transition-all duration-300"
            whileHover={{ width: '100%' }}
            initial={{ width: '0%' }}
            animate={{ width: '0%' }}
          />
        </a>
      )}
    </motion.li>
  );
};

const MenuItem = ({ 
  children, 
  href, 
  isLink = false 
}: { 
  children: React.ReactNode; 
  href: string; 
  isLink?: boolean;
}) => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 }
  };
  
  return (
    <motion.li 
      variants={variants}
      transition={{ duration: 0.3 }}
      className="border-b border-gray-100 dark:border-gray-800 pb-2"
    >
      {isLink ? (
        <Link href={href} className="block hover:underline">
          {children}
        </Link>
      ) : (
        <a href={href} className="block hover:underline">
          {children}
        </a>
      )}
    </motion.li>
  );
};
