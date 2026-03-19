import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServerSidebar from "@/components/ServerSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "A simple Discord clone interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen w-full flex bg-[#313338] text-white overflow-hidden">
        <ServerSidebar />
        <div className="flex-1 flex overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
