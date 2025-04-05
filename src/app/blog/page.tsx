import fs from 'fs/promises';
import Link from 'next/link';
import matter from 'gray-matter';
import Image from 'next/image';

type Post = {
    title: string;
    slug: string;
    pubDate: string;
    description?: string;
    image?: string;
}

const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
};

export default async function BlogPage() {
    const files = await fs.readdir('./src/blog');

    const posts = await Promise.all(
        files.map(async (file) => {
            const content = await fs.readFile(`./src/blog/${file}`, 'utf8');
            const { data } = matter(content);
            return { ...data, slug: file.replace('.mdx', '') };
        })
    ) as Post[];

    posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    const featuredPosts = posts.slice(0, 3);
    const otherPosts = posts.slice(3);
    
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            
            {/* Featured Posts */}
            <section className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredPosts.map((post) => (
                        <Link 
                            href={`/blog/${post.slug}`} 
                            key={post.slug}
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
                    ))}
                </div>
            </section>

            {/* Other Posts */}
            <section>
                <div className="space-y-4">
                    {otherPosts.map((post) => (
                        <Link 
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="block"
                        >
                            <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-zinc-200">
                                <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
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
            </section>
        </div>
    );
}
