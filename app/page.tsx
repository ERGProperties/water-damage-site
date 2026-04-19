"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full">

        {/* LOGO + BRAND */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="24/7 Water Damage Help"
            width={180}
            height={60}
            priority
            className="mb-2"
          />
          <p className="text-sm text-gray-600">
            Serving Your Area • 24/7 Emergency Response
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">
            Water Damage? Get Immediate Help Near You
          </h1>

          <p className="text-center text-gray-700 mb-4">
            Fast response from local professionals. Available now.
          </p>

          {/* TRUST */}
          <div className="flex justify-center gap-3 text-xs text-gray-600 mb-4">
            <span>✔ 24/7 Service</span>
            <span>✔ Fast Response</span>
            <span>✔ No Obligation</span>
          </div>

          {/* FORM */}
          <form
            action="https://formspree.io/f/xaqabwyz"
            method="POST"
            className="flex flex-col gap-3"
            onSubmit={() => {
              setTimeout(() => {
                window.location.href = "/thank-you";
              }, 500);
            }}
          >
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
              placeholder="Zip Code"
              required
              className="border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
            />

            <textarea
              name="message"
              placeholder="What happened?"
              rows={3}
              className="border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-500 bg-white"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold">
              Get Help Now
            </button>
          </form>

          {/* CALL */}
          <a
            href="tel:+1234567890"
            className="block text-center mt-4 text-blue-600 font-semibold"
          >
            Or Call Now
          </a>

          {/* TRUST TEXT */}
          <p className="text-xs text-gray-600 mt-4 text-center">
            We connect you with trusted local water damage specialists.
          </p>

        </div>

        {/* URGENCY */}
        <p className="text-center text-xs text-gray-500 mt-4">
          Homeowners are getting help in your area right now
        </p>

      </div>
    </main>
  );
}