import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppRoutes from '@/routes';
import { setupStore } from '@/store/config';
import './app.css';
import './i18n';

function App(): JSX.Element {
  return (
    <div>
      <Provider store={setupStore()}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
