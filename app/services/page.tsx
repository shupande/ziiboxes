import Link from "next/link";

export const metadata = {
  title: "Our Services | ZiiBoxes - Custom Packaging Solutions",
  description: "Comprehensive packaging services for e-commerce brands. Custom design, fast production, and worldwide shipping.",
};

const services = [
  {
    icon: "🎨",
    title: "Custom Design",
    description: "Work with our design team to create packaging that perfectly represents your brand. From concept to final artwork.",
    features: [
      "Free design consultation",
      "3D mockups",
      "Unlimited revisions",
      "Print-ready files",
    ],
  },
  {
    icon: "📦",
    title: "Custom Manufacturing",
    description: "High-quality custom packaging manufactured to your exact specifications. Any size, any design.",
    features: [
      "MOQ from 100 units",
      "Any custom size",
      "Full-color printing",
      "Premium materials",
    ],
  },
  {
    icon: "⚡",
    title: "Fast Production",
    description: "Industry-leading turnaround times. Get your packaging faster without compromising quality.",
    features: [
      "7-10 business days",
      "Rush orders available",
      "Real-time tracking",
      "On-time guarantee",
    ],
  },
  {
    icon: "🌱",
    title: "Sustainable Options",
    description: "Eco-friendly packaging solutions for environmentally conscious brands. Recyclable and biodegradable materials.",
    features: [
      "Recycled materials",
      "Biodegradable options",
      "FSC certified",
      "Carbon-neutral shipping",
    ],
  },
  {
    icon: "📊",
    title: "Bulk Orders",
    description: "Special pricing and dedicated support for large volume orders. Scale your packaging with confidence.",
    features: [
      "Volume discounts",
      "Dedicated account manager",
      "Priority production",
      "Flexible payment terms",
    ],
  },
  {
    icon: "🎁",
    title: "Subscription Boxes",
    description: "Specialized solutions for subscription box businesses. Consistent quality, reliable monthly delivery.",
    features: [
      "Monthly production runs",
      "Consistent quality",
      "Flexible quantities",
      "Integration support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            End-to-end packaging solutions designed for e-commerce success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Request Quote</h3>
              <p className="text-gray-600">
                Tell us about your needs - size, quantity, design
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Design & Approve</h3>
              <p className="text-gray-600">
                Work with our team, review 3D mockups, approve final design
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Production</h3>
              <p className="text-gray-600">
                We manufacture your packaging in 7-10 business days
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Delivery</h3>
              <p className="text-gray-600">
                Fast shipping to your doorstep, anywhere in the world
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link href="/industries/cosmetic" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">💄</div>
              <h3 className="font-bold text-gray-900">Cosmetics & Beauty</h3>
              <p className="text-sm text-gray-600 mt-2">Luxury packaging for beauty brands</p>
            </Link>
            <Link href="/industries/candle" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🕯️</div>
              <h3 className="font-bold text-gray-900">Candles & Home</h3>
              <p className="text-sm text-gray-600 mt-2">Safe, stylish candle boxes</p>
            </Link>
            <Link href="/industries/jewelry" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">💍</div>
              <h3 className="font-bold text-gray-900">Jewelry & Accessories</h3>
              <p className="text-sm text-gray-600 mt-2">Elegant boxes for precious items</p>
            </Link>
            <Link href="/industries/food" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🍫</div>
              <h3 className="font-bold text-gray-900">Food & Beverage</h3>
              <p className="text-sm text-gray-600 mt-2">Food-safe packaging solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create packaging that elevates your brand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
