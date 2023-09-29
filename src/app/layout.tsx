import "~/src/styles/globals.css";

import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";

export const metadata: Metadata = {
  title: "Crescina",
  description: "",
};

const libreFranklinFont = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="es-LA">
      <body className={libreFranklinFont.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
