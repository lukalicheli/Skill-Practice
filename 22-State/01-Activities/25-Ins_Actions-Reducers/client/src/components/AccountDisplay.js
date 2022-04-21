import React, { useState } from 'react';
// Import the actions used within this component
import { UPDATE_ACCOUNT_NAME, UPDATE_ACCOUNT_STATUS } from '../utils/actions';
import { useAccountContext } from '../utils/GlobalState';

export default function AccountDisplay() {
  const [state, dispatch] = useAccountContext();
  const [newName, setNewName] = useState(state.userName);
  const [updatingName, setUpdatingName] = useState(false);

  const toggleUpdateName = () => {
    setUpdatingName(!updatingName);
  };

  const handleInputSubmit = () => {
    // Calling dispatch lets the reducer know how to update the global state
    dispatch({
      // type indicates which action should be performed
      type: UPDATE_ACCOUNT_NAME,
      // in order to perform the desired action, the reducer needs a value for userName
      userName: newName,
    });
    setUpdatingName(!updatingName);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <>
      {state.isLoggedIn ? (
        <>
          <h1>Welcome {state.userName}!</h1>
          {updatingName ? (
            <div>
              <input
                placeholder="New userName"
                onChange={handleInputChange}
                onSubmit={handleInputSubmit}
              ></input>
              {/* The user can click submit to update the username */}
              <button onClick={handleInputSubmit}>Submit</button>
            </div>
          ) : (
            <button onClick={toggleUpdateName}>Update userName</button>
          )}
          <span>You are currently signed in ✅</span>
        </>
      ) : (
        <h1>Welcome! Please log in!</h1>
      )}
      {/* User can click the button to login or logout */}
      <button
        onClick={() =>
          dispatch({
            // type indicates the desired action the reducer should perform
            type: UPDATE_ACCOUNT_STATUS,
          })
        }
      >
        {state.isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </>
  );
}
