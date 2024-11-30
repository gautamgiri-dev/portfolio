import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import PortfolioNavbar from "../components/PortfolioNavbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Poppins({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Gautam Giri - Software Developer Portfolio",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`antialiased`}>
        <Providers>
          <PortfolioNavbar />
          <div className="">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
