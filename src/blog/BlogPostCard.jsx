import React from 'react';
import { Link } from 'react-router-dom'; // Usaremos Link para navegação interna

// Ícone de exemplo, idealmente usaríamos react-icons ou SVGs
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const TagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zM7 15h5a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2z" />
  </svg>
);

export default function BlogPostCard({ id, title, imageUrl, summary, date, category, slug }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      {imageUrl && (
        <Link to={`/blog/${slug}`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-56 object-cover" 
          />
        </Link>
      )}
      <div className="p-6">
        {category && (
          <div className="mb-2">
            <span className="inline-block bg-tiffany-blue/20 text-tiffany-blue-darker text-xs font-semibold px-2.5 py-0.5 rounded-full">
              <TagIcon /> {category}
            </span>
          </div>
        )}
        <h2 className="text-2xl font-libre font-bold mb-3 text-hunter-green hover:text-tiffany-blue-darker transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        {date && (
          <div className="text-sm text-gray-600 mb-3 flex items-center">
            <CalendarIcon />
            <span>{date}</span>
          </div>
        )}
        <p className="text-gray-700 font-figtree mb-4 leading-relaxed">
          {summary}
        </p>
        <Link 
          to={`/blog/${slug}`} 
          className="inline-block font-figtree font-semibold text-tiffany-blue hover:text-tiffany-blue-darker transition-colors"
        >
          Leia mais &rarr;
        </Link>
      </div>
    </article>
  );
}
