import type { Metadata } from "next";
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siman Studio - Web Development Agency",
  description: "Transform your digital presence with our magical web solutions. Custom websites, SEO, and ongoing support for your business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-oxford-300 text-white-500 min-h-screen`}>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-oxford-500)_0%,_transparent_50%)] opacity-20" />
          <Header />
          <main className="relative pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
