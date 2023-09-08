import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes';

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
