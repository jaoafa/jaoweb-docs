---
title: WorldEditCUIの導入解説【1.16.5・Forge版】
description: WorldEditの選択範囲を可視化できる「WorldEditCUI」の導入方法と、簡単な使用方法を解説します。
category: modification
author: ekipa
createdAt: 2018-05-02
updatedAt: 2021-04-21
---

## WorldEditCUIとは？

このModを導入すると、以下のようにWorldEditで選択した範囲を可視化することができます。

![範囲選択のイメージ画像](https://storage.jaoafa.com/5f16806d5de1fa1ff90bdd17557cac61.jpg)

jao Minecraft Server では、Modを導入していない方でも選択範囲が表示されるように設定されていますが、一定のブロック数を超えると表示されなくなったりします。なので、Modの導入をおすすめしています。

## 解説環境

- Windows10
- Minecraft JavaEdition 1.16.5
- Java 1.8.0_291
- Minecraft Forge 1.16.5 36.0.58
- WorldEditCUI Forge Edition 3 1.16.5 3.0.9

## 導入までの手順

### 1. Forgeを導入する

既に導入されている方はこの項は必要ありません。

前提ModとなるForgeの導入してください。詳しい導入方法は、以下の記事で解説しています。

- ~~[Forgeの導入解説【1.16.5版】](/blog/forge-commentary)~~  
 申し訳ございませんが、記事は1.12版から1.16版への移行作業中のため閲覧できません。移行完了までもうしばらくお待ち下さい。

### 2. WorldEditCUIをダウンロードする

[こちらのページ](https://www.curseforge.com/minecraft/mc-mods/worldeditcui-forge-edition-3/files/3191632) にアクセスし、「**Download**」をクリックしてください。するとファイルのダウンロードが始まります。

![WorldEditCUIのダウンロードページ](https://storage.jaoafa.com/f7271de2295aaeefe57cad0d291a8b71.png)

### 3. Minecraftのフォルダを開く

「**Windowsキー**」(Windowsのロゴや"スタート"と書かれているキー)と「**Rキー**」を同時に押してください。  
すると「ファイル名を指定して実行」と表示されるので「`%appdata%\.minecraft`」と入力して「OK」をクリックしてください。すると`.minecraft`というフォルダが表示されます。その中から自分がModを入れたいバージョンのファイル(ここでは`1.16.5`)を選び、その中にある「**mods**」を開いてください。

ゲームディレクトリを分けていない場合は`.minecraft\mods`に配置することになりますが、ここにたくさんModを入れると不具合の原因となりますのでおすすめしません。~~ディレクトリの分け方は[こちら](/blog/setting-gamedirectory)で解説しています。~~

![ファイル名を指定して実行する](https://storage.jaoafa.com/eb9dc3e5262f98e8933f2331c1635d90.png)

### 4. ファイルを移動させる

さっきの方法で開いたフォルダに、ダウンロードしたWorldEditCUIのファイルを移動させます。  

![ダウンロードしたファイルを配置する](https://storage.jaoafa.com/0712b625bf6ad316b73485bf9b34e246.png)

### 5. 導入に成功しているか確認する

実際にMinecraftを起動し、タイトル画面にある「**Mod**」をクリックしてください。  
左側に「WorldEdit CUI Forge Edition 3」の表示があれは導入に成功しています！

![WorldEditCUIが導入されているかどうか確認](https://storage.jaoafa.com/c991ec7fdc0e77fbc2cab3d34a690e61.png)

## 実際に使ってみる

当サーバで、WorldEditの使用は[Verified権限](/server/policies/permissions#Verified)からとなっています。

今回の解説では、**わかりやすくするためにクリック動作をする部分を各種コンクリートブロックにしていますが、実際に使用する場合はコンクリートブロックを置く必要はなく、既存のブロックを木の斧でクリックするだけで動作します。**

### 単純な範囲指定をする(2点指定式)

![WorldEditの範囲選択(2点指定式)](https://storage.jaoafa.com/5f16806d5de1fa1ff90bdd17557cac61.jpg)

画像の「<span style="color: mediumseagreen;">緑のコンクリートブロック</span>」を木の斧で**左クリック**(First position)、「<span style="color: red;">赤のコンクリートブロック</span>」を木の斧で**右クリック**(Second position)すると、画像のように赤い線で範囲指定された範囲が視覚的に確認できます。  
「`//sel`」コマンドを実行すると、選択範囲の情報と範囲の表示が消えます。

### 複雑な範囲指定をする(ポリゴン指定式)

![WorldEditの範囲指定(ポリゴン指定式)](https://storage.jaoafa.com/834faf45b98fdb6178ca9d357a557b99.jpg)

画像のように複雑な範囲指定をする場合は、「`//sel poly`」とコマンドを入力したあと、「<span style="color: red;">赤のコンクリートブロック</span>」を木の斧で**左クリック**し、その後他の「<span style="color: mediumseagreen;">緑のコンクリートブロック</span>」を木の斧で**右クリック**していけば、画像のように視覚的に確認できます。

Y軸にも範囲指定をする場合は、最初の「<span style="color: red;">赤のコンクリートブロック</span>」の位置を上下させてY軸を調整してください。  
通常の2点指定式に戻す場合は「`//sel cuboid`」とコマンドを入力してください。

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への**一切の責任を負いません。** 何かを試したり、やってみたりするときには必ず「**自己責任**」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](/blog/join-discord)の`#question`チャンネルにて質問してみましょう。
