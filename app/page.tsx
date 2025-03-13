export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
        <div className="notion-like py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">AIで遊ぼうコミュニティー</h1>
          <a href="#join" className="notion-button">参加する</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="notion-section">
        <div className="notion-like">
          <div className="flex flex-col items-center text-center">
            <h2 className="notion-heading">AIで遊ぼうコミュニティー</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              最新のAI情報をキャッチアップし、AIの可能性を一緒に探求するコミュニティです。
            </p>
            <a href="#join" className="notion-button">今すぐ参加する</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="notion-section bg-gray-50 dark:bg-gray-900">
        <div className="notion-like">
          <h2 className="notion-subheading text-center mb-12">コミュニティの特典</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="notion-card">
              <h3 className="font-semibold text-lg mb-3">AI情報の毎日配信</h3>
              <p className="text-gray-600 dark:text-gray-400">
                最新のAI情報を毎日お届けします。常に最先端の技術動向をキャッチアップできます。
              </p>
            </div>
            <div className="notion-card">
              <h3 className="font-semibold text-lg mb-3">週1回のAIキャッチアップセッション</h3>
              <p className="text-gray-600 dark:text-gray-400">
                毎週日曜日に2時間のAI情報キャッチアップセッションを開催。最新トレンドを深掘りします。
              </p>
            </div>
            <div className="notion-card">
              <h3 className="font-semibold text-lg mb-3">ピタッとAI検索</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI情報を能動的または自動的に検索できる独自ツール「ピタッとAI」へのアクセス権が得られます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="notion-section">
        <div className="notion-like">
          <h2 className="notion-subheading text-center mb-12">アプリケーションショーケース</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            コミュニティメンバーは、開発中の最新AIアプリケーションをいち早く体験できます。
            スクリーンショットで公開される最新の開発状況をチェックしましょう。
          </p>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50 dark:bg-gray-900 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ※ここにアプリケーションのスクリーンショットが定期的に公開されます
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="join" className="notion-section bg-gray-50 dark:bg-gray-900">
        <div className="notion-like">
          <h2 className="notion-subheading text-center mb-12">料金プラン</h2>
          <div className="max-w-md mx-auto">
            <div className="notion-card bg-white dark:bg-black">
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-2">メンバーシップ</h3>
                <p className="text-3xl font-bold mb-4">¥3,000</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">一括払い</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>AI情報の毎日配信</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>週1回のAIキャッチアップセッション（日曜日2時間）</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>「ピタッとAI」検索ツールの無制限利用</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>開発中のAIサービスへの早期アクセス</span>
                </li>
              </ul>
              <a href="#" className="notion-button w-full text-center block">
                今すぐ参加する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="notion-like text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 AIで遊ぼうコミュニティー. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
