"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var fs = require("fs");
var matter = require("gray-matter");
var path = require("path");
var process_1 = require("process");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var getAllFiles, getHeaderFields, getHTTPContent, files, requiredFields, forBlog, forOther, authors, categories, isValid, _i, files_1, file, fields, fileType, requiredFieldsForFile, _a, requiredFieldsForFile_1, field, vaild, vaild;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                getAllFiles = function (searchPath) {
                    var files = fs.readdirSync(searchPath);
                    var results = [];
                    files.forEach(function (file) {
                        var fullPath = path.normalize(searchPath + "/" + file);
                        var stat = fs.statSync(fullPath);
                        if (stat.isDirectory()) {
                            results.push.apply(results, getAllFiles(fullPath));
                        }
                        else {
                            results.push(fullPath);
                        }
                    });
                    return results;
                };
                getHeaderFields = function (filePath) {
                    var content = fs.readFileSync(filePath, "utf8");
                    var data = matter(content).data;
                    return data;
                };
                getHTTPContent = function (url) { return __awaiter(void 0, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, axios_1["default"].get(url)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data];
                        }
                    });
                }); };
                files = getAllFiles(".")
                    .filter(function (x) { return x.endsWith(".md"); })
                    .filter(function (x) { return !x.includes("node_modules"); })
                    .filter(function (x) { return !x.includes("README.md"); });
                requiredFields = {
                    blog: ["title", "category", "author", "createdAt", "updatedAt"],
                    other: ["title", "description", "createdAt", "updatedAt"]
                };
                forBlog = function (file, fields, authors, categories) { return __awaiter(void 0, void 0, void 0, function () {
                    var author, category, response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                author = fields["author"];
                                if (authors.findIndex(function (x) { return x.slug === author; }) === -1) {
                                    console.error(file + ": \u57F7\u7B46\u8005\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093 (" + author + ")");
                                    return [2 /*return*/, false];
                                }
                                category = fields["category"];
                                if (categories.findIndex(function (x) { return x.slug === category; }) === -1) {
                                    console.error(file + ": \u30AB\u30C6\u30B4\u30EA\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093 (" + category + ")");
                                    return [2 /*return*/, false];
                                }
                                return [4 /*yield*/, getHTTPContent("https://raw.githubusercontent.com/jaoafa/jaoweb-docs/master/content/" +
                                        file)];
                            case 1:
                                response = _a.sent();
                                console.log(response);
                                return [2 /*return*/, true];
                        }
                    });
                }); };
                forOther = function (file, fields) {
                    return true;
                };
                return [4 /*yield*/, getHTTPContent("https://raw.githubusercontent.com/jaoafa/jaoweb/master/content/blog/authors.json")];
            case 1:
                authors = _b.sent();
                return [4 /*yield*/, getHTTPContent("https://raw.githubusercontent.com/jaoafa/jaoweb/master/content/blog/categories.json")];
            case 2:
                categories = _b.sent();
                isValid = true;
                // %f: %m
                for (_i = 0, files_1 = files; _i < files_1.length; _i++) {
                    file = files_1[_i];
                    console.log(file);
                    fields = getHeaderFields(file);
                    fileType = file.includes("blog") ? "blog" : "other";
                    requiredFieldsForFile = requiredFields[fileType];
                    for (_a = 0, requiredFieldsForFile_1 = requiredFieldsForFile; _a < requiredFieldsForFile_1.length; _a++) {
                        field = requiredFieldsForFile_1[_a];
                        if (!fields[field]) {
                            console.error(file + ": \u5FC5\u8981\u306A\u30D5\u30A3\u30FC\u30EB\u30C9 " + field + " \u304C\u3042\u308A\u307E\u305B\u3093\u3002");
                            isValid = false;
                        }
                    }
                    if (fileType == "blog") {
                        vaild = forBlog(file, fields, authors, categories);
                        if (!vaild)
                            isValid = false;
                    }
                    else {
                        vaild = forOther(file, fields);
                        if (!vaild)
                            isValid = false;
                    }
                }
                (0, process_1.exit)(isValid ? 0 : 1);
                return [2 /*return*/];
        }
    });
}); })();
