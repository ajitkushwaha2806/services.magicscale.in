import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Service Delivery & Cancellation Policy | MagicScale",
  description:
    "Learn about service delivery timelines, account onboarding, cancellations, and refund policies for MagicScale restaurant growth services.",
  keywords: [
    "MagicScale",
    "Refund Policy",
    "Cancellation Policy",
    "Service Delivery",
    "Account Management",
    "Restaurant Growth",
    "No Refund Policy",
  ],
  robots: "index, follow",
};

const cardData = [
  {
    title: "Service Delivery & Timelines",
    description: "Account optimization times vary based on platform approvals.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale provides restaurant growth marketing, Zomato & Swiggy account 
        management, and menu optimization services. <br /> <br />
        Service delivery begins immediately upon successful payment and submission 
        of all required menu details and platform credentials by the restaurant owner. 
        Our team will review and optimize your digital presence. <br /> <br />
        Please note that the final visibility of menu changes or ad approvals depends 
        entirely on the Zomato/Swiggy internal review timelines. We do not guarantee 
        a specific number of hours for these updates to reflect live, as delays may 
        occur at the platform level.
      </>
    ),
  },
  {
    title: "Cancellation & Document Policy",
    description: "Please ensure you have valid platform access before purchasing.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Restaurant owners are responsible for providing authentic and complete 
        menu details, pricing, and platform credentials required for management. <br /> <br />
        Failure to provide necessary access, or providing incorrect details, 
        does not qualify for cancellation, refund, credit, or transfer.{" "}
        <br /> <br />
        If your account is suspended by the platform due to discrepancies 
        in your provided documents (like licensing expiry or hygiene issues), the service 
        is considered fulfilled for the month, and no refunds will be issued.
      </>
    ),
  },
  {
    title: "Strict No Refund Policy",
    description: "Refunds are only considered when the billing mistake is on our side.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        All purchases made through MagicScale are final and non-refundable 
        once the account onboarding has begun. <br /> <br />
        Refunds will not be provided because:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>You changed your mind after purchase.</li>{" "}
          <li>You failed to provide required credentials or menus.</li>{" "}
          <li>Your menu updates were delayed by platform reviewers.</li>{" "}
          <li>Your orders dropped due to platform algorithm changes.</li>{" "}
          <li>You decided to shut down your food business.</li>{" "}
        </ul>{" "}
        <br />
        Refunds may only be considered in exceptional situations where:{" "}
        <ul className="list-disc pl-5 mt-2">
          {" "}
          <li>A duplicate payment was processed.</li>{" "}
          <li>A verified technical billing error occurred on our platform.</li>{" "}
        </ul>{" "}
        <br />
        Any approved refund remains solely at the discretion of MagicScale 
        after reviewing the circumstances.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Processing or Access?",
  description:
    "Contact our team if you experience a billing issue or onboarding problem.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you believe a payment issue occurred, or experienced a service delivery 
        problem caused directly by our technical systems, please contact our 
        support team with your transaction information.{" "}
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
      title="Delivery & Cancellation Policy"
      heading={
        <div>
          Delivery, Cancellation <br className="hidden sm:block" />& Refund
          Policy{" "}
        </div>
      }
      description="Please review our policies regarding service delivery, account onboarding, cancellations, and refunds before making a purchase."
      ctaDescription="All MagicScale account management services begin immediately upon onboarding. Purchases are final and refunds are only considered in rare situations where a billing error is caused by our systems."
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
