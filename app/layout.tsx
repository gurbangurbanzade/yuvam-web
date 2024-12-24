import Footer from "@/components/layout/footer";
import "./globals.scss";
import Head from "next/head";
import Header from "@/components/layout/header/navbar-landing";
import { DM_Sans } from "next/font/google";
import "./globals.scss";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
