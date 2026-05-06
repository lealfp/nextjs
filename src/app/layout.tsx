import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";
import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Home | Fagner Leal Pantoja",
  description:
    "Personal website of Fagner Leal Pantoja, a Fullstack Developer. Available for select freelance projects.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen">
              <Navbar />
              {children}
            </div>
            <Toaster />
          </ThemeProvider>
          <footer className="text-center py-10 border-t text-gray-500 bg-[#f5f5f5]">
            © {new Date().getFullYear()} Fagner Leal. All rights reserved.
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
