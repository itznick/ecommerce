import { Outlet } from "react-router-dom"; // Ensure correct import
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
