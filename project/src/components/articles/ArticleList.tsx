import React from 'react';
import ArticleCard from './ArticleCard';
import { type Article } from '../../data/articles';

type ArticleListProps = {
  articles: Article[];
  title?: string;
};

export default function ArticleList({ articles, title }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No articles found.</p>
      </div>
    );
  }

  return (
    <section className="py-8">
      {title && (
        <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}