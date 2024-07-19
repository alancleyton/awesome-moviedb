import { Outlet } from 'react-router-dom';

import { Header } from '@/components/ui/header';

const RootLayout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default RootLayout;
