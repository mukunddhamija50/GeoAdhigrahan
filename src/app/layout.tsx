import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAMS | National Land Acquisition & Management System",
  description: "Real-Time GIS Command Center for Land Acquisition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-hidden">{children}</body>
    </html>
  );
}
