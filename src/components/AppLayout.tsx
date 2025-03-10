import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true} >
      <aside className="hidden lg:block">
        <AppSidebar />
      </aside>
      <main className="mb-10 w-full">
        <SidebarTrigger className="hidden lg:block" />
        <div className="mx-3 mt-7 md:mx-5 md:mt-0">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
