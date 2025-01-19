"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { MathJaxContext } from "better-react-mathjax";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

const mathJaxConfig = {
  loader: { load: ["input/tex", "output/chtml"] },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My App</title>
        <meta name="description" content="My App Description" />
      </Head>
      <body className={inter.className}>
        <MathJaxContext config={mathJaxConfig}>
          <SessionProvider>{children}</SessionProvider>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
          <Analytics />
        </MathJaxContext>
      </body>
    </html>
  );
}

