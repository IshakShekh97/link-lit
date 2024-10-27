import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "@/components/ui/sonner";

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["1000", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Link Lit",
  description: "Share Your all Personal Links with Link Lit",
  icons: [
    {
      href: "/logo.png",
      url: "/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={` ${recursive.className}  antialiased bg-zinc-100 dark:bg-background text-primary`}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            <main className="">{children}</main>
            <Toaster richColors closeButton />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
