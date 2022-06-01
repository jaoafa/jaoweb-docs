---
title: Minecraftサーバ内の権限"Limited Verified"について
description: jao Minecraft Server における権限"Limited Verified"について、権限の概要と取得方法を解説します。
category: news
author: omelet
createdAt: 2022-05-08
updatedAt: 2022-06-01
---

jao Minecraft Server では、Minecraftサーバの提供に際してユーザの権限を設定しています。  
その中の"Limited Verified"という権限について、この記事でご説明します。

## 権限"Limited Verified"の概要

- 諸事情でDiscordサーバに参加できず、DiscordアカウントとMinecraftアカウントを連携できない利用者に対して付与する権限です。
- 運営が指定する方法（後述）にて申請が行われた場合、運営内での審議・手続きを経て、必要に応じて権限が付与されます。
- Minecraftサーバ内では<span style="color: red">Verifiedと同等</span>の権限グループとなります。WorldEditなどが使用可能となります。

## この権限が付与される条件

権限"Limited Verified"を取得するためには、以下の条件をすべて満たすことが必要となります。

- [Discord](https://wiki.jaoafa.com/jMS_Gamers_Club)において、次の理由のいずれかによりアカウントを作成できない利用者であること
    1. ユーザが13歳未満であり、[Discord公式が定めるサービス利用規約](https://discord.com/terms#親および保護者の年齢の要件と責任)を根拠に Discordアカウントが作成できないため。
    2. 保護者からの指導により、SNSの利用が禁じられているため。
    3. ファイヤーウォールなどにより、Discordに対するアクセスが遮断されるため。
    4. その他、運営が正当だと認める事由があるため。
- 申請時の所属権限グループが「Default」であること (Minecraft鯖内で`/player`を実行することで確認できます)
- サーバ内で不適切な言動が見られないこと、その他運営が不適切だと判断するような事由がないこと。

また必須条件とはなりませんが、サーバに長時間ログインしていること（少なくとも累計ログイン時間が1時間は超えていること）も審査の基準となります。

## 申請方法

1. 上記の「権限付与条件」をすべて満たしているかを確認しましょう。
2. 権限付与条件に適合しているか確認できたら、jao Minecraft Serverにログインし、`/getuserkey`を実行、UserKeyを取得してください。
3. [権限グループ「Limited Verified」付与申請フォーム](https://docs.google.com/forms/d/e/1FAIpQLScc_sLdQrN7WeHGPpc8uSTpyJ-7yiPyie_NBDWNoU69zfmCNQ/viewform)にアクセスしてください。
4. 指定された項目を記述の上、送信してください。この際、申請種別は「Limited Verified 新規付与申請」を選択してください。
5. 指定した連絡手段にて、随時運営よりご連絡いたします。

## 権限の制限について

Discordに参加せずにVerified権限を取得することになるため、付与に際し次の制限が設けられます。  
運営からの各種お知らせ等は、基本的にDiscordにて配信されます。Discordに参加できない以上、そのようなお知らせを受け取ることができないためです。

- Limited Verified権限の付与は、認可から90日間の期間限定(LV期間と呼びます)とします。  
  その後は自動的にDefault権限に戻ります。
- 自治体関連の申請などは現在専用フォームを制作しています。フォームが完成するまで、Limited Verified権限の利用者は自治体申請ができません。

## 権限の降格と、継続申請について

上述の通りLV期間が終了すると、自動的にDefault権限に降格します。  
ただし期限日から前後15日以内であれば、運営に対して期限の90日延長申請が行えます。  
[権限グループ「Limited Verified」付与申請フォーム](https://docs.google.com/forms/d/e/1FAIpQLScc_sLdQrN7WeHGPpc8uSTpyJ-7yiPyie_NBDWNoU69zfmCNQ/viewform)へアクセスし、指定された項目を記述の上送信してください。  
なお継続申請の際には、申請種別「Limited Verified 期間延長申請」を選択してください。  

また[サーバルール](/server/rules)や[各種方針](/server/policies)に抵触するような言動があると運営が認めた場合、LV期間中であってもDefault権限に降格となることがあります。

## 備考

- 申請内容をもとに、運営は権限付与の認否を検討します。　　
  申請内容によっては、権限の付与を行えない場合があることをご承知おきください。
- Limited Verified権限を付与された場合、`/player`などでの表記は`Verified`となります。
- Limited Verified権限のプレイヤーは[Googleドライブのスプレッドシート](https://docs.google.com/spreadsheets/d/18bNo0br4VakY65N16DZEwNafUPRV9TtToSQNPgxfbGI/edit?usp=sharing)で管理をしています。
- 重要なお知らせは、Discordに加えて[公式ブログ](/blog)でも告知することがあります。適宜確認するようにお願いいたします。
