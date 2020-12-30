---
title: コマンドの一覧
description: Minecraftサーバ内で使える「コマンド」の一覧ページです。
image: https://storage.jaoafa.com/33efd2207119961cc985868f2ed3eb97.png
---

jao Minecraft Server内で使用できる主要コマンドの一覧です。

- ここに載っているコマンドの大部分は、独自プラグイン<a href="https://github.com/jaoafa/MyMaid3">MyMaid</a>の機能です。(一部他プラグイン)
- コマンドやプラグインに関する疑問や不具合等は<a href="https://wiki.jaoafa.com/jMS_Gamers_Club">Discord</a>#developmentや#supportでお問い合わせください。
- 実際にコマンドを実行する場合、`[ ]`は入力しないでください。
- ここに載っていないコマンドでも、Minecraftバニラの標準的なコマンドは使用することができます。

## 目次

- [移動系コマンド](/server/specifications/command#移動系コマンド)
- [取得・付与系コマンド](/server/specifications/command#取得・付与系コマンド)
- [状態系コマンド](/server/specifications/command#状態系コマンド)
- [プレイヤー系コマンド](/server/specifications/command#プレイヤー系コマンド)
- [チャット系コマンド](/server/specifications/command#チャット系コマンド)
- [アイテム系コマンド](/server/specifications/command#アイテム系コマンド)
- [乗り物・動物系コマンド](/server/specifications/command#乗り物・動物系コマンド)
- [その他のコマンド](/server/specifications/command#その他のコマンド)
- [その他プラグインの系コマンド](/server/specifications/command#その他プラグインのコマンド)
- [荒らし対応等に使えるコマンド](/server/specifications/command#荒らし対応等に使えるコマンド)

## 移動系コマンド

### /tp

対象を指定した場所にテレポート(移動)させます。

#### 使用法

- **/tp [MinecraftID]**
- **/tp [X] [Y] [Z]**
- 例: /tp jaotan (jaotanへテレポート)

### /dt

Dynmapマーカーに関するコマンドです。

#### 使用法

- **/dt [MarkerName]** - 対象を指定したDynmapマーカーにテレポート(移動)させます。
- **/dt near** - 現在地から一番近い場所にあるDynmapマーカーを表示します。
- **/dt random** - ランダムなDynmapマーカーにテレポートします。
- **/dt add [MarkerName] [MarkerType]** - 新しいDynmapマーカーを追加します。
- **/dt del [MarkerName]** - 既存のDynmapマーカーを削除します。
- **/dt list [Page]** - マーカー一覧を表示します。
- 例: /dt IkekuraCity (マーカー"IkekuraCity"にテレポートします)

MarkerType一覧: **Markers**(その他) **Cities**(自治体のメインマーカー)

マーカー名は大文字小文字を区別するので気を付けてください。

### /wt

各ワールドのスポーン地点にテレポートします。

#### 使用法

- **/wt [WorldID/WorldName]** - 指定したワールドのスポーン地点にテレポートします。
- /wt 1 ・ /wt Jao_Afa - Jao_Afa(メイン)ワールドへテレポートします
- /wt 3 ・ /wt SandBox - SandBox(フラット)ワールドにテレポートします

### /untp ・ /retp

テレポートする前の場所にテレポートします。

#### 使用法

- **/untp** - テレポートする前の場所に戻ります。/backでも可能です
- **/retp** - /untpで戻る前の場所に戻ります。

### /ded

最後に死亡した場所にテレポートします。クリエイティブモードの時のみ実行可能です。

### /spawn

今いるワールドのスポーン地点にワープします。「**/spawn true**」で/spawnpoint等で設定されたリスポーン地点にワープします。

### /home

ホーム関係のコマンドです。

#### 使用法

- **/sethome [Name]** - 指定した名前のホームを現在地に設定します。名前を指定しないと/homeだけで戻れます
- **/home [Name]** - 自分が設定したホームにテレポートします。
- **/home list** - 自分が設定したホームの一覧を表示します。
- **/delhome [Name]** - 自分が設定したホームを削除します。

### /tpdeny

TpDeny(特定ユーザーからのテレポート拒否)の設定をします。

#### 使用法

- **/tpdeny add [MinecraftID]** - TpDenyにプレイヤーを追加し、以降のテレポートを拒否します。
- **/tpdeny remove [TpDenyId]** - TpDenyからプレイヤーを削除し、以降のテレポートを許可します。
- **/tpdeny notify [TpDenyId] <On/Off>** - テレポートを拒否した場合に通知するかどうかを設定します。
- **/tpdeny list** - 現在TpDenyに追加されている(テレポートを拒否されている)プレイヤーの一覧を表示します。

TpDenyIdは **/tpdeny list**で取得してください。

## 取得・付与系コマンド

### /head

指定したプレイヤーの頭ブロックを取得します。

#### 使用法

- **/head [MinecraftID]** (MinecraftID未指定で自分の頭ブロックを取得します)

### /dedbull

無制限の暗視効果を自身に付与します。
実行するたびに付与/解除が切り替わります。

### /elytra

エリトラとロケット花火をそれぞれ背中、オフハンドに装備します。

### /workbench

作業台を開きます。

### /cmdb

【Regular～】自身にコマンドブロックを付与します。

### /brb

【Verified～】自身にバリアブロックを付与します。

### /getuserkey

ユーザーキーを取得します。

## 状態系コマンド

### /g

指定したプレイヤーのゲームモードを変更します。/gamemodeの省略型です。/gmでも可。

#### 使用法

- **/g** - クリエイティブモードならスペクテイターモードに、スペクテイターモードならクリエイティブモードに、それ以外ならクリエイティブモードに変更します。
- **/g [0～3]** - 指定された数値のゲームモードに変更します。なお、スペクテイターモードになるにはRegular以上の権限が必要です。

### /hat /body /leg /boots

手に持ってるブロックを頭・背中(胴体)・足首・足(靴)部分に装着します。

### /sit

その場に座ります。クリエイティブモードの時のみ実行可能です。

### /lay

その場に寝ます。(自分からは普通に立っているように見えます) クリエイティブモードの時のみ実行可能です。

### /afk ・ /afkparticle

AFK(Away From Keyboard)状態になります。いわゆる「放置状態」です。

#### 使用法

- **/afk [Reason]** - AFK状態になります。理由を記入することも可能です。
- **/afk [MinecraftID]** - 指定したプレイヤーがAFK状態かどうか。最終アクションはいつかを表示します。
- **/afkparticle [Particle]** - monocraft.netからの投票数に応じ、解放方式でAFK時パーティクルを選択できます。  
詳細は[こちら](/server/specifications/vote)をご覧ください。

### /selclick

【Verified～】走りながら右クリックすると/selコマンドを実行するという機能を無効/有効化します (デフォルトは有効です)

### /chairs

階段に右クリック座る機能を有効にしたり無効にします。

#### 使用法

- **/chairs on** - 階段に座る機能を有効ににします。(デフォルト)
- **/chairs off** - 階段に座る機能を無効にします。(建築時推奨)

### /placeholderactionbar

アクションバー(ツールバーの上)に表示される、現在地の保護名とそのオーナー・自分の権限の表示/非表示を設定します。

#### 使用法

- /placeholderactionbar on - アクションバーに情報を表示します。(デフォルト)
- /placeholderactionbar off - アクションバーに情報を表示しません。

### /dedrain

【Regular～】雨を降らせるか降らせないか設定します。

#### 使用法

- **/dedrain** - 現在の設定状態を表示します。
- **/dedrain off** - 雨を降らせないようにします。(デフォルト)
- **/dedrain on** - 雨を降らせれるようにします。10分で自動的に無効化されます。

## プレイヤー系コマンド

### /player

指定したプレイヤーの[権限](/server/specifications/permission)名を表示します。サーバにログイン中のプレイヤーのみ表示できます。

#### 使用法

- **/player [MinecraftID]** (MinecraftID未指定で自分の権限を表示します)

### /hide　・ /show

【Regular～】自分の姿を完全に消します。チャットができなくなり、プレイヤーリストやDynmapからも見えなくなります。
/showで元に戻ります。

### /respawn

指定したプレイヤーを強制的にリスポーンさせます。

#### 使用法

- **/respawn [MinecraftID]**

### /jail

【Regular～】指定したプレイヤーを南の楽園に投獄します。EBanなどとは違い、Jailは「**お遊び投獄**」です。

#### 使用法

- **/jail add [MinecraftID] [Reason]** - 指定したプレイヤーをJailします。
- **/jail remove [MinecraftID]** - 指定したプレイヤーをJailから削除します。
- **/testment [Testment]** - 遺言を残します。
- **/jail status** - 被Jail者一覧を表示します。
- **/jail status [MinecraftID]** - 指定したプレイヤーのJail情報を表示します。

### /jsa

[jaoSuperAchievement2](https://github.com/jaoafa/jao-Super-Achievement2)の、解除済み実績、未解除実績、その実績の情報(解除日・解除者人数・実装日)がGUI形式で表示され、確認することができます。

#### 使用法

- **/jsa [MinecraftID]** - MinecraftIDを指定しないと自分の情報が表示されます。

### /invsave ・ /invsave

インベントリの保存・書き出しをします。名前を指定することも可能です

## チャット系コマンド

### /chat

【Regular～】偽のプレイヤーを喋らせます。悪用厳禁。

#### 使用法

- **/chat [Name] [Message...] color:[Color]**
- 例: /chat Nubesco ヌベヂョンw color:red
colorの部分の色はチャット横の■の色となります。

### /w /tell /t /msg

指定したプレイヤーの個人チャットをします。

#### 使用法

- **/w [相手のMinecraftID] [Message…]**
- 例: /w jaotan ヌベスコ

### /jp

LunaChatによるローマ字自動変換を有効にしたり無効にしたりします。

#### 使用法

- **/jp on** - ローマ字自動変換を有効にします。(デフォルト)
- **/jp off** - ローマ字自動変換を無効にします。

### /.

[ピリオドマッチ](https://wiki.jaoafa.com/ピリオドマッチ)を行います。  
ピリオドマッチは、コマンド実行後に最初のピリオド(.)を送信した瞬間から始まります。

#### 使用法

- **/. [TimeSecond]** - 指定した秒数のピリオドマッチを行います。

秒数は自由に選択できますが、公式な部門としては「-1秒」「0秒」「1秒」「10秒」「20秒」「30秒」「60秒」「100秒」「300秒」「3600秒」があります。これらのピリオドマッチは順位がつけられます。ランキングページは[こちら](https://jaoafa.com/p/)

- **/. stop** - 現在行っているピリオドマッチを強制終了します。

### /color

チャット欄の四角(■)の色を取得・変更します。

#### 使用法

- **/color** - 現在の自分の四角色を表示します。
- **/color [Color]** - 自身の四角色を変更します。(200回以上のminecraft.jpからの[投票](/server/specifications/voteが必要です)

### /bug

運営(開発部)にプラグイン等のバグを報告します。

#### 使用法

- **/bug [Message…]** - コマンドを実行したらチャット欄に送信するかどうか表示されるので「送信する」をクリックしてください。(/bug trueと実行されます)

### /feedback (/fb)

運営にフィードバックを送信します。
bugとほぼ同様。

## アイテム系コマンド

### /itemedit

手に持っているアイテムの情報を編集します。

#### 使用法

- **/itemedit name [Name]** - アイテムの名前を変更します。
- **/itemedit lore [Lore]** - アイテムの説明文を変更します。

### /makecmd

【Regular～】手に持っているアイテムのgiveコマンドを生成します。(表示されたURLの先にコマンドが生成されています)

## 乗り物・動物系コマンド

### /rider

指定したプレイヤーやエンティティに乗り降りします。

#### 使用法

- **/rider [MinecraftID]** - プレイヤーに乗ります。
乗られたプレイヤーはテレポート系のコマンドが使えなくなったり、ブロックの設置破壊が一切できなくなります。
- **/rider [EntityName]** - 1辺30ブロックの立方体内にある、指定された名前のエンティティに乗ります。
- **/rider [RiderMCID/EntityName] [RidingMCID/EntityName]** - プレイヤーもしくはエンティティ(Rider)をプレイヤーもしくはエンティティ(Riding)に乗せます。
- **/rider leave** - 自分に乗ってるプレイヤーもしくはエンティティを降ろします。

### /ck

10ブロック以内にある無人トロッコを消去します。

### /lead

【Regular～】プレイヤーやエンティティにリードをつけます。

#### 使用法

- **/lead [MinecraftID]** - 指定したプレイヤーにリードをつけます。
- **/lead [EntityName]** - 1辺30ブロックの立方体内にある、指定された名前のエンティティにリードをつけます。
- **/lead [MCID/EntityName] [MCID/EntityName]** - プレイヤーもしくはエンティティをプレイヤーもしくはエンティティにリードをつけます。
- **/lead leave** - 自分についているリードを外します。

## その他のコマンド

### /var

【Regular～】変数に関することを利用できます。

#### 使用法

- **/var text [Key] [Value]** - 変数に代入します。
- **/var plus [Key1] [Key2]** - 変数を利用して加算します。
- **/var minus [Key1] [Key2]** -  変数を利用して減算します。
- **/var block** - 未実装
- **/var equal [Key1] [Key2]** - 変数がイコールかどうか調べます。
- **/var list** - 変数のリストを表示します。
- **/var clear [Key]** - 変数を削除します。

### /convloc

【Regular～】コマンドブロックのコマンドの座標指定を「絶対座標」と「相対座標」で相互変換します。

#### 使用方法

- **/convloc** - 見ているコマンドブロックのコマンドを「相対座標」に変換します。
- **/convloc <relative|absolute>** - 見ているコマンドブロックのコマンドを「相対座標(relative)」か「絶対座標(absolute)」のいずれかに変換します。<relative|absolute>は短縮できます。

### /vercheck

開発部が制作しているプラグインのバージョンを表示します。

## その他プラグインのコマンド

- [WorldEdit解説](/blog/worldedit_commentary)
- [WorldGuard解説](/blog/worldguard_commentary)

## 荒らし対応等に使えるコマンド

### /invshow

【Regular～】指定したプレイヤーのインベントリを表示します。/invedit(Moderator以上)で編集ができます。

### /glookup

【Regular～】指定したプレイヤーのゲームモードを表示します。

### /enderchest

【Moderator～】指定したプレイヤーのエンダーチェストの中身を表示・編集します。

### /coold

【Regular～】旧CoreProtectの情報を取得します。
