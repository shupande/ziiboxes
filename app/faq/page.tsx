import Link from "next/link";

export const metadata = {
  title: "FAQ | ZiiBoxes - Frequently Asked Questions",
  description: "Find answers to common questions about custom packaging, ordering, shipping, and more.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our MOQ starts from just 100 units for most products. This makes it affordable for small businesses and startups to get custom packaging without large upfront investments."
    },
    {
      question: "How long does production take?",
      answer: "Standard production time is 7-10 business days after design approval. Rush orders may be available for an additional fee. Shipping time varies depending on your location."
    },
    {
      question: "Do you provide design services?",
      answer: "Yes! We offer free design consultation and help to ensure your packaging looks perfect. Our team can help you with layout, colors, and technical specifications."
    },
    {
      question: "Can I get a sample before placing a bulk order?",
      answer: "Absolutely! We offer sample packs so you can check the quality before committing to a large order. Sample orders typically ship within 2-3 business days."
    },
    {
      question: "What file formats do you accept for artwork?",
      answer: "We accept AI, PDF, EPS, and high-resolution PNG files. For best results, please provide vector files with CMYK color mode and 300 DPI resolution."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! Shipping costs and delivery times vary by destination. We work with major carriers to ensure safe and timely delivery."
    },
    {
      question: "What materials do you use?",
      answer: "We use premium kraft cardboard, corrugated materials, and rigid boxes. All materials are recyclable and we offer eco-friendly options made from recycled content."
    },
    {
      question: "Can you match specific colors?",
      answer: "Yes! We can match Pantone (PMS) colors to ensure brand consistency. Please provide the Pantone number when requesting a quote."
    },
    {
      question: "What if my products arrive damaged?",
      answer: "We stand behind our quality. If your order arrives damaged, contact us within 7 days and we'll replace the defective products at no cost to you."
    },
    {
      question: "Do you offer discounts for large orders?",
      answer: "Yes! We offer volume discounts for orders over 1,000 units. The more you order, the more you save. Contact us for a custom quote."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help with any questions about your packaging needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
