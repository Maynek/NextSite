//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
import Link from 'next/link'

export default function About() {
  return (
    <>
      <h1 className="font-bold text-3xl mb-4">このサイトについて</h1>
      <p>Ada Maynek が執筆している Web 小説 を公開するためのサイトです。</p>
      <br />
      <br />
      <h1 className="font-bold text-3xl mb-4">プライバシーポリシー</h1>
      <h2 className="font-bold text-2xl mb-4">アクセス解析ツールについて</h2>
      <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
    </>
  );
}
