import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between h-screen max-sm:w-full">
      <header>
        <Header />
      </header>

      <div className="flex flex-1 mt-20">
        <aside>
          <Sidebar />
        </aside>

        <main className="flex-1 px-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
