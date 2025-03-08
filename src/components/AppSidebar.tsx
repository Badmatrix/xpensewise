"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/nav";
import { logoutUser } from "@/lib/Actions";
import { LogOut } from "lucide-react";

function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="rounded-r-xl bg-grey-900 text-white">
        <SidebarGroup className="space-y-7 px-0">
          <SidebarGroupLabel className="mt-4 text-xl font-bold text-white">
            xPensewise
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 pr-4">
              {navigation.map((item) => {
                const isActive = pathname === `/${item.url}`;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.url}
                        className={`rounded-none py-5 text-lg capitalize text-grey-300 transition-all duration-300 ease-linear hover:rounded-r-md hover:bg-grey-100 hover:text-others-torquise ${isActive ? "rounded-r-md border-l-4 border-secondary-green bg-grey-100 text-grey-900" : ""}`}
                      >
                        <item.icon
                          className={`scale-125 ${isActive ? "text-secondary-green" : ""}`}
                        />
                        <span className="hover:text-grey-900">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarMenuButton
          onClick={logoutUser}
          className="absolute bottom-5 w-full rounded-none bg-grey-300 px-3 py-5 text-left text-lg transition-all duration-300 ease-linear"
        >
          <LogOut className="scale-125" /> <span>Logout</span>
        </SidebarMenuButton>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
