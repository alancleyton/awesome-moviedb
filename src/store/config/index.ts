import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSagas from './root-sagas';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

/**
 * Creates a store config with reducers and sagas, returns a store
 */
export function setupStore(preloadedState?: Partial<RootState>) {
  const sagaMiddlewareOptions = {};

  const sagaMiddleware = createSagaMiddleware(sagaMiddlewareOptions);

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState,
  });

  // Run saga middleware to make redux-sagas work
  sagaMiddleware.run(rootSagas);

  return store;
}

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
