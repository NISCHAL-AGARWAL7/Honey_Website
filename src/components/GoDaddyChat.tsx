"use client";

import { useEffect, useRef } from "react";

/**
 * Reamaze Live Chat Widget (GoDaddy Conversations)
 *
 * Loads the Reamaze chat widget script once and configures it
 * with the account settings provided below.
 *
 * The widget appears in the bottom-right corner and is available on every page.
 */

const REAMAZE_SCRIPT = "https://cdn.reamaze.com/assets/reamaze-loader.js";
const ACCOUNT_ID = "3796a92a-00f6-4a30-aa22-b948cdf32b97";

export function GoDaddyChat() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;

    // Prevent duplicate script injection on client-side navigation
    const existingScript = document.querySelector(`script[src="${REAMAZE_SCRIPT}"]`);
    if (existingScript) {
      loadedRef.current = true;
      return;
    }

    // Configure Reamaze global settings before loading the script
    const _support = (window as any)._support = (window as any)._support || { ui: {}, user: {} };
    _support.account = ACCOUNT_ID;
    _support.ui.contactMode = "mixed";
    _support.ui.enableKb = "true";
    _support.ui.mailbox = "81469632";
    _support.ui.styles = {
      widgetColor: "rgba(212, 175, 55, 1)",
      gradient: true,
    };
    _support.ui.shoutboxFacesMode = "";
    _support.ui.widget = {
      allowBotProcessing: "true",
      slug: "organic-herbs-and-honey-5d3484b24a6c8698",
      label: {
        text: "Let us know if you have any questions! 😊",
        mode: "notification",
        delay: 3,
        duration: 30,
        primary: "",
        sound: true,
      },
      position: "bottom-right",
    };
    _support.apps = {
      recentConversations: {},
      faq: { enabled: true },
    };

    // Create and inject the Reamaze script
    const script = document.createElement("script");
    script.src = REAMAZE_SCRIPT;
    script.async = true;
    script.onload = () => {
      loadedRef.current = true;
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script element
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }

      // If no other React component instances reference this, clean up global state
      if (!document.querySelector(`script[src="${REAMAZE_SCRIPT}"]`)) {
        delete (window as any)._support;
      }

      loadedRef.current = false;
    };
  }, []);

  // Renders nothing — the Reamaze widget injects its own UI
  return null;
}
