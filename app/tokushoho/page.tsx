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
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  特定商取引法（通信販売）に基づき、以下の事項を表示いたします。
                </p>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">販売事業者</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">販売業者の名称</th>
                        <td className="py-4">AIで遊ぼうコミュニティー</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">運営統括責任者</th>
                        <td className="py-4">木村 太陽</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">所在地</th>
                        <td className="py-4">
                          <p>請求があったら遅滞なく開示します</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">電話番号</th>
                        <td className="py-4">
                          <p>請求があったら遅滞なく開示します</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">メールアドレス</th>
                        <td className="py-4">
                          <p>4869nanataitai@gmail.com</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">※お問い合わせは上記メールアドレスにて承ります。</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">販売価格・サービス内容</h3>
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
                        <th className="py-4 pr-4 text-left align-top">販売価格</th>
                        <td className="py-4">3,000円（税込）／月額サブスクリプション</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">追加手数料等</th>
                        <td className="py-4">
                          <p>サービス利用に必要なインターネット接続料金、通信料金等はお客様のご負担となります。</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">お支払い方法</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">受け付け可能な決済手段</th>
                        <td className="py-4">クレジットカード決済（Stripe）</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">決済期間</th>
                        <td className="py-4">
                          <p>クレジットカード決済はただちに処理されます。</p>
                          <p>初回決済後は、毎月同日に自動的に決済が行われます。</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">引渡時期</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">引渡時期</th>
                        <td className="py-4">
                          <p>お申込み完了後、すぐにご利用いただけます。</p>
                          <p>AIキャッチアップセッションは毎週日曜日に開催されます。</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-6">交換および返品（返金ポリシー）</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top w-1/3">サービスに不備がある場合</th>
                        <td className="py-4">
                          <p>サービスに不備がある場合は、メールアドレス（4869nanataitai@gmail.com）までご連絡ください。状況を確認の上、適切に対応いたします。状況によっては返金対応も検討いたします。</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">お客様都合の場合</th>
                        <td className="py-4">
                          <ul className="list-disc pl-6 space-y-2">
                            <li>サブスクリプションは月単位での課金となり、解約時点で日割り計算での返金はいたしません。</li>
                            <li>次回の請求日前にキャンセルされた場合、次回以降の請求は発生しません。</li>
                            <li>サブスクリプションのキャンセルは、いつでもマイページから可能です。</li>
                          </ul>
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
                        <th className="py-4 pr-4 text-left align-top w-1/3">ソフトウェアの動作環境</th>
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
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">販売数量の制限</th>
                        <td className="py-4">
                          <p>特に制限はございません。</p>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-4 pr-4 text-left align-top">申込み期間の制限</th>
                        <td className="py-4">
                          <p>特に制限はございません。いつでもお申し込みいただけます。</p>
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
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  利用規約
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
