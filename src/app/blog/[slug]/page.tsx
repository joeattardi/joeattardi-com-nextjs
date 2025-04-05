import fs from 'fs/promises';
import { getPost } from '../utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import '@/app/atom-one-dark.css';
import Image from 'next/image';

const options = {
    mdxOptions: {
        rehypePlugins: [rehypeHighlight]
    }
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    return (
        <div className="flex flex-col gap-8 items-center w-[90vw] md:max-w-prose mx-auto">
            <img src={post.data.image} alt={post.data.title} className="rounded-xl shadow-lg" />
            <div className="flex flex-col bg-slate-200 p-4 rounded-xl">
                <h2 className="text-4xl font-bold">{post.data.title}</h2>
                <h3 className="text-lg text-zinc-500">{post.data.description}</h3>
            </div>
            <article className="prose md:prose-lg prose-h2:my-2 prose-h3:my-2 prose-li:m-0 w-[90vw] md:w-full">
                <MDXRemote source={post.content} options={options} />
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
