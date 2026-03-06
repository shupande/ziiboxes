import Link from "next/link";

export const metadata = {
  title: "Contact Us | ZiiBoxes - Get in Touch",
  description: "Have questions about custom packaging? Contact ZiiBoxes team. We're here to help with your packaging needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100">
            We're here to help with any questions about our packaging solutions
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4">
                For general inquiries and quotes
              </p>
              <a
                href="mailto:hello@ziiboxes.com"
                className="text-blue-600 font-semibold hover:underline text-lg"
              >
                hello@ziiboxes.com
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Response within 24 hours
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4">
                Mon-Fri from 9am to 6pm EST
              </p>
              <a
                href="tel:+1-555-123-4567"
                className="text-blue-600 font-semibold hover:underline text-lg"
              >
                +1 (555) 123-4567
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Toll-free in US & Canada
              </p>
            </div>

            {/* Live Chat */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Live Chat
              </h3>
              <p className="text-gray-600 mb-4">
                Chat with our team now
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Start Chat
              </button>
              <p className="text-sm text-gray-500 mt-2">
                Average wait: 2 minutes
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="order">Order Inquiry</option>
                  <option value="design">Design Help</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">What's your minimum order quantity (MOQ)?</h3>
              <p className="text-gray-600">
                Our MOQ starts from just 100 units for most products, making it affordable for small businesses.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How long does production take?</h3>
              <p className="text-gray-600">
                Standard production time is 7-10 business days, plus shipping time to your location.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Do you provide design services?</h3>
              <p className="text-gray-600">
                Yes! We offer free design help to ensure your packaging looks perfect.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can I get a sample before ordering?</h3>
              <p className="text-gray-600">
                Absolutely! We offer sample packs so you can check quality before placing a bulk order.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-blue-600 font-semibold hover:underline text-lg">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Map/Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Location
          </h2>
          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <p className="text-gray-500 text-lg">
              Map placeholder - Serving customers worldwide
            </p>
          </div>
          <p className="text-center text-gray-600 mt-6">
            While we're based in the US, we serve e-commerce businesses globally.
          </p>
        </div>
      </section>
    </main>
  );
}
