import React from 'react';

/**
 * @typedef {object} ButtonProps
 * @property {'button' | 'submit' | 'reset'} [type='button'] - Tipo do botão.
 * @property {React.ReactNode} children - Conteúdo do botão.
 * @property {() => void} [onClick] - Função a ser chamada no clique.
 * @property {string} [className] - Classes CSS adicionais.
 * @property {boolean} [disabled=false] - Se o botão está desabilitado.
 * @property {'primary' | 'secondary' | 'danger' | 'ghost'} [variant='primary'] - Variante de estilo do botão.
 * @property {'sm' | 'md' | 'lg'} [size='md'] - Tamanho do botão.
 */

/**
 * Componente de Botão reutilizável.
 * @param {ButtonProps} props
 */
const Button = ({ 
  type = 'button', 
  children, 
  onClick, 
  className = '', 
  disabled = false, 
  variant = 'primary', 
  size = 'md' 
}) => {
  const baseStyle = 'font-figtree font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out';
  
  const variantStyles = {
    primary: 'bg-tiffany-blue text-white hover:bg-tiffany-blue-dark focus:ring-tiffany-blue',
    secondary: 'bg-hunter-green text-white hover:bg-hunter-green-dark focus:ring-hunter-green',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-transparent text-hunter-green hover:bg-gray-100 focus:ring-hunter-green border border-hunter-green',
    // Adicione mais variantes conforme necessário
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const disabledStyle = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyle}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? disabledStyle : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
