import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
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
            <h2 className="notion-heading mb-16 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">利用規約</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-12">
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  この利用規約（以下、「本規約」）は、AIで遊ぼうコミュニティー（以下、「当コミュニティ」）が提供するサービス（以下、「本サービス」）の利用条件を定めるものです。ユーザーの皆様（以下、「ユーザー」）には、本規約に同意いただいた上で、本サービスをご利用いただきます。
                </p>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">1. 適用</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    本規約は、ユーザーと当コミュニティとの間の本サービスの利用に関わる一切の関係に適用されるものとします。当コミュニティは本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">2. 利用登録</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    本サービスにおいては、登録希望者が本規約に同意の上、当コミュニティの定める方法によって利用登録を申請し、当コミュニティがこれを承認することによって、利用登録が完了するものとします。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティは、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 mt-4">
                    <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>その他、当コミュニティが利用登録を相当でないと判断した場合</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">3. ユーザーIDおよびパスワードの管理</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当コミュニティは、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">4. 料金および支払方法</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    ユーザーは、本サービスの有料部分の対価として、当コミュニティが別途定め、本ウェブサイトに表示する利用料金を、当コミュニティが指定する方法により支払うものとします。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14.6％の割合による遅延損害金を支払うものとします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">5. 禁止事項</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                    <li>法令または公序良俗に違反する行為</li>
                    <li>犯罪行為に関連する行為</li>
                    <li>当コミュニティ、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                    <li>当コミュニティのサービスの運営を妨害するおそれのある行為</li>
                    <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                    <li>不正アクセスをし、またはこれを試みる行為</li>
                    <li>他のユーザーに成りすます行為</li>
                    <li>当コミュニティのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                    <li>当コミュニティ、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                    <li>以下の表現を含み、または含むと当コミュニティが判断する内容を本サービス上に投稿し、または送信する行為</li>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mt-2">
                      <li>過度に暴力的な表現</li>
                      <li>露骨な性的表現</li>
                      <li>人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現</li>
                      <li>自殺、自傷行為、薬物乱用を誘引または助長する表現</li>
                      <li>その他反社会的な内容を含み他人に不快感を与える表現</li>
                    </ul>
                    <li>以下を目的とし、または目的とすると当コミュニティが判断する行為</li>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400 mt-2">
                      <li>営業、宣伝、広告、勧誘、その他営利を目的とする行為（当コミュニティの認めたものを除きます。）</li>
                      <li>性行為やわいせつな行為を目的とする行為</li>
                      <li>面識のない異性との出会いや交際を目的とする行為</li>
                      <li>他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為</li>
                      <li>当コミュニティ、本サービスの他のユーザー、または第三者に不利益、損害または不快感を与えることを目的とする行為</li>
                      <li>その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為</li>
                    </ul>
                    <li>宗教活動または宗教団体への勧誘行為</li>
                    <li>その他、当コミュニティが不適切と判断する行為</li>
                  </ul>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">6. 本サービスの提供の停止等</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400 mt-4">
                    <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                    <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                    <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                    <li>その他、当コミュニティが本サービスの提供が困難と判断した場合</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    当コミュニティは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">7. 退会</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    ユーザーは、当コミュニティの定める退会手続により、本サービスから退会できるものとします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">8. 保証の否認および免責事項</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    当コミュニティは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティは、本サービスに起因してユーザーに生じたあらゆる損害について、当コミュニティの故意または重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する当コミュニティとユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">9. サービス内容の変更等</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">10. 利用規約の変更</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    当コミュニティは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">11. 個人情報の取扱い</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    本サービスの利用によって取得する個人情報については、当コミュニティの「プライバシーポリシー」に従い適切に取り扱うものとします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">12. 通知または連絡</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    ユーザーと当コミュニティとの間の通知または連絡は、当コミュニティの定める方法によって行うものとします。当コミュニティは、ユーザーから、当コミュニティが別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">13. 権利義務の譲渡の禁止</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    ユーザーは、当コミュニティの書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
                  </p>
                </div>
                
                <div className="notion-card mb-10 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4">14. 準拠法・裁判管轄</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当コミュニティの本店所在地を管轄する裁判所を専属的合意管轄とします。
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
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  プライバシーポリシー
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
