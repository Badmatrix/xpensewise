"use client";
import { navigation } from "@/lib/nav";
import { usePathname } from "next/navigation";
import Link from "next/link";

function AppFooter() {
  const pathname = usePathname();

  return (
    <ul className="flex justify-around text-xs capitalize text-grey-300">
      {navigation.map((item) => {
        const isActive = pathname === `/${item.url}`;

        return (
          <Link
            href={item.url}
            key={item.title}
            className={`px-1 py-2 text-center font-medium transition-all duration-200 ease-linear hover:rounded-t-md hover:border-b-4 hover:border-b-secondary-green hover:bg-grey-100 hover:text-grey-900 sm:px-2 ${isActive ? "rounded-t-md border-b-4 border-secondary-green bg-grey-100 text-grey-900" : ""}`}
          >
            <li className="scale-90 text-center sm:scale-105">
              <item.icon
                className={`w-full text-2xl transition-colors duration-200 ease-linear hover:text-secondary-green ${isActive ? "text-secondary-green" : ""}`}
              />
              <span>{item.title}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default AppFooter;
