import React, { createContext, useContext, useState } from 'react';
import { genid } from './genid';
// Initialize new context for students
const StudentContext = createContext();

// Custom hook to provide usage of the student context
export const useStudentContext = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: genid(),
      name: 'Dave',
      major: 'Computer Science',
    },
    {
      id: genid(),
      name: 'Sun',
      major: 'Data Science',
    },
  ]);

  // Function to add a student
  const addStudent = (newStudent) => {
    setStudents([...students, { newStudent }]);
  };

  // Function to remove a student
  const removeStudent = (id) => {
    const newStudentsList = [
      ...students.filter((student) => student.id !== id),
    ];

    setStudents(newStudentsList);
  };

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
      {children}
    </StudentContext.Provider>
  );
};
