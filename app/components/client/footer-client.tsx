'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function ClientFooter() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bold text-xl mb-4 tracking-tight">AIで遊ぼうコミュニティー</h2>
            <p className="text-gray-600 dark:text-gray-400">
              最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティ
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              AIで明日のことをコンセプトとした、楽しみながらAIを活用するコミュニティです。
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              利用規約
            </Link>
            <Link href="/tokushoho" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              特定商取引法に基づく表記
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} AIで遊ぼうコミュニティー. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
