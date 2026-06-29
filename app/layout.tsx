import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "THE CLUB",
  description: "Three disciplines. One standard. A collective of independent specialists uniting sound, lighting, and video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navigation />
        <main style={{ paddingTop: '60px', minHeight: '100vh' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
