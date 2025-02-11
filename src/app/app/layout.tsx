import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import { cookies } from "next/headers";

async function layout({ children }: { children: ReactNode }) {
    const cookieStore = await cookies();
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <aside className="hidden lg:block">
        <AppSidebar />
      </aside>
      <main className="w-full">
        <SidebarTrigger className="hidden lg:block" />
        <div className=" mx-5">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export default layout;
