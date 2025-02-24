"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { MathJaxContext } from "better-react-mathjax";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { Html, Head, Main, NextScript } from "next/document";

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

        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '581904311514964');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=581904311514964&ev=PageView&noscript=1"
          />
        </noscript>
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
