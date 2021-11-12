import { Octokit } from "@octokit/rest";
import { test } from "@playwright/test";
import { execSync } from "child_process";
import fs from "fs";
import ImgurAnonymousUploader from "imgur-anonymous-uploader";

// 環境変数
// GITHUB_REPOSITORY: 所有者およびリポジトリの名前
// ISSUE_NUMBER: プルリクの番号 (envでgithub.event.numberを渡す必要あり)
// GITHUB_TOKEN: GitHub API トークン (envでsecrets.GITHUB_TOKENを渡す必要あり)
// IMGUR_CLIENT_ID: Imgur クライアント ID (オプション)

const OWNER = process.env.GITHUB_REPOSITORY!.split("/")[0];
const REPO = process.env.GITHUB_REPOSITORY!.split("/")[1];
const ISSUE_NUMBER = parseInt(process.env.ISSUE_NUMBER);
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID;

test("page screenshot", async ({ page }) => {
  const files = execSync(
    "git diff --diff-filter=ACMR --name-only HEAD^1 HEAD",
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
    await page.goto("http://localhost:3000/" + file, { waitUntil: "load" });
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
    (o) => `## ${o.file} \n\n![${o.file}](${o.url})\n`
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
