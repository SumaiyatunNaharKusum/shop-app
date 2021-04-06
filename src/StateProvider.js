import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext ();

export const StateProvider=({ reducer, initialState, children}) =>
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
export const useStateValue = () => useContext(StateContext);
























// // setup data layer
// //we need this to track the basket
// import React, { createContext, useContext, useReducer } from "react";




// //THIS IS DATA LAYER
// export const StateContext = createContext();

// // BUILD A PROVIDER
// export const StateProvider = ({reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer (reducer, initialState)}>
//      {children}
//     </StateContext.Provider>
// );

// //this is how i use inside component
// export const useStateValue = () => useContext(StateContext);