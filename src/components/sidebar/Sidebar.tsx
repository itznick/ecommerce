import {
  Sidebar as AppSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";

import { categories } from "../../data/categories";

const Sidebar = () => {
  return (
    <AppSidebar
      className="h-[calc(100vh-4rem)] top-18"
      variant="floating"
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl mt-2 text-black">
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.title}>
                  <SidebarMenuButton asChild>
                    <a href={category.url}>
                      <category.icon className="w-8 h-8" />
                      <span className="text-base">{category.title}</span>
                    </a>
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
