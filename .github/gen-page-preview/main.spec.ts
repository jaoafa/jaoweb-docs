import { Octokit } from "@octokit/rest";
import { test } from "@playwright/test";
import { execSync } from "child_process";
import fs from "fs";

// 環境変数
// GITHUB_REPOSITORY: 所有者およびリポジトリの名前
// ISSUE_NUMBER: プルリクの番号 (envでgithub.event.numberを渡す必要あり)
// GITHUB_TOKEN: GitHub API トークン (envでsecrets.GITHUB_TOKENを渡す必要あり)

const OWNER = process.env.GITHUB_REPOSITORY!.split("/")[0];
const REPO = process.env.GITHUB_REPOSITORY!.split("/")[1];
const ISSUE_NUMBER = parseInt(process.env.ISSUE_NUMBER);

test("page screenshot", async ({ page }) => {
  const files = execSync("git diff --diff-filter=ACMR --name-only HEAD^1 HEAD")
    .toString()
    .split("\n");

  fs.mkdirSync("screenshots", { recursive: true });

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const screenshots = [];
  for (const file of files.filter((s) => s.endsWith(".md"))) {
    await page.goto("http://localhost:3000/" + file, { waitUntil: "load" });
    await page.screenshot({
      path: "screenshots/" + file + ".png",
      fullPage: true,
    });
    screenshots.push("screenshots/" + file + ".png");
  }

  octokit.issues.createComment({
    owner: OWNER,
    repo: REPO,
    issue_number: ISSUE_NUMBER,
    body: `
// コメント文 画像を埋め込む？
    `,
  });
});
