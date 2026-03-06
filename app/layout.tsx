import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZiiBoxes - Custom Packaging for E-commerce Brands",
  description: "Premium custom mailer boxes, shipping boxes, and packaging solutions for Amazon, Etsy, and Shopify sellers. Low MOQ, fast delivery, eco-friendly options.",
  keywords: "custom packaging, mailer boxes, shipping boxes, e-commerce packaging, Amazon FBA, Etsy packaging, Shopify packaging",
  authors: [{ name: "ZiiBoxes" }],
  openGraph: {
    title: "ZiiBoxes - Custom Packaging for E-commerce Brands",
    description: "Premium custom packaging solutions for growing e-commerce businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
