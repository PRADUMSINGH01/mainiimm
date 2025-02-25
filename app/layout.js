"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { MathJaxContext } from "better-react-mathjax";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11233003782"
        />

        {/* Initialize gtag */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11233003782');
            `}
        </Script>
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
