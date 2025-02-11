import ErrorBoundary from "@/components/error-boundary";
import Header from "@/components/header";
import ReactQueryProvider from "@/components/provider";
import { PageTransition, StairTransition } from "@/components/transitions";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Quinton's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <ReactQueryProvider>
          <ErrorBoundary>
            <Header />
            <StairTransition />
            <PageTransition>{children}</PageTransition>
          </ErrorBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
