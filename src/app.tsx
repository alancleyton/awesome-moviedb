import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from '@/routes';
import { createStore } from '@/store/config';
import { Header } from '@/layout/header';
import './app.css';

function App(): JSX.Element {
  const store = createStore();

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
