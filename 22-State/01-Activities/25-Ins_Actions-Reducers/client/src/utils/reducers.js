import { useReducer } from 'react';
import { UPDATE_ACCOUNT_STATUS, UPDATE_ACCOUNT_NAME } from './actions';

// When dispatch is called within a component, then reducer is subsequently
// called with the current state and the action that was passed to dispatch.
export const reducer = (state, action) => {
  switch (action.type) {
    // Check if action.type === UPDATE_ACCOUNT_STATUS
    case UPDATE_ACCOUNT_STATUS:
      console.log('UPDATE_ACCOUNT_STATUS dispatched');
      // Return new state with isLoggedIn updated
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
  
    // Check if action.type === UPDATE_ACCOUNT_NAME
    case UPDATE_ACCOUNT_NAME:
      console.log('UPDATE_ACCOUNT_NAME dispatched');
      // Take the new value for userName from the action and apply that to the new state
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export function useAccountReducer(initialState) {
  return useReducer(reducer, initialState);
}
