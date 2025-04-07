import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from './utils';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';

export const metadata: Metadata = {
    title: 'Blog | Joe Attardi',
    description: 'Blog posts by Joe Attardi',
};

const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
};

export default async function BlogPage() {
    const posts = await getPosts();
    const featuredPosts = posts.slice(0, 3);
    const otherPosts = posts.slice(3);
    
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            
            {/* Featured Posts */}
            <section className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {featuredPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Link 
                                    href={`/blog/${post.slug}`} 
                                    className="group block"
                                >
                                    <article className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-zinc-200">
                                        <div className="aspect-video relative">
                                            <Image
                                                src={post.image || '/blog/placeholder.svg'}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                                {post.title}
                                            </h3>
                                            {post.description && (
                                                <p className="text-zinc-600 mb-4 flex-grow">
                                                    {post.description}
                                                </p>
                                            )}
                                            <time className="text-sm text-zinc-500">
                                                {formatDate(post.pubDate)}
                                            </time>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Other Posts */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
                <h2 className="text-2xl font-semibold mb-6 text-zinc-800">More Articles</h2>
                <div className="space-y-8">
                    {otherPosts.map((post) => (
                        <Link 
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="block group"
                        >
                            <article className="flex flex-col">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                {post.description && (
                                    <p className="text-zinc-600 mb-2">
                                        {post.description}
                                    </p>
                                )}
                                <time className="text-sm text-zinc-500">
                                    {formatDate(post.pubDate)}
                                </time>
                            </article>
                        </Link>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
