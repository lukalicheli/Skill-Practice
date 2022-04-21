import React, { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  // Here we declare a state boolean variable "loggedIn" and a function to update it.
  const [loggedIn, setLoggedIn] = useState(false);

  // Lets log our our loggedIn variable to see it change in real time
  console.log('App -> loggedIn', loggedIn);

  // If we are loggedIn Home is rendered; else, Login is rendered.
  return (
    <>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. */}
      {loggedIn ? (
        // Pass a function as the onLogout prop to set loggedIn state to false
        // when the user clicks the Logout button.
        <Home onLogout={() => setLoggedIn(false)} />
      ) : (
        // Pass a function as the onLogin prop to set loggedIn state to true
        // when the user clicks on the Login button.
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
