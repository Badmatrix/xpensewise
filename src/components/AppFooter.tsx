"use client";
import { navigation } from "@/lib/nav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import LogoutDialog from "@/app/LogoutDialog";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

function AppFooter() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Scrolling down → Hide footer
      } else {
        setVisible(true); // Scrolling up → Show footer
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer
      className={cn(
        "fixed bottom-0 flex w-full justify-between rounded-t-lg bg-grey-900 pt-2 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <ul className="flex justify-around text-xs capitalize text-grey-300 w-full">
        {navigation.map((item) => {
          const isActive = pathname === `/${item.url}`;

          return (
            <Link
              href={item.url}
              key={item.title}
              className={`px-1 py-1 text-center font-medium transition-all duration-200 ease-linear hover:rounded-t-md hover:border-b-4 hover:border-b-secondary-green hover:bg-grey-100 hover:text-grey-900 sm:px-2 sm:py-2 ${isActive ? "rounded-t-md border-b-4 border-secondary-green bg-grey-100 text-grey-900" : ""}`}
            >
              <li className="scale-75 text-center sm:scale-105">
                <item.icon
                  className={`w-full text-2xl transition-colors duration-200 ease-linear hover:text-secondary-green ${isActive ? "text-secondary-green" : ""}`}
                />
                <span >{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
      <LogoutDialog>
        <Button className="w-fit bg-transparent text-center transition-colors duration-200 ease-linear hover:bg-secondary-red">
          <LogOut className="scale-125 sm:scale-150" />
        </Button>
      </LogoutDialog>
    </footer>
  );
}

export default AppFooter;
