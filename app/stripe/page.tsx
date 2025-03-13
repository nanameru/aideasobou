import Link from 'next/link';

export default function StripeRequirements() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="notion-nav">
        <div className="notion-like py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">AIで遊ぼうコミュニティー</h1>
          <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center">
            <span className="mr-1">←</span> ホームに戻る
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="notion-section">
        <div className="notion-like">
          <div className="max-w-3xl mx-auto">
            <h2 className="notion-heading mb-12">Stripe決済に関する情報</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">本番環境利用の申請時のビジネスのウェブサイトに関するよくあるご質問</h3>
                
                <div className="notion-card mb-8">
                  <h4 className="text-xl font-medium mb-3">Stripe からビジネスのウェブサイトを求められるのはなぜですか？</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    ウェブサイトやソーシャルメディアのプロフィール、モバイルアプリを利用してビジネスの宣伝や商品の販売をされている場合、Stripe は金融規制に従って、それらの媒体を調査して、ビジネスの内容と販売商品を確認する必要があります。<a href="https://support.stripe.com/questions/know-your-customer-obligations" className="text-blue-600 dark:text-blue-400 underline">「顧客確認 (KYC)」の義務</a>をご覧ください。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    常に適切な情報を掲載したウェブサイトを運用し続ける必要があります。Stripe は、提示されたウェブサイトが基準を満たしていることを定期的に確認します。問題が見つかった場合、ウェブサイトを更新するか、新しいウェブサイトを開設して、要件を満たす必要があります。
                  </p>
                </div>
                
                <div className="notion-card mb-8">
                  <h4 className="text-xl font-medium mb-3">必要になるのはどのような情報ですか？</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    さしあたり、ビジネス用ウェブサイト、ソーシャルメディアのプロフィール、またはモバイルアプリケーションと併せて、以下の情報が必要です。
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>ビジネス名</li>
                    <li>販売している商品・サービスの説明</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    上記の情報は、お客様が Stripe に提出済みの情報と一致している必要があります。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    そのほか、お客様が商品 / サービスの販売を開始するまでの間、Stripe とその金融パートナーから、ウェブサイト、ソーシャルメディアのプロフィールまたはモバイルアプリケーションに関する追加情報の提出を求められます。ビジネスの中断を避けるため、追加情報の提出を求められたときは可能な限り早くご提出ください。お客様のビジネスが財務リスクの高い業界に属している場合、早期の段階で追加情報の提出を求められる可能性があります。
                  </p>
                </div>
                
                <div className="notion-card mb-8">
                  <h4 className="text-xl font-medium mb-3">追加で必要な情報</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>カスタマーサービスの連絡先情報 (例: 電話番号、メールアドレス、住所、お問い合わせフォーム、オンラインメッセージサービスの宛先)</li>
                    <li>返品に関するポリシーとプロセス (物理的な商品を販売する場合)</li>
                    <li>返金と不審請求の申請に関するポリシー</li>
                    <li>キャンセルに関するポリシー (該当する場合)</li>
                    <li>法律上または輸出上の制限 (該当する場合)</li>
                    <li>プロモーションに関する規約</li>
                  </ul>
                </div>
                
                <div className="notion-card">
                  <h4 className="text-xl font-medium mb-3">ウェブサイトが不十分と判断される一般的な理由</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    提供されたビジネスのウェブサイトやソーシャルメディアのプロフィールが Stripe アカウントの本番環境利用の申請には不十分であると判断された場合に共通してよく見られる理由は以下のとおりです。
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-400">
                    <li>
                      <strong>ウェブページが読み込み可能で、アクセス可能であるか</strong>
                      <p className="mt-1">ウェブページはパスワードなしでアクセスできなければなりません。</p>
                      <p className="mt-1">Stripe はお客様のウェブサイトを確認しなければならない場合があります。これが必要な場合、お客様にメールと Stripe ダッシュボード上で通知が届きます。<a href="https://support.stripe.com/questions/website-ownership-verification-during-stripe-account-application" className="text-blue-600 dark:text-blue-400 underline">Stripe アカウント申し込み時のウェブサイトの所有権の確認</a>をご確認ください。</p>
                    </li>
                    <li>
                      <strong>ウェブサイトが作成中または未完成である</strong>
                      <p className="mt-1">ウェブサイトにお客様のビジネスに関する必要情報が掲載されるまで、本番環境はご利用いただけません。すべてのお取扱商品がウェブサイトに掲載されてウェブサイトが完成したら、ダッシュボードでウェブサイトの URL を更新してください。</p>
                    </li>
                    <li>
                      <strong>ソーシャルメディアのプロフィールが不完全である</strong>
                      <p className="mt-1">お客様の具体的なプロフィールの完全な URL (例: facebook.com/profile/yourbusiness) をお知らせいただく必要があります。ソーシャルメディアのハンドル名や単に facebook.com では不十分です。</p>
                    </li>
                    <li>
                      <strong>ウェブサイトが特定の地域からのアクセスをブロックしている</strong>
                      <p className="mt-1">ウェブサイトの確認が完了するまで、ブロックを一時的に解除してください。</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">AIで遊ぼうコミュニティーの情報</h3>
                
                <div className="notion-card mb-8">
                  <h4 className="text-xl font-medium mb-3">ビジネス情報</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li><strong>ビジネス名:</strong> AIで遊ぼうコミュニティー</li>
                    <li><strong>サービス内容:</strong> AI情報の配信、AIキャッチアップセッション、AI検索ツールの提供</li>
                    <li><strong>料金:</strong> ¥3,000（一括払い）</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-8">
                  <h4 className="text-xl font-medium mb-3">お問い合わせ情報</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li><strong>メールアドレス:</strong> info@ai-asobou.com</li>
                    <li><strong>お問い合わせフォーム:</strong> <a href="#" className="text-blue-600 dark:text-blue-400 underline">こちら</a></li>
                  </ul>
                </div>
                
                <div className="notion-card">
                  <h4 className="text-xl font-medium mb-3">返金・キャンセルポリシー</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                    <li>お支払い後14日以内であれば、全額返金いたします。</li>
                    <li>14日を過ぎた場合の返金はいたしかねます。</li>
                    <li>返金をご希望の場合は、お問い合わせフォームよりご連絡ください。</li>
                    <li>サブスクリプションのキャンセルは、いつでもマイページから可能です。</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/" className="notion-button inline-flex items-center">
                <span className="mr-2">←</span> ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
        <div className="notion-like text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 AIで遊ぼうコミュニティー. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
