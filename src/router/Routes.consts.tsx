import { Home } from '../pages/Home';

import { IRoute } from './Router.types';
import { Details } from '../pages/Details';

export const BasicRoutes = {
  diagram: '/',
  detail: '/details/:factory/:month',
};

export const routes: IRoute[] = [
  {
    path: BasicRoutes.diagram,
    element: <Home />,
  },
  {
    path: BasicRoutes.detail,
    element: <Details />,
  },
];
