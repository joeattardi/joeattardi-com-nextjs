import fs from 'fs/promises';
import { getPost } from '../utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import '@/app/atom-one-dark.css';
import readingDuration from 'reading-duration';
import { PiCalendar, PiClock, PiUser } from 'react-icons/pi';
import joeBw from '@/images/joe-bw.png';
import Image from 'next/image';
const options = {
    mdxOptions: {
        rehypePlugins: [rehypeHighlight]
    }
};

// Helper function to get post data - this will be reused
async function getPostData(params: Promise<{ slug: string }>) {
    const { slug } = await params;
    return getPost(slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const post = await getPostData(params);

    return {
        title: `${post.data.title} | Joe Attardi`,
        alternates: {
            canonical: post.data.canonicalUrl
        },
        openGraph: {
            title: post.data.title,
            description: post.data.description,
            images: [
                {
                    url: post.data.ogImage || '/opengraph-image.png',
                    width: 1200,
                    height: 630,
                    alt: post.data.title
                }
            ]
        }
    };
}

const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const post = await getPostData(params);
    const readingTime = readingDuration(post.content, { emoji: false });

    return (
        <>
            <div className="flex flex-col gap-8 items-center w-[90vw] md:max-w-prose mx-auto">
                <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-4xl font-bold">{post.data.title}</h2>
                    <h3 className="text-lg text-zinc-500">{post.data.description}</h3>
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
                        <div className="text-zinc-600 self-start flex items-center gap-1">
                            <Image src={joeBw} alt="Joe Attardi" width={32} height={32} /> Joe
                            Attardi
                            <span className="hidden md:block"> • </span>
                            <PiCalendar />
                            {formatDate(post.data.pubDate)}
                            <span className="hidden md:block"> • </span>
                            <PiClock /> {readingTime}
                        </div>
                    </div>
                </div>
                {post.data.image && (
                    <div className="flex flex-col gap-2">
                        <img
                            src={post.data.image}
                            alt={post.data.title}
                            className="rounded-xl shadow-lg"
                        />
                        <small>{post.data.imageCredit}</small>
                    </div>
                )}
                <article className="prose md:prose-lg prose-h2:my-2 prose-h3:my-2 prose-li:m-0 prose-img:mx-auto w-[90vw] md:w-full">
                    <MDXRemote source={post.content} options={options} />
                </article>
            </div>
        </>
    );
}

export async function generateStaticParams() {
    const files = await fs.readdir('./src/blog');

    return files.map((file) => ({
        slug: file.replace('.mdx', '')
    }));
}

export const dynamicParams = false;
