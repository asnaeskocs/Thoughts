import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { type Comment } from '../../data/articles';

type CommentListProps = {
  comments: Comment[];
};

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="py-4 text-center text-gray-500 dark:text-gray-400">
        No comments yet. Be the first to comment!
      </div>
    );
  }

  return (
    <div className="space-y-6 mt-6">
      <h3 className="text-xl font-serif font-bold">
        Comments ({comments.length})
      </h3>
      
      {comments.map((comment, index) => (
        <div 
          key={comment.id}
          className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900 dark:text-white">
              {comment.author}
            </span>
            <time className="text-sm text-gray-500 dark:text-gray-400" dateTime={comment.createdAt}>
              {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
            </time>
          </div>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}