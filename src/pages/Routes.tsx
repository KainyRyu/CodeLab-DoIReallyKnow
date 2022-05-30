import React from 'react';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import MainPage from './MainPage';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainPage />} />
    </ReactRouterRoutes>
  );
}
