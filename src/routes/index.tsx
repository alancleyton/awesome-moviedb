import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';

const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default AppRoutes;
