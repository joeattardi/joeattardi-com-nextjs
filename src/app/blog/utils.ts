import fs from 'fs/promises';
import matter from 'gray-matter';

type Post = {
    title: string;
    slug: string;
    pubDate: string;
    description?: string;
    image?: string;
}

export async function getPosts() {
    const files = await fs.readdir('./src/blog');

    const posts = await Promise.all(
        files.map(async (file) => {
            const content = await fs.readFile(`./src/blog/${file}`, 'utf8');
            const { data } = matter(content);
            return { ...data, slug: file.replace('.mdx', '') };
        })
    ) as Post[];

    posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return posts;
}

export async function getPost(slug: string) {
    const fileContent = await fs.readFile(`./src/blog/${slug}.mdx`, 'utf8');
    const { content, data } = matter(fileContent);
    return { content, data, slug };
}
