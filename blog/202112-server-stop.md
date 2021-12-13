---
title: Minecraftサーバ停止のお知らせ
category: news
author: tomachi
createdAt: 2021-12-11
updatedAt: 2021-12-13
---

jao Minecraft Server では、Minecraft サーバのサービス提供を一時停止することとなりました。  
利用者の皆様にはご迷惑をおかけいたしますが、ご承知おきください。

## サービスの提供を一時停止する経緯

先日、 Minecraft でも使用されている Java のロギングライブラリ「log4j2」に関する重大な脆弱性（[CVE-2021-44228](https://github.com/advisories/GHSA-jfh8-c2jp-5v3q)）が報告されました。  
この脆弱性は Minecraft サーバだけでなく、みなさんが使用している Minecraft クライアントについても対象となります。  
運営で協議した結果、利用者の皆様の安全を確保するためにも、一時的にサービスの停止を実施することを決定いたしました。

## 具体的な対応について

- 2021年12月9日 10時58分より安全性が確認されるまでの間、Minecraft サーバにおけるサービス提供を一時停止いたします。この間、Minecraft サーバにログインすることはできません。
- Minecraft サーバが停止している間、各種投票サイトにおける投票は行えません。また今回の事案に関して、投票の補填は行いません。
- jao Minecraft Server の公式 Web サイト、および公式 Discord サーバに関しては通常通りご利用いただけます。
- Minecraft アカウントと公式Discordサーバにおける[連携の自動切断](https://jaoafa.com/server/rules/discord/#免責事項)について、ログイン期限を一律で2022年1月31日 23時59分59秒まで延長しました。

## 参考記事

- [LunaSec による記事(英語)](https://www.lunasec.io/docs/blog/log4j-zero-day/)
- [ITmedia による記事](https://www.itmedia.co.jp/news/articles/2112/10/news157.html)
- [窓の杜による記事](https://forest.watch.impress.co.jp/docs/serial/yajiuma/1373242.html)
