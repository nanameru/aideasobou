import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
            <h2 className="notion-heading mb-16 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">プライバシーポリシー</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  AIで遊ぼうコミュニティー（以下、「当コミュニティ」）は、ユーザーの個人情報保護を重要視し、個人情報の保護に関する法律を遵守するとともに、以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
                </p>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">1. 収集する情報</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    当コミュニティでは、以下の情報を収集することがあります：
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <li>氏名</li>
                    <li>メールアドレス</li>
                    <li>支払い情報（クレジットカード情報は当コミュニティでは保持せず、決済代行会社が管理します）</li>
                    <li>ウェブサイトの利用状況に関する情報（アクセスログ、Cookie情報など）</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">2. 情報の利用目的</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    収集した情報は、以下の目的で利用します：
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <li>サービスの提供・運営</li>
                    <li>ユーザーサポート</li>
                    <li>サービス改善のための分析</li>
                    <li>新機能・サービスの案内</li>
                    <li>料金請求</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">3. 情報の共有</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    当コミュニティは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません：
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <li>ユーザーの同意がある場合</li>
                    <li>法令に基づく場合</li>
                    <li>サービス提供に必要な範囲内で業務委託先に提供する場合</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">4. セキュリティ</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティは、ユーザーの個人情報を適切に保護するため、セキュリティ対策を実施しています。個人情報への不正アクセス、紛失、破壊、改ざん、漏洩などのリスクに対して、適切な安全対策を講じています。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">5. Cookieの使用</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティのウェブサイトでは、ユーザー体験の向上やサービス改善のためにCookieを使用しています。ユーザーはブラウザの設定によりCookieの受け入れを拒否することができますが、その場合一部の機能が利用できなくなる可能性があります。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">6. ユーザーの権利</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    ユーザーは、自己の個人情報について以下の権利を有します：
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <li>個人情報の開示請求</li>
                    <li>個人情報の訂正・削除の請求</li>
                    <li>個人情報の利用停止の請求</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    これらの権利を行使する場合は、お問い合わせフォームよりご連絡ください。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">7. プライバシーポリシーの変更</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティは、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、ウェブサイト上で通知します。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">8. お問い合わせ</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いします。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    メールアドレス: info@ai-asobou.com
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mt-8 leading-relaxed">
                  最終更新日: 2025年3月14日
                </p>
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
                <Link href="/tokushoho" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  特定商取引法に基づく表記
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
