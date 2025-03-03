import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 pt-16">
        <SidebarProvider>
          <Sidebar />
          <main className="flex-1 p-4">
            <SidebarTrigger />
            <Outlet />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Layout;
