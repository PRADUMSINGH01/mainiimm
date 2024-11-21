import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: "IIM Target ",
  description: "E-learning website to lean and practice ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={inter.className}>{children}

        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <Analytics/>
      </body>
    </html>
  );
}
