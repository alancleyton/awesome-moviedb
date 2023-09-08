import { Routes, Route } from 'react-router-dom';

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <h2>Home page</h2>
        </div>
      }
    />
  </Routes>
);

export default AppRoutes;
