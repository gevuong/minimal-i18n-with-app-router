import {
  BgHeader,
  GlobeIcon,
  MonitorIcon,
  PhoneInHandIcon,
  PrivacyIcon,
  QuestionMarkIcon,
  RecycleIcon,
  SearchIcon,
} from '@/public/images/faq';

import { type FAQ } from '../types/faq';

const faq: FAQ = {
  headerSection: {
    img: BgHeader,
    altText: '',
    title: [
      {
        type: 'text',
        text: 'どのように',
      },
      {
        type: 'span',
        text: 'お手伝い',
      },
      {
        type: 'text',
        text: 'できますか？',
      },
    ],
    input: {
      placeholder: '検索ワードを入力...',
      img: SearchIcon,
      altText: '検索アイコン',
    },
    texts: [
      {
        type: 'text',
        text: 'または',
      },
      {
        type: 'span',
        text: '以下のオプションを選択',
      },
      {
        type: 'text',
        text: 'して、お探しの情報を見つけることができます。',
      },
    ],
  },
  topicsSection: {
    title: 'FAQトピック',
    cards: [
      {
        title: 'Virufyアプリ',
        img: PhoneInHandIcon,
        altText: '',
      },
      {
        title: 'Virufyについて',
        img: GlobeIcon,
        altText: '',
      },
      {
        title: 'AIについて',
        img: RecycleIcon,
        altText: '',
      },
      {
        title: '財務',
        img: MonitorIcon,
        altText: '',
      },
      {
        title: 'プライバシー',
        img: PrivacyIcon,
        altText: '',
      },
      {
        title: 'その他',
        img: QuestionMarkIcon,
        altText: '',
      },
    ],
  },
  questionsSection: {
    topicTitle: 'よくある質問',
    noResultsTitle: '結果が見つかりませんでした',
    questionsByTopic: {
      Virufyアプリ: [
        {
          question:
            'アプリはいつ、どのようにしてCOVID-19の予測結果を出しますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '当アプリは現在、データ収集のみの目的で使用されています。各国の公衆衛生当局の承認や、AI技術の臨床的検証が完了するまではCOVID-19予測アプリをリリースすることはできません。このプロセスは、各政府の対応の迅速さに応じて数週間から数か月かかる場合があります。Virufyは、この技術を人々に無償で提供し、高価なPCR検査の使用を必要な場合に最適化するため、保健当局や病院とのパートナーシップを歓迎します。',
                },
              ],
            },
          ],
        },
        {
          question:
            'アプリはどこでダウンロードできますか？iOSとAndroidに対応していますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'アプリは、モバイル対応のウェブサイト上で利用可能となります。一部の国では公式アプリストアでの公開に政府や医療機関の承認が必要であるためです。アプリはスマートフォンと接続できるため、iOSやAndroidを含むあらゆるオペレーティングシステムに対応しています。',
                },
              ],
            },
          ],
        },
        {
          question: 'アプリは無料で提供され、世界中で利用可能ですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '501(c)(3)非営利団体として、低所得国に利益を提供するため、アプリを無料で提供することを目指しています。ただし、十分な資金を調達できない場合は、運営費をサポートするために名目上、料金を請求する場合がございます。',
                },
              ],
            },
          ],
        },
        {
          question:
            'このアプリを営利目的のスタートアップに拡張する予定はありますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufyは非営利団体です。必要に応じて、アプリ展開を迅速にするために企業と提携する可能性はあります。',
                },
              ],
            },
          ],
        },
      ],
      Virufyについて: [
        {
          question: 'どのようにしてこのイニシエティブが作られたのですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'パンデミックが発生した際、Virufyの創設者であるアミルは、スマートフォンが広く普及していること、そして、COVIDが鼻、喉、肺に影響を与えることを認識していました。そこで、呼吸音や咳の音を機械学習で分析することで、COVIDの規則性を検出できる、という仮定を立てました。社会に貢献したいという思いから、彼は名門大学病院で362人の患者を対象にした臨床研究を主導しました。スタンフォード大学のAIを研究する大学院生から始まったVirufyの最初のチームは、世界中の大学から集まったボランティアチームにまで拡大しています。25カ国以上を訪問した経験を持つOne Young World Japanの大使として、アミルはグローバルな視点を理解しており、スマートフォンベースのソリューションが世界中の人々に活用できることを知っています。',
                },
              ],
            },
          ],
        },
        {
          question:
            'Virufyは同様のプロジェクトに取り組んでいる他の組織とはどう異なりますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufyは501(c)(3)非営利団体であるため、優秀な専門家をボランティアとして採用することができます。私たちのチームは5つの大陸にまたがり、グローバルな感性を持っています。利益を追求することがないため、発展途上国での活動が可能です。また、各国のトップレベルの人材にアクセスできる大学のネットワークやプロフェッショナルネットワークを活用しています。私たちの組織では、若い専門家が経験豊富な業界の専門家から助言を受け、迅速で創造的な活動が正しい方向に向かうようにしています。',
                },
              ],
            },
          ],
        },
        {
          question:
            '調査はどの段階にありますか？また、参加するための期限はありますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '私たちはパートナーシップの形成、モバイルアプリの開発、カリフォルニアの非営利法人登録、数十か国のデータプライバシー法に準拠するためのポリシーの構築に多大な努力を注いできました。私たちのデータ収集アプリは、技術的懸念の大部分に対処し、データプライバシーと情報セキュリティの準備が整い、大きな進展の段階に達しています。すでに25万人以上の患者のデータを収集し、AIを活用して解決策を構築しています。期限はなく、資金提供、ボランティアサービス、臨床データ収集を提供できるパートナーを常に歓迎しています。',
                },
              ],
            },
          ],
        },
        {
          question: '他のプロジェクトと比べて、Virufyの特長は何ですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '若い組織であり、多様でグローバルなチームは25以上の大学の卒業生で構成されており、業界トップレベルの専門家に導かれています。私たちの多分野にわたるチームは、法律、機械学習、医学、情報セキュリティ、モバイルアプリ開発の専門知識を持っています。また、One Young Worldネットワークを活用して、各国の信頼できるパートナーと連携しています。誰もが参加を歓迎し、501(c)(3)非営利団体として、ボランティアを受け入れることができます。ボランティアによって運営されているため、独立しており、官僚的な制約が少ないのです。',
                },
              ],
            },
          ],
        },
        {
          question:
            'Virufyプロジェクトの実現のためにどのくらいの投資が行われましたか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '1,000人以上のボランティアが、数千時間をかけてこのプロジェクトを可能にしました。電子メール、ストレージ、メッセージングプラットフォームなど、いくつかの企業が無料でソフトウェアを提供してくれましたが、ビデオ会議やプロジェクト管理ツールの一部は無料ではなく、創設者アミルの限られた貯蓄から支払われています。私たちが成功すれば、クラウドコンピュートコストが増加する可能性がありますが、助成金や寄付、政府支援を得てシステムを運営し続けることができると信じています。',
                },
              ],
            },
          ],
        },
      ],
      AIについて: [
        {
          question: 'COVID-19の咳はなぜ識別可能なのですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '他の呼吸器疾患と同様に、COVID-19は喉や肺を損傷し、咳のパターンに検出可能な違いを生じさせます。そのため、咳音を分析してCOVID-19やその他の上気道疾患を検出することができます。このアイデアは、カーネギーメロン大学（CMU）、MIT、ケンブリッジ大学を含むいくつかの著名な機関によって積極的に研究されています。たとえば、ケンブリッジ大学の研究では、単純なバイナリ機械学習分類器が呼吸音と咳音を用いて高い精度でCOVID-19陽性患者を分類できることが示されました。同様に、CMUの研究者たちは、COVID-19陽性患者を区別する18の声の特徴を特定し、高精度でCOVID-19を検出する学術モデルを訓練しました。',
                },
              ],
            },
          ],
        },
        {
          question:
            'データの収集と処理における主な困難は何でしたか？たとえば、ある地域ではAIの精度が低かったことはありますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '病院からデータを収集する場合、臨床研究フォームやIRBの承認が必要であり、そのプロセスは遅くて煩雑です。ハーバード大学やスタンフォード大学の医療顧問を含むさまざまな医療専門家の監督のもと、5か国で25万人以上の患者を臨床研究に登録しました。ユーザーから直接データを収集する際には、プロボノの専門弁護士と協力して、LGPD、GDPR、CCPAなどのデータプライバシー法に準拠するために多大な努力を払いました。私たちの研究論文で説明されているように、データ処理において見つかった困難の一部には、過度の背景雑音やユーザーによって提出された不正確な咳音録音が含まれており、これによりAI開発者がオーディオサンプルを手動でクリーニングする必要がありました。',
                },
              ],
            },
          ],
        },
        {
          question: '無症候性感染は検出可能ですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'はい、MITや他のグループの研究により、無症候性感染の検出が確認されています。特に20代や30代の人々にとって重要です。彼らは無症状である可能性が高いからです。',
                },
              ],
            },
          ],
        },
        {
          question:
            'アプリは第三者によって開発されたAIを使用しますか？それとも、この目的のために作成されたものですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufyは独自のAI研究チームと特許技術を有しています。また、他の研究グループからのAIアルゴリズムの共同開発や統合、コラボレーションに対しても積極的に取り組んでいます。',
                },
              ],
            },
          ],
        },
      ],
      財務: [
        {
          question: '咳の寄付には金銭的な負担は必要ですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufyは現在、特定の国でのみ咳を収集しており、該当国はアプリで確認できます： ',
                },
                {
                  type: 'link',
                  text: 'https://virufy.org/app',
                  href: 'https://virufy.org/app',
                },
                {
                  type: 'text',
                  text: '。',
                },
              ],
            },
          ],
        },
        {
          question: '咳の症状がない場合でも咳を寄付できますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'はい、意図的な咳にもアプリは対応しています。',
                },
              ],
            },
          ],
        },
        {
          question: 'これまでに何人のドナーがいましたか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '南米や南アジアを中心に、10か国以上から5,000件以上の咳音録音があります。その一部は臨床的なものであり、他のものはアプリを通じて個人が直接提供したものです。',
                },
              ],
            },
          ],
        },
        {
          question: '組織の運営費はどのくらいですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '現在、私たちは完全にボランティアによって運営されています。主な予算の必要項目は、咳データ収集のためのマーケティングと臨床研究です。また、将来的にユーザー基盤が大規模になった際には、計算処理のための資金も必要となります。',
                },
              ],
            },
          ],
        },
        {
          question:
            'チームは資金提供を受けていますか？もし受けている場合、それはどのくらいで、どのように使われますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '私たちは、501(c)(3)のステータスを活用して、R&D助成金を申請するために複数の大学と提携しています。',
                },
              ],
            },
          ],
        },
      ],
      プライバシー: [
        {
          question: 'Virufyはどのようにして私のデータを安全に保管しますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '研究データ収集のためにAmazon Web Services（AWS）を使用しています。AWSはデータを安全なアプリケーション内に保存し、アクセスを制限します。データは私たちがダウンロードするまでAWSに保存されます。その後、制限されたアクセスを持つデータベースに保存されます。AWSがあなたのデータをどのように保護しているかについて詳しく知りたい場合は、AWSのプライバシーポリシーを参照してください： ',
                },
                {
                  type: 'link',
                  text: 'https://aws.amazon.com/en/privacy',
                  href: 'https://aws.amazon.com/en/privacy',
                },
                {
                  type: 'text',
                  text: '。詳細については、Virufyのプライバシーポリシーをご参照ください。',
                },
              ],
            },
          ],
        },
        {
          question:
            'Virufyに咳を寄付したときにプライバシーが侵害されるリスクはありますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '私たちの誇れる法務および情報セキュリティチームは、あなたのプライバシーに関する潜在的なリスクや脅威に対処するため、DPIA（データ保護影響評価）を開発しました。あなたの個人データは、識別できない形式で匿名化され、制限されたアクセスを持つ安全なデータベースに保存されます。詳細については、Virufyのプライバシーポリシーを参照してください。',
                },
              ],
            },
          ],
        },
        {
          question:
            'Virufyにはプライバシーポリシーとクッキーポリシーがありますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'Virufyはあなたの個人情報のプライバシーと保護を真剣に考えています。私たちの法務チームは、ウェブサイトの利用、咳の寄付研究への参加、問い合わせ、ボランティア申請を通じて提供された個人情報を保護するための詳細なプライバシーポリシーとクッキーポリシーを作成しました。',
                },
              ],
            },
          ],
        },
        {
          question: '私のデータは第三者と共有されますか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'あなたが連絡先情報（メールアドレスや電話番号）を私たちと共有することを選択した場合、これらの個人を特定できる情報を第三者と共有することはありません。ただし、COVID-19パンデミックや将来の感染症の拡散を止めるためのグローバルな研究活動を促進させるために、咳音などの匿名化された情報を第三者と共有することがあります。詳細は、私たちのプライバシーポリシーやデータ収集研究の同意書に記載されています。',
                },
              ],
            },
          ],
        },
      ],
      その他: [
        {
          question: 'Virufyをさらに支援するにはどうすればいいですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'relative-link',
                  text: '採用',
                  href: '/job-listing',
                },
                {
                  type: 'text',
                  text: 'ページで詳細を確認し、私たちのチームに参加することが可能です。また、GoFundMeでの支援も可能です。パートナーシップについてのお問い合わせも受け付けています。',
                },
              ],
            },
          ],
        },
        {
          question:
            'アプリの配布はどのように行われ、Virufyはどのように広がる予定ですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: 'アプリは低所得国の人々の利益のために提供され、急速に広がる可能性があります。',
                },
              ],
            },
          ],
        },
        {
          question: '他に質問がある場合はどうすればよいですか？',
          answer: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: '詳細については、プライバシーポリシー、クッキーポリシー、およびデータ収集アプリに組み込まれている同意書をご覧ください。データ収集研究に関連する質問については、 ',
                },
                {
                  type: 'link',
                  text: 'study@virufy.org',
                  href: 'mailto:study@virufy.org',
                },
                {
                  type: 'text',
                  text: 'にメールでお問い合わせください。データ関連の質問は、 ',
                },
                {
                  type: 'link',
                  text: 'open-data@virufy.org',
                  href: 'mailto:open-data@virufy.org',
                },
                {
                  type: 'text',
                  text: 'までご連絡ください。その他の問い合わせについては、 ',
                },
                {
                  type: 'link',
                  text: 'info@virufy.org',
                  href: 'mailto:info@virufy.org',
                },
                {
                  type: 'text',
                  text: 'にお問い合わせください。',
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export default faq;
