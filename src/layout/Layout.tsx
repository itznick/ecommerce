import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarProvider } from "../components/ui/sidebar";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <div className="flex flex-1 mt-20">
          <Sidebar />
          <main className="flex-1 px-2">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
