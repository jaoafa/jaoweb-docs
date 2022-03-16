---
title: Fabricの導入解説
description: 様々なModの前提ローダーとなる「Fabric」と Fabric Mod「Fabric API」、「Mod Menu」の導入方法を解説します。
category: modification
author: tomachi
createdAt: 2022-03-16
updatedAt: 2022-03-16
---

この記事では、様々な Mod の前提ローダーとなる「[**Fabric**](https://fabricmc.net/)」の導入方法などを解説します。  
併せて、Fabric で使える Mod にほぼ必須となる Mod [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api) と [Mod Menu](https://www.curseforge.com/minecraft/mc-mods/modmenu) も導入します。

Minecraft Forge の導入方法についての解説は [こちら](https://jaoafa.com/blog/forge-commentary) からどうぞ。

サーババージョンに合わせ、Minecraft 1.18.2 環境で導入します。

## 解説環境

- Windows 10
- Minecraft Version 1.18.2
- Java 17.0.1.12.1 (ランチャーに付属する Java ランタイム)
  - `C:\Program Files (x86)\Minecraft Launcher\runtime\java-runtime-beta\windows-x64\.version`
- Fabric Installer 0.10.2
- Fabric Loader 0.13.3
- Fabric API 0.48.0+1.18.2
- Mod Menu v3.1.0 for 1.18.2
- ゲームディレクトリ: `%appdata%\.minecraft\GameDirectory\fabric_1.18.2`

macOS で導入する場合はエクスプローラー → Finder など適宜読み替えてください。

## Fabric 導入までの手順

### 1. Fabric Installer をダウンロードする

[公式サイトの Download ページ](https://fabricmc.net/use/installer/) から、Fabric Installer をダウンロードします。

![Fabric Installerをダウンロードするボタン](https://storage.jaoafa.com/ad05bb3579d6e9c026c60f0b8b0bb49a.png)

ダウンロードの途中で以下のような画面が表示された場合は、そのまま `保存` をクリックしてダウンロードを続行してください。

![ダウンロードを続行する](https://storage.jaoafa.com/c99facab0174244db0863e3e4c528e30.png)

### 2. Fabric をインストールする

まず、Minecraft や Minecraft ランチャーを起動している場合は終了してください。

ダウンロードしたファイルをダブルクリックで開きます。ファイル名は `fabric-installer-(インストーラーバージョン).exe` になっていると思います。

![インストーラー](https://storage.jaoafa.com/0f76e4f91573da952b96493f274e5122.png)

`Fabric セットアッププログラム` というウィンドウが開くので、`Minecraft Version` が正しいことを確認して、`インストール` ボタンを押してください。

<div style="width: 65%;margin: 0 auto;">
  <img src="https://storage.jaoafa.com/c487b37b515c608dd7cc7bd1471fce79.png" alt="インストール画面">
</div>

`正常にインストールされました。`と表示されたら成功です。インストーラーを終了して構いません。

<div style="width: 65%;margin: 0 auto;">
  <img src="https://storage.jaoafa.com/e800bf32463c69424c3a220c81962ec5.png" alt="インストール成功">
</div>

### 3. プロファイルを設定する

Minecraft ランチャーを起動し `起動構成` をクリック、新規に作成された `fabric-loader-(バージョン)` というプロファイルをクリックしてください。

![起動構成の表示](https://storage.jaoafa.com/b432b52a3b4a893213b77e03bb433f99.png)

プロファイルを開くと、以下のような設定画面が出てきます。

ここで重要なのは、`ゲームディレクトリ` の設定です。私は `.minecraft` フォルダの下に `GameDirectory` というフォルダをつくり、その中にゲームディレクトリを設定します。  
ここでは、`.minecraft\GameDirectory\fabric_1.18.2` に設定します。

`ゲームディレクトリ` の `参照` を押すと、`フォルダーの参照` ウィンドウが表示されます。この際、**`フォルダー(F):` の欄に選択したフォルダの名前がきちんと表示されていることを確認してから** `OK` を押してください。

![ゲームディレクトリ選択](https://storage.jaoafa.com/14ae2250a855f56bb3e26ee9b274ea03.png)

エクスプローラーなどでこのフォルダを開く時には、アドレス欄に `%appdata%\.minecraft\GameDirectory\fabric_1.18.2` と打ち込むと開けます。

`名前` はゲーム開始時のプロファイル選択時に表示されます。分かりやすい名前にしておきましょう。

プロファイルの設定が出来たら、`保存` を押してプロファイルの設定を保存してください。

### 4. Minecraft を起動する

ランチャーの左上 `プレイ` をクリックし、起動するプロファイルを選択してください。
選択後、中央下の緑色ボタン `プレイ` を押せばゲームが起動します。

![ゲームの起動](https://storage.jaoafa.com/318e32c57519de31bc0d182533ee441a.png)

このプロファイルで初めて起動するときには、以下のように `変更されたMinecraft: Java Editionの起動構成でプレイしようとしています。` と表示されます。  
`危険性を理解し、この起動構成について二度と警告しない。` にチェックを入れて `プレイ` をクリックしましょう。

![起動構成変更の警告](https://storage.jaoafa.com/2857320dda9f909eff1d072d2a6b301f.png)

導入に成功していれば、タイトル画面の左下に `Minecraft (バージョン)/Fabric` と表示されています。

## Fabric API と Mod Menu を導入するまでの手順

ほとんどの Fabric Mod では [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api) という Mod が必要になっています。  
また、導入した Mod の設定をゲーム内で行えるようにする [Mod Menu](https://www.curseforge.com/minecraft/mc-mods/modmenu) という Mod もほぼ必須です。

このセクションでは `Fabric API` と `Mod Menu` を導入します。

Minecraft や Minecraft ランチャーを起動している場合は終了してください。

### 1. Fabric API をダウンロード

[CurseForge の Fabric API ページ](https://www.curseforge.com/minecraft/mc-mods/fabric-api) にアクセスしましょう。  
少し下にスクロールすると、`Popular previous versions can be found here:` という項があるので、この中から先ほどインストールした Fabric の Minecraft バージョンをクリックしてください。

![Fabric API のページ](https://storage.jaoafa.com/8ecd4d14f3d102c1aa2b88e761669a67.png)

選択した Minecraft バージョンに対応する Fabric API の一覧が表示されます。`Actions` 列のダウンロードボタンをクリックしてください。

![Fabric API をダウンロード](https://storage.jaoafa.com/89ea645a00c410894e7682aae783382a.png)

`fabric-api-(バージョン).jar` というファイル名のファイルがダウンロードされます。

### 6. Mod Menu をダウンロード

[CurseForge の Mod Menu ページ](https://www.curseforge.com/minecraft/mc-mods/modmenu) にアクセスしましょう。  
ページ中部にあるタブから `Files` をクリックしてください。

![Mod Menu のページ](https://storage.jaoafa.com/f3e8c80e4a96fa80ace729d4eb445063.png)

開いたページをすこしスクロールして、`Recent Files` の右側にある `View All` というボタンをクリックしてください。

![View Allボタン](https://storage.jaoafa.com/2684241a59aaebb935b5877b17bf16cf.png)

`All Files` のページが表示されたら、`All Versions` をクリックし先ほどインストールした Fabric の Minecraft バージョンをクリックしてください。

その後、最新のファイルの `Actions` 列のダウンロードボタンをクリックしてください。

![All FilesでAll Versionsを選択、ダウンロード](https://storage.jaoafa.com/fa60406039059a76920c5c212b32ea00.png)

`modmenu-(バージョン).jar` というファイル名のファイルがダウンロードされます。

### 7. Fabric API と Mod Menu をインストール

先ほどダウンロードした `fabric-api-(バージョン).jar` と `modmenu-(バージョン).jar` をコピーしてください。

その後、エクスプローラーのアドレス欄に `%appdata%\.minecraft\GameDirectory\fabric_1.18.2` と打ち込み移動し、コピーしたファイルをペーストしてください。

![ファイルをコピー・ペースト](https://storage.jaoafa.com/6fd3fef3281c2f0c7b559bef751848d1.gif)

### 8. 再度 Minecraft を起動する

ここまで完了したら、正常に Mod が導入されているかを確認するために Minecraft を起動してください。

起動後、Mods をクリックして `Mod Menu` が導入されていれば成功です。  
（導入に成功していてもいなくても Fabric API はこの画面に表示されません）

![Modsを開く](https://storage.jaoafa.com/a0c8b7ff9200bdd5893d1ae26f46c1c4.gif)

お疲れさまでした。

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への一切の責任を負いません。 何かを試したり、やってみたりするときには必ず「自己責任」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](/blog/join-discord)の`#question`チャンネルにて質問してみましょう。
