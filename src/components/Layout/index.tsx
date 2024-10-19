import { Outlet } from 'react-router-dom';
import Header from 'components/Layout/Header';

const Layout = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
