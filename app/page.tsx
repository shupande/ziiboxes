import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Packaging for E-commerce Brands
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Premium custom mailer boxes, shipping boxes, and packaging solutions for Amazon, Etsy, and Shopify sellers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
              >
                View Products
              </Link>
              <Link
                href="/quote"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ZiiBoxes?
            </h2>
            <p className="text-xl text-gray-600">
              Professional packaging solutions designed for growing e-commerce businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Custom Design
              </h3>
              <p className="text-gray-600">
                Fully customizable boxes with your logo, colors, and branding. Stand out from the competition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Sustainable materials and recyclable options. Perfect for environmentally conscious brands.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-orange-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick turnaround times. Get your packaging in 7-10 business days, not weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to ship your products in style
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mailer Boxes */}
            <Link href="/products/mailer-boxes" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <Image
                    src="/images/products/mailer-boxes/mailer-box-01.png"
                    alt="Custom Mailer Boxes"
                    width={400}
                    height={300}
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Custom Mailer Boxes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Perfect for e-commerce, subscription boxes, and retail packaging.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>

            {/* Shipping Boxes */}
            <Link href="/products/shipping-boxes" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <Image
                    src="/images/products/shipping-boxes/shipping-box-01.png"
                    alt="Shipping Boxes"
                    width={400}
                    height={300}
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Shipping Boxes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Durable corrugated boxes for safe product delivery.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>

            {/* Gift Boxes */}
            <Link href="/products/gift-boxes" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <Image
                    src="/images/products/gift-boxes/gift-box-01.png"
                    alt="Gift Boxes"
                    width={400}
                    height={300}
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Gift Boxes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Elegant packaging for special occasions and luxury products.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized packaging solutions for your industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/industries/cosmetic" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-3xl mb-3">💄</div>
              <h3 className="font-bold text-gray-900">Cosmetics</h3>
            </Link>
            <Link href="/industries/candle" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-3xl mb-3">🕯️</div>
              <h3 className="font-bold text-gray-900">Candles</h3>
            </Link>
            <Link href="/industries/jewelry" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-3xl mb-3">💍</div>
              <h3 className="font-bold text-gray-900">Jewelry</h3>
            </Link>
            <Link href="/industries/food" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-3xl mb-3">🍫</div>
              <h3 className="font-bold text-gray-900">Food</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Packaging?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a custom quote for your business today
          </p>
          <Link
            href="/quote"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
