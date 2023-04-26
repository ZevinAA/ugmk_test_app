import React from 'react';
import ReactECharts from 'echarts-for-react';

import { DiagramStyle, getDiagramOptions } from './BarDiagram.utils';

import { BarDiagramContainer } from './BarDiagram.styled';

import { IBarDiagramProps } from './BarDiagram.types';
import { useDiagramClick } from './BarDiagram.hooks';

export const BarDiagram = ({ data, onClick }: IBarDiagramProps) => {
  const options = getDiagramOptions(data);

  const diagramRef = useDiagramClick(onClick);

  return (
    <BarDiagramContainer>
      <ReactECharts
        ref={diagramRef}
        style={DiagramStyle}
        lazyUpdate={false}
        option={options}
      />
    </BarDiagramContainer>
  );
};
