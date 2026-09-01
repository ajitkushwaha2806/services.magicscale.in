import React from "react";
import Home from "@/components/global/Home";

export const metadata = {
  title: {
    absolute: "Grow Your Swiggy & Zomato Orders | MagicScale",
  },
  description: "Maximize your restaurant's revenue on Swiggy and Zomato. We offer expert menu optimization, ad management, and onboarding services starting at ₹999.",
};

export default function Page() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Swiggy & Zomato Growth Services",
    url: "https://magicscale.in",
    description: "Expert growth management for restaurants on Swiggy and Zomato.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restaurant Growth Management",
    provider: {
      "@type": "Organization",
      name: "MagicScale",
    },
    areaServed: "India",
    serviceType: "Digital Marketing for Restaurants",
    offers: {
      "@type": "Offer",
      price: "100",
      priceCurrency: "INR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can you help increase my Swiggy and Zomato orders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We optimize your menu with appetizing descriptions, manage your CPC ads efficiently, and improve your restaurant's visibility algorithmically.",
        },
      },
      {
        "@type": "Question",
        name: "Who can benefit from this service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any food business listed or wanting to list on Swiggy and Zomato, including Cloud Kitchens, Dine-in Restaurants, Cafés, and Bakeries.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with initial onboarding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we handle complete onboarding on both platforms, ensuring your profile is set up for success from day one.",
        },
      },
      {
        "@type": "Question",
        name: "What are your charges?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our plans start at ₹9,999/month, and we offer a 1-on-1 Strategy Call on Google Meet for ₹100.",
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
        name: "Swiggy & Zomato Growth",
        item: "https://magicscale.in/#pricing",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "MagicScale Restaurant Growth",
    image: "https://magicscale.in/og-image.png",
    "@id": "https://magicscale.in",
    url: "https://magicscale.in",
    telephone: "+918826073117",
    priceRange: "₹999 - ₹4999",
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
      longitude: 77.2090,
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
      <div className="relative bg-white dark:bg-[#0a0a1a] flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full mx-auto px-2 md:px-4">
          <Home />
        </div>
      </div>
    </>
  );
}
