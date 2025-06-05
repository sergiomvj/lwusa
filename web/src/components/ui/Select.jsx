import React from 'react';

/**
 * @typedef {object} Option
 * @property {string | number} value - O valor da opção.
 * @property {string} label - O texto exibido para a opção.
 */

/**
 * @typedef {object} SelectProps
 * @property {string} id - ID do select, usado para o label.
 * @property {string} [label] - Texto do label.
 * @property {string} name - Nome do select, usado para react-hook-form.
 * @property {any} [register] - Função de registro do react-hook-form.
 * @property {string} [error] - Mensagem de erro para exibir abaixo do select.
 * @property {string} [placeholder] - Texto de placeholder (primeira opção desabilitada).
 * @property {Option[]} options - Array de objetos de opção ({ value, label }).
 * @property {string} [className] - Classes CSS adicionais para o container do select.
 * @property {string} [selectClassName] - Classes CSS adicionais para o elemento select.
 * @property {any} [value] - Valor do select (para uso não controlado ou com react-hook-form).
 * @property {(e: React.ChangeEvent<HTMLSelectElement>) => void} [onChange] - Função onChange.
 * @property {boolean} [disabled=false] - Se o select está desabilitado.
 */

/**
 * Componente de Select reutilizável, preparado para react-hook-form.
 * @param {SelectProps} props
 */
const Select = React.forwardRef((
  { 
    id, 
    label, 
    name, 
    register, 
    error, 
    placeholder, 
    options = [], 
    className = '', 
    selectClassName = '',
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
      <select
        id={id || name}
        name={name}
        disabled={disabled}
        {...registration}
        ref={ref || registration.ref}
        className={`
          mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md shadow-sm 
          focus:outline-none focus:ring-tiffany-blue focus:border-tiffany-blue 
          sm:text-sm font-figtree 
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} 
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${selectClassName}
        `}
        {...rest}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-600 font-figtree">{error}</p>}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;
