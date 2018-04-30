import { combineReducers } from 'redux';

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
});
