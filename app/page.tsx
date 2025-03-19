// @ts-nocheck
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, CheckIcon, LightBulbIcon, CalendarIcon, SearchIcon } from './components/ui/icons';
import { GoogleFormButton } from './components/client/google-form-button';
import { MobileMenu } from './components/client/mobile-menu';

export default function Home() {
  // Google Form URL for community sign-up
  const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "https://docs.google.com/forms/d/1UICzT0z-bjUoNiGjF0NFufGG7G8laBNPNHIaaoUxd4k/edit";
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header - Notionライクなミニマルデザイン */}
      <header className="py-3 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            <div className="relative z-10">
              <Link href="/" className="block">
                <h1 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-100">
                  AIで遊ぼうコミュニティー
                </h1>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a 
                    href="#features" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    特典
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    料金
                  </a>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tokushoho" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    特定商取引法
                  </Link>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                  >
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
            
            {/* Mobile Menu Component */}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <div className="mb-8 relative">
                <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium mb-6 relative z-10 shadow-lg">
                  <span className="relative z-10">AIの可能性を一緒に探求しよう</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight relative">
                  <span className="block mb-2 text-gray-700 dark:text-gray-300">
                    AIで遊ぼう
                  </span>
                  <span className="block text-gray-700 dark:text-gray-300">
                    コミュニティー
                  </span>
                </h2>
              </div>
              
              <div className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。
                <span className="block mt-4">日々進化するAI技術を楽しく学び、活用していきましょう。</span>
              </div>
              
              <div className="relative">
                {/* Enhanced CTA button with glow effect */}
                <GoogleFormButton 
                  className="px-8 py-4 text-lg bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg shadow-lg hover:shadow-xl relative z-10 inline-block enhanced-button"
                >
                  今すぐ参加する
                </GoogleFormButton>
              </div>
            </div>
            
            {/* Right content - AI Image */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image 
                src="/images/ai/ai-generated-image.jpeg" 
                alt="AIで生成された画像" 
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Notionライクデザイン */}
      <section id="features" className="notion-section py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <span className="notion-tag notion-tag-purple">特典</span>
            <span className="notion-tag notion-tag-yellow">メンバー限定</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">コミュニティの特典</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">メンバーになると以下の特典が受けられます。AI技術の最新情報から実践的な活用方法まで、幅広くサポートします。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-black rounded-xl shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400 dark:bg-yellow-500"></div>
              <div className="p-6 pl-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full mr-4">
                    <LightBulbIcon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    AI情報の毎日配信
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  最新のAI情報を毎日お届けします。常に最先端の技術動向をキャッチアップできます。
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300 rounded-full">最新情報</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full">AI技術</span>
                  <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300 rounded-full">トレンド</span>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-black rounded-xl shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-400 dark:bg-blue-500"></div>
              <div className="p-6 pl-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                    <CalendarIcon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    週回のAIキャッチアップセッション
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  毎週日曜日に2時間のAI情報キャッチアップセッションを開催。最新トレンドを深堀りします。
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 rounded-full">毎週日曜日</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full">2時間</span>
                  <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300 rounded-full">ライブ配信</span>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-black rounded-xl shadow-lg hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-400 dark:bg-green-500"></div>
              <div className="p-6 pl-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 p-3 rounded-full mr-4">
                    <SearchIcon className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    ピタッとAI検索
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  AI情報を能動的または自動的に検索できる独自ツール「ピタッとAI」へのアクセス権が得られます。
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full">検索ツール</span>
                  <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 rounded-full">無制限利用</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Notionライクデザイン */}
      <section id="pricing" className="notion-section py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <span className="notion-tag notion-tag-green">料金</span>
            <span className="notion-tag notion-tag-purple">メンバーシップ</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">料金プラン</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">シンプルな月額制で、すべての特典にアクセスできます。いつでも解約可能です。</p>
          
          <div className="max-w-md mx-auto">
            <div className="enhanced-card glass-card bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-notion-blue/10 dark:bg-notion-blue/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-notion-blue"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                
                <h3 className="font-medium text-2xl mb-3 tracking-tight text-gray-900 dark:text-gray-100">メンバーシップ</h3>
                <p className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">¥3,000</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">月額サブスクリプション</p>
              </div>
              
              <div className="notion-divider"></div>
              
              <ul className="space-y-4 mb-8">
                {["AI情報の毎日配信", "週1回のAIキャッチアップセッション（日曜日2時間）", "「ピタッとAI」検索ツールの無制限利用", "開発中のAIサービスへの早期アクセス"].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-0.5"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <GoogleFormButton 
                className="enhanced-button w-full bg-notion-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 shadow-sm flex items-center justify-center"
              >
                今すぐ参加する
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </GoogleFormButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Notionライクデザイン */}
      <section id="contact" className="notion-section py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <span className="notion-tag notion-tag-purple">お問い合わせ</span>
            <span className="notion-tag notion-tag-yellow">サポート</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">お問い合わせ</h2>
          
          <div className="max-w-lg mx-auto">
            <div className="enhanced-card glass-card bg-white dark:bg-black p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                ご質問やお問い合わせは、以下のメールアドレスまでお気軽にご連絡ください。通常〤1営業日以内に返信いたします。
              </p>
              
              <div className="flex items-center justify-center">
                <a 
                  href="mailto:4869nanataitai@gmail.com" 
                  className="enhanced-button bg-notion-blue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 shadow-sm inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 w-4 h-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  4869nanataitai@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Notionライクデザイン */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-gray-100">AIで遊ぼうコミュニティー</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。初心者から上級者まで、あらゆるレベルの方をサポートします。
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-gray-100">リンク</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#features" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    特典
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    料金
                  </a>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tokushoho" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    特定商取引法
                  </Link>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-gray-100">お問い合わせ</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                ご質問やお問い合わせは、以下のメールアドレスまでお気軽にご連絡ください。
              </p>
              <a 
                href="mailto:4869nanataitai@gmail.com" 
                className="text-notion-blue hover:text-blue-700 transition-colors font-medium text-sm inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 w-4 h-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                4869nanataitai@gmail.com
              </a>
            </div>
          </div>
          
          <div className="notion-divider mt-12 mb-8"></div>
          
          <div className="text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} AIで遊ぼうコミュニティー. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
