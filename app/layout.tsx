import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import SessionProviders from "@/context/session-provider";
import QueryProvider from "@/context/query-provider";
import { ThemeProvider } from "@/context/theme-provider";

const dmSans = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background", dmSans.className)}>
        <SessionProviders>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </QueryProvider>
        </SessionProviders>
      </body>
    </html>
  );
}