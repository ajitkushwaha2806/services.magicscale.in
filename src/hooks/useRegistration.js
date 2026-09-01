"use client";

import { useState } from "react";
import { createRegistration } from "@/services/payment";

const PAYTM_ENV = process.env.NEXT_PUBLIC_PAYTM_ENV || "staging";

const getPaytmCheckoutUrl = (mid) => {
  return PAYTM_ENV === "production"
    ? `https://secure.paytmpayments.com/merchantpgpui/checkoutjs/merchants/${mid}.js`
    : `https://securestage.paytmpayments.com/merchantpgpui/checkoutjs/merchants/${mid}.js`;
};

const loadPaytmScript = (mid) => {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById("paytm-checkoutjs");
    if (existingScript) {
      // If script exists but from another host or loaded previously, resolve
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "paytm-checkoutjs";
    script.src = getPaytmCheckoutUrl(mid);
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Failed to load Paytm SDK"));
    document.body.appendChild(script);
  });
};

export const useRegistration = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const mutateAsync = async (payload) => {
    setIsPending(true);
    setError(null);

    try {
      const responseData = await createRegistration(payload);

      if (!responseData?.success) {
        throw new Error(responseData?.message || "Failed to create registration");
      }

      setData(responseData);

      const { txnToken, orderId, mid, amount } = responseData.data;

      if (txnToken && mid) {
        await loadPaytmScript(mid);

        if (!window.Paytm || !window.Paytm.CheckoutJS) {
          throw new Error("Paytm SDK not found");
        }

        const formattedAmount = Number(amount).toFixed(2);

        const config = {
          root: "",
          flow: "DEFAULT",
          data: {
            orderId: orderId,
            token: txnToken,
            tokenType: "TXN_TOKEN",
            amount: formattedAmount,
          },
          handler: {
            notifyMerchant: function (eventName, data) {
              console.log("notifyMerchant handler function called", eventName, data);
            },
            transactionStatus: function (data) {
              console.log("transaction status", data);
              window.Paytm.CheckoutJS.close();
              window.location.href = `/payment-status?order_id=${orderId}`;
            }
          }
        };

        window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
          window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            window.Paytm.CheckoutJS.invoke();
            // Notify other components that Paytm has successfully opened
            window.dispatchEvent(new Event("paytm-opened"));
          }).catch(function onError(error) {
            console.error("error => ", error);
          });
        });
      }

      return responseData;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return {
    registration: {
      mutateAsync,
      isPending,
      error,
      data,
    },
  };
};
