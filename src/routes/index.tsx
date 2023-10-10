import { Routes, Route } from 'react-router-dom';

// Layouts
import RootLayout from '@/layout/root-layout';

// Pages
import Home from '@/pages/Home';

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export default AppRoutes;
