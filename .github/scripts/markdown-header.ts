import * as fs from 'fs';
import * as matter from 'gray-matter';
import * as path from 'path';

const getAllFiles = (searchPath: string) => {
    const files = fs.readdirSync(searchPath)
    const results = []

    files.forEach(file => {
        const fullPath = path.normalize(searchPath + '/' + file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            results.push(...getAllFiles(fullPath))
        } else {
            results.push(fullPath)
        }
    })
    return results
}
const getHeaderFields = (filePath: string) => {
    const content = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(content)
    return data
}

const files = getAllFiles('../jaoafa/jaoweb-docs/')
    .filter(x => x.endsWith('.md'))
    .filter(x => !x.includes('README.md'))

const requiredFields = {
    blog: ['title', 'category', 'author', 'createdAt', 'updatedAt'],
    other: ['title', 'description', 'createdAt', 'updatedAt'],
}

// %f: %m
for (const file of files) {
    const fields = getHeaderFields(file)
    const fileType = file.includes('blog') ? 'blog' : 'other'
    const requiredFieldsForFile = requiredFields[fileType]
    for (const field of requiredFieldsForFile) {
        if (!fields[field]) {
            console.log(`${file}: 必要なフィールド ${field} がありません。`)
        }
    }
}