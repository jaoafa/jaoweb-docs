"use strict";
exports.__esModule = true;
var fs = require("fs");
var matter = require("gray-matter");
var path = require("path");
var getAllFiles = function (searchPath) {
    var files = fs.readdirSync(searchPath);
    var results = [];
    files.forEach(function (file) {
        var fullPath = path.normalize(searchPath + '/' + file);
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
var getHeaderFields = function (filePath) {
    var content = fs.readFileSync(filePath, 'utf8');
    var data = matter(content).data;
    return data;
};
var files = getAllFiles('../jaoafa/jaoweb-docs/')
    .filter(function (x) { return x.endsWith('.md'); })
    .filter(function (x) { return !x.includes('README.md'); });
var requiredFields = {
    blog: ['title', 'category', 'author', 'createdAt', 'updatedAt'],
    other: ['title', 'description', 'createdAt', 'updatedAt']
};
// %f: %m
for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
    var file = files_1[_i];
    var fields = getHeaderFields(file);
    var fileType = file.includes('blog') ? 'blog' : 'other';
    var requiredFieldsForFile = requiredFields[fileType];
    for (var _a = 0, requiredFieldsForFile_1 = requiredFieldsForFile; _a < requiredFieldsForFile_1.length; _a++) {
        var field = requiredFieldsForFile_1[_a];
        if (!fields[field]) {
            console.log(file + ": \u5FC5\u8981\u306A\u30D5\u30A3\u30FC\u30EB\u30C9 " + field + " \u304C\u3042\u308A\u307E\u305B\u3093\u3002");
        }
    }
}
