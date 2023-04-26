import { EChartsOption } from 'echarts-for-react';

export interface IClickValues {
  month: string | number;
  factory: string | number;
}

export interface IBarDiagramProps {
  data: EChartsOption;
  onClick?: (values: IClickValues) => void;
}
