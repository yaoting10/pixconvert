"use client";

import Script from "next/script";
import { useEffect } from "react";

export function PlausibleTracker() {
  useEffect(() => {
    // Initialize plausible helper
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    w.plausible =
      w.plausible ||
      function () {
        (w.plausible.q = w.plausible.q || []).push(arguments);
      };
    w.plausible.init = w.plausible.init || function () {};
    w.plausible.init();
  }, []);

  return (
    <Script
      defer
      data-domain="pixconvert.org"
      src="https://plausible.shipsolo.io/js/pa-LQhLCBCNOqRj9Wirgzqbq.js"
      strategy="lazyOnload"
    />
  );
}
