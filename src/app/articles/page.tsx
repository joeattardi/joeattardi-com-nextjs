import React from 'react';
import { articles } from '../../data/articles';
import Link from 'next/link';
import * as motion from 'motion/react-client';

const sortedArticles = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Published Articles</h1>
      <div className="space-y-8">
        {sortedArticles.map((article, index) => (
          <motion.article 
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <Link 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600">
                  {article.title}
                </h2>
                <span className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                {article.description}
              </p>
              <div className="text-sm text-gray-500">
                Published on {article.source}
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
} 