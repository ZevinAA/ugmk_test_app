import { EChartsOption } from 'echarts-for-react';

import { DiagramDataPattern } from './Home.consts';

import { IData } from '../../types';

const sum = (item: IData, filter?: keyof IData) => {
  if (filter && item[filter]) {
    return item[filter] ?? 0;
  }
  const product1 = item.product1 ?? 0;
  const product2 = item.product2 ?? 0;
  const product3 = item.product3 ?? 0;

  return product1 + product2 + product3;
};

export const parseDataToTableType = (
  data: IData[],
  filter?: keyof IData,
): EChartsOption => {
  const pattern = DiagramDataPattern();

  return data.reduce((res: EChartsOption[], item) => {
    const collect = res.find((one) => one.id === item.factory_id);

    const getMonth = Number(item.date?.split('/')[1]);

    if (!Number.isNaN(getMonth)) {
      const month = Number(getMonth) - 1;

      collect.data[month] += sum(item, filter);
    }

    return res;
  }, pattern);
};
