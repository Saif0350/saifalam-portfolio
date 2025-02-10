import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header/Header";
import AosComp from "@/components/AosComp";
import LenisWrapper from "@/components/LenisWrapper";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer/Footer";
import Cursor from "@/components/Cursor/Cursor";

export const metadata: Metadata = {
  title: "Saif Alam Portfolio",
  description: "About Saif Alam Ansari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisWrapper>
          <AosComp />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Cursor />
        </LenisWrapper>
      </body>
    </html>
  );
}
