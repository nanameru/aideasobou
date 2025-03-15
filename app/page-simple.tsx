import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, LightBulbIcon, CalendarIcon, SearchIcon } from './components/ui/icons';

export default function Home() {
  // Google Form URL for community sign-up
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1UICzT0z-bjUoNiGjF0NFufGG7G8laBNPNHIaaoUxd4k/edit";
  
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="relative">
              <Link href="/" className="block">
                <h1 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  AIで遊ぼうコミュニティー
                </h1>
              </Link>
            </div>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#features" className="hover:underline">特典</a></li>
                <li><a href="#pricing" className="hover:underline">料金</a></li>
                <li><Link href="/terms" className="hover:underline">利用規約</Link></li>
                <li><Link href="/tokushoho" className="hover:underline">特定商取引法</Link></li>
                <li><a href="#contact" className="hover:underline">お問い合わせ</a></li>
              </ul>
            </nav>
            
            <button className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
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
                  <span className="block mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent shimmer">
                    AIで遊ぼう
                  </span>
                  <span className="block bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent shimmer">
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
                <a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-lg bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg shadow-lg hover:shadow-xl relative z-10 inline-block enhanced-button"
                >
                  <span className="flex items-center">
                    今すぐ参加する
                    <span className="ml-2 inline-flex">
                      <ArrowRightIcon className="w-5 h-5" />
                    </span>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Right content - Placeholder for AI Network Visualization */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-xl overflow-hidden">
              <div className="flex items-center justify-center h-full">
                <p className="text-center text-gray-500">AI Network Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">コミュニティの特典</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="enhanced-card bg-white dark:bg-black p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0">
                  <LightBulbIcon className="h-8 w-8 text-yellow-500" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-4 tracking-tight">
                    AI情報の毎日配信
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    最新のAI情報を毎日お届けします。常に最先端の技術動向をキャッチアップできます。
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="notion-tag">最新情報</span>
                    <span className="notion-tag">AI技術</span>
                    <span className="notion-tag">トレンド</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="enhanced-card bg-white dark:bg-black p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0">
                  <CalendarIcon className="h-8 w-8 text-blue-500" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-4 tracking-tight">
                    週1回のAIキャッチアップセッション
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    毎週日曜日に2時間のAI情報キャッチアップセッションを開催。最新トレンドを深掘りします。
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="notion-tag">毎週日曜日</span>
                    <span className="notion-tag">2時間</span>
                    <span className="notion-tag">ライブ配信</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="enhanced-card bg-white dark:bg-black p-6 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0">
                  <SearchIcon className="h-8 w-8 text-green-500" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-4 tracking-tight">
                    ピタッとAI検索
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    AI情報を能動的または自動的に検索できる独自ツール「ピタッとAI」へのアクセス権が得られます。
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="notion-tag">検索ツール</span>
                    <span className="notion-tag">無制限利用</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">料金プラン</h2>
          
          <div className="max-w-md mx-auto">
            <div className="enhanced-card glass-card bg-white dark:bg-black p-8 rounded-xl shadow-xl">
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
                
                <h3 className="font-bold text-2xl mb-3 tracking-tight">メンバーシップ</h3>
                <p className="text-4xl font-bold mb-4">¥3,000</p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">月額サブスクリプション</p>
              </div>
              
              <div className="notion-divider"></div>
              
              <ul className="space-y-5 mb-8">
                {["AI情報の毎日配信", "週1回のAIキャッチアップセッション（日曜日2時間）", "「ピタッとAI」検索ツールの無制限利用", "開発中のAIサービスへの早期アクセス"].map((feature, index) => (
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
              
              <a 
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="notion-button w-full text-center flex items-center justify-center text-base"
              >
                今すぐ参加する
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">お問い合わせ</h2>
          
          <div className="max-w-md mx-auto text-center">
            <p className="text-xl mb-8">
              ご質問やお問い合わせは、以下のメールアドレスまでお気軽にご連絡ください。
            </p>
            
            <a 
              href="mailto:4869nanataitai@gmail.com" 
              className="text-xl font-medium hover:underline"
            >
              4869nanataitai@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">AIで遊ぼうコミュニティー</h3>
              <p className="text-gray-600 dark:text-gray-400">
                最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:underline">特典</a></li>
                <li><a href="#pricing" className="hover:underline">料金</a></li>
                <li><Link href="/terms" className="hover:underline">利用規約</Link></li>
                <li><Link href="/tokushoho" className="hover:underline">特定商取引法</Link></li>
                <li><a href="#contact" className="hover:underline">お問い合わせ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">お問い合わせ</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                ご質問やお問い合わせは、以下のメールアドレスまでお気軽にご連絡ください。
              </p>
              <a 
                href="mailto:4869nanataitai@gmail.com" 
                className="font-medium hover:underline"
              >
                4869nanataitai@gmail.com
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} AIで遊ぼうコミュニティー. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
