import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="container-custom py-16">
      <div className="max-w-md mx-auto text-center animate-fade-in">
        <FileQuestion className="h-20 w-20 mx-auto text-gray-400" />
        
        <h1 className="mt-6 text-3xl font-serif font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h1>
        
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-8">
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}