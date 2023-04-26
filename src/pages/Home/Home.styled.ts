import styled from 'styled-components';

import { containerPadding } from './Home.consts';

export const HomeContainer = styled.div`
  width: calc(100% - ${containerPadding * 2}px);
  height: calc(100% - ${containerPadding * 2}px);
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 32px;
  padding: ${containerPadding}px;
`;
