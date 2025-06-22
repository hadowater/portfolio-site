// src/data/works.js

export const works = [
  {
    id: "portfolio",
    title: "松葉貴史のポートフォリオ",
    screenshots: [
      new URL("@/assets/works/portfolio/screenshot.jpg", import.meta.url).href
    ],
    url: "https://matsuba-portfolio.netlify.app",
    part: "デザイン、コーディング",
    tools: ["Vue 3 / Vite / Vue Router / SCSS / Visual Studio Code / Figma / Github / Netlify"],
    period: "2025年6月（約1週間）",
    description: '自身のポートフォリオを整理・公開するために制作したシングルページアプリケーション。Vue 3 と Vite による高速な開発環境を活かし、各作品の詳細ページへの遷移も含めて、スムーズなユーザー体験を実現している。',
    target: '採用担当者や制作関係者など、自身の実績をわかりやすく確認したいユーザーを想定。',
    points: ["Vue 3 + Vite + Vue Routerを活用し、軽量かつ拡張性の高いSPA構成を採用。今後の作品追加や機能拡張が容易な設計にした。","データ構造はworks.jsで一元管理し、v-forとルーティングを組み合わせて個別ページを自動生成できる仕組みを構築。","SCSSのmixin設計でレスポンシブ対応を効率化し、スマホ対応も考慮した設計を実現。","Github管理＋Netlify自動デプロイにより、更新時はgit pushのみで即時公開できるCI/CD運用を構築。"]
  },
  {
    id: "work1",
    title: "はじめてご利用されるお客様へ",
    screenshots: [
      new URL("@/assets/works/work1/screenshot.jpg", import.meta.url).href
    ],
    url: "https://www.melonbooks.info/special/service/start/",
    part: "デザイン、コーディング",
    tools: ["Adobe Illustrator", "HTML / CSS / JQuery"],
    period: "2018年8月～9月（約1ヶ月）",
    description: '通販サイトを始めて利用されるお客様に向けて、会員登録のベネフィットを発信するためのページ。',
    target: '株式会社メロンブックスでは男性向けと女性向けでそれぞれ異なったブランドを使い分けており、それぞれの利用者がはじめて閲覧することを想定。',
    points: ["通販サイトを訪れた人が初めて目にするページということで、シンプルで親しみやすい事を第一に考えてデザインしました。","特定のブランドの色を出さないよう、コーポレートカラーやキャラクターイラストの使用は控え、白と黒をベースカラー・メインカラーに据え、アクセント的に初心者マークの緑と黄色を使用しています。","特に各機能・サービスの項目は一目で分かりやすい事を目的に、単色のシルエットデザインを採用。","各シルエットはロイヤリティーフリーの素材を組み合わせ作成しました。","デザインパターンを3種、パターン決定後にカラーバリエーションを15種作成し、会議によってデザインを最終決定。"]
  },
  {
    id: "mailmagazine",
    title: "メールマガジンのテンプレート作成",
    screenshots: [
      new URL("@/assets/works/mailmagazine/screenshot1.jpg", import.meta.url).href,
      new URL("@/assets/works/mailmagazine/screenshot2.jpg", import.meta.url).href
    ],
    url: "",
    part: "デザイン、コーディング、運用ルール策定、運用",
    tools: ["Adobe Illustrator", "HTML / CSS","CSS Inliner"],
    period: "2018年12月（約2週間)",
    description: 'メールマガジンのテンプレート作成、運用ルール策定',
    target: 'メロンブックス通販のお客様に向けて定期的に送信し、キャンペーンやイベント情報、注目アイテムなどを紹介し、売上につなげることを目的としたメールマガジン。',
    points: [
      "社内より、従来テキストメールとして送信していたメールマガジンを、リッチなHTMLメールにしたいとの依頼があり、私がテンプレートを作成しました。",
      "デザインを作るにあたってはシンプルかつ軽量で、狭めの画面の中で画像を大きく見せることを意識。商品画像2つ横並びのレイアウトや、ランキング形式のレイアウトなど、様々な形式のコンポーネントを作成。",
      "　",
      "HTMLメールの作成は初挑戦で、「メール」ならではの縛りのある環境に戸惑いつつも、楽しんで制作していたことをよく覚えています。",
      "・styleタグやscriptタグが使えないため、タグ内のstyle属性にてインラインスタイルで記載。",
      "・メールクライアント側が標準的なタグやstyleプロパティをサポートしていないことがあるため、基本はテーブルレイアウトを使用し、比較的新しいプロパティも使用を控える。",
      "・相対パスは使用できないため画像やリンクは必ず絶対パスで記載。",
      "・容量制限が厳しいため、画像を多用する際は必ず軽量化処理を施す。",
      "・画像が表示されない場合でも代替テキストになるためALTタグの記載を徹底。",
      "",
      "などのテンプレート作成と運用ルールを策定し、チーム内で運用していました。"]
  },
  {
    id: "recruit",
    title: "求人ページ",
    screenshots: [
      new URL("@/assets/works/recruit/screenshot1.jpg", import.meta.url).href,
      new URL("@/assets/works/recruit/screenshot2.jpg", import.meta.url).href
    ],
    url: "",
    part: "コーディング",
    tools: ["Adobe Illustrator", "HTML / CSS / JQuery"],
    period: "コーディング作業に約1週間",
    description: '株式会社メロンブックスの社員・アルバイト求人募集ページ',
    target: 'メロンブックスでの仕事に興味を持ってくれた方に向けて作成',
    points: [
      "求人ページを一新したいとの依頼があり制作。デザイン担当の方が専門がWebデザイナーでは無かったため、自分と技術的な相談をしつつデザインを進めていただきました。",
      " ",
      "頻繁に更新が入り、自分以外の人がコードを触ることが予想されるため、一目見て更新しやすいようにHTMLの構造をシンプルに、コメントを多く入れることを心がけました。",
    ]
  },
  {
    id: "libera",
    title: "学習塾HPに使用する似顔絵",
    screenshots: [
      new URL("@/assets/works/libera/screenshot.jpg", import.meta.url).href,
    ],
    url: "https://kmidlibera.com/results/",
    part: "イラスト",
    tools: ["CLIP STUDIO PAINT"],
    period: "2022年7月（約1ヶ月）",
    description: '知り合いの学習塾経営者から、新規にホームページを立ち上げるため、合格体験記に載せる似顔絵の依頼を受けて制作',
    target: 'これから入塾を考える生徒さん達、何より似顔絵を描かせていただいた子に喜んでもらえたらいいなという思いで制作',
    points: [
      "学習塾を経営している知り合いの方から似顔絵の依頼を受け、生徒さんの写真をいただいて合計5枚制作。",
      "依頼の方針としては「似ているかももちろんだが、かわいくしてあげて欲しい」とのこと。",
      "普段描いているアニメ調イラストとは毛色の違う似顔絵というジャンルでの仕事で緊張したが、私に依頼をくれた理由というものを考えた時、あまりリアル調に寄りすぎないよう、とは言えアニメ調にも寄せすぎないようにバランス感に気をつけ制作しました。"

    ]
  },
  {
    id: "wordpress",
    title: "Wordpressのテーマ作成課題",
    screenshots: [
      new URL("@/assets/works/wordpress/screenshot.jpg", import.meta.url).href,
    ],
    url: "http://sashc.xsrv.jp/",
    part: "WordPressテーマのカスタマイズ、デプロイ（Xserverへのアップロード）、パーマリンク設定、テンプレート修正。",
    tools: ["Visual Studio Code / WordPress / Xserver / Google Chrome / PHP / Git（簡易的に利用）"],
    period: "2025年5月（約1週間）",
    description: '職業訓練の講義内容に従い、WordPressの仕組みを理解することを目的に、既存テーマをベースにオリジナルの外観・構成へカスタマイズし、実際にXserver上に公開しました。記事一覧ページ・個別ページのテンプレート構造を学びながら、CSS設計やパーマリンクの動作などのWordPress特有の挙動も確認しました。',
    target: 'ブログ形式で情報を発信したい個人クリエイターや、小規模事業者のサイト運営を想定。',
    points: [
      "投稿一覧ページ（/news/）や個別記事のテンプレート表示がうまくいかない場面で、テーマのindex.phpが404専用の構造になっていることに気づき、WordPressのテンプレート階層とループ処理を学びながら修正しました。また、パーマリンク設定やスラッグの扱いで記事が表示されない原因も調査・修正するなど、エラー解決のプロセスも含めて理解を深めました。"

    ]
  }


];
