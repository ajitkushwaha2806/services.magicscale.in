"use client";

import { useEffect } from "react";

// Easily manage multiple tracking IDs here
const CONFIG = {
  googleAnalyticsIds: ["G-XVLEDXG07G"], // You can add multiple GA IDs here in the future
  metaPixelIds: ["1739589510499095"], // Add or remove Meta Pixel IDs here
};

// Initialize the window objects and stubs synchronously if in browser
if (typeof window !== "undefined") {
  // GA stub
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function(){window.dataLayer.push(arguments);}
    window.gtag('js', new Date());
    CONFIG.googleAnalyticsIds.forEach(id => {
      window.gtag('config', id);
    });
  }

  // Meta Pixel stub
  if (CONFIG.metaPixelIds.length > 0 && !window.fbq) {
    const f = window;
    const n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    
    CONFIG.metaPixelIds.forEach(id => {
      window.fbq('init', id);
    });
    window.fbq('track', 'PageView');
  }
}

export default function ThirdPartyScripts() {
  useEffect(() => {
    let scriptsLoaded = false;

    const loadScripts = () => {
      if (scriptsLoaded) return;
      scriptsLoaded = true;

      // Remove event listeners once loaded
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, loadScripts);
      });

      // 1. Initialize Google Analytics dynamically
      if (CONFIG.googleAnalyticsIds.length > 0) {
        // Load the main gtag script using the first ID
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalyticsIds[0]}`;
        document.head.appendChild(gaScript);
      }

      // 2. Initialize Meta Pixels dynamically
      if (CONFIG.metaPixelIds.length > 0) {
        const t = document.createElement('script');
        t.async = !0;
        t.src = 'https://connect.facebook.net/en_US/fbevents.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(t, s);
      }
    };

    const triggerEvents = ["mouseover", "keydown", "touchstart", "scroll"];

    triggerEvents.forEach((event) => {
      window.addEventListener(event, loadScripts, { passive: true });
    });

    return () => {
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, loadScripts);
      });
    };
  }, []);

  if (CONFIG.metaPixelIds.length === 0) return null;

  return (
    <noscript>
      {CONFIG.metaPixelIds.map((id) => (
        <img
          key={id}
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
          alt=""
        />
      ))}
    </noscript>
  );
}
