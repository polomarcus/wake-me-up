// import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// application
import reducers from './reducers';

const bindMiddleware = (middleware = []) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const configure = (initialState = {}) =>
  createStore(
    reducers,
    initialState,
    bindMiddleware([
      /* thunk */
    ]),
  );

export default configure;
