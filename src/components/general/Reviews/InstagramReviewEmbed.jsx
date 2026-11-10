"use client";
import React, { useEffect } from "react";

export default function InstagramReviewEmbed() {
  useEffect(() => {
    const loadInstagram = () => {
      if (typeof window !== "undefined") {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        } else {
          const script = document.createElement("script");
          script.id = "instagram-embed-script";
          script.src = "//www.instagram.com/embed.js";
          script.async = true;
          script.onload = () => {
            window.instgrm?.Embeds?.process();
          };
          document.body.appendChild(script);
        }
      }
    };

    loadInstagram();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[360px] sm:max-w-[380px] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-white">
        <div className="overflow-hidden -mb-[120px]">
          <blockquote
            className="instagram-media !rounded-none !border-0 !shadow-none !m-0 !p-0"
            data-instgrm-permalink="https://www.instagram.com/reel/DXC1oWQkzWn/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "0px",
              boxShadow: "none",
              margin: "0 auto",
              maxWidth: "380px",
              minWidth: "300px",
              padding: 0,
              width: "100%",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href="https://www.instagram.com/reel/DXC1oWQkzWn/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: "0 0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View reel on Instagram
              </a>
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
