import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { getArticles, addArticle, updateArticle, deleteArticle } from '../data/articles';
import { useAuth } from '../context/AuthContext';
import ArticleRow from '../components/admin/ArticleRow';
import ArticleForm from '../components/admin/ArticleForm';

export default function AdminPage() {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin } = useAuth();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      navigate('/login');
      return;
    }
    
    // Update document title
    document.title = 'Admin Dashboard | Pensieve';
    
    // Simulate API call
    const loadData = async () => {
      setIsLoading(true);
      
      // Short delay to simulate network request
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const allArticles = getArticles();
      setArticles(allArticles);
      setIsLoading(false);
    };
    
    loadData();
    
    return () => {
      // Reset title when leaving page
      document.title = 'Pensieve - Article Publishing Platform';
    };
  }, [isAuthenticated, isAdmin, navigate]);

  const handleCreateArticle = () => {
    setCurrentArticle(null);
    setIsEditing(false);
    setShowForm(true);
  };

  const handleEditArticle = (id) => {
    const article = articles.find(article => article.id === id);
    if (article) {
      setCurrentArticle(article);
      setIsEditing(true);
      setShowForm(true);
    }
  };

  const handleDeleteArticle = (id) => {
    if (window.confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
      const success = deleteArticle(id);
      if (success) {
        setArticles(articles.filter(article => article.id !== id));
      }
    }
  };

  const handleFormSubmit = (articleData) => {
    if (isEditing && currentArticle) {
      const updatedArticle = updateArticle(currentArticle.id, articleData);
      if (updatedArticle) {
        setArticles(
          articles.map(article => 
            article.id === updatedArticle.id ? updatedArticle : article
          )
        );
      }
    } else {
      const newArticle = addArticle(articleData);
      setArticles([newArticle, ...articles]);
    }
    
    setShowForm(false);
    setCurrentArticle(null);
    setIsEditing(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setCurrentArticle(null);
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="container-custom py-8">
        <div className="py-16 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-600 border-r-transparent dark:border-primary-400"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>
        
        {!showForm && (
          <button
            onClick={handleCreateArticle}
            className="btn btn-primary"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Article
          </button>
        )}
      </div>
      
      {showForm ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-serif font-bold mb-4">
            {isEditing ? 'Edit Article' : 'Create New Article'}
          </h2>
          <ArticleForm
            article={currentArticle}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          {articles.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No articles yet. Create your first article to get started.
              </p>
              <button
                onClick={handleCreateArticle}
                className="btn btn-primary"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Article
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                      Author
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell">
                      Tags
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                      Updated
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {articles.map(article => (
                    <ArticleRow
                      key={article.id}
                      article={article}
                      onEdit={handleEditArticle}
                      onDelete={handleDeleteArticle}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}