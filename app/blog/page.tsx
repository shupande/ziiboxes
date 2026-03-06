import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog | ZiiBoxes - Packaging Tips & Insights",
  description: "Expert tips on e-commerce packaging, branding, and shipping. Learn how to create unforgettable unboxing experiences.",
};

const blogPosts = [
  {
    slug: "amazon-fba-packaging-requirements-2026",
    title: "Amazon FBA Packaging Requirements 2026: Complete Guide",
    excerpt: "Everything you need to know about Amazon FBA packaging requirements in 2026. Avoid rejection and get your products to customers faster.",
    category: "Amazon FBA",
    readTime: "8 min read",
    date: "March 5, 2026",
  },
  {
    slug: "how-much-does-custom-packaging-cost",
    title: "How Much Does Custom Packaging Cost? (2026 Pricing Guide)",
    excerpt: "A complete breakdown of custom packaging costs. Learn what factors affect pricing and how to get the best value for your business.",
    category: "Pricing",
    readTime: "6 min read",
    date: "March 4, 2026",
  },
  {
    slug: "best-packaging-for-small-business",
    title: "Best Packaging for Small Business in 2026",
    excerpt: "Discover the best packaging options for small businesses. Compare costs, MOQs, and find the perfect solution for your budget.",
    category: "Small Business",
    readTime: "7 min read",
    date: "March 3, 2026",
  },
  {
    slug: "eco-friendly-packaging-guide",
    title: "Eco-Friendly Packaging: Complete Guide for E-commerce",
    excerpt: "Learn everything about sustainable packaging options. From materials to certifications, make your brand more environmentally friendly.",
    category: "Sustainability",
    readTime: "9 min read",
    date: "March 2, 2026",
  },
  {
    slug: "unboxing-experience-design-tips",
    title: "How to Create an Unforgettable Unboxing Experience",
    excerpt: "Turn customers into brand advocates with a memorable unboxing experience. Design tips and real examples from successful brands.",
    category: "Branding",
    readTime: "6 min read",
    date: "March 1, 2026",
  },
  {
    slug: "candle-packaging-ultimate-guide",
    title: "Candle Packaging: The Ultimate Guide",
    excerpt: "Everything you need to know about candle packaging. From safety to design, create packaging that protects and sells.",
    category: "Industry Guide",
    readTime: "8 min read",
    date: "February 28, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ZiiBoxes Blog
          </h1>
          <p className="text-xl text-blue-100">
            Expert tips on packaging, branding, and e-commerce success
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <Image
                      src={`/images/blog/guides/guide-01.jpg`}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                      <span className="text-blue-600 font-semibold group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get packaging tips, industry insights, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </main>
  );
}
