import {
  Sidebar as AppSidebar,
  SidebarContent,
  SidebarFooter,
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
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const Sidebar = () => {
  const { state, open } = useSidebar();
  const { isSignedIn, user } = useUser();

  return (
    <AppSidebar
      className="top-16 max-h-screen overflow-y-auto"
      variant="floating"
      collapsible="icon"
    >
      {state === "expanded" && open === true ? (
        <SidebarTrigger className="absolute z-50 text-black border right-4 top-3 bg-white w-10 h-10 shadow-lg flex items-center justify-center md:top-5 md:w-9 md:h-9" />
      ) : (
        <SidebarTrigger className="w-10 h-10 mt-2 ml-1 text-black border" />
      )}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel
            className={`mt-3 md:mt-2 text-xl text-black ${
              state === "expanded" ? "block" : "hidden"
            } `}
          >
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={`/category/${category.title}`}
                      className="flex items-center gap-4 py-3 px-4 hover:bg-gray-100 rounded-md"
                    >
                      <category.icon className="w-8 h-8" />
                      <span className="text-xl capitalize">
                        {category.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 flex items-center justify-between bg-gray-100 rounded-md md:hidden">
        {isSignedIn ? (
          <div className="bg-gray-200 rounded-md w-full flex items-center gap-2 py-2 px-2">
            <SignedIn>
              <div className="flex items-center gap-3 w-full">
                <UserButton />
                <span className="text-lg font-medium">{user.fullName}</span>
              </div>
            </SignedIn>
          </div>
        ) : (
          <div className="w-full py-1 text-center text-lg text-white bg-orange-500 rounded-md">
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        )}
      </SidebarFooter>
    </AppSidebar>
  );
};

export default Sidebar;
