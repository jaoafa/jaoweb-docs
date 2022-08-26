# jaoweb-docs

[jao Minecraft Server](https://jaoafa.com) で公開されているページ・記事を管理するリポジトリです。

## プレビュー

- main ブランチ: [https://dev.jaoafa.com/jaoweb/jaoafa/main/](https://dev.jaoafa.com/jaoweb/jaoafa/main/)

`https://dev.jaoafa.com/jaoweb/<USER>/<BRANCH>/` に配置されます。  
プルリクエストの場合は `https://dev.jaoafa.com/jaoweb/jaoafa/pulls/<PR-NUM>` に配置されます。  
コミットが作成されてプッシュされたとき・プルリクエストが作成されたときと更新されたときにプレビューが作成されます。

## 編集の仕方

基本的には、ヒラタケが書いている [sample.md](https://github.com/jaoafa/jaoweb/blob/master/content/blog/sample.md) を是非参考にしてください。

## 運用方針について

運営メンバーの非開発者に掛かる負担をなるべく軽減し、活発的に Web サイトの編集に取り組んでもらうため、分かりやすく・簡単に編集できることを心掛けます。  
このため、以下の軽い制約を設けます。

### フォーク・ブランチについて

運営メンバーを含め、リポジトリを自身のユーザー下にフォークし、作業ごとにブランチを作成することをお勧めします。

### プルリクエスト・Issue・Discussions について

プルリクエスト・Issue・Discussions は随時受け付けています。ただし、必ず対応する保証はありません。  
コードオーナーである @Hiratake と @book000 が、自動的にレビュアーとして指定されます。またマージを行うには 1 人以上の承認レビューが必要です。

## 編集サポートについて

執筆・読みやすさの手助けとなるよう、MarkdownLint を導入しています。  
MarkdownLint は [.markdownlint.json](.markdownlint.json) で規定しています。

Visual Studio Code の場合、以下の拡張機能でそれぞれの Lint の恩恵を受けられます。他に良い拡張機能があるならそれでも構いません。

- MarkdownLint: [davidanson.vscode-markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## ナビゲーションバー（ファイル分け）

### サーバ情報

- はじめての方へ (`/server/beginners`)
  - （適するプレイヤー・年齢）
- 運営者情報 (`/server/profiles`)
- サービス仕様 (`/server/specifications.md`)
  - 一括破壊系 Mod + 使える Mod・使えない Mod
  - ログイン関連: サーバアドレス、バージョン、ステータス
  - ゲームモード
  - プラグインによる独自仕様
  - 時間による再起動
  - 主なコマンドの一覧
  - 権限・権限グループ
  - 投票仕様（初ログイン・24 日制限）
  - 日本オンリー
  - Dynmap
- サーバルール [ユーザーに対して・この鯖ではこれを守らなければなりませんよ] (`/server/rules/*`)
  - サーバルール `index.md`
    - 現行のサーバルールコピペ
    - サービス再利用の禁止
    - clubjaoafa
    - Mod について
      - Mod の使用可能・不可
  - 公式 Discord サーバ利用ルール
    - Discord サーバにおける利用条件・遵守事項・禁止事項・免責事項
- ガイドライン [ユーザーに対して・サーバルールや利用規約を守るとこうなるよね] (`/server/guidelines/*`)
  - チャットに関するガイドライン: 日本語入力 Mod・性的発言・宣伝
  - 迷惑行為の対応に関するガイドライン: 荒らし等の対応
  - 撮影・動画配信に関するガイドライン
  - 鉄道・道路敷設に関するガイドライン
  - 自治体に関するガイドライン
  - トラブルについて
- 方針 [運営として・運営がこれこれこうしたいという形を示したもの] (`/server/policies/*`)
  - プライバシーポリシー
  - 各種処罰方針: この場合にこういった処罰を行う・免責事項
  - 権限付与方針(仮称)
  - 運営業務と現実
  - 不当に権力を扱う場合の阻止（議決関連含）
  - 寄付受け付けない方針
  - 運営にあたる免責事項

### ブログ（説明記事とか）

- Discord: 参加方法
- Mod: 導入解説
- 自治体: 各種申請方法
- Minecraft 基本解説
- 細かいコマンドの解説
- 投票の方法解説

### コミュニティ

- ユーザー一覧
- Wiki
- Discord

### お問い合わせ

- お問い合わせ
- よくあるご質問 FAQ

### ※削除

- サーバの歴史
- 定期総会
- 部活動概念自体（あくまで Admin・Moderator のみに）
  - 公式からの概念公表は消す。Wiki での「こんな概念が昔ありましたよ」だけ
- 非公式コミュニティ（書くなら利用規約）

## ライセンスについて / License

©︎ 2020 jao Minecraft Server. All right reserved.

基本的に jao Minecraft Server として公開している記事・情報であり、これを無闇に転用・複製されることは妥当ではないと考えています。よって、Fork など GitHub の利用規約上制約のある一部を除き **「著作権者が全ての権利を留保する」、All rights reserved を適用します。**  
つまり、jao Minecraft Server 運営は当リポジトリおよび `jaoafa.com` 上で公開している情報について、法的上の著作権利を全て保有するものとし、それ以外の利用者に対しては一部の例外を除き転用や複製などを全て禁止します。

GitHub というオープンソースホスティングサイトというサービスで公開している以上、この方針がそれにそぐわないことは理解しています。しかしながら、開発者、運営メンバー及び利用者の負担や使用利便性の観点から考えた際、これが現時点で妥当な策であり、このようなライセンスを設定してでも適当であると判断しました。
