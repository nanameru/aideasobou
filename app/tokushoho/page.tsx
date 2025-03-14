import React from 'react';
import Link from 'next/link';

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="notion-nav sticky top-0 z-10 backdrop-blur-sm bg-white/90 dark:bg-black/90">
        <div className="notion-like py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl tracking-tight">AIで遊ぼうコミュニティー</h1>
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center group">
              <span className="mr-2 group-hover:mr-3 transition-all">←</span> 
              <span>ホームに戻る</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="notion-section">
        <div className="notion-like">
          <div className="w-full max-w-3xl mx-auto">
            <h2 className="notion-heading mb-16 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">特定商取引法に基づく表記</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">販売事業者</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">事業者名</th>
                        <td className="py-4">AIで遊ぼうコミュニティー</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">代表者</th>
                        <td className="py-4">木村 太陽</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">所在地</th>
                        <td className="py-4">東京都新宿区西新宿1-1-1</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">連絡先</th>
                        <td className="py-4">
                          <p>メールアドレス: info@ai-asobou.com</p>
                          <p>X (Twitter): <a href="https://x.com/taiyo_ai_gakuse" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@taiyo_ai_gakuse</a></p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">サービス内容</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">サービス名</th>
                        <td className="py-4">AIで遊ぼうコミュニティー メンバーシップ</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">サービス内容</th>
                        <td className="py-4">
                          <ul className="list-disc pl-6 space-y-2">
                            <li>AI情報の毎日配信</li>
                            <li>週1回のAIキャッチアップセッション（日曜日、2時間）</li>
                            <li>「ピタッとAI」検索ツールの無制限利用</li>
                            <li>開発中のAIサービスへの早期アクセス</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">価格</th>
                        <td className="py-4">3,000円（月額サブスクリプション）</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">支払方法</th>
                        <td className="py-4">クレジットカード決済（Stripe）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">取引条件</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">申込方法</th>
                        <td className="py-4">本ウェブサイトからのオンライン申込</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">提供時期</th>
                        <td className="py-4">お申込み完了後、即時にサービス提供開始</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">返金ポリシー</th>
                        <td className="py-4">
                          <ul className="list-disc pl-6 space-y-2">
                            <li>お支払い後14日以内であれば、全額返金いたします。</li>
                            <li>14日を過ぎた場合の返金はいたしかねます。</li>
                            <li>返金をご希望の場合は、お問い合わせフォームよりご連絡ください。</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">キャンセル方法</th>
                        <td className="py-4">
                          <p>サブスクリプションのキャンセルは、いつでもマイページから可能です。</p>
                          <p>次回請求日の前日までにキャンセルされた場合、次回以降の請求は発生しません。</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">その他の条件</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">動作環境</th>
                        <td className="py-4">
                          <p>本サービスは以下の環境での利用を推奨します：</p>
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>最新のGoogle Chrome、Firefox、Safari、Microsoft Edgeブラウザ</li>
                            <li>安定したインターネット接続環境</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">禁止事項</th>
                        <td className="py-4">
                          <ul className="list-disc pl-6 space-y-2">
                            <li>コミュニティコンテンツの無断転載・共有</li>
                            <li>他のメンバーへの迷惑行為</li>
                            <li>営業・勧誘目的での利用</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">免責事項</th>
                        <td className="py-4">
                          <p>本サービスで提供される情報は、情報提供を目的としており、投資・ビジネス判断の根拠として利用される場合、利用者自身の責任において行ってください。</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link href="/" className="notion-button inline-flex items-center">
                <span className="mr-2">←</span> ホームに戻る
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
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  ホームに戻る
                </Link>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href="/stripe" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Stripe要件
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
