import "./globals.css";
import Providers from "@/providers";
import { Poppins } from "next/font/google";
import AppShell from "@/components/global/AppShell";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://magicscale.in"),

  title: {
    default: "MagicScale | 10x Your Restaurant Orders on Zomato & Swiggy",
    template: "%s | MagicScale",
  },

  description:
    "Expert Swiggy & Zomato account management, high-ROI ad campaigns, menu score optimization, and live rating calls to skyrocket your restaurant sales.",

  keywords: [
    "Restaurant Growth Agency",
    "Zomato Account Management",
    "Swiggy Account Management",
    "Food Business Growth",
    "Restaurant Marketing Agency",
    "Menu Score Optimization",
    "Zomato Ads Optimization",
    "Swiggy Ads Management",
    "Cloud Kitchen Growth",
  ],

  alternates: {
    canonical: "https://magicscale.in",
  },

  icons: {
    icon: "/og-image.png",
  },

  openGraph: {
    title: "MagicScale | 10x Your Restaurant Orders on Zomato & Swiggy",
    description: "Expert Swiggy & Zomato account management, high-ROI ad campaigns, menu score optimization, and live rating calls to skyrocket your restaurant sales.",
    url: "https://magicscale.in",
    siteName: "MagicScale",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MagicScale Restaurant Growth",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MagicScale | Restaurant Growth Management",
    description: "Scale your daily orders on Swiggy and Zomato systematically.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MagicScale",
    url: "https://magicscale.in",
    logo: "https://magicscale.in/og-image.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8826073117",
      contactType: "customer service",
      email: "support@magicscale.in",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MagicScale Restaurant Growth",
    url: "https://magicscale.in",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
        <ThirdPartyScripts />
      </body>
    </html>
  );
}
