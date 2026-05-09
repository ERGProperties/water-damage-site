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
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
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
            Serving Philadelphia Homeowners 24/7
          </p>
        </div>

        {/* TOP CALL CTA */}
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
          className="block text-center mb-4 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg"
        >
          🚨 Call Philadelphia Emergency Response
          <div className="text-2xl mt-1">(267) 774-2486</div>
        </a>

        {/* MAIN CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">

          {/* HEADLINE */}
          <h1 className="text-3xl font-extrabold text-center mb-3 text-gray-900 leading-tight">
            Emergency Water Damage?
            <span className="block text-red-600 mt-1">
              Get Help Within 60 Minutes
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-center text-gray-700 mb-4 text-base">
            Water damage spreads fast. Connect with a local Philadelphia professional now before costs increase.
          </p>

          {/* IMAGE */}
          <Image
            src="/water-damage.jpg"
            alt="Water damage emergency"
            width={500}
            height={300}
            className="rounded-xl mb-4 w-full h-auto shadow-md"
          />

          {/* TRUST BADGES */}
          <div className="flex justify-center gap-2 text-xs text-gray-700 mb-4 flex-wrap">
            <span className="bg-gray-100 px-2 py-1 rounded-full">
              ✔ 24/7 Emergency Response
            </span>

            <span className="bg-gray-100 px-2 py-1 rounded-full">
              ✔ Local Philadelphia Pros
            </span>

            <span className="bg-gray-100 px-2 py-1 rounded-full">
              ✔ Fast Dispatch
            </span>
          </div>

          {/* TRUST LINE */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <p className="text-center text-sm font-semibold text-blue-900">
              Local crews typically respond within 60 minutes
            </p>
          </div>

          {/* TESTIMONIAL */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5">
            <p className="text-sm italic text-gray-700 text-center">
              “They called me back within minutes after my basement flooded.”
            </p>

            <p className="text-xs text-gray-500 text-center mt-2">
              — Philadelphia Homeowner
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900 bg-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900 bg-white"
            />

            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900 bg-white"
            />

            <textarea
              name="message"
              placeholder="Briefly describe the damage"
              rows={3}
              className="border border-gray-300 p-3 rounded-lg text-gray-900 bg-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 transition text-white p-4 rounded-xl text-lg font-bold shadow-md"
            >
              {loading ? "Submitting..." : "Get Immediate Help"}
            </button>

          </form>

          {/* BOTTOM TRUST */}
          <p className="text-xs text-gray-500 mt-4 text-center leading-relaxed">
            No obligation. Fast local response from trusted professionals serving the Philadelphia area.
          </p>

        </div>

        {/* FOOTER URGENCY */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Emergency crews are responding in Philadelphia right now
        </p>

      </div>
    </main>
  );
}