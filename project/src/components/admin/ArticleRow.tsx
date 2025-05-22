import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react';
import { type Article } from '../../data/articles';

type ArticleRowProps = {
  article: Article;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function ArticleRow({ article, onEdit, onDelete }: ArticleRowProps) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <td className="px-4 py-3 text-sm">
        <div className="font-medium text-gray-900 dark:text-white truncate max-w-xs">
          {article.title}
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-xs truncate">
          {article.slug}
        </div>
      </td>
      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">
        {article.author}
      </td>
      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
        <div className="flex flex-wrap gap-1">
          {article.tags.map(tag => (
            <span key={tag} className="tag text-xs">
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400 hidden sm:table-cell">
        {formatDistanceToNow(new Date(article.updatedAt), { addSuffix: true })}
      </td>
      <td className="px-4 py-3 text-sm">
        {article.featured ? (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-300">
            Featured
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
            Regular
          </span>
        )}
      </td>
      <td className="px-4 py-3 text-sm text-right whitespace-nowrap">
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(article.id)}
            className="p-1 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 focus:outline-none"
            aria-label={`Edit ${article.title}`}
          >
            <Edit className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(article.id)}
            className="p-1 text-gray-500 hover:text-error-600 dark:text-gray-400 dark:hover:text-error-400 focus:outline-none"
            aria-label={`Delete ${article.title}`}
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}