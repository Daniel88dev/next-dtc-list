import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedOut } from "@clerk/nextjs";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DTC List",
  description: "Search for detailed info about vehicle DTC codes.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh]`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>
              <Header />
            </SignedOut>
            <div className="min-h-[90%] flex flex-col items-center justify-center p-4">
              <main className="max-w-4xl w-full rounded-lg shadow-xl p-8 space-y-8">
                {children}
              </main>
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
