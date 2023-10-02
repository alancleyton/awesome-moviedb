import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './root-reducers';
import rootSagas from './root-sagas';

/**
 * Creates a store config with reducers and sagas, returns a store
 */
export const createStore = () => {
  const sagaMiddlewareOptions = {};

  const sagaMiddleware = createSagaMiddleware(sagaMiddlewareOptions);

  const store = configureStore({
    reducer: rootReducers,
    middleware: [sagaMiddleware],
  });

  // Run saga middleware to make redux-sagas work
  sagaMiddleware.run(rootSagas);

  return store;
};
