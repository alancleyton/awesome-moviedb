import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes';
import './App.scss';

import { Header } from '@/layouts/Header';

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
