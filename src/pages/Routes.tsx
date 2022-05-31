import React from 'react';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="/*" element={<Navigate replace to="/not-found" />} />
    </ReactRouterRoutes>
  );
}
