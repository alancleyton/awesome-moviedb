import { Routes, Route } from 'react-router-dom';
import { Container } from '@/components/container';

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route
      path="/"
      element={
        <Container>
          <div>
            <h2>Home page</h2>
          </div>
        </Container>
      }
    />
  </Routes>
);

export default AppRoutes;
