import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from './Routes.consts';

export const AppRouter = () => (
  <Routes>
    {routes.map((one) => (
      <Route key={one.path} path={one.path} element={one.element}>
        {one?.children}
      </Route>
    ))}
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
