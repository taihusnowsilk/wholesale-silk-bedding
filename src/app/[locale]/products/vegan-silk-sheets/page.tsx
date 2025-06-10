import { ProductInfo, type Product } from "@/components/product/ProductInfo";
import type { Metadata } from "next";
import AutoCarousel from "@/components/product/AutoCarousel";
import Image from "next/image";
import { AnchorNav, sections } from "@/components/product/AnchorNav";

export const metadata: Metadata = {
  title: "Vegan Silk Sheets: Eucalyptus & The Best Silk Sheet Options - Taihu Snow Silk",
  description: "Explore vegan silk sheets: luxurious silk sheet options including Eucalyptus. Find the best vegan silk bedding and sheet sets here!",
  alternates: {
    canonical: 'https://www.wholesalesilkbedding.com/products/vegan-silk-sheets',
  },
};

const productData: Product = {
  title: "Best Silk Sheets - Premium Vegan Silk Bedding Collection",
  descriptions: [
    "100% vegan silk alternative made from bamboo and eucalyptus",
    "22 momme weight for luxurious, durable silk-like feel",
    "Naturally hypoallergenic, ideal for sensitive skin and hair",
    "Breathable and temperature-regulating for hot sleepers",
    "Wrinkle-resistant and machine-washable on gentle cycle",
    "Available in Queen (standard) and King sizes with fitted sheet, flat sheet, and pillowcases"
  ],
  price: "$65- $125",
  MOQ: "30 pcs",
  sizes: [
    "Full",
    "Queen",
    "King",
    "Cal.King",
    "Custom Size"
  ],
  colors: ["Pink", "Blue", "White", "Custom Color"],
  imagesUrl: [
    '/images/vegan-silk-sheets-1.webp',
    '/images/vegan-silk-sheets-2.webp',
    '/images/vegan-silk-sheets-3.webp',
    '/images/vegan-silk-sheets-4.webp',
    '/images/vegan-silk-sheets-5.webp',
    '/images/vegan-silk-sheets-6.webp',
  ]
};

