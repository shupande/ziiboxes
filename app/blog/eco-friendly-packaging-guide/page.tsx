import Link from "next/link";

export const metadata = {
  title: "Eco-Friendly Packaging Guide 2026",
  description: "Complete guide to sustainable packaging. Learn about eco-friendly materials, certifications, and how to make your brand greener.",
};

export default function EcoFriendlyPackagingGuide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Eco-Friendly Packaging: Complete Guide
          </h1>
          <p className="text-xl text-green-100">
            Sustainable packaging solutions for environmentally conscious brands
          </p>
          <div className="mt-8 flex items-center space-x-4 text-sm">
            <span>📅 March 3, 2026</span>
            <span>⏱️ 9 min read</span>
            <span>🌱 Sustainability</span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-blue max-w-none">
            <h2>Why Choose Eco-Friendly Packaging?</h2>
            <p>Consumers increasingly prefer sustainable brands:</p>
            <ul>
              <li>🌍 73% willing to pay more for sustainable packaging</li>
              <li>♻️ 67% prefer recycled materials</li>
              <li>📦 52% consider packaging in purchase decisions</li>
            </ul>

            <h2>Eco-Friendly Materials</h2>
            <h3>1. Recycled Cardboard</h3>
            <ul>
              <li>Made from post-consumer waste</li>
              <li>100% recyclable</li>
              <li>Cost: Similar to virgin materials</li>
            </ul>

            <h3>2. Kraft Paper</h3>
            <ul>
              <li>Natural, unbleached</li>
              <li>Biodegradable</li>
              <li>Rustic aesthetic</li>
            </ul>

            <h3>3. Biodegradable Materials</h3>
            <ul>
              <li>Breaks down naturally</li>
              <li>Compostable options available</li>
              <li>Slightly higher cost</li>
            </ul>

            <h2>Certifications to Look For</h2>
            <ul>
              <li><strong>FSC Certified:</strong> Responsibly sourced wood</li>
              <li><strong>SFI:</strong> Sustainable Forestry Initiative</li>
              <li><strong>Recycled Content:</strong> Post-consumer waste percentage</li>
              <li><strong>Compostable:</strong> BPI or OK Compost certified</li>
            </ul>

            <h2>How to Make Your Packaging More Sustainable</h2>
            <ol>
              <li><strong>Reduce size:</strong> Use smallest box possible</li>
              <li><strong>Eliminate plastic:</strong> Use paper tape, no plastic windows</li>
              <li><strong>Use soy-based inks:</strong> More eco-friendly than petroleum</li>
              <li><strong>Design for reuse:</strong> Encourage customers to repurpose</li>
              <li><strong>Minimal design:</strong> Less ink = more recyclable</li>
            </ol>

            <h2>Cost Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-3">Material</th>
                    <th className="border p-3">Cost Premium</th>
                    <th className="border p-3">Recyclable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">Standard Cardboard</td>
                    <td className="border p-3">Baseline</td>
                    <td className="border p-3">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Recycled Cardboard</td>
                    <td className="border p-3">+5-10%</td>
                    <td className="border p-3">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Kraft Paper</td>
                    <td className="border p-3">+10-15%</td>
                    <td className="border p-3">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="border p-3">Biodegradable</td>
                    <td className="border p-3">+20-30%</td>
                    <td className="border p-3">✅ Compostable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Marketing Your Eco-Packaging</h2>
            <p>Communicate your sustainability efforts:</p>
            <ul>
              <li>Add "Made from recycled materials" label</li>
              <li>Include recycling instructions</li>
              <li>Share on social media</li>
              <li>Use eco-friendly messaging on packaging</li>
            </ul>

            <p className="text-lg font-semibold">
              Ready to go green?{" "}
              <Link href="/quote" className="text-green-600 hover:underline">
                Get eco-friendly packaging quote!
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
