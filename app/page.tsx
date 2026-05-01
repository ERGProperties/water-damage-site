"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xaqabwyz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // 🔥 Google Ads Conversion Tracking
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-18133169855/yog8CKKDhKYcEL_tyMZD",
          value: 1.0,
          currency: "USD",
        });
      }

      window.location.href = "/thank-you";
    } else {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="24/7 Water Damage Help"
            width={180}
            height={60}
            priority
            className="mb-2"
          />
          <p className="text-sm text-gray-600 text-center">
            Serving Philadelphia & Surrounding Areas • 24/7 Emergency Response
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Water Damage in Philadelphia? Get Immediate Help
          </h1>

          <p className="text-center text-gray-700 mb-4">
            Fast response from local professionals near you. Available 24/7.
          </p>

          {/* TRUST */}
          <div className="flex justify-center gap-3 text-xs text-gray-600 mb-4">
            <span>✔ Philadelphia Area</span>
            <span>✔ 24/7 Service</span>
            <span>✔ Fast Response</span>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
            />

            <input
              type="text"
              name="zip"
              placeholder="Philadelphia Zip Code"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
            />

            <textarea
              name="message"
              placeholder="What happened?"
              rows={3}
              className="border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold"
            >
              {loading ? "Submitting..." : "Get Help Now"}
            </button>

          </form>

          {/* CALL CTA */}
          <a
            href="tel:+12677742486"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "conversion", {
                  send_to: "AW-18133169855/yog8CKKDhKYcEL_tyMZD",
                });
              }
            }}
            className="block text-center mt-4 text-blue-600 font-semibold text-lg"
          >
            Or Call Now: (267) 774-2486
          </a>

          {/* TRUST TEXT */}
          <p className="text-xs text-gray-600 mt-4 text-center">
            We connect Philadelphia homeowners with trusted local water damage specialists.
          </p>

        </div>

        {/* URGENCY */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Emergency crews are responding in Philadelphia right now
        </p>

      </div>
    </main>
  );
}