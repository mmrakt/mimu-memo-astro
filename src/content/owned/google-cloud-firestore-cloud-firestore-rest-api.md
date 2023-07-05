---
title: google-cloud-firestore-cloud-firestore-rest-api
pubDate: 2022-01-01
---

NextAuth を使ってログイン処理を行う時に firestore の REST API を呼び出して firestore にログイン情報を登録させる方法を試してみた。

Cloud Firestore REST API の公式ドキュメントは以下。
[Cloud Firestore REST API を使用する](https://firebase.google.com/docs/firestore/use-rest-api?hl=ja)

今回は公式にも記載のあった[`@google-cloud/firestore`](https://www.npmjs.com/package/@google-cloud/firestore) という Node.js 用のクライアントライブラリを使用した。

まずはライブラリをインストールし、 Quickstart の手順に従い以下の流れで準備を行う。
[Quickstart](https://www.npmjs.com/package/@google-cloud/firestore#quickstart)

①プロジェクトの選択
②Cloud Firestore API の有効化
③サービスアカウント作成、キーの登録とダウンロード

とりあえず最小構成でいいので API を試してみる。

`hoge.js`

```js
const Firestore = require('@google-cloud/firestore')
const firestore = new Firestore()

const document = firestore.doc(`users/hoge`)
document.set({
  email: 'hoge@gmail.com',
})
```

ダウンロードしたキーファイルのパスを環境変数に指定して実行。

```sh
$ GOOGLE_APPLICATION_CREDENTIALS=***.json node hoge.js
```

すると無事 firestore への保存が成功した。

次に NextAuth のログイン処理時に API を叩くよう実装してみる。
参考：[Callbacks](https://next-auth.js.org/configuration/callbacks)
ほぼコピペだがこんな感じ。

```js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { Firestore } from "@google-cloud/firestore";

const firestore = new Firestore();

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const document = firestore.doc(`users/${user.id}`);
      await document.set({
        email: email,
      });
      return true;
    },
  },
});
```

これで早速ログイン処理を実行してみると、、エラーが返ってきた。

デバッグしてみると、 `signIn()`の引数の`email`にはユーザーのメールアドレスが入ってるものかと勝手に思いこんでいたが、実は bool が入っていた。

以下のように修正することで無事メアドも取れるようになった。

```js
async signIn({ user, account, profile, email, credentials }) {
    const document = firestore.doc(`users/${user.id}`)
    await document.set({
        email: user.email,
    })
    return true
},
```
