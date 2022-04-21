import { TOGGLE_THEME } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    }
    default:
      return state;
  }
};
