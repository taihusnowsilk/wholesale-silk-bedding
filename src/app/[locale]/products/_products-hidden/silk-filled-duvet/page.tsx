import { ProductInfo, type Product } from "@/components/product/ProductInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mulberry Silk Comforter: All-Season Silk Filled Duvet - Taihu Snow Silk",
  description: "Mulberry Silk Comforter: All-Season Silk Filled Duvet. Experience luxurious comfort with a breathable & hypoallergenic silk-filled comforter. Enjoy a silk duvet, perfect all year!",
  alternates: {
    canonical: '/products/silk-filled-duvet',
  },
};  

const productData: Product = {
  title: "Premium Silk-Filled Duvet - All-Season Silk Comforter with Organic Cotton Shell for Hair and Skin Health",
  descriptions: [
    "100% Grade A long-strand mulberry silk filling",
    "300 GSM filling weight - ideal for summer",
    "300 thread count 100% cotton sateen cover",
    "Box-stitched design prevents silk shifting",
    "Temperature regulating and moisture-wicking",
    "Oeko-Tex Standard 100 certified"
  ],
  price: "$45.00 - $75.00",
  MOQ: "100 pcs",
  sizes: [
    "Twin (150×200cm)",
    "Queen (200×230cm)",
    "King (220×240cm)",
    "Custom Size"
  ],
  colors: ["Pink", "Blue", "Yellow"],
  imagesUrl: [
    '/images/summer-duvet-1.webp',
    '/images/summer-duvet-2.webp',
    '/images/summer-duvet-3.webp',
    '/images/summer-duvet-4.webp',
    '/images/summer-duvet-5.webp',
    '/images/summer-duvet-6.webp',
  ]
};

