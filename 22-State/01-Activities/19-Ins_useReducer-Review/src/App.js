import React, { useEffect } from 'react';
import NameComponent from './components/NameComponent';

export default function App() {
  useEffect(() => {
    document.title = 'Unit 22.2: useReducer Review';
  }, []);

  return <NameComponent />;
}
