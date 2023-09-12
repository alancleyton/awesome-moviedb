import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes';
import './App.css';

import { Header } from '@/components/Header';

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
