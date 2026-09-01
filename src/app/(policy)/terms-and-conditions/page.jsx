import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | MagicScale",
  description:
    "Review the Terms & Conditions governing your use of MagicScale's restaurant growth and account management services.",
  keywords: [
    "MagicScale",
    "Terms and Conditions",
    "Account Management Service",
    "Service Terms",
    "Marketing Agency",
    "Restaurant Growth",
  ],
  authors: [
    { name: "MagicScale", url: "https://magicscale.in" },
  ],
  openGraph: {
    title: "Terms & Conditions | MagicScale",
    description:
      "Review the Terms & Conditions governing your use of MagicScale's restaurant growth and account management services.",
    url: "https://magicscale.in/terms-and-conditions",
    siteName: "MagicScale",
    type: "website",
  },
};

const cardData = [
  {
    title: "Platform Credentials & Menu Accuracy",
    description: "Clients must provide accurate menu details and platform access.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        By engaging MagicScale for restaurant growth services, 
        you agree that all menu prices, food descriptions, and branding assets 
        provided by you are 100% accurate and authentic. <br /> <br />
        You are solely responsible for any legal repercussions, customer complaints, 
        or account suspensions that arise from submitting incorrect menu details, 
        expired licenses, or violating the terms of service of food delivery platforms.
      </>
    ),
  },
  {
    title: "Independent Growth Agency Status",
    description:
      "We are a private marketing agency assisting with digital growth.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale operates as an independent digital marketing agency. 
        We are not affiliated with, endorsed by, or partnered with Zomato, Swiggy, 
        or any other third-party food delivery platform. <br /> <br />
        Our professional fees cover the cost of account management, ad optimization, 
        and strategic consultation. Advertising budgets (CPC wallet recharges) 
        are separate and must be paid directly to the respective platforms.
      </>
    ),
  },
  {
    title: "No Guarantee of Fixed Sales Volume",
    description: "Final sales and visibility rest with the platform algorithms.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        While our experts ensure your account is optimized for maximum conversions, 
        we do not and cannot guarantee a specific fixed amount of daily orders, 
        revenue numbers, or search rankings. <br /> <br />
        The respective delivery platforms may change their algorithms, adjust delivery radii, 
        or experience downtime. MagicScale holds no liability for order drops caused by 
        factors outside our control, including poor food quality or late dispatch.
      </>
    ),
  },
  {
    title: "Termination & Fraud Policy",
    description: "Services may be revoked for violating platform policies.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We reserve the right to immediately suspend or terminate our services 
        without refund if a client:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>Has their account suspended for severe food safety/hygiene violations.</li>{" "}
          <li>Engages in abusive or threatening behavior toward our account managers.</li>{" "}
          <li>Refuses to pay direct ad budgets or honor platform commissions.</li>{" "}
          <li>Violates these Terms & Conditions.</li>{" "}
        </ul>{" "}
        <br />
        Service termination does not create eligibility for a refund.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About These Terms?",
  description: "We're happy to clarify any aspect of our Terms & Conditions.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        By accessing or purchasing any MagicScale restaurant growth 
        service or consultation, you legally agree to these Terms & Conditions.{" "}
      </p>
      <p className="mb-2">
        Support & Legal Inquiries:{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@magicscale.in
        </a>
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
      title="Terms & Conditions"
      heading={
        <div>
          Terms & Conditions <br className="hidden sm:block" />
          For Clients{" "}
        </div>
      }
      description="Please review the terms governing your use of MagicScale's restaurant growth and account management services."
      ctaDescription="By engaging our services, you agree to these Terms & Conditions, ensuring a transparent and legally compliant service experience."
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
