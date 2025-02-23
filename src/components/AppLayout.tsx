import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

function AppLayout({ children }: { children: ReactNode }) {
    
  return (
    <SidebarProvider defaultOpen={true} className="pb-10">
      <aside className="hidden lg:block">
        <AppSidebar />
      </aside>
      <main className="mb-14 w-full md:mb-5">
        <SidebarTrigger className="hidden lg:block" />
        <div className="mx-5">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
