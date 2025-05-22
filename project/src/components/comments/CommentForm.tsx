import React, { useState } from 'react';

type CommentFormProps = {
  articleId: string;
  onSubmit: (author: string, content: string) => void;
};

export default function CommentForm({ articleId, onSubmit }: CommentFormProps) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!author.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!content.trim()) {
      setError('Please enter a comment');
      return;
    }
    
    setError(null);
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      onSubmit(author, content);
      setAuthor('');
      setContent('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 animate-fade-in">
      <h3 className="text-xl font-serif font-bold mb-4">Leave a Comment</h3>
      
      {error && (
        <div className="mb-4 p-3 bg-error-100 border border-error-200 text-error-800 rounded-md">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input"
          placeholder="Your name"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Comment
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input min-h-[120px]"
          placeholder="Share your thoughts..."
          required
          rows={4}
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Post Comment'}
      </button>
    </form>
  );
}