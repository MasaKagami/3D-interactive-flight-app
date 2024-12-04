import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "3D interactive flight app",
  description: "An engaging way to find flights with 3D animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
