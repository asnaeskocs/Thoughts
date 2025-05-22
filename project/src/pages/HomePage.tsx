import React, { useEffect, useState } from 'react';
import { getArticles, getFeaturedArticles } from '../data/articles';
import FeaturedArticles from '../components/articles/FeaturedArticles';
import ArticleList from '../components/articles/ArticleList';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      setIsLoading(true);
      
      // Short delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const featured = getFeaturedArticles();
      const articles = getArticles().filter(article => !article.featured);
      
      setFeaturedArticles(featured);
      setRecentArticles(articles);
      setIsLoading(false);
    };
    
    loadData();
  }, []);

  return (
    <div className="container-custom py-8">
      <div className="text-center mb-8 animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
          Pensieve
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A modern platform for sharing thoughts, ideas, and stories
        </p>
      </div>
      
      {isLoading ? (
        <div className="py-16 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent dark:border-primary-400"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading articles...</p>
        </div>
      ) : (
        <>
          {featuredArticles.length > 0 && (
            <FeaturedArticles articles={featuredArticles} />
          )}
          
          <ArticleList articles={recentArticles} title="Recent Articles" />
        </>
      )}
    </div>
  );
}