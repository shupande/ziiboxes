import Link from "next/link";

export const metadata = {
  title: "Jewelry Packaging | ZiiBoxes",
  description: "Luxury jewelry boxes and packaging. Custom boxes for rings, necklaces, earrings, and bracelets.",
};

export default function JewelryPackagingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Jewelry Packaging
          </h1>
          <p className="text-xl text-indigo-100">
            Elegant boxes for fine jewelry and accessories
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ring Boxes
              </h3>
              <p className="text-gray-600">
                Luxury boxes for engagement rings, wedding bands, and fashion rings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Necklace Boxes
              </h3>
              <p className="text-gray-600">
                Elegant packaging for necklaces, chains, and pendants.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Premium Materials
              </h3>
              <p className="text-gray-600">
                Velvet, satin, leather, and premium cardboard options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Present Your Jewelry in Style
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Luxury packaging that matches the quality of your jewelry
          </p>
          <Link
            href="/quote"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
