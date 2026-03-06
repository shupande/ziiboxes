import Link from "next/link";

export const metadata = {
  title: "Custom Gift Boxes | ZiiBoxes",
  description: "Elegant custom gift boxes for retail, holidays, and special occasions. Premium quality, custom printing, low MOQ.",
};

export default function GiftBoxesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Custom Gift Boxes
          </h1>
          <p className="text-xl text-blue-100">
            Elegant packaging for special occasions and retail products
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Product Image</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Product Features
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Material:</strong> Premium cardboard, rigid options
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>MOQ:</strong> Starting from 100 units
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Finishing:</strong> Matte, gloss, soft-touch options
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Extras:</strong> Ribbons, inserts, magnetic closure
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Perfect for:</strong> Retail, gifts, luxury products
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/quote"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Retail Products
              </h3>
              <p className="text-gray-600">
                Beautiful packaging that enhances your product value and brand image.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Special Occasions
              </h3>
              <p className="text-gray-600">
                Weddings, birthdays, holidays - make every occasion memorable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Luxury Items
              </h3>
              <p className="text-gray-600">
                Premium packaging for jewelry, cosmetics, and high-end products.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
