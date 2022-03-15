import { Octokit } from "@octokit/rest";
import { Page, test } from "@playwright/test";
import { execSync } from "child_process";
import fs from "fs";
import ImgurAnonymousUploader from "imgur-anonymous-uploader";

// 環境変数
// GITHUB_REPOSITORY: 所有者およびリポジトリの名前
// ISSUE_NUMBER: プルリクの番号 (envでgithub.event.numberを渡す必要あり)
// GITHUB_TOKEN: GitHub API トークン (envでsecrets.GITHUB_TOKENを渡す必要あり)
// BASE_SHA: プルリクのベース SHA
// IMGUR_CLIENT_ID: Imgur クライアント ID (オプション)

const OWNER = process.env.GITHUB_REPOSITORY!.split("/")[0];
const REPO = process.env.GITHUB_REPOSITORY!.split("/")[1];
const ISSUE_NUMBER = parseInt(process.env.ISSUE_NUMBER);
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID;
const BASE_SHA = process.env.BASE_SHA;

async function scrollFullPage(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

test("page screenshot", async ({ page }) => {
  const files = execSync(
    "git diff --diff-filter=ACMR --name-only " + BASE_SHA + " HEAD",
    {
      cwd: process.env.GITHUB_WORKSPACE + "/content/",
    }
  )
    .toString()
    .split("\n");

  fs.mkdirSync("screenshots", { recursive: true });

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const screenshot_files = [];
  for (const file of files.filter((s) => s.endsWith(".md"))) {
    console.log("File: " + file);
    const filename = file.endsWith("index.md")
      ? file.slice(0, -8)
      : file.endsWith(".md")
      ? file.slice(0, -3)
      : file;
    const url = "http://localhost:3000/" + filename;
    console.log("URL: " + url);
    await page.goto(url, { waitUntil: "domcontentloaded" });
    await scrollFullPage(page);
    await page.evaluate(() => {
      window.scrollBy(0, -document.body.scrollHeight);
    });
    await page.screenshot({
      path: "screenshots/" + file + ".png",
      fullPage: true,
    });
    screenshot_files.push(file);
  }

  const screenshot_urls = [];
  if (IMGUR_CLIENT_ID) {
    const uploader = new ImgurAnonymousUploader(IMGUR_CLIENT_ID);
    for (const screenshot_file of screenshot_files) {
      const result = await uploader.upload(
        "screenshots/" + screenshot_file + ".png"
      );
      if (!result.success) {
        console.error("Error: " + result);
        continue;
      }
      console.log(
        "Imgur uploaded: " + result.url + " (" + result.deleteHash + ")"
      );
      screenshot_urls.push({
        url: result.url,
        file: screenshot_file,
      });
    }
  }

  const images = screenshot_urls.map(
    (o) =>
      `<details>\n<summary>${o.file}</summary>\n\n## ${o.file} \n\n![${o.file}](${o.url})\n</details>\n`
  );
  const comments = await octokit.issues.listComments({
    owner: OWNER,
    repo: REPO,
    issue_number: ISSUE_NUMBER,
    per_page: 100,
  });
  for (const comment of comments.data) {
    if (!comment.body.trim().startsWith("# Page Preview Images")) {
      continue;
    }
    await octokit.issues.deleteComment({
      owner: OWNER,
      repo: REPO,
      comment_id: comment.id,
    });
    console.log("Deleted comment: " + comment.id);
  }
  await octokit.issues.createComment({
    owner: OWNER,
    repo: REPO,
    issue_number: ISSUE_NUMBER,
    body: `
# Page Preview Images

${images.join("\n")}
    `,
  });
});
