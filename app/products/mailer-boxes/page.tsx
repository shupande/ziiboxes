import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Custom Mailer Boxes | ZiiBoxes",
  description: "Premium custom mailer boxes for e-commerce brands. Low MOQ, fast delivery, fully customizable with your logo and branding.",
};

export default function MailerBoxesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Custom Mailer Boxes
          </h1>
          <p className="text-xl text-blue-100">
            Perfect for e-commerce, subscription boxes, and retail packaging
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/images/products/mailer-boxes/mailer-box-01.png"
                alt="Custom Mailer Box"
                width={600}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Product Features
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Material:</strong> Premium kraft cardboard (350gsm)
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
                    <strong>Lead Time:</strong> 7-10 business days
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Customization:</strong> Full color printing, custom sizes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-700">
                    <strong>Eco-Friendly:</strong> Recyclable and biodegradable
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

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                100 units
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                $3.50
              </p>
              <p className="text-gray-600 mb-6">per box</p>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">✓ Custom printing</li>
                <li className="text-gray-700">✓ Your logo</li>
                <li className="text-gray-700">✓ Standard sizes</li>
              </ul>
              <Link
                href="/quote"
                className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Order Now
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600">
              <div className="text-blue-600 text-sm font-semibold mb-2">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                500 units
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                $2.00
              </p>
              <p className="text-gray-600 mb-6">per box</p>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">✓ Custom printing</li>
                <li className="text-gray-700">✓ Your logo</li>
                <li className="text-gray-700">✓ Any size</li>
                <li className="text-gray-700">✓ Free design help</li>
              </ul>
              <Link
                href="/quote"
                className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Order Now
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1000+ units
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">
                $1.50
              </p>
              <p className="text-gray-600 mb-6">per box</p>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-700">✓ Everything above</li>
                <li className="text-gray-700">✓ Bulk discount</li>
                <li className="text-gray-700">✓ Priority production</li>
                <li className="text-gray-700">✓ Dedicated support</li>
              </ul>
              <Link
                href="/quote"
                className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-lg mb-2">E-commerce</h3>
              <p className="text-gray-600">Ship products in style</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="font-bold text-lg mb-2">Subscription Boxes</h3>
              <p className="text-gray-600">Monthly recurring packaging</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="font-bold text-lg mb-2">Retail</h3>
              <p className="text-gray-600">In-store and online sales</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="font-bold text-lg mb-2">Corporate Gifts</h3>
              <p className="text-gray-600">Professional branding</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
