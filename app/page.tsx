import Link from 'next/link';
import { 
  ClientAnimatedText, 
  ClientFloatingAnimation,
  ClientMotion,
  ClientPulseAnimation
} from './components/client/motion-wrapper';
import { 
  ClientAINetworkAnimation, 
  ClientCircuitPattern,
  ClientParticleBackground
} from './components/client/ai-network-client';
import { ClientHeader } from './components/client/header-client';
import { ClientFooter } from './components/client/footer-client';
import { MobileAINetwork } from './components/client/mobile-ai-network';
import { ClientGradientBackground } from './components/client/gradient-background-client';
import { 
  ClientEnhancedFeatureCard,
  ClientEnhancedButton,
  ClientPricingCard
} from './components/client/feature-card-client';
import { EnhancedCard } from './components/ui/feature-card';
import { ArrowRightIcon, CheckIcon, LightBulbIcon, CalendarIcon, SearchIcon } from './components/ui/icons';
import { StaggerChildren, HoverScale } from './components/client/stagger-children.tsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <ClientHeader />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Dynamic background elements */}
        <ClientGradientBackground />
        <div className="absolute inset-0 z-0 opacity-30">
          <ClientCircuitPattern />
        </div>
        <ClientParticleBackground />
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <div className="mb-8">
                <ClientMotion 
                  className="inline-block bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  AIの可能性を一緒に探求しよう
                </ClientMotion>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                  <ClientAnimatedText 
                    text="AIで遊ぼう" 
                    className="block mb-2 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent shimmer"
                  />
                  <ClientAnimatedText 
                    text="コミュニティー" 
                    className="block bg-gradient-to-r from-gray-600 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent shimmer"
                  />
                </h2>
              </div>
              
              <ClientMotion 
                className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。
                <span className="block mt-4">日々進化するAI技術を楽しく学び、活用していきましょう。</span>
              </ClientMotion>
              
              <ClientMotion
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <ClientEnhancedButton className="px-8 py-4 text-lg">
                  今すぐ参加する
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </ClientEnhancedButton>
              </ClientMotion>
              
              {/* Mobile AI Network Visualization - only visible on small mobile devices */}
              <div className="block sm:hidden">
                <MobileAINetwork />
              </div>
            </div>
            
            {/* Right content - AI Network Visualization */}
            <ClientMotion 
              className="relative h-[300px] sm:h-[350px] md:h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ClientFloatingAnimation className="w-full h-full">
                <div className="relative w-full h-full bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-xl overflow-hidden card-3d">
                  <div className="card-3d-inner">
                    <ClientAINetworkAnimation />
                  </div>
                </div>
              </ClientFloatingAnimation>
            </ClientMotion>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">コミュニティの特典</h2>
          
          <StaggerChildren containerClassName="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            <HoverScale>
              <ClientEnhancedFeatureCard
                icon={<LightBulbIcon className="h-8 w-8" />}
                title="AI情報の毎日配信"
                description="最新のAI情報を毎日お届けします。常に最先端の技術動向をキャッチアップできます。"
                tags={["最新情報", "AI技術", "トレンド"]}
              />
            </HoverScale>
            
            <HoverScale>
              <ClientEnhancedFeatureCard
                icon={<CalendarIcon className="h-8 w-8" />}
                title="週1回のAIキャッチアップセッション"
                description="毎週日曜日に2時間のAI情報キャッチアップセッションを開催。最新トレンドを深掘りします。"
                tags={["毎週日曜日", "2時間", "ライブ配信"]}
              />
            </HoverScale>
            
            <HoverScale>
              <ClientEnhancedFeatureCard
                icon={<SearchIcon className="h-8 w-8" />}
                title="ピタッとAI検索"
                description="AI情報を能動的または自動的に検索できる独自ツール「ピタッとAI」へのアクセス権が得られます。"
                tags={["検索ツール", "無制限利用"]}
              />
            </HoverScale>
          </StaggerChildren>
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
          
          <EnhancedCard className="overflow-hidden glass-card">
            <div className="border-b border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-semibold text-lg">最新の開発状況</h3>
            </div>
            
            <div className="m-4 p-8 bg-gray-50 dark:bg-gray-900 text-center relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <ClientCircuitPattern />
              
              <div className="relative z-10">
                <ClientPulseAnimation className="w-20 h-20 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white dark:text-black"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h.01" />
                    <path d="M12 3v4" />
                    <path d="M17 7h.01" />
                    <path d="M12 17v4" />
                    <path d="M7 17h.01" />
                    <path d="M17 17h.01" />
                  </svg>
                </ClientPulseAnimation>
                
                <p className="text-gray-600 dark:text-gray-400 relative z-10 max-w-md mx-auto">
                  ※ここにアプリケーションのスクリーンショットが定期的に公開されます。
                  <span className="block mt-2 text-sm">コミュニティメンバーは最新の開発状況をいち早く確認できます。</span>
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-800 p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                最終更新: 2025年3月14日
              </p>
            </div>
          </EnhancedCard>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">料金プラン</h2>
          
          <div className="max-w-md mx-auto">
            <ClientMotion
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <ClientPricingCard
                title="メンバーシップ"
                price="¥3,000"
                period="月額サブスクリプション"
                features={[
                  "AI情報の毎日配信",
                  "週1回のAIキャッチアップセッション（日曜日2時間）",
                  "「ピタッとAI」検索ツールの無制限利用",
                  "開発中のAIサービスへの早期アクセス"
                ]}
                ctaText="今すぐ参加する"
                ctaLink="#"
              />
            </ClientMotion>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">利用規約・ポリシー</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-black p-6 sm:p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">
                お問い合わせ
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                カスタマーサービスへのお問い合わせは以下の連絡先までお願いします。
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium mb-1 sm:mb-0 sm:mr-3">メールアドレス:</span>
                  <a href="mailto:4869nanataitai@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">4869nanataitai@gmail.com</a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium mb-1 sm:mb-0 sm:mr-3">X (Twitter):</span>
                  <a href="https://x.com/taiyo_ai_gakuse" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@taiyo_ai_gakuse</a>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-black p-6 sm:p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">
                返金ポリシー
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                当コミュニティは以下の返金ポリシーを設けています：
              </p>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                {[
                  "サブスクリプションは月単位での課金となり、解約時点で日割り計算での返金はいたしません。",
                  "次回の請求日前にキャンセルされた場合、次回以降の請求は発生しません。",
                  "サービスに不具合があった場合は、個別にご相談ください。"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <CheckIcon className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-white dark:bg-black p-6 sm:p-8 rounded-xl shadow-sm">
            <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">Stripeに関する情報</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Stripeの決済に関する詳細情報は以下のページでご確認いただけます。
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-gray-300 dark:border-gray-700 p-4 rounded-r-md mb-6">
              <p className="text-gray-600 dark:text-gray-400">Stripeを利用した決済には、特定の要件があります。詳細は専用ページをご覧ください。</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/stripe" className="inline-flex items-center justify-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Stripe要件の詳細を見る
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/terms" className="inline-flex items-center justify-center bg-gray-200 text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                利用規約を見る
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ClientFooter />
    </div>
  );
}
