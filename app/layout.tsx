import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bellis Capital",
  description: "Bellis Capital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}