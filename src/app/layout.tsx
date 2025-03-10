import type { Metadata } from "next";

import "./globals.css";
import { poppins } from "@/font/font";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "My contact",
  description: "Une application de gestion de contacts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
