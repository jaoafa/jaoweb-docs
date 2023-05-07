---
title: 権限付与方針
description: 権限の付与についての方針や、その種類について記載します。
image: https://storage.jaoafa.com/bf4f7d44454db36f1f85a229993ec588.png
createdAt: 2021-04-14
updatedAt: 2023-05-03
---

このページでは、jao Minecraft Server（以下、「当サーバ」と呼びます）おける権限の付与について記載します。

## 権限の種類

当サーバの権限(権限グループ)は大きく次の7つに分けられています。

- Admin
- Moderator
- Regular
- Community Regular
- Verified
- Limited Verified
- Default

自身の権限グループを調べるには、サーバ内で「`/player`」と実行してください。

詳細は[サーバ仕様](/server/specifications/#権限グループについて)をご覧ください。

## Admin

プレイヤーが所持できる権限の中でトップの権限です。

### 昇格基準

この権限を取得するには、以下の基準をクリアしなければなりません。

- Moderator権限グループに所属している。
- Adminの全員の承認および運営の過半数の承認を得る。

### 降格基準

次の項目のいずれかに該当すると、指定権限まで降格されます。

- 本人が希望する。 (Regular・Moderatorのいずれかに降格)
- 運営の判断により、Admin権限を付与し続けるべきではないとされた場合。(Regular・Moderatorのいずれかに降格)

## Moderator

「運営」に含まれ、Adminとほぼ同等の権限を持ちます。

### 昇格基準

この権限を取得するには、以下の基準をクリアしなければなりません。

- Regular権限グループに所属している。
- 運営の過半数の承認を得る。

### 降格基準

次の項目のいずれかに該当すると、指定権限まで降格されます。

- 本人が希望する。 (Regularに降格)
- 運営の判断により、Moderator権限を付与し続けるべきではないとされた場合。(Regularに降格)

## Regular

「常連」と呼ばれ、運営内での提案・許可の元で付与されます。

### 昇格基準

この権限を取得するには、以下の基準をクリアしなければなりません。

- Verified権限グループ、またはCommunity Regular権限グループに所属している。
- 運営内で過半数の承認を得る。(運営内での提案の上で審議)

### 降格基準

次の項目のいずれかに該当すると、指定権限まで降格されます。

- [公式Discordサーバ](/blog/join-discord)から退出する、または連携を解除する。(Defaultに降格)
- 運営の判断により、Regular権限を付与し続けるべきではないとされた場合。(Verified、またはCommunity Regularに降格)

<span style="color: #999999;">※今までに、運営判断によってRegular権限を取り上げられた利用者は2人しかいません。</span>

## Community Regular

公式Discordサーバなど、コミュニティ内にて活躍しているユーザに付与される権限です。  
Minecraftサーバ内では<span style="color: red">Verifiedと同等</span>の権限グループとなります。

### 昇格条件

この権限を取得するには、以下の基準をクリアしなければなりません。

- Verified権限グループに所属している。
- 運営内で過半数の承認を得る。（運営内での提案の上で審議）

### 降格条件

以下の項目に該当すると、指定権限まで降格されます。

- [公式Discordサーバ](/blog/join-discord)から退出する、または連携を解除する。(Defaultに降格)
- 運営の判断により、Community Regular権限を付与し続けるべきではないとされた場合。(Verifiedに降格)

## Verified

[公式Discordサーバ](/blog/join-discord)で`/link`コマンドを実行し、Minecraftアカウントと連携した際に付与されます。

### 昇格基準

この権限を取得するには、以下の基準をクリアしなければなりません。

- [公式Discordサーバ](/blog/join-discord)内でDiscordアカウントと連携する。

### 降格基準

次の項目に該当すると、指定権限まで降格されます。

- [公式Discordサーバ](/blog/join-discord)から退出する、または連携を解除する。(Defaultに降格)

## Limited Verified

公式DiscordサーバとMinecraftアカウントを連携できないユーザに対して、申請を根拠に付与される権限です。
Minecraftサーバ内では<span style="color: red">Verifiedと同等</span>の権限グループとなります。
詳しくは[個別記事](/server/policies/limitedverified/)をご確認ください。

### 昇格基準

この権限を取得するには、以下の基準をクリアしなければなりません。

- [権限グループ「Limited Verified」新規付与申請フォーム](https://docs.google.com/forms/d/e/1FAIpQLScc_sLdQrN7WeHGPpc8uSTpyJ-7yiPyie_NBDWNoU69zfmCNQ/viewform)へアクセスし、必要事項を記入した上で送信する。

### 降格基準

以下の項目に該当すると、指定権限まで降格されます。

- 申請が認可されてから3ヶ月（90日後）が経過する。(Defaultに降格)

## Default

サーバへはじめてログインした際に、自動的に付与されます。
