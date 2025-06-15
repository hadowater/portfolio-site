// src/data/works.js

export const works = [
  {
    id: "portfolio",
    title: "松葉貴史のポートフォリオ",
    image: "@/assets/works/portfolio/thumb.jpg",
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
    image: "@/assets/works/work1/thumb.jpg",
    url: "https://www.melonbooks.info/special/service/start/",
    part: "デザイン、コーディング",
    tools: ["Adobe Illustrator", "HTML/CSS/JQuery"],
    period: "2018年8月～9月（約1ヶ月）",
    description: '通販サイトを始めて利用されるお客様に向けて、会員登録のベネフィットを発信するためのページ。',
    target: '株式会社メロンブックスでは男性向けと女性向けでそれぞれ異なったブランドを使い分けており、それぞれの利用者がはじめて閲覧することを想定。',
    points: ["通販サイトを訪れた人が初めて目にするページということで、シンプルで親しみやすい事を第一に考えてデザインしました。","特定のブランドの色を出さないよう、コーポレートカラーやキャラクターイラストの使用は控え、白と黒をベースカラー・メインカラーに据え、アクセント的に初心者マークの緑と黄色を使用しています。","特に各機能・サービスの項目は一目で分かりやすい事を目的に、単色のシルエットデザインを採用。","各シルエットはロイヤリティーフリーの素材を組み合わせ作成しました。","デザインパターンを3種、パターン決定後にカラーバリエーションを15種作成し、会議によってデザインを最終決定。"]
  }


];
