import "../styles/global.css";
import { Metadata } from "@/types/types";
import { Josefin_Sans } from "next/font/google";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
              },
              error: {
                duration: 5000,
                },
                style: {
                  fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "whitesmoke",
              color: "var(--color-grey-700)",
              },
              }}
        />
        
      <Layout>{children}</Layout>
      </body>
    </html>
  );
}
