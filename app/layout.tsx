import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "./_ui/Header";
import { Footer } from "./_ui/Footer";
import { BusinessSchema } from "./_ui/BusinessSchema";
import { StickyBookBanner } from "./_ui/StickyBookBanner";
import { ORIGIN, DEFAULT_OG_IMAGE } from "./_lib/content-map";

// Sans-serif workhorse — used for body, nav, buttons, and all standard headings.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Elegant serif — reserved for italic accent words inside headlines
// (e.g. <span className="accent-serif">chronic pain</span>).
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  title: {
    default: "Rutherford Spine & Wellness Center | Chiropractor in Murfreesboro, TN",
    template: "%s | Rutherford Spine & Wellness Center",
  },
  description:
    "Rutherford Spine & Wellness Center helps you live a pain-free life. Find natural chiropractic care, spinal decompression, and neuropathy relief in Murfreesboro, TN.",
  openGraph: {
    siteName: "Rutherford Spine & Wellness Center",
    images: [DEFAULT_OG_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BusinessSchema />
        <Header />
        {children}
        <Footer />
        <StickyBookBanner />
        {/* Knock Knock chat widget */}
        <Script id="knock-knock-widget" strategy="lazyOnload">
          {`
            window.company_id = '6a7aefaab47776717de9bae4';
            var newScript = document.createElement('script');
            newScript.src = 'https://api.knock-knockapp.com/widget/widget.js';
            document.getElementsByTagName('HEAD')[0].appendChild(newScript);
          `}
        </Script>
      </body>
    </html>
  );
}
