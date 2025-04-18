import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient();

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <Provider store={store}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ClerkProvider>
      </Provider>
    </SidebarProvider>
  </StrictMode>
);
