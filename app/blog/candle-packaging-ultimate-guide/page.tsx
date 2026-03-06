import Link from "next/link";

export const metadata = {
  title: "Candle Packaging: The Ultimate Guide",
  description: "Everything you need to know about candle packaging. Safety, design, and materials for candle makers.",
};

export default function CandlePackagingGuide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Candle Packaging: The Ultimate Guide
          </h1>
          <p className="text-xl text-amber-100">
            Everything candle makers need to know about safe, beautiful packaging
          </p>
          <div className="mt-8 flex items-center space-x-4 text-sm">
            <span>📅 March 1, 2026</span>
            <span>⏱️ 8 min read</span>
            <span>🕯️ Industry Guide</span>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-blue max-w-none">
            <h2>Why Candle Packaging Matters</h2>
            <p>Candle packaging serves multiple purposes:</p>
            <ul>
              <li>🔒 <strong>Protection:</strong> Prevents breakage during shipping</li>
              <li>🔥 <strong>Safety:</strong> Contains fragrance, protects from heat</li>
              <li>🎨 <strong>Branding:</strong> Communicates your brand story</li>
              <li>📦 <strong>Display:</strong> Attracts customers on shelves</li>
            </ul>

            <h2>Packaging Requirements for Candles</h2>
            <h3>1. Heat Resistance</h3>
            <p>Candle boxes must withstand temperatures up to 120°F (49°C) without warping.</p>

            <h3>2. Fragrance Containment</h3>
            <p>Quality packaging preserves scent throw and prevents fragrance loss.</p>

            <h3>3. Structural Integrity</h3>
            <p>Must protect glass jars from breaking during shipping (minimum 4-foot drop test).</p>

            <h2>Best Packaging Options for Candles</h2>
            
            <h3>Mailer Boxes</h3>
            <ul>
              <li>Best for: Shipping individual candles</li>
              <li>Price: $2-4 per box</li>
              <li>MOQ: 100 units</li>
            </ul>

            <h3>Two-Piece Rigid Boxes</h3>
            <ul>
              <li>Best for: Luxury candles, gift sets</li>
              <li>Price: $3-6 per box</li>
              <li>MOQ: 200 units</li>
            </ul>

            <h3>Sleeve Boxes</h3>
            <ul>
              <li>Best for: Standard jar candles</li>
              <li>Price: $1.50-3 per box</li>
              <li>MOQ: 100 units</li>
            </ul>

            <h2>Essential Packaging Elements</h2>
            <ul>
              <li>✅ <strong>Warning Labels:</strong> Fire safety warnings (required)</li>
              <li>✅ <strong>Ingredient List:</strong> Wax type, fragrance oils</li>
              <li>✅ <strong>Burn Instructions:</strong> First burn, trimming wick</li>
              <li>✅ <strong>Brand Story:</strong> Your candle making process</li>
              <li>✅ <strong>Scent Description:</strong> Fragrance notes</li>
            </ul>

            <h2>Design Tips for Candle Boxes</h2>
            <ol>
              <li><strong>Show the candle:</strong> Window cutout or clear image</li>
              <li><strong>Use scent imagery:</strong> Colors that match fragrance</li>
              <li><strong>Include safety info:</strong> Make warnings visible but stylish</li>
              <li><strong>Consider unboxing:</strong> Interior printing for premium feel</li>
              <li><strong>Add inserts:</strong> Cardboard dividers for multi-packs</li>
            </ol>

            <h2>Shipping Considerations</h2>
            <p>Candles present unique shipping challenges:</p>
            <ul>
              <li>🌡️ <strong>Temperature:</strong> Avoid extreme heat/cold</li>
              <li>💥 <strong>Fragility:</strong> Glass jars need extra cushioning</li>
              <li>👃 <strong>Fragrance:</strong> Seal to prevent scent loss</li>
              <li>⚖️ <strong>Weight:</strong> Candles are heavy, factor into shipping</li>
            </ul>

            <h2>Cost-Saving Tips</h2>
            <ul>
              <li>Order standard sizes (saves 20-30%)</li>
              <li>One-color printing instead of full color</li>
              <li>Buy in bulk (500+ units)</li>
              <li>Use stock boxes with custom stickers initially</li>
            </ul>

            <p className="text-lg font-semibold">
              Ready to package your candles?{" "}
              <Link href="/quote" className="text-amber-600 hover:underline">
                Get custom candle packaging quote!
              </Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
