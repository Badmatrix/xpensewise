import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import { cookies } from "next/headers";
import AppFooter from "@/components/AppFooter";

async function layout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <div className="relative">
      <SidebarProvider defaultOpen={defaultOpen}>
        <aside className="hidden lg:block">
          <AppSidebar />
        </aside>
        <main className="mb-14 w-full md:mb-5">
          <SidebarTrigger className="hidden lg:block" />
          <div className="mx-5">{children}</div>
        </main>
      </SidebarProvider>
      <footer className="fixed bottom-0 w-full rounded-t-lg bg-grey-900 pt-2 lg:hidden">
        <AppFooter />
      </footer>
    </div>
  );
}

export default layout;
