import "../styles/global.css";
import { Metadata } from "@/types/types";
import { Josefin_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "xpenseWise",
  description: "mange your funds",
};

const JosefinSans = Josefin_Sans({
  display: "swap",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JosefinSans.className} bg-beige-100 min-h-screen text-grey-900`}>
        {children}
      </body>
    </html>
  );
}
