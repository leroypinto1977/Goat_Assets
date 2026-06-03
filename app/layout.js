import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "GOAT Assets | Real Estate Advisory. Real Value.",
  description: "GOAT Assets is a real estate advisory firm delivering strategic solutions that create measurable value across the real estate lifecycle.",
  metadataBase: new URL('http://localhost:3000'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll />
        <Header />
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
        <Footer />
      </body>
    </html>
  );
}
