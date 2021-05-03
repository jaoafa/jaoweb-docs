---
title: Forgeの導入解説【1.16.5版】
description: 様々なModの前提Modとなる「Minecraft Forge」の導入方法を1.16.5環境で解説します。
category: modification
author: ekipa
image: https://storage.jaoafa.com/5aa42e5d871f5287311d4fe055c003d1.png
createdAt: 2021-05-03
updatedAt: 2021-05-03
---

この記事では、様々なModの前提Modとなる「**Minecraft Forge**」の導入方法などを解説します。

## 解説環境

- Windows 10
- Minecraft Version 1.16.5
- Java 1.8.0_291
- Minecraft Forge 1.16.5 36.1.0

## 導入までの手順

### 1. Forgeをダウンロードする

[こちらのページ](https://files.minecraftforge.net/net/minecraftforge/forge/) にアクセスし、ダウンロードしたいバージョン(ここでは1.16.5)を選択してください。(①)

ここで、同じバージョンでも「Latest」と「Recommended」と2つの種類があることが分かります。これは「最新版」「安定版」を表しています。  
ここではバグの少ない「Recommended (安定版)」をダウンロードします。「**Installer**」をクリックしてください。(②)

![Forgeのダウンロードサイト](https://storage.jaoafa.com/ec8c2a83c1f412c6a6049026316bd0df.png)

すると、画面が切り替わり広告が表示されますが、**3秒間待つ**と右上に「**SKIP**」というボタンが表示されるので、クリックしてください。

<span style="color: #999999;">※このとき、誤って広告や他のボタンをクリックしないように気をつけてください！</span>

![広告をスキップ](https://storage.jaoafa.com/5ad9c4f34ff8683e584f898490789799.png)

ダウンロードの途中で以下のような画面が表示された場合は、そのまま「**保存**」をクリックしてダウンロードを続行してください。

![ダウンロードを続行する](https://storage.jaoafa.com/c99facab0174244db0863e3e4c528e30.png)

### 2. Forgeをインストールする

ダウンロードしたファイルをダブルクリックで開きます。

![インストーラーを起動する](https://storage.jaoafa.com/5f1f7cca1010f271532ee8b987d13d54.png)

すると、Forgeのインストーラーが起動するので「**Install client**」にチェックが入っていることを確認して「**OK**」をクリックしてください。

![インストールを開始する](https://storage.jaoafa.com/090c0bd153ff1acc44d296a1540cc402.png)

以下のように「**Successfully installed client profile forge for version forge...**」と表示されたら成功です。

![インストール完了のメッセージ](https://storage.jaoafa.com/6e4614d09bec8855846ece0cc9467e87.png)

### 3. プロファイルを設定する

Minecraftのランチャーを開き、「**起動構成**」をクリック、新規に作成された「**Forge**」というプロファイルをクリックしてください。

![起動構成を開く](https://storage.jaoafa.com/3795122daceb549a53c51a62811369ef.png)

プロファイルを開くと、以下のような設定画面が出てくるので、色々設定してみましょう。

ここで1番やってもらいたいのは、ゲームディレクトリの設定です。私の場合は「.minecraft」内に「game-directory」というフォルダを作成し、その中にゲームディレクトリを設定しています。ここでは`\.minecraft\game-directory\1.16.5`に配置しました。

こうすることによって、ゲームのデータが保存される場所を分けることができます。

作業が完了したら、右下にある「**保存**」をクリックしてください。

![起動構成の編集画面](https://storage.jaoafa.com/dcaebc1ab1ca0bf6dc3629c23a625476.png)

### 4. Minecraftを起動する

左上の「**プレイ**」をクリック(①)し、起動するバージョンを選択(②→③)してください。そうしたらMinecraftを起動(④)してみましょう。  
正常に起動し、タイトル画面の左下に「**Minecraft Forge...**」の表記があれば導入は完了です。

![Minecraftを起動する](https://storage.jaoafa.com/83f83c42f5ef65fc48b700ca0b3eca16.png)

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への一切の責任を負いません。 何かを試したり、やってみたりするときには必ず「自己責任」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](/blog/join-discord)の`#question`チャンネルにて質問してみましょう。
