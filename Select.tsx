import React from 'react';

interface SelectProps {
  options: { key: number; value: string; displayValue: string }[];
  onChange: any;
}

export const Select = ({ options, onChange }: SelectProps) => {
  return (
    <select onChange={onChange}>
      {options.map((el) => (
        <option key={el.key} value={el.value}>
          {el.displayValue}
        </option>
      ))}
    </select>
  );
};