export default function VeganSilkSheets() {

  return (
    <main>
      {/* Product Header Section */}
      <ProductInfo product={productData} />


      <AnchorNav sections={sections} />

      {/* Product Description Section */}
      <section id="desc" className="py-16 ">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Description</p>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Discover the luxurious feel of silk with our vegan silk sheets. From eucalyptus silk to mulberry silk sheets, experience breathable bedding that offers the perfect sleep experience for hot sleepers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shop Silk Sheet Sets</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What Makes Our Vegan Silk Sheets Special?</h3>
            <p className="mb-6">
              Our silk sheet sets combine the benefits of silk with eco-friendly materials, offering luxurious silk sheets without compromising on ethics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🌱 100% Vegan Silk Alternative</h4>
                <p className="mb-4">
                  Our vegan silk sheets are made without harming any silkworm. These sheets are made from viscose derived from bamboo and eucalyptus, providing the look and feel of silk while being completely cruelty-free.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">✨ 22 Momme Silk Quality</h4>
                <p className="mb-4">
                  Experience the highest quality silk available with our 22 momme sheets. The denser the fabric, the more luxurious feel you get. Our silk fabric provides the same softness as traditional silk.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🌡️ Perfect for Hot Sleepers</h4>
                <p className="mb-4">
                  The breathability of our silk bedding offers excellent temperature regulation. Silk is naturally breathable, making these sheets ideal for a comfortable night's sleep in any weather.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">💧 Naturally Hypoallergenic</h4>
                <p className="mb-4">
                  Silk is naturally hypoallergenic and resistant to dust mites. Our high-quality bedding is perfect for sensitive skin and hair, providing the benefits of silk without irritation.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Silk Sheet Set Collection</h2>
            <p className="mb-6">Choose from our best silk sheets available in queen size and king size options</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Bamboo Sheet Set</h4>
                <p className="text-sm text-gray-600 mb-3">Bamboo Sheet Set - Vegan Silk</p>
                <p className="mb-4">
                  Made from bamboo, this bamboo sheet set offers the luxurious feel of real silk. The sheet set includes fitted sheet, flat sheet, and pillowcases. Available in queen and king sizes.
                </p>
                <p className="font-semibold mb-2">Queen Size: $65 | King Size: $85</p>
                <p className="text-sm text-gray-600">Features: Wrinkle-resistant, breathable, eco-friendly</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Eucalyptus Silk Sheets</h4>
                <p className="text-sm text-gray-600 mb-3">Eucalyptus Silk Sheet Set</p>
                <p className="mb-4">
                  Our eucalyptus silk sheets offer superior breathability and softness. This sheet set is made with 100 percent eucalyptus fibers, providing the feel of silk with enhanced cooling properties.
                </p>
                <p className="font-semibold mb-2">Queen Size: $75 | King Size: $95</p>
                <p className="text-sm text-gray-600">Features: Cooling, hypoallergenic, sustainable</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Mulberry Silk Alternative</h4>
                <p className="text-sm text-gray-600 mb-3">Vegan Mulberry Silk Sheets</p>
                <p className="mb-4">
                  Experience the luxury of mulberry silk sheets without the ethical concerns. Our silk alternative provides the same benefits of silk including temperature regulation and skin-friendly properties.
                </p>
                <p className="font-semibold mb-2">Queen Size: $85 | King Size: $105</p>
                <p className="text-sm text-gray-600">Features: 22 momme quality, peace silk alternative</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Silk Bedding vs Traditional Options</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Silk Over Cotton Sheets?</h3>
            <p className="mb-6">
              While cotton sheets are popular, silk sheets offer superior benefits. Silk is also naturally temperature-regulating, while cotton can trap heat. Our silk bed sheets provide better breathability than traditional cotton, making them perfect for hot sleepers seeking a comfortable night's sleep.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Silk Sheet Care Instructions</h3>
            <p className="mb-6">
              Our sheets come with easy care instructions. Unlike traditional silk that requires special care, our vegan silk sheets can be washed in a gentle cycle with cold water. The sheets still maintain their luxurious feel and wrinkle resistance after washing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">The Science Behind Silk Quality</h3>
            <p className="mb-6">
              The highest quality silk is measured in momme weight. Our 22 momme silk provides the perfect balance of durability and softness. Grade 6A mulberry silk is considered the gold standard, and our vegan alternative matches this quality without using any silkworm products.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Skin and Hair Benefits</h3>
            <p className="mb-6">
              Sleeping on silk helps reduce friction on skin and hair. Silk provides a smooth surface that prevents hair breakage and reduces wrinkle formation during sleep. Our luxury bedding offers these same benefits while being completely vegan and eco-friendly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Complete Sleep Experience with Vegan Silk</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🛡️ Hypoallergenic Protection</h4>
                <p>Our sheets are naturally hypoallergenic and resistant to dust mites. The fabric blend creates a barrier against allergens while maintaining breathability for optimal comfort.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🌍 Eco-Friendly Luxury</h4>
                <p>Made from sustainable bamboo and eucalyptus, our sheets offer the look and feel of silk without environmental impact. The production process is eco-friendly and cruelty-free.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">💤 Enhanced Sleep Quality</h4>
                <p>The temperature regulation properties help hot sleepers maintain comfortable body temperature throughout the night. Silk is known for its ability to adapt to your body's needs.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">💰 Superior Value</h4>
                <p>Our sheets offer the benefits of 100 percent mulberry silk at a fraction of the cost. The highest quality materials ensure long-lasting durability and continued softness.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🧴 Easy Maintenance</h4>
                <p>Unlike true silk that requires special detergent and care, our sheets may be washed in your regular cycle with cold water. The sheets are only available in wrinkle-resistant finishes.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">✨ Luxurious Feel</h4>
                <p>Experience the same luxurious feel as traditional silk. Our fabric provides the smooth texture and elegant drape that silk is naturally known for, ensuring a premium sleep experience.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews - Best Silk Sheets Experience</h2>
            <p className="mb-6">See why our silk sheet sets are rated as the best by customers worldwide</p>

            <div className="space-y-6 mb-8">
              <blockquote className="border-l-4 border-gray-300 pl-6">
                <div className="mb-2">★★★★★</div>
                <p className="mb-2 italic">
                  "These sheets are a great investment! The queen sheet set feels exactly like real silk but without the guilt. The fitted sheet stays in place all night, and the flat sheet is incredibly soft. Best silk sheets I've ever owned!"
                </p>
                <p className="text-sm text-gray-600">- Sarah M., Verified Buyer</p>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-6">
                <div className="mb-2">★★★★★</div>
                <p className="mb-2 italic">
                  "As someone who runs hot at night, these sheets offer perfect temperature control. The bamboo sheet set is breathable and comfortable. The silk sheets help me get a better night's sleep than any cotton sheets I've tried."
                </p>
                <p className="text-sm text-gray-600">- David L., Hot Sleeper</p>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-6">
                <div className="mb-2">★★★★★</div>
                <p className="mb-2 italic">
                  "The quality is outstanding! Available in queen and king sizes, these luxurious silk sheets have the same feel as expensive mulberry silk sheets but at a much better price. The sheets come beautifully packaged too."
                </p>
                <p className="text-sm text-gray-600">- Maria K., Luxury Bedding Enthusiast</p>
              </blockquote>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Silk Sheet Set Buying Guide</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding Momme Weight</h3>
            <p className="mb-6">
              Momme sheets are measured by weight and density. Our 22 momme silk represents the perfect balance for luxury bedding. The higher the momme, the more durable and luxurious the silk fabric becomes. Our sheet set is made to provide the highest quality experience.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Size Options Available</h3>
            <p className="mb-6">
              Our sheets queen and sheets king options ensure perfect fit for any bed. The queen size measures standard dimensions, while king size provides extra room. Each sheet set includes everything needed for a complete bedding makeover.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Care and Maintenance</h3>
            <p className="mb-6">
              Unlike traditional silk that requires special care, our sheets offer easy maintenance. Wash in gentle cycle with cold water using mild detergent. The wrinkle-resistant properties mean minimal ironing required, and the sheets still maintain their luxurious appearance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Included</h3>
            <p className="mb-6">
              Each silk sheet set includes one fitted sheet, one flat sheet, and matching pillowcases. The fitted sheet features deep pockets for secure fit, while the flat sheet provides ample coverage. All pieces coordinate perfectly for a complete bedroom transformation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Mulberry Silk Sheets & Bedding</h2>
            <p className="mb-4">Partner with us for premium silk bedding wholesale opportunities</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Premium Quality</h4>
                <p className="text-sm">Highest quality silk available in wholesale quantities</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Competitive Pricing</h4>
                <p className="text-sm">Best wholesale rates on luxury bedding</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Full Size Range</h4>
                <p className="text-sm">Available in queen and king sizes</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Fast Shipping</h4>
                <p className="text-sm">Quick delivery worldwide</p>
              </div>
            </div>

            <p className="mb-6">
              Our wholesale silk sheet sets include the complete range of vegan silk bedding. From eucalyptus silk to bamboo sheet sets, we offer the best silk sheets at wholesale prices. Contact us to learn how our luxury bedding can enhance your product line.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Wholesale Catalog</h2>
            <p className="mb-6">
              Contact Taihu Snow Silk - Premium Silk Bedding Supplier
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</p>
          <Image src="/images/taihu-snow-silk.webp" alt="Why Choose Us" width={1200} height={516} className="mx-auto" />
          <p className="text-xl font-semibold mt-8 mb-4">who are we</p>
          <p className="mb-4">
            Taihu Snow Silk Co. Ltd is the leading company of silk home textilein China , located in Suzhou. We are also the first listed silk companyin Suzhou, stock code(838262) Our main products include silk pillowcase,silk eye mask, silkaccessories, silk bedding, silk pajamas , silk quilts and silk items for children. So far, we export silk products to over 50 countries, like the UnitedStates of America, Russia, Great Britain, Germany, Japan, Canada,Danmark, Korea, etc.
          </p>
          <Image src="/images/OEM-ODM-service.webp" alt="Why Choose Us" width={1200} height={400} className="mx-auto" />
          <Image src="/images/Detail.webp" alt="Why Choose Us" width={750} height={1083} className="mx-auto" />
        </div>
      </section>

      {/* Related Products Section */}
      <section id="related-products" className="pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Related Products</h2>
          <AutoCarousel />    
        </div>
      </section>
    </main>
  );
}
