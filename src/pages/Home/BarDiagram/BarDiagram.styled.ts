import styled from 'styled-components';

import { borderColor, borderRadius } from '../Home.consts';

export const BarDiagramContainer = styled.div`
  border: 1px solid #${borderColor};
  border-radius: ${borderRadius}px;
  padding: 24px;
`;
