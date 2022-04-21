// Import useReducer
import React, { useReducer } from 'react';

// Import genid function to create unique ids for students
import { genid } from '../utils/genid';

// Import type variables
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  SET_STUDENT_NAME,
  SET_STUDENT_MAJOR,
} from '../utils/actions';

// Import initial state (in a later activity this will be wrapped into a context provider)
import { initialState } from '../utils/initialState';

// Import reducer from our utils folder
import reducer from '../utils/reducers';

export default function StudentList() {
  // Initialize `useReducer` hook. Returns state and a dispatch function. Accepts arguments of our reducer and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* Now accessing students from our state object returned from the useReducer hook */}
      {state.students ? (
        <>
          <section className="student-list">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Major</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {/* Access students from our state object returned from useReducer */}
                {state.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      {/* We replace our removeStudent method with our dispatch function passing the type and payload */}
                      <button
                        type="button"
                        onClick={() => {
                          console.log('🚀 StudentList.js: Dispatched remove!');
                          return dispatch({
                            type: REMOVE_STUDENT,
                            payload: student.id,
                          });
                        }}
                      >
                        <span role="img" aria-label="delete">
                          ✖️
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="add-student">
              <input
                value={state.studentName}
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_NAME, payload: e.target.value })
                }
                placeholder="New student name..."
                type="text"
              />

              <select
                onChange={(e) =>
                  dispatch({ type: SET_STUDENT_MAJOR, payload: e.target.value })
                }
                value={state.studentMajor}
              >
                <option>Choose major...</option>
                {/* Access our majors array from our state object returned from useReducer */}
                {state.majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  console.log('🚀 StudentList.js: Dispatched add student! ');
                  return dispatch({
                    type: ADD_STUDENT,
                    payload: {
                      id: genid(),
                      name: state.studentName,
                      major: state.studentMajor,
                    },
                  });
                }}
              >
                Add Student
              </button>
            </div>
          </section>
        </>
      ) : (
        <span>Hmm... seems that there are no students here!</span>
      )}
    </div>
  );
}
