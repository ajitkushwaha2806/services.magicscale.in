import Template from "@/components/global/template";
import { Headset, Mail, MapPin, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Contact Us | MagicScale",
  description:
    "Get in touch with MagicScale. We provide end-to-end Zomato and Swiggy account management and growth services for restaurants.",
  keywords: [
    "MagicScale",
    "Zomato Account Management",
    "Swiggy Growth Agency",
    "restaurant marketing",
    "cloud kitchen growth",
    "food delivery optimization",
  ],
  openGraph: {
    title: "Contact Us | MagicScale",
    description:
      "Get in touch with MagicScale. We help you scale your Zomato and Swiggy orders quickly and profitably.",
    url: "https://magicscale.in/contact",
    siteName: "MagicScale",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MagicScale",
    description:
      "Need help growing your restaurant on delivery apps? Contact MagicScale today.",
  },
};

const cardData = [
  {
    title: "Growth Support",
    description:
      "Need help with your existing Zomato or Swiggy growth campaigns?",
    icon: <Headset className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Whether you want to adjust your ad spend, update your menu photography,
        or check your monthly performance report, our dedicated account managers are here. <br /> <br />
        Reach us at{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@magicscale.in
        </a>{" "}
        and we'll get back to you as soon as possible.
      </>
    ),
  },
  {
    title: "Expert Strategy",
    description: "Questions about which growth plan is right for your restaurant?",
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Get guidance on our Basic and Premium Growth plans. We help dine-in restaurants,
        cloud kitchens, and bakeries optimize their menus and dominate local searches.
      </>
    ),
  },
  {
    title: "Location",
    description: "Serving food businesses everywhere in India.",
    icon: <MapPin className="w-6 h-6 text-green-500" />,
    content: (
      <>
        {" "}
        <strong>MagicScale</strong> <br />
        New Delhi, India <br /> <br />
        We proudly provide online restaurant growth and account management services nationwide.
      </>
    ),
  },
];

const contactData = {
  title: "Let's Scale Your Orders",
  description:
    "Questions about our 90-day growth roadmap?",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        Whether you're planning to launch your first cloud kitchen, or want to
        scale your existing restaurant's daily orders, we have the data-driven
        strategies to make it happen.{" "}
      </p>
      <p>
        Primary Support:{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          support@magicscale.in
        </a>
        <br />
        Location: New Delhi, India
      </p>
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Contact Us"
      heading={
        <div>
          Get Expert Help With Your <br className="hidden sm:block" />
          Restaurant Growth{" "}
        </div>
      }
      description="Questions about scaling your food delivery orders? We're here to help."
      ctaDescription="Reach out to our team for support, guidance, and answers to your marketing questions. Whether you're a new listing or an established brand, we're happy to assist."
      ctaLink="mailto:support@magicscale.in"
      ctaButton={
        <span className="flex items-center gap-2">
          {" "}
          <Mail className="w-4 h-4" />
          Contact Support{" "}
        </span>
      }
      infoData={cardData}
      contactData={contactData}
    />
  );
};

export default page;
