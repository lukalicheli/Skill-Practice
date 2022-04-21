import { genid } from './genid';

export const initialState = {
  students: [
    {
      id: genid(),
      name: 'Sayid',
      major: 'Computer Science',
    },
    {
      id: genid(),
      name: 'Sun-Hwa',
      major: 'Data Science',
    },
  ],
  majors: [
    'Mathematics',
    'Computer Science',
    'Art',
    'English',
    'Political Science',
    'Journalism',
    'Engineering',
  ],

  studentMajor: '',
  studentName: '',
};
