"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import AuthSidebar from "./AuthSidebar";
import AuthenticatedPage from "./AuthenticatedPage";

function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const formRoute = ["/login", "/signup"];
  const isFormPage = formRoute.includes(pathname);

  return (
    <>
      {isFormPage ? (
        <div className="h-screen max-h-screen overflow-y-hidden px-5 py-5">
          <div className="grid items-center gap-4 lg:grid-cols-3 xl:gap-10">
            <AuthSidebar />
            <section className="col-span-2 flex w-full justify-center px-3 py-6 xl:p-10">
              {children}
            </section>
          </div>
        </div>
      ) : (
        <AuthenticatedPage>{children}</AuthenticatedPage>
      )}
    </>
  );
}

export default Layout;
