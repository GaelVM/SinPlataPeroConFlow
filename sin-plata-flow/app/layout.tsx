"use client";

import "./globals.css";
import useLenis from "@/hooks/useLenis";

export default function RootLayout({ children }: any) {
  useLenis();

  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}