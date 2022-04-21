import React, { useReducer } from 'react';

// Import our reducer
import { reducer } from '../utils/reducers';

// Import our action
import { SUBMIT, CHANGE } from '../utils/actions';

const initialState = {
  name: '1337user',
  isValid: false,
};

export default function ThemeComponent() {
  // Set up our useReducer hook. Accepts two arguments - the reducer and an initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    console.log('input changed', e.target.value);
    dispatch({
      type: CHANGE,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = state.isValid
      ? 'Username is valid!'
      : 'Username is not valid';
    alert(result);
    dispatch({
      type: SUBMIT,
    });
  };

  return (
    <div className="text-center">
      <h4>Username Validator with useReducer</h4>
      <input
        type="text"
        placeholder="hello123"
        onChange={handleInputChange}
      ></input>
      <button
        id="button"
        // To change the theme we invoke dispatch and pass in an object containing action type and payload
        onClick={handleSubmit}
        className="btn"
        type="button"
      >
        Toggle validation
      </button>
      <section className="text-center" style={{ padding: '20px' }}>
        Validity status{' '}
        <code style={{ fontWeight: 'bold' }}>: {state.isValid.toString()}</code>
      </section>
    </div>
  );
}
