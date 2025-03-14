import Link from 'next/link';

export default function StripeRequirements() {
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
            <h2 className="notion-heading mb-16 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Stripe決済に関する情報</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">本番環境利用の申請時のビジネスのウェブサイトに関するよくあるご質問</h3>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h4 className="text-xl font-medium mb-4 tracking-tight">Stripe からビジネスのウェブサイトを求められるのはなぜですか？</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    ウェブサイトやソーシャルメディアのプロフィール、モバイルアプリを利用してビジネスの宣伝や商品の販売をされている場合、Stripe は金融規制に従って、それらの媒体を調査して、ビジネスの内容と販売商品を確認する必要があります。<a href="https://support.stripe.com/questions/know-your-customer-obligations" className="text-blue-600 dark:text-blue-400 underline">「顧客確認 (KYC)」の義務</a>をご覧ください。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                    常に適切な情報を掲載したウェブサイトを運用し続ける必要があります。Stripe は、提示されたウェブサイトが基準を満たしていることを定期的に確認します。問題が見つかった場合、ウェブサイトを更新するか、新しいウェブサイトを開設して、要件を満たす必要があります。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h4 className="text-xl font-medium mb-4 tracking-tight">必要になるのはどのような情報ですか？</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    さしあたり、ビジネス用ウェブサイト、ソーシャルメディアのプロフィール、またはモバイルアプリケーションと併せて、以下の情報が必要です。
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <li>ビジネス名</li>
                    <li>販売している商品・サービスの説明</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                    上記の情報は、お客様が Stripe に提出済みの情報と一致している必要があります。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
                    そのほか、お客様が商品 / サービスの販売を開始するまでの間、Stripe とその金融パートナーから、ウェブサイト、ソーシャルメディアのプロフィールまたはモバイルアプリケーションに関する追加情報の提出を求められます。ビジネスの中断を避けるため、追加情報の提出を求められたときは可能な限り早くご提出ください。お客様のビジネスが財務リスクの高い業界に属している場合、早期の段階で追加情報の提出を求められる可能性があります。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h4 className="text-xl font-medium mb-4 tracking-tight">追加で必要な情報</h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <li>カスタマーサービスの連絡先情報 (例: 電話番号、メールアドレス、住所、お問い合わせフォーム、オンラインメッセージサービスの宛先)</li>
                    <li>返品に関するポリシーとプロセス (物理的な商品を販売する場合)</li>
                    <li>返金と不審請求の申請に関するポリシー</li>
                    <li>キャンセルに関するポリシー (該当する場合)</li>
                    <li>法律上または輸出上の制限 (該当する場合)</li>
                    <li>プロモーションに関する規約</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h4 className="text-xl font-medium mb-4 tracking-tight">ウェブサイトが不十分と判断される一般的な理由</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    提供されたビジネスのウェブサイトやソーシャルメディアのプロフィールが Stripe アカウントの本番環境利用の申請には不十分であると判断された場合に共通してよく見られる理由は以下のとおりです。
                  </p>
                  <ul className="list-disc pl-6 space-y-6 text-gray-600 dark:text-gray-400">
                    <li>
                      <strong className="block mb-2">ウェブページが読み込み可能で、アクセス可能であるか</strong>
                      <p className="mt-2 leading-relaxed">ウェブページはパスワードなしでアクセスできなければなりません。</p>
                      <p className="mt-2 leading-relaxed">Stripe はお客様のウェブサイトを確認しなければならない場合があります。これが必要な場合、お客様にメールと Stripe ダッシュボード上で通知が届きます。<a href="https://support.stripe.com/questions/website-ownership-verification-during-stripe-account-application" className="text-blue-600 dark:text-blue-400 underline">Stripe アカウント申し込み時のウェブサイトの所有権の確認</a>をご確認ください。</p>
                    </li>
                    <li>
                      <strong className="block mb-2">ウェブサイトが作成中または未完成である</strong>
                      <p className="mt-2 leading-relaxed">ウェブサイトにお客様のビジネスに関する必要情報が掲載されるまで、本番環境はご利用いただけません。すべてのお取扱商品がウェブサイトに掲載されてウェブサイトが完成したら、ダッシュボードでウェブサイトの URL を更新してください。</p>
                    </li>
                    <li>
                      <strong className="block mb-2">ソーシャルメディアのプロフィールが不完全である</strong>
                      <p className="mt-2 leading-relaxed">お客様の具体的なプロフィールの完全な URL (例: facebook.com/profile/yourbusiness) をお知らせいただく必要があります。ソーシャルメディアのハンドル名や単に facebook.com では不十分です。</p>
                    </li>
                    <li>
                      <strong className="block mb-2">ウェブサイトが特定の地域からのアクセスをブロックしている</strong>
                      <p className="mt-2 leading-relaxed">ウェブサイトの確認が完了するまで、ブロックを一時的に解除してください。</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">AIで遊ぼうコミュニティーの情報</h3>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h4 className="text-xl font-medium mb-4 tracking-tight">ビジネス情報</h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <li><strong>ビジネス名:</strong> AIで遊ぼうコミュニティー</li>
                    <li><strong>サービス内容:</strong> AI情報の配信、AIキャッチアップセッション、AI検索ツールの提供</li>
                    <li><strong>料金:</strong> ¥3,000（一括払い）</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h4 className="text-xl font-medium mb-4 tracking-tight">お問い合わせ情報</h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <li><strong>メールアドレス:</strong> info@ai-asobou.com</li>
                    <li><strong>お問い合わせフォーム:</strong> <a href="#" className="text-blue-600 dark:text-blue-400 underline">こちら</a></li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h4 className="text-xl font-medium mb-4 tracking-tight">返金・キャンセルポリシー</h4>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <li>お支払い後14日以内であれば、全額返金いたします。</li>
                    <li>14日を過ぎた場合の返金はいたしかねます。</li>
                    <li>返金をご希望の場合は、お問い合わせフォームよりご連絡ください。</li>
                    <li>サブスクリプションのキャンセルは、いつでもマイページから可能です。</li>
                  </ul>
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
