import joe from '@/images/joe4.png';
import Image from 'next/image';
import Link from 'next/link';
import SocialButton from '@/components/SocialButton';
import { PiEnvelope, PiXLogo, PiLinkedinLogo, PiGithubLogo } from 'react-icons/pi';
import * as motion from 'motion/react-client';
import { getPosts } from './blog/utils';

export default async function Home() {
    const posts = await getPosts();
    const latestPosts = posts.slice(0, 3);

    return (
        <div className="flex flex-col items-center gap-8">
            <section className="md:w-2/3 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center md:items-start gap-2"
                >
                    <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Joe Attardi</h1>
                    <p className="text-zinc-500 text-center md:text-left text-xl">
                        Software developer and author specializing in front-end development and
                        creating user-friendly, accessible interfaces.
                    </p>
                    <section className="flex items-center gap-4">
                        <SocialButton icon={PiEnvelope} href="mailto:jattardi@gmail.com" />
                        <SocialButton icon={PiXLogo} href="https://x.com/joeattardi" />
                        <SocialButton
                            icon={PiLinkedinLogo}
                            href="https://www.linkedin.com/in/joeattardi/"
                        />
                        <SocialButton icon={PiGithubLogo} href="https://github.com/joeattardi" />
                    </section>
                </motion.div>
                <motion.div
                    className="p-2 bg-white border border-zinc-200 shadow-lg rounded-full"
                    initial={{ rotateY: 30, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={joe}
                        alt="Joe Attardi"
                        className="border rounded-full border-zinc-200 w-32 md:w-64"
                    />
                </motion.div>
            </section>

            <motion.section 
                className="w-full max-w-7xl px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {latestPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.25 }}
                        >
                            <Link 
                                href={`/blog/${post.slug}`} 
                                className="group block"
                            >
                                <article className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-zinc-200">
                                    {post.image && (
                                        <div className="aspect-video relative">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
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
                                            {new Date(post.pubDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
