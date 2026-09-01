import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Shipping & Digital Delivery Policy | MagicScale",
  description:
    "Learn how MagicScale delivers your monthly growth reports, menu designs, and consultation services.",
  keywords: [
    "MagicScale",
    "Digital Delivery",
    "Service Access",
    "Growth Report Delivery",
    "Account Management",
    "Restaurant Marketing",
    "Digital Agency Delivery",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "100% Digital Delivery",
    description:
      "All account management services and strategy sessions are delivered online.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale provides restaurant growth services entirely through
        digital channels. We do not sell or ship any physical products. <br />{" "}
        <br />
        Our offerings include:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>Zomato and Swiggy account optimization</li>{" "}
          <li>Digital delivery of your menu designs and branding assets</li>{" "}
          <li>Growth strategy sessions (via call/video)</li>{" "}
          <li>Weekly and monthly performance reports</li>{" "}
          <li>Live order rating management (robotic calls)</li>{" "}
        </ul>{" "}
        <br />
        No physical shipping, courier services, or logistics are involved. You will 
        receive your reports and assets directly via email or WhatsApp.
      </>
    ),
  },
  {
    title: "Service Timelines & Reports",
    description: "Updates and performance reports are delivered electronically.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        After successful payment and submission of your menu details, you will 
        be assigned a dedicated Account Manager within 24 hours. <br /> <br />
        Delivery timelines for actual account changes (like new menu images or CPC ads) 
        depend on the platform's internal review speed, usually taking 24 to 72 hours. <br /> <br />
        Once the month concludes, your detailed Monthly Growth Report 
        will be delivered to your registered email address automatically.
      </>
    ),
  },
  {
    title: "Communication & Access Responsibility",
    description:
      "Restaurant owners are responsible for providing accurate contact details.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Restaurant owners are responsible for providing an accurate email address and 
        phone number during onboarding to ensure smooth delivery of reports 
        and important strategy updates. <br /> <br />
        Failure to provide necessary credentials for processing, or missing a 
        scheduled growth strategy call, does not constitute a delivery 
        failure on our part.
      </>
    ),
  },
];

const contactData = {
  title: "Need Help With Your Account?",
  description:
    "Our support team is available to assist with report delivery questions.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you have submitted all your credentials but have not received an 
        account manager assignment, or if a month has passed and you haven't 
        received your performance report, please contact our support team.{" "}
      </p>
      <p>
        Support Email:{" "}
        <a
          href="mailto:support@magicscale.in"
          className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
        >
          support@magicscale.in
        </a>
      </p>
      <p className="mt-3">
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
      title="Shipping & Digital Delivery Policy"
      heading={
        <div>
          Digital Delivery <br className="hidden sm:block" />
          Policy{" "}
        </div>
      }
      description="Learn how account updates, strategy sessions, and monthly performance reports are delivered by MagicScale."
      ctaDescription="All MagicScale services are delivered digitally. Your strategy assets and monthly reports will be sent directly to your registered email address."
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
