import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const evanstonTavern = localFont({
  src: [
    {
      path: "../assets/fonts/EvanstonTavern-1893Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/EvanstonTavern-1893Medium.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--evanston-tavern",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dayz.io",
  description: "The Open Source Source DayZ data tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${evanstonTavern.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
