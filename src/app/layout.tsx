import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAZCBT | Platform Simulasi Ujian Digital",
  description: "Platform Simulasi Ujian & Assessment Digital untuk Sekolah oleh FAZ Cyberautics Solutions",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${outfit.variable} antialiased bg-slate-950 text-slate-200 selection:bg-primary/30 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
