import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Standard Financial Services B.V. (SFS) - Professional Financial Solutions",
  description: "Expert financial services in the Netherlands - Bookkeeping, Tax Advisory, ERP Integration, and Business Consulting for Dutch businesses. Professional, reliable, and tailored solutions.",
  keywords: "financial services, bookkeeping, tax advisory, ERP integration, Dutch business, Netherlands accounting, Standard Financial Services, SFS",
  authors: [{ name: "Standard Financial Services B.V." }],
  creator: "Standard Financial Services B.V.",
  publisher: "Standard Financial Services B.V.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/logos copy.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/logos copy.png",
        sizes: "16x16",
        type: "image/png",
      }
    ],
    apple: {
      url: "/logos copy.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "/logos copy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
