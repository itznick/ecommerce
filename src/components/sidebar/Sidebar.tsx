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
  const { state, open, isMobile, toggleSidebar } = useSidebar();
  const { isSignedIn, user } = useUser();

  const handleClick = () => {
    if (isMobile) {
      toggleSidebar();
      console.log("isMobile");
    }
  };

  return (
    <AppSidebar
      className="max-h-screen overflow-y-auto top-16"
      variant="floating"
      collapsible="icon"
    >
      {state === "expanded" && open === true ? (
        <SidebarTrigger className="absolute z-50 flex items-center justify-center w-10 h-10 text-black bg-white border shadow-lg right-4 top-3 md:top-5 md:w-9 md:h-9" />
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
                      className="flex items-center gap-4 px-4 py-3 rounded-md hover:bg-gray-100"
                      onClick={handleClick}
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
      <SidebarFooter className="flex items-center justify-between p-4 bg-gray-100 rounded-md md:hidden">
        {isSignedIn ? (
          <div className="flex items-center w-full gap-2 px-2 py-2 bg-gray-200 rounded-md">
            <SignedIn>
              <div className="flex items-center w-full gap-3">
                <UserButton />
                <span className="text-lg font-medium">{user.fullName}</span>
              </div>
            </SignedIn>
          </div>
        ) : (
          <div className="w-full py-1 text-lg text-center text-white bg-orange-500 rounded-md">
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
