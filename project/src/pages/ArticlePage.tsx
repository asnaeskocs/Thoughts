import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { getArticleById, getArticleComments, addComment } from '../data/articles';
import CommentList from '../components/comments/CommentList';
import CommentForm from '../components/comments/CommentForm';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    
    // Simulate API call
    const loadData = async () => {
      setIsLoading(true);
      
      // Short delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const articleData = getArticleById(id);
      if (!articleData) {
        navigate('/404');
        return;
      }
      
      const articleComments = getArticleComments(id);
      
      setArticle(articleData);
      setComments(articleComments);
      setIsLoading(false);
      
      // Update document title
      document.title = `${articleData.title} | Pensieve`;
    };
    
    loadData();
    
    return () => {
      // Reset title when leaving page
      document.title = 'Pensieve - Article Publishing Platform';
    };
  }, [id, navigate]);

  const handleCommentSubmit = (author, content) => {
    const newComment = addComment(id, author, content);
    setComments(prevComments => [...prevComments, newComment]);
  };

  if (isLoading) {
    return (
      <div className="container-custom py-8">
        <div className="py-16 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent dark:border-primary-400"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 animate-fade-in">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
            {article.tags.map(tag => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {article.author}
              </p>
              <time dateTime={article.createdAt}>
                {format(new Date(article.createdAt), 'MMMM d, yyyy')}
              </time>
            </div>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        
        <div 
          className="prose prose-lg max-w-none dark:prose-invert mb-8 animate-fade-in"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        
        <section className="mt-8">
          <CommentList comments={comments} />
          <CommentForm articleId={id} onSubmit={handleCommentSubmit} />
        </section>
      </article>
    </div>
  );
}