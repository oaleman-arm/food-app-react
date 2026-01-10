import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = (() => {
    try {
      return !!localStorage.getItem('user');
    } catch (e) {
      console.error('Error checking authentication:', e);
    }
  })();

  return isAuthenticated ? children : <Navigate to="/" replace />;
};