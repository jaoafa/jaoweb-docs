import axios from "axios";
import * as fs from "fs";
import * as matter from "gray-matter";
import * as path from "path";
import { exit } from "process";

(async () => {
  const getAllFiles = (searchPath: string) => {
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
  };
  const getHeaderFields = (filePath: string) => {
    const content = fs.readFileSync(filePath, "utf8");
    const { data } = matter(content);
    return data;
  };

  const getHTTPContent = async (url: string) => {
    const response = await axios.get(url);
    return response.data;
  };

  const files = getAllFiles(".")
    .filter((x) => x.endsWith(".md"))
    .filter((x) => !x.includes("node_modules"))
    .filter((x) => !x.includes("README.md"));

  const requiredFields = {
    blog: ["title", "category", "author", "createdAt", "updatedAt"],
    other: ["title", "description", "createdAt", "updatedAt"],
  };

  const forBlog = async (
    file: string,
    fields: { [key: string]: any },
    authors: [{ [key: string]: any }],
    categories: [{ [key: string]: any }]
  ) => {
    // 執筆者の確認
    const author = fields["author"];
    if (authors.findIndex((x) => x.slug === author) === -1) {
      console.error(`${file}: 執筆者が正しくありません (${author})`);
      return false;
    }

    // カテゴリーの確認
    const category = fields["category"];
    if (categories.findIndex((x) => x.slug === category) === -1) {
      console.error(`${file}: カテゴリが正しくありません (${category})`);
      return false;
    }

    return true;
  };

  const forOther = (file: string, fields: { [key: string]: any }) => {
    return true;
  };

  const authors = await getHTTPContent(
    "https://raw.githubusercontent.com/jaoafa/jaoweb/master/content/blog/authors.json"
  );
  const categories = await getHTTPContent(
    "https://raw.githubusercontent.com/jaoafa/jaoweb/master/content/blog/categories.json"
  );

  let isValid = true;
  // %f: %m
  for (const file of files) {
    console.log(file);
    const fields = getHeaderFields(file);
    const fileType = file.includes("blog") ? "blog" : "other";
    const requiredFieldsForFile = requiredFields[fileType];
    for (const field of requiredFieldsForFile) {
      if (!fields[field]) {
        console.error(`${file}: 必要なフィールド ${field} がありません。`);
        isValid = false;
      }
    }

    if (fileType == "blog") {
      const vaild = forBlog(file, fields, authors, categories);
      if (!vaild) isValid = false;
    } else {
      const vaild = forOther(file, fields);
      if (!vaild) isValid = false;
    }
  }

  exit(isValid ? 0 : 1);
})();
