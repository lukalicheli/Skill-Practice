import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Login({ onLogin }) {
  return (
    <div>
      <span role="img" aria-label="stopsign">
        🛑
      </span>
      <h3>You are currently logged out</h3>
      <button type="button" onClick={onLogin}>
        Log in
      </button>
    </div>
  );
}
