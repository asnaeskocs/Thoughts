import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { type Article } from '../../data/articles';

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article 
      className={`card group hover:transform hover:-translate-y-1 transition-all duration-300 animate-fade-in ${
        featured ? 'col-span-full md:col-span-2' : ''
      }`}
    >
      <Link to={`/article/${article.id}`} className="block h-full">
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-accent-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-16">
            <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
              {article.title}
            </h3>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={article.createdAt}>
              {formatDistanceToNow(new Date(article.createdAt), { addSuffix: true })}
            </time>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            {article.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {article.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}