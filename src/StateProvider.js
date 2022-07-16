import React, { createContext, useContext, useReducer } from 'react';

// Prepares the date layer
export const StateContext = createContext();

// wrap our app and provide the data layer to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the date layer
export const useStateValue = () => useContext(StateContext);
