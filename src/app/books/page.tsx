import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import webApiCookbookCover from '@/images/web-api-cookbook-cover.jpg';

export const metadata: Metadata = {
    title: 'Books | Joe Attardi',
    description: 'Books written by Joe Attardi'
};

export default function Books() {
    const books = [
        {
            title: 'Web API Cookbook',
            description: 'Your comprehensive guide to modern web APIs and browser capabilities. Master the tools you need to build powerful web applications.',
            cover: webApiCookbookCover,
            link: '/books/web-api-cookbook',
            amazonLink: 'https://www.amazon.com/Web-API-Cookbook-JavaScript-Applications/dp/1098150694',
            publisher: "O'Reilly Media",
            publishDate: '2024'
        },
        {
            title: 'Modern CSS',
            description: 'Master the key concepts of CSS for modern web development. Learn how to create responsive, maintainable, and beautiful websites.',
            cover: '/blog/modern-css-cover.jpg',
            link: '/books/modern-css',
            amazonLink: 'https://www.amazon.com/Modern-CSS-Master-Concepts-Development/dp/148426293X',
            publisher: 'Apress',
            publishDate: '2020'
        }
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-12">Books</h1>
            
            <div className="space-y-12">
                {books.map((book) => (
                    <article key={book.title} className="bg-white rounded-xl shadow-lg overflow-hidden border border-zinc-200 hover:shadow-xl transition-shadow duration-300 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative aspect-[3/4] bg-gray-100 md:col-span-1">
                                <Image
                                    src={book.cover}
                                    alt={`${book.title} book cover`}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority
                                />
                            </div>
                            <div className="p-8 md:col-span-2 flex flex-col">
                                <h2 className="text-3xl font-bold mb-4"><Link href={book.link}>{book.title}</Link></h2>
                                <p className="text-zinc-600 mb-6 text-lg flex-grow">{book.description}</p>
                                <div className="space-y-4">
                                    <div className="text-zinc-500">
                                        Published by {book.publisher}, {book.publishDate}
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={book.amazonLink}
                                            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Buy on Amazon
                                        </a>
                                        {book.link && (
                                            <Link
                                                href={book.link}
                                                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                                            >
                                                Learn More
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}