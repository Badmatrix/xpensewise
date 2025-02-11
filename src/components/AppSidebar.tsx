"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
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
const items = [
  {
    title: "overview",
    url: "/app/dashboard",
    icon: Home,
  },
  {
    title: "transaction",
    url: "/app/transactions",
    icon: Inbox,
  },
  {
    title: "budget",
    url: "/app/budget",
    icon: Calendar,
  },
  {
    title: "pots",
    url: "/app/pots",
    icon: Search,
  },
  {
    title: "recurring bill",
    url: "/app/bills",
    icon: Settings,
  },
];
function AppSidebar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-grey-900 rounded-r-xl text-white">
        <SidebarGroup className="space-y-7 px-0">
          <SidebarGroupLabel className="mt-4 text-xl font-bold text-white">
            xPensewise
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 pr-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`hover:bg-grey-100 hover:text-grey-900 rounded-none py-5 text-lg capitalize transition-all duration-300 ease-linear hover:rounded-r-md ${pathname === item.url ? "bg-grey-100 text-grey-900 border-secondary-green border-l-4 rounded-r-md" : ""}`}
                    >
                      <item.icon className="scale-125" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
