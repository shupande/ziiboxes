import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | ZiiBoxes",
  description: "Specialized packaging solutions for cosmetics, candles, jewelry, food, and more industries.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h1>
          <p className="text-xl text-blue-100">
            Specialized packaging solutions for every industry
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/industries/cosmetic" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">💄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Cosmetics
                </h3>
                <p className="text-gray-600">
                  Luxury packaging for beauty brands
                </p>
              </div>
            </Link>

            <Link href="/industries/candle" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">🕯️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Candles
                </h3>
                <p className="text-gray-600">
                  Safe, beautiful candle boxes
                </p>
              </div>
            </Link>

            <Link href="/industries/jewelry" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">💍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Jewelry
                </h3>
                <p className="text-gray-600">
                  Elegant boxes for fine jewelry
                </p>
              </div>
            </Link>

            <Link href="/industries/food" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">🍫</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                  Food
                </h3>
                <p className="text-gray-600">
                  Food-safe packaging solutions
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We create custom packaging solutions for all industries
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
