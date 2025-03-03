import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarProvider } from "../components/ui/sidebar";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 pt-16 mt-2">
          <Sidebar />
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
