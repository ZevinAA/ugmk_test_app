import styled from 'styled-components';

import { borderColor, borderRadius } from '../Home.consts';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 16px;
  padding: 12px;
  border-radius: ${borderRadius}px;
  border: 1px solid #${borderColor};
`;

export const FilterSelect = styled.select`
  min-width: 150px;
`;
