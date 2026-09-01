import Template from "@/components/global/template";
import { Headset, Rows, ShieldCheck, Trash2, Zap } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | MagicScale",
  description:
    "Learn how MagicScale collects, uses, and protects your personal information when you subscribe to our restaurant growth services.",
  keywords: [
    "MagicScale Privacy Policy",
    "Restaurant Growth Data",
    "Data Protection",
    "Personal Information",
    "Account Management Privacy",
  ],
  openGraph: {
    title: "Privacy Policy | MagicScale",
    description:
      "Learn how MagicScale collects, uses, and protects your personal information.",
    url: "https://magicscale.in/privacy-policy",
    siteName: "MagicScale",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MagicScale",
    description:
      "Learn how MagicScale collects, uses, and protects your personal information.",
  },
};

const cardData = [
  {
    title: "Information We Collect",
    description:
      "We collect information required to deliver our account management services.",
    icon: <Rows className="w-6 h-6 text-green-500" />,
    content: (
      <>
        When you subscribe to our Zomato & Swiggy growth packages, we may collect 
        your name, email address, phone number, restaurant details, menu data, and 
        payment-related information. <br /> <br />
        We may also collect website analytics, device information, and usage
        data to improve our platform performance.
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information helps us optimize your restaurant's digital presence.",
    icon: <Zap className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We use your information to manage your Zomato and Swiggy portals, run ad 
        campaigns, optimize your menus, process payments, and respond to support 
        requests. <br /> <br />
        We may also send important updates, performance reports, and information 
        about future growth strategies that may benefit your business.
      </>
    ),
  },
  {
    title: "Data Security & Protection",
    description:
      "We take reasonable measures to protect your personal and business information.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        We implement industry-standard security practices and access controls to
        protect your credentials and personal information from unauthorized access, 
        misuse, or disclosure. <br /> <br />
        We do not sell your personal information to third parties. Information
        may only be shared with trusted service providers such as payment
        processors or technology partners when necessary to deliver our
        services.
      </>
    ),
  },
  {
    title: "Your Rights & Data Requests",
    description:
      "You may request access, correction, or deletion of your information.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        You may contact us at any time to request access to your information,
        update inaccurate details, unsubscribe from marketing communications, or
        request deletion of your personal data where legally permitted. <br />{" "}
        <br />
        To submit a privacy-related request, email us at{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@magicscale.in
        </a>
        .
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Your Privacy?",
  description:
    "We're committed to transparency and protecting your personal information.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have questions about this Privacy Policy, your personal data, or
        how we handle information collected through our account management and 
        growth services, please contact us.{" "}
      </p>
      <p className="mb-2">
        Email:{" "}
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
      title="Privacy Policy"
      heading={
        <div>
          Your Privacy. <br className="hidden sm:block" />
          Our Commitment.{" "}
        </div>
      }
      description="Learn how MagicScale collects, uses, stores, and protects your personal and business information."
      ctaDescription="We respect your privacy and are committed to protecting your information. This policy explains what data we collect, why we collect it, and how we keep it secure."
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
