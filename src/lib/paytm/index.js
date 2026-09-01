import PaytmChecksum from "paytmchecksum";

const PAYTM_ENV = process.env.NEXT_PUBLIC_PAYTM_ENV || "staging";
const PAYTM_MID = process.env.PAYTM_MID;
const PAYTM_MERCHANT_KEY = process.env.PAYTM_MERCHANT_KEY;
const PAYTM_WEBSITE_NAME = process.env.PAYTM_WEBSITE_NAME || (PAYTM_ENV === "production" ? "DEFAULT" : "WEBSTAGING");

const BASE_URL =
  PAYTM_ENV === "production"
    ? "https://securegw.paytm.in"
    : "https://securegw-stage.paytm.in";

export async function initiatePaytmTransaction(orderId, amount, customerId) {
  if (!PAYTM_MID || !PAYTM_MERCHANT_KEY) {
    throw new Error("Paytm credentials are not configured.");
  }

  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://magicscale.in"
      : "http://localhost:3000");

  const paytmParams = {};

  paytmParams.body = {
    requestType: "Payment",
    mid: PAYTM_MID,
    websiteName: PAYTM_WEBSITE_NAME,
    orderId: orderId,
    callbackUrl: `${appUrl}/api/paytm/callback`,
    txnAmount: {
      value: String(amount.toFixed(2)),
      currency: "INR",
    },
    userInfo: {
      custId: customerId || "CUST_001",
    },
  };

  const checksum = await PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    PAYTM_MERCHANT_KEY
  );

  paytmParams.head = {
    signature: checksum,
  };

  const post_data = JSON.stringify(paytmParams);

  const url = `${BASE_URL}/theia/api/v1/initiateTransaction?mid=${PAYTM_MID}&orderId=${orderId}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: post_data,
  });

  const responseData = await response.json();

  if (responseData?.body?.resultInfo?.resultStatus === "S") {
    return {
      txnToken: responseData.body.txnToken,
      orderId: orderId,
      mid: PAYTM_MID,
      amount: amount,
    };
  } else {
    console.error("Paytm InitiateTransaction Failed Response:", JSON.stringify(responseData, null, 2));
    throw new Error(
      responseData?.body?.resultInfo?.resultMsg || "Failed to initiate Paytm transaction"
    );
  }
}

export function verifyPaytmSignature(body, signature) {
  if (!PAYTM_MERCHANT_KEY) {
    throw new Error("Paytm credentials are not configured.");
  }
  return PaytmChecksum.verifySignature(body, PAYTM_MERCHANT_KEY, signature);
}

export async function checkPaytmOrderStatus(orderId) {
  if (!PAYTM_MID || !PAYTM_MERCHANT_KEY) {
    throw new Error("Paytm credentials are not configured.");
  }

  const paytmParams = {};

  paytmParams.body = {
    mid: PAYTM_MID,
    orderId: orderId,
  };

  const checksum = await PaytmChecksum.generateSignature(
    JSON.stringify(paytmParams.body),
    PAYTM_MERCHANT_KEY
  );

  paytmParams.head = {
    signature: checksum,
  };

  const post_data = JSON.stringify(paytmParams);
  const url = `${BASE_URL}/v3/order/status`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: post_data,
  });

  const responseData = await response.json();
  return responseData.body;
}

