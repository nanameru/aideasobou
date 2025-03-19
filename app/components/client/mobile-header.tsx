"use client";

import Link from 'next/link';

export function MobileHeader() {
  // クライアントサイドでのみ実行される関数
  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      const isOpen = mobileMenu.classList.contains('block');
      if (isOpen) {
        mobileMenu.classList.remove('block');
        mobileMenu.classList.add('hidden');
        // ハンバーガーアイコンを表示
        document.getElementById('menu-open-icon')?.classList.remove('hidden');
        document.getElementById('menu-close-icon')?.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('block');
        // 閉じるアイコンを表示
        document.getElementById('menu-open-icon')?.classList.add('hidden');
        document.getElementById('menu-close-icon')?.classList.remove('hidden');
      }
    }
  };

  // クライアントサイドでのみ実行
  if (typeof window !== 'undefined') {
    // DOMが完全に読み込まれた後に実行
    document.addEventListener('DOMContentLoaded', () => {
      // メニューボタンにイベントリスナーを追加
      const menuButton = document.getElementById('mobile-menu-button');
      if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
      }
      
      // メニュー内のリンクをクリックした時にメニューを閉じる
      const menuLinks = document.querySelectorAll('#mobile-menu a');
      menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
      });
    });
  }

  return (
    <>
      {/* ハンバーガーメニューボタン */}
      <button 
        id="mobile-menu-button"
        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-20"
        aria-label="メニューを開く"
      >
        <svg 
          id="menu-open-icon"
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="block"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg 
          id="menu-close-icon"
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="hidden"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      {/* モバイルメニュー */}
      <div 
        id="mobile-menu" 
        className="hidden md:hidden fixed inset-x-0 top-0 z-10 pt-16 pb-6 px-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-lg"
      >
        <nav className="mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <a 
                href="#features" 
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                特典
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                料金
              </a>
            </li>
            <li>
              <Link 
                href="/terms" 
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                利用規約
              </Link>
            </li>
            <li>
              <Link 
                href="/tokushoho" 
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                特定商取引法
              </Link>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
