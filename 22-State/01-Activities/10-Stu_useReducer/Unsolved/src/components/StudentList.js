// TODO: Import useReducer so that we can use it in this component
import React, { useState } from 'react';

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
  // TODO: Initialize `useReducer` hook.

  // TODO: remove these variables once you've refactored code below with the state variable from useReducer
  const students = [];
  const majors = [];

  return (
    <div>
      {/* // TODO: Refactor to access `students` from our state object */}
      {students ? (
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
                {/* // TODO: Refactor to access `students` from our state object */}
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          // TODO: Call dispatch method with an object containing type and payload
                          // Your code here
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
              {/* TODO: Update input to get its value from state. */}
              <input
                value={""}
                onChange={(e) => {
                  // TODO: Call dispatch with an object containing type and payload to set the student name. Use e.target.value for the payload.
                }}
                placeholder="New student name..."
                type="text"
              />

              {/* TODO: Update select to get its value from state. */}
              <select
                onChange={(e) => {
                  // TODO: Call dispatch with an objecting containing type and payload to set the student major. Use e.target.value for the payload.
                }}
                value={""}
              >
                <option>Choose major...</option>
                {/* // TODO: Refactor to access `students` from our state object */}
                {majors.map((major) => (
                  <option key={major} value={major}>
                    {major}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => {
                  // TODO: Call dispatch method with an object containing type and payload for adding a new student
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
