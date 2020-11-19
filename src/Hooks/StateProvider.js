import React, { createContext, useContext, useReducer} from 'react';

// preparing the data layer
const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => {
    return useContext(StateContext);
}