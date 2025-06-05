import React from 'react';

/**
 * @typedef {object} InputProps
 * @property {string} id - ID do input, usado para o label.
 * @property {string} [label] - Texto do label.
 * @property {string} [type='text'] - Tipo do input (text, email, password, number, etc.).
 * @property {string} name - Nome do input, usado para react-hook-form.
 * @property {any} [register] - Função de registro do react-hook-form.
 * @property {string} [error] - Mensagem de erro para exibir abaixo do input.
 * @property {string} [placeholder] - Texto de placeholder.
 * @property {string} [className] - Classes CSS adicionais para o container do input.
 * @property {string} [inputClassName] - Classes CSS adicionais para o elemento input.
 * @property {any} [value] - Valor do input (para uso não controlado ou com react-hook-form).
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Função onChange.
 * @property {boolean} [disabled=false] - Se o input está desabilitado.
 */

/**
 * Componente de Input reutilizável, preparado para react-hook-form.
 * @param {InputProps} props
 */
const Input = React.forwardRef((
  { 
    id, 
    label, 
    type = 'text', 
    name, 
    register, 
    error,
    placeholder,
    className = '', 
    inputClassName = '',
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
      <input
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        {...registration}
        ref={ref || registration.ref} // Combina ref externo com o ref do react-hook-form
        className={`
          mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-tiffany-blue focus:border-tiffany-blue 
          sm:text-sm font-figtree 
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} 
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${inputClassName}
        `}
        {...rest} // Permite passar outras props HTML como value, onChange, etc.
      />
      {error && <p className="mt-1 text-xs text-red-600 font-figtree">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input'; // Adiciona displayName para o React DevTools
export default Input;
