import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">AIで遊ぼうコミュニティー</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:underline">特典</a></li>
              <li><a href="#pricing" className="hover:underline">料金</a></li>
              <li><a href="#contact" className="hover:underline">お問い合わせ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 opacity-70"></div>
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="mb-10 bg-gray-100 dark:bg-gray-800 p-5 rounded-full inline-block relative overflow-hidden">
            <div className="w-24 h-24 relative">
              {/* Simple AI icon placeholder */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="20" fill="currentColor" />
                <line x1="20" y1="20" x2="30" y2="30" stroke="currentColor" strokeWidth="2" />
                <line x1="80" y1="20" x2="70" y2="30" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="80" x2="30" y2="70" stroke="currentColor" strokeWidth="2" />
                <line x1="80" y1="80" x2="70" y2="70" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            AIで遊ぼうコミュニティー
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。
            <span className="block mt-4">日々進化するAI技術を楽しく学び、活用していきましょう。</span>
          </p>
          
          <div className="mt-10">
            <a href="#pricing" className="bg-black text-white dark:bg-white dark:text-black px-8 py-4 rounded-md text-lg font-medium hover:opacity-90 transition-opacity">
              今すぐ参加する
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">コミュニティの特典</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-black p-8 rounded-xl shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI情報の毎日配信</h3>
              <p className="text-gray-600 dark:text-gray-400">
                最新のAI情報を毎日お届けします。常に最先端の技術動向をキャッチアップできます。
              </p>
            </div>
            
            <div className="bg-white dark:bg-black p-8 rounded-xl shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">週1回のAIキャッチアップセッション</h3>
              <p className="text-gray-600 dark:text-gray-400">
                毎週日曜日に2時間のAI情報キャッチアップセッションを開催。最新トレンドを深掘りします。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm rounded-full">毎週日曜日</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm rounded-full">2時間</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm rounded-full">ライブ配信</span>
              </div>
            </div>
            
            <div className="bg-white dark:bg-black p-8 rounded-xl shadow-sm">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">ピタッとAI検索</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI情報を能動的または自動的に検索できる独自ツール「ピタッとAI」へのアクセス権が得られます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">アプリケーションショーケース</h2>
          
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400">
              コミュニティメンバーは、開発中の最新AIアプリケーションをいち早く体験できます。
              スクリーンショットで公開される最新の開発状況をチェックしましょう。
            </p>
          </div>
          
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-semibold text-lg">最新の開発状況</h3>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg m-4 p-8 bg-gray-50 dark:bg-gray-900 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                      <path d="M 0 50 L 50 50 L 50 0" fill="none" stroke="currentColor" strokeWidth="1" />
                      <path d="M 50 100 L 50 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="1" />
                      <circle cx="50" cy="50" r="3" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
              </div>
              
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 relative z-10">
                ※ここにアプリケーションのスクリーンショットが定期的に公開されます
              </p>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-800 p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                最終更新: 2025年3月14日
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">料金プラン</h2>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-black p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="font-bold text-2xl mb-3 tracking-tight">メンバーシップ</h3>
                <p className="text-4xl font-bold mb-4">¥3,000</p>
                <p className="text-gray-600 dark:text-gray-400 mb-8">月額サブスクリプション</p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>
              
              <ul className="space-y-5 mb-8">
                {[
                  "AI情報の毎日配信",
                  "週1回のAIキャッチアップセッション（日曜日2時間）",
                  "「ピタッとAI」検索ツールの無制限利用",
                  "開発中のAIサービスへの早期アクセス"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#" className="block w-full bg-black text-white dark:bg-white dark:text-black text-center py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
                今すぐ参加する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">利用規約・ポリシー</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-black p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">お問い合わせ</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                カスタマーサービスへのお問い合わせは以下の連絡先までお願いします。
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="font-medium mr-3">メールアドレス:</span>
                  <a href="mailto:4869nanataitai@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">4869nanataitai@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-3">X (Twitter):</span>
                  <a href="https://x.com/taiyo_ai_gakuse" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@taiyo_ai_gakuse</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-black p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">返金ポリシー</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                当コミュニティは以下の返金ポリシーを設けています：
              </p>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>お支払い後14日以内であれば、全額返金いたします。</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>14日を過ぎた場合の返金はいたしかねます。</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>返金をご希望の場合は、お問い合わせフォームよりご連絡ください。</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-white dark:bg-black p-8 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">Stripeに関する情報</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Stripeの決済に関する詳細情報は以下のページでご確認いただけます。
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-gray-300 dark:border-gray-700 p-4 rounded-r-md mb-6">
              <p className="text-gray-600 dark:text-gray-400">Stripeを利用した決済には、特定の要件があります。詳細は専用ページをご覧ください。</p>
            </div>
            <div>
              <Link href="/stripe" className="inline-flex items-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Stripe要件の詳細を見る
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="font-bold text-xl mb-4 tracking-tight">AIで遊ぼうコミュニティー</h2>
              <p className="text-gray-600 dark:text-gray-400">
                最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティ
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                AIで明日のことをコンセプトとした、楽しみながらAIを活用するコミュニティです。
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                利用規約
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                特定商取引法に基づく表記
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; 2025 AIで遊ぼうコミュニティー. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
