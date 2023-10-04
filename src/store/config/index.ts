import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './root-reducers';
import rootSagas from './root-sagas';

/**
 * Creates a store config with reducers and sagas, returns a store
 */
const sagaMiddlewareOptions = {};

const sagaMiddleware = createSagaMiddleware(sagaMiddlewareOptions);

export const store = configureStore({
  reducer: rootReducers,
  middleware: [sagaMiddleware],
});

// Run saga middleware to make redux-sagas work
sagaMiddleware.run(rootSagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
