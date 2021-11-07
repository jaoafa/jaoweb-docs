---
title: Windowsアプリ版Minecraft Launcherにプロファイルを移行する方法
category: tips
author: kohonayoshi
createdAt: 2021-11-07
updatedAt: 2021-11-07
---

先日、 Minecraft Launcher の [Microsoft Store での配信](https://www.xbox.com/ja-JP/games/store/Minecraft-Launcher/9PGW18NPBZV5) が開始されました。この新しいランチャーでは、「Java Edition」「Bedrock Edition」の両方が利用可能になります。

これまで Minecraft を遊んでこられた方は、今までのランチャーから切り替えを行うことになります。その際に、これまで遊んでいたデータなどを新しいランチャーへ移行したい！という方が多いのではないかと思います。

この記事では、新しい Minecraft Launcher へプロファイルを移行する方法について解説します。
※一応自分が動作確認して問題はありませんでしたが、ご自身の責任のもと実行してください。

## 移行方法

### 1. `.minecraft` フォルダを開く

`%appdata%\.minecraft` をエクスプローラーのアドレス欄に入力し、アクセスすると Minecraft のフォルダが開けます。

### 2. `launcher_profiles.json`(旧ランチャー) と `launcher_profiles_microsoft_store.json`(新ランチャー) を開く

`.minecraft` フォルダにある `launcher_profiles.json` と、`launcher_profiles_microsoft_store.json` の両方を適当なエディタで開きます。

### 3. 以下のうち👈の絵文字で囲まれた範囲を、旧ランチャーからコピーし新ランチャーの該当する部分に貼り付けて置き換える

```json

  "launcherVersion": {
    "1a1b*******************1968": {
    "format": 21,
    "name": "",
    "profilesFormat": 2
  },
  "profiles": { 👈ここから

︙

      "lastVersionId": "1.14.4-forge-28.2.0",
      "name": "Forge_1.14.4",
      "type": "custom"
    } 👈ここまで
  },
  "selectedUser": {
```

### 4. 新ランチャーを起動してプロファイルがある・正常に起動できることを確認する

新しいMicrosoft Store版のランチャーを起動し、プロファイルが反映されていることとそのプロファイルで起動できることを確認してください。
