import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://subrintsolar.in"),

  title: {
    default: "Subrint Solar | Solar Company in Haryana",
    template: "%s | Subrint Solar",
  },

  description:
    "Subrint Solar provides residential, commercial and industrial solar solutions across Haryana. Save up to 90% on electricity bills with premium solar installations.",

  keywords: [
    "Solar Company Haryana",
    "Solar Company Jhajjar",
    "Solar Panel Installation",
    "Residential Solar",
    "Commercial Solar",
    "Industrial Solar",
    "Solar EPC",
    "Solar Pump",
    "Solar Subsidy Haryana",
    "Net Metering Haryana"
  ],

  authors: [
    {
      name: "Subrint Solar",
    },
  ],

  creator: "Subrint Solar",

  publisher: "Subrint Solar",

  applicationName: "Subrint Solar",

  alternates: {
    canonical: "https://subrintsolar.in",
  },

  openGraph: {
    title: "Subrint Solar",
    description:
      "Professional Solar Installation Company in Haryana.",

    url: "https://subrintsolar.in",

    siteName: "Subrint Solar",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Subrint Solar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Subrint Solar",

    description:
      "Professional Solar Company in Haryana",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  name: "Subrint Solar",

  image: "https://subrintsolar.in/logo.png",

  url: "https://subrintsolar.in",

  telephone: "+91-9650704703",

  email: "subrintsolar@gmail.com",

  address: {
    "@type": "PostalAddress",

    streetAddress: "VPO Sulodha",

    addressLocality: "Jhajjar",

    addressRegion: "Haryana",

    postalCode: "124103",

    addressCountry: "IN",
  },

  areaServed: [
    "Jhajjar",
    "Rohtak",
    "Bahadurgarh",
    "Rewari",
    "Gurgaon",
    "Haryana",
  ],

  openingHours: "Mo-Sa 09:00-18:00",

  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {children}
         <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YCEL7TWDTW"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YCEL7TWDTW');
        `}
      </Script>     

      </body>

    </html>
  );
}