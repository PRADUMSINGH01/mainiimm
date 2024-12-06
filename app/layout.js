"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { MathJaxContext } from 'better-react-mathjax';
const mathJaxConfig = {
  loader: { load: ['input/tex', 'output/chtml'] },
};

const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={inter.className}>
        
       <MathJaxContext config={mathJaxConfig}>

        {children}
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <Analytics/>
       </MathJaxContext>
      </body>
    </html>
  );
}
