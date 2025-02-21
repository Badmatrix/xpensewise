"use client";
import { ReactNode } from "react";
import AppLayout from "./AppLayout";
import AppFooter from "./AppFooter";
import AuthSidebar from "./AuthSidebar";
import { redirect, usePathname } from "next/navigation";

function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const authRoutes = ["/login", "/signup"];
  const isAuthPage = authRoutes.includes(pathname);

  if (pathname === "/") redirect("/login");
  if (isAuthPage)
    return (
      <div className="h-screen max-h-screen overflow-y-hidden px-5 py-5">
        <div className="grid items-center gap-4 lg:grid-cols-3 xl:gap-10">
          <AuthSidebar />
          <section className="col-span-2 flex w-full justify-center px-3 py-6 xl:p-10">
            {children}
          </section>
        </div>
      </div>
    );
  return (
    <main>
      <div className="relative">
        <AppLayout>{children}</AppLayout>

        <footer className="fixed bottom-0 w-full rounded-t-lg bg-grey-900 pt-2 lg:hidden">
          <AppFooter />
        </footer>
      </div>
    </main>
  );
}

export default Layout;
