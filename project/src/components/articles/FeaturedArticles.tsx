import React from 'react';
import ArticleCard from './ArticleCard';
import { type Article } from '../../data/articles';

type FeaturedArticlesProps = {
  articles: Article[];
};

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-8 animate-slide-up">
      <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} featured={true} />
        ))}
      </div>
    </section>
  );
}