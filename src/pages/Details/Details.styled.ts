import styled from 'styled-components';

import { detailsContainerPadding } from './Details.consts';

export const DetailsContainer = styled.div`
  width: calc(100% - ${detailsContainerPadding * 2}px);
  height: calc(100% - ${detailsContainerPadding * 2}px);
  display: flex;
  padding: ${detailsContainerPadding}px;
`;
