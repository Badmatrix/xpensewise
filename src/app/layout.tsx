import "../styles/global.css";
import { Metadata } from "@/types/types";
import { Josefin_Sans } from "next/font/google";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "xpenseWise",
  description: "mange your funds",
};

const JosefinSans = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JosefinSans.className} min-h-screen bg-beige-100 text-grey-900`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

{
  // <div className="relative">
  //   <footer className="fixed bottom-0 w-full rounded-t-lg bg-grey-900 pt-2 lg:hidden">
  //     <AppFooter />
  //   </footer>
  // </div>;
  /* <SidebarProvider defaultOpen={defaultOpen}>
  <aside className="hidden lg:block">
    <AppSidebar />
  </aside>
  <main className="mb-14 w-full md:mb-5">
    <SidebarTrigger className="hidden lg:block" />
    <div className="mx-5">{children}</div>
  </main>
</SidebarProvider>; */
}
