import { EChartsOption } from 'echarts-for-react';

export const DiagramStyle = { height: '100%' };

export const getDiagramOptions = (series: EChartsOption[]) => ({
  title: {
    text: 'Продукция фабрик',
  },
  legend: {
    data: ['Фабрика А', 'Фабрика Б'],
  },
  tooltip: {
    trigger: 'item',
  },
  xAxis: [
    {
      type: 'category',
      // prettier-ignore
      data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Нов', 'Дек'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series,
});
