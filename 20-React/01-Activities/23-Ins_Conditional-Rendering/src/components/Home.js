import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Home({ onLogout }) {
  return (
    <div>
      <span role="img" aria-label="tada">
        🎉
      </span>
      <h3>You are signed in!</h3>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
}
