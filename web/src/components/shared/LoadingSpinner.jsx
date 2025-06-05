import React from 'react';

/**
 * @typedef {object} LoadingSpinnerProps
 * @property {string} [size='md'] - Tamanho do spinner ('sm', 'md', 'lg').
 * @property {string} [color='text-tiffany-blue'] - Cor do spinner (classe Tailwind).
 * @property {string} [className] - Classes CSS adicionais.
 * @property {string} [label] - Texto opcional a ser exibido abaixo do spinner.
 */

/**
 * Componente de Loading Spinner.
 * @param {LoadingSpinnerProps} props
 */
const LoadingSpinner = ({ 
  size = 'md', 
  color = 'text-tiffany-blue', 
  className = '',
  label
}) => {
  const sizeClasses = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg 
        className={`animate-spin ${sizeClasses[size]} ${color}`}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        ></circle>
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {label && <p className={`mt-2 text-sm font-figtree ${color}`}>{label}</p>}
    </div>
  );
};

export default LoadingSpinner;
