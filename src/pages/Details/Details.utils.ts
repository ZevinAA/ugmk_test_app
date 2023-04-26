import { EChartsOption } from 'echarts-for-react';

import { FactoryList, MonthList } from './Details.consts';

import { IData } from '../../types';
import { IPieChartData } from './Details.types';

export const PieChartPattern = (): EChartsOption[] => [
  {
    id: 'product1',
    value: 0,
    name: 'Продукт 1',
  },
  {
    id: 'product2',
    value: 0,
    name: 'Продукт 2',
  },
  {
    id: 'product3',
    value: 0,
    name: 'Продукт 3',
  },
];

export const parseDataForPieChart = (
  data: IData[],
  factory: number,
  month: number,
): IPieChartData[] => {
  const pattern = PieChartPattern();

  return data
    .reduce((res: EChartsOption[], item) => {
      const checkFactoryMonth =
        item.factory_id !== factory + 1 ||
        Number(item.date?.split('/')[1]) !== month + 1;

      if (checkFactoryMonth) return res;

      Object.entries(item).forEach(([key, value]) => {
        if (key) {
          const productValue = res.find((one) => one.id === key);
          if (productValue) productValue.value += value;
        }
      });

      return res;
    }, pattern)
    .filter((one) => one.value);
};

export const createTitle = (factory: number, month: number): string =>
  `Статистика по продукции ${FactoryList[factory]} за ${MonthList[month]}`;

export const getPieChartOption = (
  title: string,
  data: IPieChartData[],
): EChartsOption => ({
  title: {
    text: title,
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Произведено',
      type: 'pie',
      data,
    },
  ],
});
