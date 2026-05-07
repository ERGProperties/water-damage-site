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
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/logo.png"
            alt="24/7 Water Damage Help"
            width={180}
            height={60}
            priority
            className="mb-2"
          />
          <p className="text-sm text-gray-600 text-center">
            Philadelphia & Surrounding Areas • 24/7 Emergency Response
          </p>
        </div>

        {/* EMERGENCY CALL CTA (TOP) */}
        <a
          href="tel:+12677742486"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "conversion", {
                send_to: "AW-18133169855/JOpuCPzv5aYcEL_tyMZD",
                value: 1.0,
                currency: "USD",
              });
            }
          }}
          className="block text-center mb-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-lg"
        >
          🚨 Call Now for Immediate Help (267) 774-2486
        </a>

        {/* CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          {/* HEADLINE */}
          <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Emergency Water Damage? Get Help in 60 Minutes
          </h1>

          <p className="text-center text-gray-700 mb-3">
            Damage spreads every hour. Get connected with a local professional now.
          </p>

          {/* IMAGE */}
          <Image
            src="/water-damage.jpg"
            alt="Water damage emergency"
            width={500}
            height={300}
            className="rounded-lg mb-4 w-full h-auto"
          />

          {/* TRUST */}
          <div className="flex justify-center gap-3 text-xs text-gray-600 mb-3">
            <span>✔ 24/7 Response</span>
            <span>✔ Local Experts</span>
            <span>✔ Fast Dispatch</span>
          </div>

          <p className="text-center text-sm text-gray-700 mb-4 font-semibold">
            Local crews typically respond within 60 minutes
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900"
            />

            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900"
            />

            <textarea
              name="message"
              placeholder="Briefly describe the damage (optional)"
              rows={3}
              className="border border-gray-300 p-3 rounded-lg text-gray-900"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold"
            >
              {loading ? "Submitting..." : "Get Immediate Help"}
            </button>

          </form>

          {/* TRUST TEXT */}
          <p className="text-xs text-gray-600 mt-4 text-center">
            Free service connection. No obligation.
          </p>

        </div>

        {/* URGENCY */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Emergency crews are responding in your area right now
        </p>

      </div>
    </main>
  );
}