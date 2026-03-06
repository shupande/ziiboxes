import Link from "next/link";

export const metadata = {
  title: "About Us | ZiiBoxes - Your Packaging Partner",
  description: "Learn about ZiiBoxes - your trusted partner for custom e-commerce packaging. Our mission, values, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About ZiiBoxes
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering e-commerce brands with beautiful, sustainable, and affordable packaging solutions
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                ZiiBoxes was founded with a simple mission: to make high-quality custom packaging accessible to e-commerce businesses of all sizes.
              </p>
              <p className="text-gray-700 mb-4">
                We saw small business owners struggling with packaging suppliers who demanded huge minimum orders, charged premium prices, and delivered mediocre quality. We knew there had to be a better way.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we're proud to serve thousands of e-commerce brands worldwide - from startups selling their first products to established businesses scaling their operations.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/products"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  View Products
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
              <p className="text-gray-500 text-lg">
                Company photo placeholder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To empower e-commerce entrepreneurs with packaging that elevates their brand, delights their customers, and grows their business - all at prices that make sense.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We're committed to reducing packaging waste. Our eco-friendly options use recycled materials, are fully recyclable, and minimize environmental impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Customer First
              </h3>
              <p className="text-gray-700">
                Your success is our success. We provide personalized support, free design help, and flexible solutions to help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose ZiiBoxes?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-lg mb-2">Low MOQ</h3>
              <p className="text-gray-600">
                Start from just 100 units. Perfect for small businesses and testing new products.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                7-10 business days production. Get to market faster than competitors.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-lg mb-2">Free Design Help</h3>
              <p className="text-gray-600">
                Our design team helps you create packaging that stands out.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Factory-direct prices. Up to 30% less than competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10M+</div>
              <div className="text-blue-100">Boxes Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Commitment to You
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              When you work with ZiiBoxes, you're not just getting a packaging supplier - you're getting a partner invested in your success.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              From your first sample order to scaling to thousands of units per month, we're here to support you every step of the way.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team of packaging experts, designers, and customer support specialists are dedicated to ensuring you have the best experience possible.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create packaging that helps your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="/products"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
