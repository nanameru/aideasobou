import Link from 'next/link';
import { LightBulbIcon, CalendarIcon, SearchIcon, ArrowRightIcon, CheckIcon } from './components/ui/icons';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="notion-nav sticky top-0 z-10 backdrop-blur-sm bg-white/90 dark:bg-black/90">
        <div className="notion-like py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="font-bold text-xl tracking-tight mb-4 sm:mb-0">AIで遊ぼうコミュニティー</h1>
            <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <Link href="#features" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                特典
              </Link>
              <Link href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                料金
              </Link>
              <Link href="/stripe" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                Stripe要件
              </Link>
              <a href="#join" className="notion-button">参加する</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="notion-section py-12 sm:py-20 md:py-24">
        <div className="notion-like">
          <div className="w-full max-w-3xl mx-auto text-center">
            <div className="mb-10 bg-gray-100 dark:bg-gray-800 p-5 rounded-full inline-block">
              <LightBulbIcon className="w-12 h-12 text-gray-800 dark:text-gray-200" />
            </div>
            <h2 className="notion-heading mb-8 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">AIで遊ぼうコミュニティー</h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。
              <span className="block mt-4">日々進化するAI技術を楽しく学び、活用していきましょう。</span>
            </p>
            <div className="mt-10">
              <a href="#join" className="notion-button text-base">
                今すぐ参加する
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="notion-section bg-gray-50 dark:bg-gray-900">
        <div className="notion-like">
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="notion-subheading text-center mb-12">コミュニティの特典</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="notion-feature-card flex flex-col md:flex-row items-start gap-6 md:gap-8 bg-white dark:bg-black p-6 md:p-8 rounded-lg">
                <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0">
                  <LightBulbIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-4 tracking-tight">AI情報の毎日配信</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    最新のAI情報を毎日お届けします。常に最先端の技術動向をキャッチアップできます。AIの進化や新しいツールの登場、活用事例など、幅広い情報を厳選してお届けします。
                  </p>
                </div>
              </div>
              
              <div className="notion-feature-card flex flex-col md:flex-row items-start gap-6 md:gap-8 bg-white dark:bg-black p-6 md:p-8 rounded-lg">
                <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0">
                  <CalendarIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-4 tracking-tight">週1回のAIキャッチアップセッション</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    毎週日曜日に2時間のAI情報キャッチアップセッションを開催。最新トレンドを深掘りします。専門家による解説や質疑応答の時間もあり、AIへの理解を深めることができます。
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="notion-tag">毎週日曜日</span>
                    <span className="notion-tag">2時間</span>
                    <span className="notion-tag">ライブ配信</span>
                  </div>
                </div>
              </div>
              
              <div className="notion-feature-card flex flex-col md:flex-row items-start gap-6 md:gap-8 bg-white dark:bg-black p-6 md:p-8 rounded-lg">
                <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 md:mb-0">
                  <SearchIcon className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-4 tracking-tight">ピタッとAI検索</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    AI情報を能動的または自動的に検索できる独自ツール「ピタッとAI」へのアクセス権が得られます。膨大なAI情報の中から、あなたに必要な情報だけをピンポイントで見つけ出します。
                  </p>
                  <div className="notion-callout mt-6 bg-gray-50 dark:bg-gray-900 border-l-4 border-gray-300 dark:border-gray-700 p-4 rounded-r-md">
                    <p className="text-sm text-gray-600 dark:text-gray-400">「ピタッとAI」は現在ベータ版ですが、コミュニティメンバーは無制限で利用できます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="notion-section">
        <div className="notion-like">
          <div className="max-w-3xl mx-auto">
            <h2 className="notion-subheading text-center mb-8">アプリケーションショーケース</h2>
            <div className="notion-quote mb-8 max-w-2xl mx-auto">
              コミュニティメンバーは、開発中の最新AIアプリケーションをいち早く体験できます。
              スクリーンショットで公開される最新の開発状況をチェックしましょう。
            </div>
            
            <div className="notion-feature-card bg-white dark:bg-black overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
                <h3 className="font-semibold text-lg">最新の開発状況</h3>
              </div>
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 bg-gray-50 dark:bg-gray-900 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <SearchIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  ※ここにアプリケーションのスクリーンショットが定期的に公開されます
                </p>
              </div>
              <div className="notion-divider"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                最終更新: 2025年3月13日
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="join" className="notion-section bg-gray-50 dark:bg-gray-900">
        <div className="notion-like">
          <div className="max-w-3xl mx-auto">
            <h2 className="notion-subheading text-center mb-12">料金プラン</h2>
            <div className="max-w-md mx-auto">
              <div className="notion-feature-card bg-white dark:bg-black p-8 rounded-xl">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <CheckIcon className="w-10 h-10 text-white dark:text-black" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 tracking-tight">メンバーシップ</h3>
                  <p className="text-4xl font-bold mb-4">¥3,000</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">一括払い</p>
                </div>
                <div className="notion-divider"></div>
                <ul className="space-y-5 mb-8">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 dark:text-gray-200">AI情報の毎日配信</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 dark:text-gray-200">週1回のAIキャッチアップセッション（日曜日2時間）</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 dark:text-gray-200">「ピタッとAI」検索ツールの無制限利用</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 dark:text-gray-200">開発中のAIサービスへの早期アクセス</span>
                  </li>
                </ul>
                <a href="#" className="notion-button w-full text-center flex items-center justify-center text-base">
                  今すぐ参加する
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Section */}
      <section className="notion-section bg-white dark:bg-black">
        <div className="notion-like">
          <div className="max-w-3xl mx-auto">
            <h2 className="notion-subheading text-center mb-12">利用規約・ポリシー</h2>
            
            <div className="notion-feature-card mb-8 bg-white dark:bg-black p-8 rounded-xl">
              <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">お問い合わせ</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                カスタマーサービスへのお問い合わせは以下の連絡先までお願いします。
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="font-medium mr-3">メールアドレス:</span>
                  <a href="mailto:info@ai-asobou.com" className="notion-link">info@ai-asobou.com</a>
                </li>
                <li className="flex items-center">
                  <span className="font-medium mr-3">お問い合わせフォーム:</span>
                  <a href="#" className="notion-link">こちら</a>
                </li>
              </ul>
            </div>
            
            <div className="notion-feature-card mb-8 bg-white dark:bg-black p-8 rounded-xl">
              <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">返金ポリシー</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                当コミュニティは以下の返金ポリシーを設けています：
              </p>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0 mt-1" />
                  <span>お支払い後14日以内であれば、全額返金いたします。</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0 mt-1" />
                  <span>14日を過ぎた場合の返金はいたしかねます。</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 mr-3 text-gray-500 flex-shrink-0 mt-1" />
                  <span>返金をご希望の場合は、お問い合わせフォームよりご連絡ください。</span>
                </li>
              </ul>
            </div>
            
            <div className="notion-feature-card bg-white dark:bg-black p-8 rounded-xl">
              <h3 className="font-semibold text-xl mb-4 tracking-tight border-b border-gray-200 dark:border-gray-800 pb-4">Stripeに関する情報</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Stripeの決済に関する詳細情報は以下のページでご確認いただけます。
              </p>
              <div className="notion-callout mb-6 bg-gray-50 dark:bg-gray-900 border-l-4 border-gray-300 dark:border-gray-700 p-4 rounded-r-md">
                <p className="text-gray-600 dark:text-gray-400">Stripeを利用した決済には、特定の要件があります。詳細は専用ページをご覧ください。</p>
              </div>
              <Link href="/stripe" className="notion-button inline-flex items-center">
                Stripe要件の詳細を見る
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 mt-16">
        <div className="notion-like">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="font-bold text-xl mb-4 tracking-tight">AIで遊ぼうコミュニティー</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティ
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <Link href="/stripe" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Stripe要件
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  利用規約
                </Link>
              </div>
            </div>
            <div className="notion-divider mt-8"></div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              © 2025 AIで遊ぼうコミュニティー. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
