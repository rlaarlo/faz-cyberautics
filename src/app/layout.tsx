import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAZCBT | Asesmen Digital untuk Sekolah Indonesia",
  description: "Platform CBT dari FAZ Cyberautics Solutions untuk sekolah dan madrasah, dengan rencana asisten AI berbasis Claude untuk draf soal, evaluasi hasil, dan remedial yang ditinjau guru.",
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
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased min-h-screen`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
