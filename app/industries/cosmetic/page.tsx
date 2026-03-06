import Link from "next/link";

export const metadata = {
  title: "Cosmetic Packaging | ZiiBoxes",
  description: "Custom cosmetic packaging boxes for beauty brands. Luxury packaging for makeup, skincare, and beauty products.",
};

export default function CosmeticPackagingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cosmetic Packaging
          </h1>
          <p className="text-xl text-pink-100">
            Luxury packaging solutions for beauty brands
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Makeup Packaging
              </h3>
              <p className="text-gray-600">
                Custom boxes for lipstick, eyeshadow, foundation, and more.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🧴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Skincare Packaging
              </h3>
              <p className="text-gray-600">
                Elegant boxes for serums, creams, lotions, and skincare sets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Beauty Products
              </h3>
              <p className="text-gray-600">
                Packaging for nail polish, perfumes, and beauty accessories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Elevate Your Beauty Brand?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get custom cosmetic packaging that stands out on shelves
          </p>
          <Link
            href="/quote"
            className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
