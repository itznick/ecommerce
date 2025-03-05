import {
  Sidebar as AppSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../components/ui/sidebar";
import { SidebarTrigger } from "../ui/sidebar";
import { categories } from "../../data/categories";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { state, open } = useSidebar();

  return (
    <AppSidebar
      className="h-[calc(100vh-4rem)] top-20"
      variant="floating"
      collapsible="icon"
    >
      {state === "expanded" && open === true ? (
        <SidebarTrigger className="absolute z-50 w-10 h-10 text-black border right-4 top-5" />
      ) : (
        <SidebarTrigger className="w-10 h-10 mt-2 ml-1 text-black border" />
      )}
      <SidebarContent>
        <SidebarGroup>
          {state === "expanded" && open === true ? (
            <SidebarGroupLabel className="mt-2 text-xl text-black">
              Categories
            </SidebarGroupLabel>
          ) : (
            <SidebarGroupLabel className="hidden">Categories</SidebarGroupLabel>
          )}
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={`/category/${category.title}`}>
                      <category.icon className="w-12 h-12" />
                      <span className="text-xl capitalize">{category.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </AppSidebar>
  );
};

export default Sidebar;
