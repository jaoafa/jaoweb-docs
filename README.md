# jaoweb-docs

[jao Minecraft Server](https://jaoafa.com) articles repository.

## プレビュー

- mainブランチ: [https://jaoweb.tomacheese.com/](https://jaoweb.tomacheese.com/)

## 編集の仕方

[運営向け解説記事はこちら](https://adminwiki.jaoafa.com/secret/website)

基本的には、ヒラタケが書いている[sample.md](https://github.com/jaoafa/jaoweb/blob/master/content/blog/sample.md)が非常に参考になるので是非参考にしてください。

## 運用方針について

運営メンバーの非開発者に掛かる負担をなるべく軽減し、活発的にWebサイトの編集に取り組んでもらうため、分かりやすく・簡単に編集できることを心掛けます。  
このため、以下の軽い制約を設けます。

### ブランチについて

Gitにはブランチという編集(開発)する場所を一時的に分ける機能があります。  
しかし、この機能はGitをあまり利用しないユーザには理解しにくい機能であるため、知識のあるユーザのみ利用してください。  
もちろん、検索等し知識を得て利用する分にはなんら構いません。むしろコンフリクトなどのことを考えると本来は利用すべきであると考えます。

### プルリクエスト・Issue・Discussionsについて

プルリクエスト・Issue・Discussionsは随時受け付けています。ただし、必ず対応する保証はありません。

## 編集サポートについて

執筆・読みやすさの手助けとなるよう、MarkdownLintとTextLintを導入しています。  
それぞれMarkdownLintは[.markdownlint.json](.markdownlint.json)、TextLintは[.textlintrc](.textlintrc)で規定しています。

Visual Studio Codeの場合、以下の拡張機能でそれぞれのLintの恩恵を受けられます。他に良い拡張機能があるならそれでも構いません。

- MarkdownLint: [davidanson.vscode-markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- TextLint: [taichi.vscode-textlint](https://marketplace.visualstudio.com/items?itemName=taichi.vscode-textlint)
  - Node.jsが必要です。少し難易度高め
  - 導入方法参考文献: [textlint と VS Code で始める文章校正 - Qiita](https://qiita.com/takasp/items/22f7f72b691fda30aea2)

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
- 方針 [運営として・運営がこれこれこうしたいという形を示したもの] (`/server/policys/*`)
  - プライバシーポリシー
  - 各種処罰方針: この場合にこういった処罰を行う・免責事項
  - 権限 (名前検討)
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

基本的に、jao Minecraft Serverとして公開している記事・情報でありこれを無闇に転用・複製されることは妥当ではないとして、ForkなどGitHubの利用規約上制約のある一部を除き **「著作権者が全ての権利を留保する」、All rights reservedを適用します。**  
つまり、jao Minecraft Server運営メンバー以外の利用者は当リポジトリおよび`jaoafa.com`上で公開している情報に対して、法的上の著作権利を全て保有し一部の例外を除き転用や複製などを全て禁止します。

GitHubというオープンソースホスティングサイトというサービスである以上、この方針がそれにそぐわないことは理解しています。しかしながら、開発者、運営メンバー及び利用者の負担や使用利便性の観点から考えた際、これが現時点で妥当な策であり、このようなライセンスを設定してでも適当であると判断しました。
