"use client";

import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    // 🔥 Fire Google Ads Conversion on page load
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18133169855/yog8CKKDhKYcEL_tyMZD",
        value: 1.0,
        currency: "USD",
      });
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full">

        <h1 className="text-2xl font-bold text-green-600 mb-3">
          You're All Set
        </h1>

        <p className="text-gray-700 mb-4">
          A local water damage specialist will contact you shortly.
        </p>

        <p className="text-sm text-gray-500 mb-6">
          If this is urgent, call now for immediate assistance.
        </p>

        <a
          href="tel:+12677742486"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "conversion", {
                send_to: "AW-18133169855/yog8CKKDhKYcEL_tyMZD",
              });
            }
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Call Now
        </a>

      </div>
    </main>
  );
}