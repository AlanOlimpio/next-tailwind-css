import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SessionWrapper from "@/components/SessionWrapper";
import { getServerSession } from "next-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${geistSans.variable} ${geistMono.variable}  antialiased pb-10`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SessionWrapper session={session}>
            <Header />
            <div className="mx-auto max-w-7xl  w-full  px-4 md:px-6 pb-10">
              {children}
            </div>

            <Footer />
          </SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
