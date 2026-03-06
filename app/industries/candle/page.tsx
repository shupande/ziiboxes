import Link from "next/link";

export const metadata = {
  title: "Candle Packaging | ZiiBoxes",
  description: "Custom candle boxes with safe, durable packaging. Perfect for candle makers and small businesses.",
};

export default function CandlePackagingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Candle Packaging
          </h1>
          <p className="text-xl text-amber-100">
            Safe, beautiful packaging for candle makers
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🕯️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Safe & Secure
              </h3>
              <p className="text-gray-600">
                Designed to protect candles during shipping. Sturdy construction prevents breakage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Custom Design
              </h3>
              <p className="text-gray-600">
                Full-color printing with your brand colors, logo, and candle information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Any Size
              </h3>
              <p className="text-gray-600">
                Custom sizes for jar candles, pillar candles, votives, and tea lights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Package Your Candles Safely
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get custom candle boxes that protect and showcase your products
          </p>
          <Link
            href="/quote"
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