export default function SilkFilledDuvet() {

  return (
    <main>
        {/* Product Header Section */}
        <ProductInfo product={productData} />

        {/* Hero Content Section */}
        <section className="py-16 bg-gradient-to-br from-secondary to-primary/50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Luxury silk-filled duvet with organic cotton shell
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Experience the ultimate in luxury bedding with our premium silk-filled duvet, crafted with mulberry silk and featuring an organic cotton cotton shell. This all-season silk comforter is designed specifically for the growing North American and European markets, where personalized bedding solutions are experiencing dynamic expansion.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Mulberry Silk Comforter - Top Grade Breathable Bedding
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our silk duvet features long-strand silk silk fill that provides exceptional breathable comfort for every sleeper. The mulberry silk filled interior offers superior temperature regulation, making it perfect for hot sleepers who need moisture-wicking properties year-round.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Silk Quality</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Grade 6a silk mulberry silk comforter construction
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Long strand mulberry silk floss filling for durability
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Natural silk-filled core with silk shell exterior
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Oeko-Tex® Standard 100 certified for safety
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hair and Skin Benefits</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our silk-filled comforter provides exceptional benefits for hair and skin health. The smooth charmeuse silk surface reduces friction, while the natural silk fibers maintain optimal moisture levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Washable Silk-Filled Duvet Insert - Oeko-Tex Standard 100 Certified
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                The global comforter market, valued at approximately USD 10 billion in 2023, is projected to grow at a CAGR of 5.5% through 2032, with silk products leading premium segments.
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Premium Materials & Construction</h3>
                <p className="text-gray-700">
                  Pure Silk Excellence with Standard 100 certification ensures our duvet meets the highest safety standards. Each silk duvet insert features premium cotton cover construction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* All-Season Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              All-Season Silk Duvet with Cotton Cover - Perfect for Hot Sleepers
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-secondary to-primary/40 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">All-Season Comfort features:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Summer comforter functionality with cooling comforter properties
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Summer weight design that adapts to warm and cool conditions
                      </li>
              </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Season silk comforter versatility for winter and cool weather
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Moisture-wicking technology for optimal sleep comfort
                      </li>
              </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-gray-600 italic">
                The US bedding market, valued at $19.27 billion in 2024, shows growing demand for health-focused bedding solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Customer Reviews: Mulberry Silk Filled Comforter Performance
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary/30">
                <p className="text-gray-700 text-lg mb-4 italic">
                  "This silk-filled duvet transformed my sleep quality. The great quality and super soft texture make it worth every penny."
                </p>
                <p className="text-gray-700 font-semibold">- European Customer</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary/30">
                <p className="text-gray-700 text-lg mb-4 italic">
                  "Perfect cooling comforter for hot summer nights. The mulberry silk filled comforter keeps me comfortable all season."
                </p>
                <p className="text-gray-700 font-semibold">- American Customer</p>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-8 italic">
              The comforters market shows strong growth, with consumers increasingly seeking personalized solutions across North America and Europe.
            </p>
          </div>
        </section>

        {/* Hypoallergenic Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Hypoallergenic Silk Fill - Natural Silk-Filled Luxury Bedding
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Our hypoallergenic silk construction is perfect for sensitive skin. The natural silk-filled design provides:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="w-12 h-12 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Breathable comfort</h3>
                  <p className="text-gray-600 text-sm">for every sleeper</p>
                </div>
                
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="w-12 h-12 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Moisture-wicking</h3>
                  <p className="text-gray-600 text-sm">properties</p>
                </div>
                
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="w-12 h-12 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hypoallergenic</h3>
                  <p className="text-gray-600 text-sm">benefits</p>
                </div>
                
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="w-12 h-12 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Superior temperature</h3>
                  <p className="text-gray-600 text-sm">regulation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              King Size Queen Size Twin Size - Mulberry Silk Duvet Insert Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Twin Size</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">68"×86"</p>
                <p className="text-gray-600 mb-6">Perfect starter duvet</p>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="text-sm text-gray-700">Ideal for single beds and guest rooms</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center border-2 border-primary/30 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary/30 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Queen Size</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">88"×92"</p>
                <p className="text-gray-600 mb-6">Most popular bedding choice</p>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="text-sm text-gray-700">Perfect for couples and master bedrooms</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">King Size</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">104"×92"</p>
                <p className="text-gray-600 mb-6">Ultimate luxury bedding experience</p>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="text-sm text-gray-700">Maximum comfort for spacious bedrooms</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Each mulberry silk filled duvet insert features:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Cotton cover with 300+ thread count
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Washable design for easy maintenance
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Silk floss construction
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Long-strand silk technology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Moisture-Wicking Silk Comforter Cover - Long-Strand Silk Technology
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Our advanced moisture-wicking technology features long-strand silk floss construction. The silk comforter cover design ensures optimal comfort with:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Momme silk quality standards",
                  "Long-staple fiber construction", 
                  "Top grade materials",
                  "Oeko-Tex certification"
                ].map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-primary/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 font-semibold">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cooling Comforter for Summer Weight - Season Silk Comfort
                </h3>
                <p className="text-gray-700">
                  Experience the perfect season silk comfort with our cooling comforter design. The summer weight construction provides year-round versatility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Premium Brand Comparisons
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 mb-8 text-center">
                Compare with leading brands like LilySilk, Cozy Earth, THXSilk, and MommesilK:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Advantages</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Superior 7a grade mulberry silk duvet quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Enhanced covered silk comforter design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">Top grade materials exceeding Cuddle Dreams silk comforter standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </span>
                      <span className="text-gray-700">6a grade certification</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-primary/10 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Care & Maintenance</h3>
                  <h4 className="font-semibold text-gray-800 mb-4">Easy Care Instructions:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Washable in gentle cycle with mild detergent
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Compatible with duvet cover and pillowcase sets
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Pairs beautifully with silk sheets and sateen bed sheets
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Egyptian cotton outer shell for added durability
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary/30 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Works with linen accessories
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Technical Specifications
            </h2>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-gray-50 to-primary/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Premium Construction:</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-primary/30 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">Filled with 100% silk floss filling</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-primary/30 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">Grade mulberry silk sourcing from premium plantations</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-primary/30 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">Cotton shell protection</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-primary/30 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                      <span className="text-gray-700">Silk-filled comforter technology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Silk Comforter */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Silk Comforter
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">All-Season versatility</h3>
                <p className="text-gray-600 text-sm">One duvet for year-round comfort</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hypoallergenic properties</h3>
                <p className="text-gray-600 text-sm">Safe for every sleeper</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Breathable design</h3>
                <p className="text-gray-600 text-sm">Superior airflow compared to traditional duvets</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">💧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Moisture-wicking technology</h3>
                <p className="text-gray-600 text-sm">Keeps you dry and comfortable</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Silk-filled duvets quality</h3>
                <p className="text-gray-600 text-sm">Premium construction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Information */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Ordering Information
            </h2>
            
              <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Available for wholesale orders with:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Pillowcase and linen set combinations
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Duvet cover compatibility
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Silk duvet options
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Pure silk accessories
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-6 italic">
                  The global bedding industry continues expanding, with the comforter market reaching $4.29 billion USD in 2023, reflecting growing consumer demand for premium sleep solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Conclusion</h2>
              <p className="text-lg mb-8 leading-relaxed">
                Invest in the finest silk bedding experience with our mulberry silk comforter. From twin size to king size, each silk duvet insert delivers unmatched comfort, temperature regulation, and great quality that discerning customers expect from premium luxury bedding.
              </p>
              <div className=" p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Premium Silk Bedding Collection</h3>
                <p className="text-lg">
                  Experience the luxury of mulberry silk with our complete bedding line including silk-filled duvet, silk comforter, and accessories.
                </p>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
