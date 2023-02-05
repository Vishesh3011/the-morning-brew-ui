import React, { createContext , useContext, useReducer} from 'react';

//Prepares Data Layer
export const StateContext = createContext();

//Wrap our app
export const StateProvider = ({ reducer, initialState, children }) =>
(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from Data Layer
export const useStateValue = () => useContext(StateContext);