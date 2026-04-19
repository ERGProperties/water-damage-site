export default function ThankYou() {
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
          href="tel:+1234567890"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold inline-block"
        >
          Call Now
        </a>

      </div>
    </main>
  );
}