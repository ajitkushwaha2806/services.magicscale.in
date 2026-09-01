import React from "react";
import Template from "@/components/global/template";
import { Headset, ShieldCheck, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Disclaimer | MagicScale",
  description:
    "Understand the scope, limitations, and responsibilities associated with the restaurant growth services provided by MagicScale.",
  keywords: [
    "MagicScale Disclaimer",
    "Restaurant Growth Service",
    "Zomato Account Management",
    "Swiggy Compliance",
    "Business Marketing Disclaimer",
  ],
  authors: [{ name: "MagicScale", url: "https://magicscale.in" }],
  openGraph: {
    title: "Disclaimer | MagicScale",
    description:
      "Important information regarding the restaurant growth and marketing services provided by MagicScale.",
    url: "https://magicscale.in/disclaimer",
    siteName: "MagicScale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | MagicScale",
    description:
      "Important information regarding the restaurant growth and marketing services provided by MagicScale.",
  },
};

const cardData = [
  {
    title: "Independent Consultancy",
    description:
      "We are a private growth agency, not affiliated with Zomato or Swiggy.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        MagicScale operates as an independent, private growth consultancy. We provide 
        account management, marketing, and operational optimization for food businesses. <br /> <br />
        We are <strong>not</strong> officially affiliated with, endorsed by, or partnered 
        with Zomato, Swiggy, or any other delivery platform. We operate as an external 
        marketing agency hired by the restaurant owner.
      </>
    ),
  },
  {
    title: "No Guarantee of Exact Results",
    description:
      "Sales targets depend on multiple factors, including platform algorithms.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        While we target a 25% to 30% month-over-month growth for existing restaurants 
        using proven strategies, MagicScale does not guarantee specific revenue figures, 
        exact order counts, or fixed ROI. <br /> <br />
        Customer behavior, platform algorithms, local competition, and seasonal demand 
        all affect final outcomes. We do not control the internal workings of Zomato or Swiggy.
      </>
    ),
  },
  {
    title: "Restaurant Responsibility",
    description:
      "Food quality, packaging, and timely dispatch remain your responsibility.",
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    content: (
      <>
        MagicScale manages your digital presence, advertising, and profile optimization. 
        However, the actual preparation of food, hygiene, packaging, taste, and timely 
        dispatch of orders remain strictly the responsibility of the restaurant. <br /> <br />
        We cannot prevent bad reviews caused by poor food quality, missing items, or 
        late preparation times.
      </>
    ),
  },
  {
    title: "Ad Spend Budgets",
    description:
      "Ad budgets are paid directly to the platforms, separate from our fees.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        The monthly management fee paid to MagicScale does not include the actual 
        advertising budget (CPC wallet recharges) for Zomato or Swiggy. <br /> <br />
        Restaurant owners must recharge their own platform ad wallets. We manage and 
        optimize the spending of those funds to maximize your Return on Ad Spend (ROAS).
      </>
    ),
  },
];

const contactData = {
  title: "Questions About This Disclaimer?",
  description:
    "We're happy to clarify any concerns regarding our growth services.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions regarding this disclaimer or the scope of 
        services provided through MagicScale, please contact us at{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@magicscale.in
        </a>
        .{" "}
      </p>
      <p>
        MagicScale
        <br />
        New Delhi, India
        <br />
        Restaurant Growth & Management
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Disclaimer"
      heading={
        <div>
          Disclaimer <br className="hidden sm:block" />& Important
          Information{" "}
        </div>
      }
      description="Please review the limitations, responsibilities, and terms associated with using the restaurant growth services provided by MagicScale."
      ctaDescription="Our mission is to help food entrepreneurs scale their orders profitably. Please note that we are a private marketing agency and do not control the platform algorithms."
      ctaLink="mailto:support@magicscale.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Headset className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
