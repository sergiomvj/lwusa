import React from 'react';

/**
 * @typedef {object} TextareaProps
 * @property {string} id - ID da textarea, usado para o label.
 * @property {string} [label] - Texto do label.
 * @property {string} name - Nome da textarea, usado para react-hook-form.
 * @property {any} [register] - Função de registro do react-hook-form.
 * @property {string} [error] - Mensagem de erro para exibir abaixo da textarea.
 * @property {string} [placeholder] - Texto de placeholder.
 * @property {number} [rows=3] - Número de linhas visíveis.
 * @property {string} [className] - Classes CSS adicionais para o container da textarea.
 * @property {string} [textareaClassName] - Classes CSS adicionais para o elemento textarea.
 * @property {any} [value] - Valor da textarea (para uso não controlado ou com react-hook-form).
 * @property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange] - Função onChange.
 * @property {boolean} [disabled=false] - Se a textarea está desabilitada.
 */

/**
 * Componente de Textarea reutilizável, preparado para react-hook-form.
 * @param {TextareaProps} props
 */
const Textarea = React.forwardRef((
  { 
    id, 
    label, 
    name, 
    register, 
    error, 
    placeholder, 
    rows = 3, 
    className = '', 
    textareaClassName = '',
    disabled = false,
    ...rest 
  },
  ref
) => {
  const registration = register ? register(name) : {};

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 font-figtree mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id || name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        {...registration}
        ref={ref || registration.ref}
        className={`
          mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-tiffany-blue focus:border-tiffany-blue 
          sm:text-sm font-figtree 
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} 
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${textareaClassName}
        `}
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-red-600 font-figtree">{error}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
export default Textarea;
