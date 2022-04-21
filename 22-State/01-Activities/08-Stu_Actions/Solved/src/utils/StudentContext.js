import React, { createContext, useContext, useState } from 'react';
import { genid } from "../utils/genid";

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useStudentContext = () => useContext(StudentContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: genid(),
      name: 'Sayid',
      major: 'Computer Science',
    },
    {
      id: genid(),
      name: 'Sun-Hwa',
      major: 'Journalism',
    },
  ]);

  // Function to add a student
  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent }]);
  };

  // Function to remove a student
  const removeStudent = (id) => {
    // Copy the content of the students array into our new list with the spread operator, then filter out the student that matches the `id` that was passed
    const newStudentsList = [
      ...students.filter((student) => student.id !== id),
    ];

    // Update state with the new list after the student has been removed
    setStudents(newStudentsList);
  };

  // List of options for the student major
  const majors = [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ];

  // The value prop expects an initial state object
  return (
    <StudentContext.Provider
      value={{ students, addStudent, removeStudent, majors }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </StudentContext.Provider>
  );
};
