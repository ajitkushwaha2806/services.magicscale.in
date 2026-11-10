import React, { Suspense } from "react";
import AuditPageClient from "./audit/AuditPageClient";

export const metadata = {
  title: "Free Menu Audit & 3-Dish Preview | MagicScale",
  description:
    "Stop losing 40% of orders to text-only menus on Swiggy and Zomato. Claim your free 3-dish visual preview and see how MagicScale transforms your restaurant menu within 48 hours.",
  openGraph: {
    title: "Free Swiggy & Zomato Menu Audit | MagicScale",
    description:
      "Transform your text-only menu with professional food visuals, sensory copywriting, and smart add-ons in 48 hours.",
    url: "https://magicscale.in",
  },
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Swiggy & Zomato Free Menu Audit & Preview",
    url: "https://magicscale.in",
    description:
      "Stop losing 40% of orders to text-only menus on Swiggy and Zomato. Claim your free 3-dish visual preview.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restaurant Menu Optimization & Audit",
    provider: {
      "@type": "Organization",
      name: "MagicScale",
    },
    areaServed: "India",
    serviceType: "Swiggy & Zomato Menu Engineering",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Immediately. Once you submit your outlet link or name, we analyze your current menu score and deliver a live 3-dish preview within 24 to 48 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to do a photoshoot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No expensive photoshoot needed. MagicScale engineers appetizing, platform-compliant visuals tailored to your specific dishes and recipes.",
        },
      },
      {
        "@type": "Question",
        name: "How does this increase my sales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Diners eat with their eyes. Replacing text-only listings with vibrant photos, clear portions, sensory descriptions, and high-margin add-ons drives up to 2.8x higher conversions and ₹80-₹160 higher average order value.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://magicscale.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free Menu Audit",
        item: "https://magicscale.in",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MagicScale Restaurant Growth & Menu Engineering",
    image: "https://magicscale.in/og-image.png",
    "@id": "https://magicscale.in",
    url: "https://magicscale.in",
    telephone: "+918826073117",
    priceRange: "₹0 - ₹4999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "New Delhi",
      addressLocality: "New Delhi",
      addressRegion: "DL",
      postalCode: "110001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.209,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Suspense fallback={null}>
        <AuditPageClient />
      </Suspense>
    </>
  );
}
