import { Geist, Geist_Mono } from "next/font/google";
import { Hanken_Grotesk } from 'next/font/google'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-hanken',
});

export const metadata = {
  title: "छाना चुहावट मर्मत सेवा बिराटनगर | Panchadevi WaterProofing Sewa",
  description: "नेपालको भरपर्दो छाना चुहावट, बाथरूम वाटरप्रूफिङ्ग, र पर्खाल मर्मत सेवा। पञ्चदेवी कन्स्ट्रक्सन – बिराटनगरको नम्बर १ समाधान।",
  keywords: [
    "Waterproofing Biratnagar", "छाना चुहावट मर्मत", "Roof Repair Nepal",
    "Bathroom waterproofing Nepal", "Home repair Biratnagar",
    "Panchadevi Waterproofing Sewa", "पञ्चदेवी कन्स्ट्रक्सन"
  ],
  authors: [{ name: "Panchadevi Waterproofing Sewa", url: "https://yourdomain.com" }],
  openGraph: {
    title: "छाना चुहावट मर्मत सेवा बिराटनगर | Panchadevi Construction",
    description: "बिराटनगरको विश्वासिलो छाना मर्मत सेवा। अहिले सम्पर्क गर्नुहोस्!",
    url: "/",
    siteName: "Panchadevi Construction",
    locale: "ne_NP",
    type: "website",
    images: [
      {
        url: "/banner.jpg", 
        width: 1200,
        height: 630,
        alt: "Panchadevi Construction - छाना चुहावट मर्मत सेवा बिराटनगर",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panchadevi Waterproofing Sewa - छाना चुहावट विशेषज्ञ",
    description: "नेपालको प्रमुख वाटरप्रूफिङ्ग र छाना मर्मत सेवा।",
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ne">
      <body className={`${hankenGrotesk.variable} ${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
