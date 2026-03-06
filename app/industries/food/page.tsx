import Link from "next/link";

export const metadata = {
  title: "Food Packaging | ZiiBoxes",
  description: "Food-safe packaging solutions. Custom boxes for baked goods, chocolates, snacks, and gourmet foods.",
};

export default function FoodPackagingPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Food Packaging
          </h1>
          <p className="text-xl text-orange-100">
            Safe, compliant packaging for food products
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🍰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Baked Goods
              </h3>
              <p className="text-gray-600">
                Boxes for cakes, cookies, pastries, and bread. Food-safe materials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🍫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Chocolates & Candy
              </h3>
              <p className="text-gray-600">
                Elegant boxes for chocolates, truffles, and confections.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🥡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Takeout & Delivery
              </h3>
              <p className="text-gray-600">
                Sturdy containers for restaurant takeout and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Food-Safe Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">FDA Compliant</h3>
              <p className="text-gray-600">Meets FDA food contact standards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Food-Grade Materials</h3>
              <p className="text-gray-600">Safe for direct food contact</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Grease-Resistant</h3>
              <p className="text-gray-600">Coatings for oily foods</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Package Your Food Products Safely
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get food-safe packaging that protects and presents your products
          </p>
          <Link
            href="/quote"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
