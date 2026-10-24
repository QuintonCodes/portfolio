import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import Providers from "./providers";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quinton's Portfolio",
  description: "Welcome to Quinton's professional portfolio website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", jetBrainsMono.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
