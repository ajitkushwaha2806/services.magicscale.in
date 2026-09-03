export const FB_PIXEL_ID = "1739589510499095";

export const pageview = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "PageView");
  }
};

// Standard Meta Pixel Event tracking
// https://developers.facebook.com/docs/facebook-pixel/reference
export const trackEvent = (name, options = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", name, options);
  }
};

// Custom Meta Pixel Event tracking
export const trackCustomEvent = (name, options = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", name, options);
  }
};
