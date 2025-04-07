import React from 'react';
import { articles } from '../../data/articles';
import Link from 'next/link';

const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Published Articles</h1>
      <div className="space-y-8">
        {sortedArticles.map((article) => (
          <article 
            key={article.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <Link 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  {article.title}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.description}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Published on {article.source}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 