import React from 'react';

/**
 * @typedef {object} CheckboxProps
 * @property {string} id - ID do checkbox, usado para o label.
 * @property {string} [label] - Texto do label.
 * @property {string} name - Nome do checkbox, usado para react-hook-form.
 * @property {any} [register] - Função de registro do react-hook-form.
 * @property {string} [error] - Mensagem de erro para exibir.
 * @property {string} [className] - Classes CSS adicionais para o container.
 * @property {boolean} [disabled=false] - Se o checkbox está desabilitado.
 * @property {any} [value] - O valor do checkbox quando marcado (opcional, para cenários específicos).
 * @property {boolean} [checked] - Estado controlado do checkbox.
 * @property {(e: React.ChangeEvent<HTMLInputElement>) => void} [onChange] - Função onChange.
 */

/**
 * Componente de Checkbox reutilizável, preparado para react-hook-form.
 * @param {CheckboxProps} props
 */
const Checkbox = React.forwardRef((
  { 
    id, 
    label, 
    name, 
    register, 
    error, 
    className = '', 
    disabled = false, 
    ...rest 
  },
  ref
) => {
  const registration = register ? register(name) : {};

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id || name}
          name={name}
          disabled={disabled}
          {...registration}
          ref={ref || registration.ref}
          className={`
            h-4 w-4 text-tiffany-blue border-gray-300 rounded 
            focus:ring-tiffany-blue focus:ring-offset-0 
            ${disabled ? 'cursor-not-allowed opacity-50' : ''}
            ${error ? 'border-red-500' : ''}
          `}
          {...rest}
        />
        {label && (
          <label htmlFor={id || name} className={`ml-2 block text-sm font-medium font-figtree ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </label>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-600 font-figtree">{error}</p>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
