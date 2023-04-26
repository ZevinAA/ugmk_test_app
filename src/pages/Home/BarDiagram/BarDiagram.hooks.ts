import { useEffect, useRef } from 'react';
import ReactECharts, { EChartsOption } from 'echarts-for-react';

import { IClickValues } from './BarDiagram.types';

export const useDiagramClick = (onClick?: (values: IClickValues) => void) => {
  const chartRef = useRef<ReactECharts>(null);

  useEffect(() => {
    const instance = chartRef?.current?.getEchartsInstance();
    instance?.on('click', (e: EChartsOption): void => {
      onClick && onClick({ factory: e.seriesIndex, month: e.dataIndex });
    });
  }, []);

  return chartRef;
};
