import Template from "@/components/global/template";
import { Headset, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Refund Policy | MagicScale",
  description:
    "Read the refund policy for MagicScale restaurant growth and account management services.",
  keywords: [
    "MagicScale Refund Policy",
    "No Refund Policy",
    "Service Refund Policy",
    "Account Management Refund",
    "Marketing Agency Refund",
  ],
  openGraph: {
    title: "Refund Policy | MagicScale",
    description:
      "MagicScale follows a strict no-refund policy for restaurant growth services once onboarding has begun, except in cases where the billing error is on our side.",
    url: "https://magicscale.in/refund-policy",
    siteName: "MagicScale",
    type: "website",
  },
};

const cardData = [
  {
    title: "Strict No Refund Policy",
    description: "Once your account onboarding begins, retainer fees are final.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        MagicScale provides expert restaurant marketing, Zomato/Swiggy account 
        management, and menu optimization services. <br /> <br />
        Due to the nature of our digital services where professional time, strategy, 
        and onboarding efforts are immediately deployed upon payment, all purchases 
        are final and non-refundable once our team begins working on your account. <br /> <br />
        By completing your purchase, you acknowledge and agree to this no-refund
        policy for the monthly retainer fees.
      </>
    ),
  },
  {
    title: "Non-Refundable Scenarios",
    description:
      "Refunds are not issued for algorithm changes or third-party ad spend.",
    icon: <Trash2 className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refunds will not be provided under any of the following circumstances:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You changed your mind after making the payment.</li>{" "}
          <li>You fail to provide required platform login credentials or menu details.</li>{" "}
          <li>Sales drop due to platform algorithm changes or seasonal trends outside our control.</li>{" "}
          <li>You cancel or pause your restaurant operations.</li>{" "}
          <li>Any direct ad spend (CPC wallet recharges) made to Zomato or Swiggy.</li>{" "}
        </ul>{" "}
        <br />
        Platform operations and delivery fulfillment are entirely outside our control.
      </>
    ),
  },
  {
    title: "Refunds Only for Our Errors",
    description: "Exceptions apply only when a billing issue is caused by us.",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    content: (
      <>
        Refund requests may only be considered if:{" "}
        <ul className="list-disc ml-5 mt-2">
          {" "}
          <li>You were charged multiple times for the same subscription.</li>{" "}
          <li>A verified technical or payment processing error occurred on our end.</li>{" "}
        </ul>{" "}
        <br />
        Any approved refund remains solely at the discretion of MagicScale 
        after reviewing the circumstances. If approved, the refund will be processed 
        back to the original payment method within 5-7 business days.
      </>
    ),
  },
];

const contactData = {
  title: "Questions About Billing?",
  description:
    "Contact us if you believe a payment issue occurred due to our mistake.",
  content: (
    <div>
      {" "}
      <p className="mb-4">
        If you believe you were charged incorrectly or experienced a billing
        issue caused by our systems, please contact us with your payment details
        and transaction reference.{" "}
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
    </div>
  ),
};

const page = () => {
  return (
    <Template
      title="Refund Policy"
      heading={
        <div>
          Refund Policy <br className="hidden sm:block" />& Payment Terms{" "}
        </div>
      }
      description="Please review our refund policy before purchasing any restaurant growth or account management services."
      ctaDescription="All purchases made through MagicScale are final once onboarding begins. Refunds are only considered in rare cases where the issue was caused by a billing error on our end."
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
