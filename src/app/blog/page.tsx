import fs from 'fs/promises';
import Link from 'next/link';
import matter from 'gray-matter';

type Post = {
    title: string;
    slug: string;
}

export default async function BlogPage() {
    const files = await fs.readdir('./src/blog');

    const posts = await Promise.all(
        files.map(async (file) => {
            const content = await fs.readFile(`./src/blog/${file}`, 'utf8');
            const { data } = matter(content);
            return { ...data, slug: file.replace('.mdx', '') };
        })
    ) as Post[];

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
