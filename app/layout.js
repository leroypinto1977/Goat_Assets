import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Analytics from "@/components/Analytics";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display-src",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-src",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.goatassets.com";

const SITE_DESCRIPTION =
  "GOAT Assets partners with India's leading developers to bring you handpicked premium properties — with every legal check and document verified before you buy.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GOAT Assets | Real Estate Advisory. Real Value.",
  description: SITE_DESCRIPTION,
  applicationName: "GOAT Assets",
  keywords: [
    "real estate advisory",
    "investment advisory",
    "transactions advisory",
    "leasing advisory",
    "property valuation",
    "capital markets",
    "asset management",
    "Mumbai real estate",
    "India real estate",
  ],
  authors: [{ name: "GOAT Assets" }],
  creator: "GOAT Assets",
  publisher: "GOAT Assets",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GOAT Assets",
    title: "GOAT Assets | Real Estate Advisory. Real Value.",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/assets/images/hero_building_complete.png",
        alt: "GOAT Assets — Real Estate Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GOAT Assets | Real Estate Advisory. Real Value.",
    description: SITE_DESCRIPTION,
    images: ["/assets/images/hero_building_complete.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "GOAT Assets",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.svg`,
  image: `${SITE_URL}/assets/images/hero_building_complete.png`,
  email: "connect@goatassets.com",
  telephone: "+91-22-3501-6500",
  address: {
    "@type": "PostalAddress",
    streetAddress: "One BKC, Bandra Kurla Complex",
    addressLocality: "Mumbai",
    postalCode: "400051",
    addressCountry: "IN",
  },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    "https://linkedin.com/company/goat-assets",
    "https://x.com/goatassets",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">Skip to main content</a>
        <SmoothScroll />
        <Header />
        <ScrollRevealProvider>
          <div id="main" tabIndex={-1}>
            {children}
          </div>
        </ScrollRevealProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
