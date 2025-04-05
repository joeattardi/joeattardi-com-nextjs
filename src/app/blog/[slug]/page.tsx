import fs from 'fs/promises';
import { getPost } from '../utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import '@/app/atom-one-dark.css';


const options = {
    mdxOptions: {
        rehypePlugins: [rehypeHighlight]
    }
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    return (
        <div className="flex flex-col gap-4 items-center w-[90vw] md:max-w-prose mx-auto">
            <h2 className="text-4xl font-bold">{post.data.title}</h2>
            <article className="prose md:prose-lg w-[90vw] md:w-full">
                <MDXRemote source={post.content} options={options}/>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    const files = await fs.readdir('./src/blog');

    return files.map((file) => ({
        slug: file.replace('.mdx', '')
    }));
}

export const dynamicParams = false;
