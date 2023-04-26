import React from 'react';

import { filters } from '../../../utils';

import { FilterContainer, FilterSelect } from './Filter.styled';

import { IFilterProps } from './Filter.types';

export const Filter = ({
  options = filters,
  defaultValue,
  onChange,
}: IFilterProps) => {
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(e.target.value);

  return (
    <FilterContainer>
      <label htmlFor='pet-select'>Фильтр по типу продукции</label>
      <FilterSelect
        onChange={selectHandler}
        defaultValue={defaultValue}
        id='pet-select'
      >
        {options.map((one) => (
          <option key={one.value} value={one.value}>
            {one.label}
          </option>
        ))}
      </FilterSelect>
    </FilterContainer>
  );
};
