import { applyMiddleware, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import authSlice from 'reduxes/reducers/authSlice';

export default function configureAppStore(preloadedState = {}) {
  const composeEnhancers = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

  const store = configureStore({
    reducer: {
      auth: authSlice,
    },
    middleware: () => getDefaultMiddleware(),
    preloadedState,
    enhancer,
  });

  return store;
}
