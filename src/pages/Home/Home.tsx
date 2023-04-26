import React, { useState } from 'react';

import { Filter } from './Filter';
import { BarDiagram } from './BarDiagram';

import {
  useClickHandler,
  useDataRequester,
  useFilterSelectHandler,
} from './Home.hooks';

import { EFilterValues } from '../../utils';

import { HomeContainer } from './Home.styled';

import { IData } from '../../types';

const defaultValue = EFilterValues.all;

export const Home = () => {
  const [filter, setFilter] = useState<keyof IData>(
    defaultValue as keyof IData,
  );

  const clickHandler = useClickHandler();
  const filterHandler = useFilterSelectHandler(setFilter);

  const data = useDataRequester(filter);

  return (
    <HomeContainer>
      <Filter onChange={filterHandler} defaultValue={defaultValue} />
      <BarDiagram data={data} onClick={clickHandler} />
    </HomeContainer>
  );
};
