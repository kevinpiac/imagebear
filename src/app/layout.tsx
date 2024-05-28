import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { KobbleProvider } from "@kobbleio/next/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Bear AI",
  description: "Generate AI images with Image Bear AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KobbleProvider>{children}</KobbleProvider>
      </body>
    </html>
  );
}
