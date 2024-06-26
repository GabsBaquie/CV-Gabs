import Background from "@/components/background/background";
import { Source_Code_Pro } from "next/font/google";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import "./globals.css";

const sourceSansPro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio de Gabs Baquie",
  description: "Portfolio de Gabs Baquie, développeur web junior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn(sourceSansPro.className, "h-full")}>
        <Background>{children}</Background>
      </body>
    </html>
  );
}
