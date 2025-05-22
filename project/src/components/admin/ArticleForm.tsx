import React, { useState, useEffect } from 'react';
import { type Article } from '../../data/articles';

type ArticleFormProps = {
  article?: Article;
  onSubmit: (article: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
};

export default function ArticleForm({ article, onSubmit, onCancel }: ArticleFormProps) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [featured, setFeatured] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setSlug(article.slug);
      setExcerpt(article.excerpt);
      setContent(article.content);
      setAuthor(article.author);
      setTags(article.tags.join(', '));
      setFeatured(article.featured);
      setImageUrl(article.imageUrl);
    }
  }, [article]);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!article || slug === generateSlug(article.title)) {
      setSlug(generateSlug(newTitle));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!slug.trim()) newErrors.slug = 'Slug is required';
    if (!excerpt.trim()) newErrors.excerpt = 'Excerpt is required';
    if (!content.trim()) newErrors.content = 'Content is required';
    if (!author.trim()) newErrors.author = 'Author is required';
    if (!imageUrl.trim()) newErrors.imageUrl = 'Image URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Process tags
    const tagArray = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
    
    // Simulate network request
    setTimeout(() => {
      onSubmit({
        title,
        slug,
        excerpt,
        content,
        author,
        tags: tagArray,
        featured,
        imageUrl,
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className={`input ${errors.title ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
          placeholder="Enter article title"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-error-600">{errors.title}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className={`input ${errors.slug ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
          placeholder="url-friendly-slug"
        />
        {errors.slug && (
          <p className="mt-1 text-sm text-error-600">{errors.slug}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Excerpt
        </label>
        <input
          type="text"
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className={`input ${errors.excerpt ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
          placeholder="Brief summary of the article"
        />
        {errors.excerpt && (
          <p className="mt-1 text-sm text-error-600">{errors.excerpt}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={`input ${errors.author ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
          placeholder="Article author"
        />
        {errors.author && (
          <p className="mt-1 text-sm text-error-600">{errors.author}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Content (HTML)
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`input min-h-[300px] font-mono text-sm ${errors.content ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
          placeholder="<p>Article content in HTML format</p>"
          rows={10}
        />
        {errors.content && (
          <p className="mt-1 text-sm text-error-600">{errors.content}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="input"
          placeholder="React, JavaScript, Web Development"
        />
      </div>
      
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className={`input ${errors.imageUrl ? 'border-error-500 focus:border-error-500 focus:ring-error-500' : ''}`}
          placeholder="https://example.com/image.jpg"
        />
        {errors.imageUrl && (
          <p className="mt-1 text-sm text-error-600">{errors.imageUrl}</p>
        )}
        {imageUrl && (
          <div className="mt-2 aspect-video w-full max-w-md overflow-hidden rounded-md">
            <img 
              src={imageUrl} 
              alt="Article preview" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Invalid+Image+URL';
              }}
            />
          </div>
        )}
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label htmlFor="featured" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
          Feature this article
        </label>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="btn btn-secondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : article ? 'Update Article' : 'Create Article'}
        </button>
      </div>
    </form>
  );
}