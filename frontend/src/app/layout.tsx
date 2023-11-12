import { type Metadata } from "next";
import { type ReactNode } from "react";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import ThemeProvider from "@/components/theme/provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NedoLib",
  description: "Platform for reading kazakh manga",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="kz">
      <body className={inter.className}>
        <ThemeProvider attribute={"class"} defaultTheme={"light"} enableSystem={true} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
