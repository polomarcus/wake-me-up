import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const theme = (state = '', action) => {
  switch (action.type) {
  case 'onToggleTheme':
    return state === 'dark' ? '' : 'dark';
  default:
    return state;
  }
};

export default combineReducers({
  theme,
  form: formReducer,
});
