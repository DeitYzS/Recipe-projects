import React from 'react';
import ErrorMessage from '@/components/ErrorMessage'; // Make sure to adjust the import path based on your project structure

const TextField = ({
  placeholder,
  modelValue,
  error,
  type,
}) => {
  const uuid = getID(); // Implement a function to generate a unique ID
  const placeholderErrorClass = !error
    ? 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
    : 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

  const handleInputChange = (value:any) => {
    // Handle the input change
    return value;
  }

  return (
    <div>
      <input
        className={`text-field pl-4 text-white ${placeholderErrorClass}`}
        type={type}
        id={uuid}
        placeholder={placeholder}
        value={modelValue}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        aria-describedby={error ? `${uuid}-error` : undefined}
        aria-invalid={error ? true : false}
        />
    </div>
  );
};

export default TextField;
