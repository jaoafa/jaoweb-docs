import axios from "axios";
import * as crypto from "crypto";
import * as fs from "fs";
import * as matter from "gray-matter";
import * as path from "path";
import { exit } from "process";

interface FileDetails {
  filePath: string;
  fields: {
    [key: string]: any;
  };
  oldFile: string | null;
  isChanged: boolean;
}

function getGrayMatter(content: string): {
  data: {
    [key: string]: any;
  };
} {
  // @ts-ignore
  return matter(content);
}

(async () => {
  function getAllFiles(searchPath: string) {
    const files = fs.readdirSync(searchPath);
    const results: string[] = [];

    files.forEach((file) => {
      const fullPath = path.normalize(searchPath + "/" + file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        results.push(...getAllFiles(fullPath));
      } else {
        results.push(fullPath);
      }
    });
    return results;
  }

  function getHeaderFields(filePath: string): {
    [key: string]: any;
  } {
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = getGrayMatter(content);
    return data;
  }

  async function getHTTPContent(url: string): Promise<any | null> {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        return null;
      }
      return response.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  const files = getAllFiles(".")
    .filter((x) => x.endsWith(".md"))
    .filter((x) => !x.includes("node_modules"))
    .filter((x) => !x.includes("README.md"));

  const requiredFields = {
    blog: ["title", "category", "author", "createdAt", "updatedAt"],
    other: ["title", "description", "createdAt", "updatedAt"],
  };

  async function forBlog(
    fileDetails: FileDetails,
    authors: [{ [key: string]: any }],
    categories: [{ [key: string]: any }]
  ) {
    const file = fileDetails.filePath;
    const oldFile = fileDetails.oldFile;
    const fields = fileDetails.fields;
    const isChanged = fileDetails.isChanged;

    // 執筆者の確認
    const author = fields["author"];
    if (authors.findIndex((x) => x.slug === author) === -1) {
      console.warn(`${file}: 執筆者が正しくありません (${author})`);
      return false;
    }

    // カテゴリーの確認
    const category = fields["category"];
    if (categories.findIndex((x) => x.slug === category) === -1) {
      console.warn(`${file}: カテゴリが正しくありません (${category})`);
      return false;
    }

    if (oldFile !== null && isChanged) {
      const oldFields = getGrayMatter(oldFile).data;
      if (oldFields["updatedAt"] == fields["updatedAt"]) {
        console.warn(
          `${file}: 更新日時が変更されていません (${fields["updatedAt"]})`
        );
        return false;
      }
    }

    return true;
  }

  async function forOther(fileDetails: FileDetails) {
    const file = fileDetails.filePath;
    const oldFile = fileDetails.oldFile;
    const fields = fileDetails.fields;
    const isChanged = fileDetails.isChanged;

    if (oldFile !== null && isChanged) {
      const oldFields = getGrayMatter(oldFile).data;
      if (oldFields["updatedAt"].toString() == fields["updatedAt"].toString()) {
        console.warn(
          `${file}: 更新日時が変更されていません (${fields["updatedAt"]})`
        );
        return false;
      }
    }
    return true;
  }

  const authors = await getHTTPContent(
    "https://raw.githubusercontent.com/jaoafa/jaoweb/master/content/blog/authors.json"
  );
  const categories = await getHTTPContent(
    "https://raw.githubusercontent.com/jaoafa/jaoweb/master/content/blog/categories.json"
  );

  let isValid = true;
  // %f: %m
  for (const file of files) {
    const fields = getHeaderFields(file);
    const fileType = file.includes("blog") ? "blog" : "other";
    const requiredFieldsForFile = requiredFields[fileType];
    for (const field of requiredFieldsForFile) {
      if (!fields[field]) {
        console.warn(`${file}: 必要なフィールド ${field} がありません。`);
        isValid = false;
      }
    }

    const oldFile = await getHTTPContent(
      `https://raw.githubusercontent.com/jaoafa/jaoweb-docs/main/${file.replace(
        /\\/g,
        "/"
      )}`
    );
    const content = fs.readFileSync(file, "utf8");

    const fileDetails: FileDetails = {
      filePath: file,
      fields: fields,
      oldFile: oldFile,
      isChanged:
        crypto.createHash("sha256").update(oldFile).digest("hex") !=
        crypto.createHash("sha256").update(content).digest("hex"),
    };

    if (fileType == "blog") {
      const vaild = await forBlog(fileDetails, authors, categories);
      if (!vaild) isValid = false;
    } else {
      const vaild = await forOther(fileDetails);
      if (!vaild) isValid = false;
    }
  }

  process.exitCode = isValid ? 0 : 1;
})();
