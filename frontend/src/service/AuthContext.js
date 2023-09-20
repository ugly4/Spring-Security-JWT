import React from 'react';

export const Context = React.createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value) => {},
});