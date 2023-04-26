import { useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { parseDataToTableType } from './Home.utils';
import { requestData } from '../../api/requests/diagram';

import { IData } from '../../types';
import { IClickValues } from './BarDiagram';

export const useFilterSelectHandler = (setter: (value: keyof IData) => void) =>
  useCallback((value: string) => {
    setter(value as keyof IData);
  }, []);

export const useClickHandler = () => {
  const navigate = useNavigate();

  return useCallback((values: IClickValues) => {
    navigate(`/details/${values.factory}/${values.month}`);
  }, []);
};

export const useDataRequester = (filter: keyof IData) => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    requestData().then((info) => setData(info));
  }, []);

  return useMemo(() => parseDataToTableType(data, filter), [data, filter]);
};
