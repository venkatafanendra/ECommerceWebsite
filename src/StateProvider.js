import React, { createContext, useContext, useReducer } from 'react';

// Preparing the data layer
export const StateContext = createContext();

// Wrapping the app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from data layer
export const useStateValue = () => useContext(StateContext);
