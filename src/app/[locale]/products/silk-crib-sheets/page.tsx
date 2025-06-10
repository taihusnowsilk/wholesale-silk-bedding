import { ProductInfo, type Product } from "@/components/product/ProductInfo";
import Image from "next/image";
import { AnchorNav, sections } from "@/components/product/AnchorNav";
import AutoCarousel from "@/components/product/AutoCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silk Crib Sheet: Natural White silky tots fitted sheet  for Baby Hair - Taihu Snow Silk",
  description: "Natural white silk crib sheet helps prevent baby bald spots. Silky tots fitted sheet is hypoallergenic, gentle on baby hair, and good for sensitive skin.",
  alternates: {
    canonical: '/products/silk-crib-sheets',
  },
};  

const productData: Product = {
  title: "Premium Silk Crib Sheet - Natural White Mulberry Silk Fitted Sheet for Baby Bed and Crib Mattress",
  descriptions: [
    "100% Grade 6A mulberry silk, 19 momme for ultimate softness",
    "Hypoallergenic and OEKO-TEX certified, safe for sensitive skin",
    "Temperature-regulating for optimal baby sleep comfort",
    "Smooth silk surface prevents baby bald spots and hair breakage",
    "Fitted crib sheet with deep pockets for secure fit",
    "Machine-washable, available for standard crib, bassinet, and mini crib",
  ],
  price: "$7 - $20",
  MOQ: "50 pcs",
  sizes: [
    "Twin",
    "Full",
    "Queen",
    "King",
    "Cal.King",
    "Custom Size"
  ],
  colors: ["Pink", "Blue", "Yellow", "Custom Color"],
  imagesUrl: [
    '/images/silk-crib-sheets-1.webp',
    '/images/silk-crib-sheets-2.webp',
    '/images/silk-crib-sheets-3.webp',
    '/images/silk-crib-sheets-4.webp',
    '/images/silk-crib-sheets-5.webp',
    '/images/silk-crib-sheets-6.webp',
  ]
};

export default function SilkCribSheet() {

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
                Discover the ultimate comfort for your little one with our premium silk crib sheet collection. Made from pure 19 momme mulberry silk, our fitted sheet options provide unmatched softness for baby hair protection and silk baby bedding luxury. Choose silk crib sheets to prevent baby bald spots and create the perfect sleep environment for your little one.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shop Silk Crib Sheet Collection</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Silk Crib Sheet - Why Silk Products Prevent Baby Bald Spot and Hair Loss</h3>
              <p className="mb-6">
                Our silk crib sheet collection offers exceptional benefits of silk for your baby's comfort and development. The hypoallergenic and temperature regulating properties make silk the perfect choice for sensitive skin.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">👶 Prevent Baby Bald Spots with Silk</h4>
                  <p className="mb-4">
                    The smooth silk fabric reduces friction against delicate hair, helping to prevent bald spots and hair breakage. Unlike cotton crib sheets, our silk crib sheet creates a gentle surface that protects newborn hair and supports natural hair growth.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🌡️ Temperature Regulating Silk Bedding</h4>
                  <p className="mb-4">
                    Silk keeps your baby comfortable all night with natural temperature regulation. The breathable silk fibers in our fitted crib sheet help maintain optimal sleep temperature for baby sleep comfort.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🛡️ Hypoallergenic Protection for Sensitive Skin</h4>
                  <p className="mb-4">
                    Perfect for babies with sensitive skin or allergies, our organic silk crib sheet is naturally hypoallergenic. The silk helps protect against eczema and provides a safe silk environment for baby's delicate skin.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">✨ Super Soft and Smooth Comfort</h4>
                  <p className="mb-4">
                    The luxurious feel of mulberry silk creates a soft and smooth surface that's gentle on baby's skin and hair. Our silk crib fitted sheet provides unparalleled comfort for peaceful sleep.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Silk Crib Sheet Collection - Fitted Crib Sheet Options</h2>
              <p className="mb-6">Choose from our carefully curated selection of silk crib sheet options, including fitted crib sheet designs for standard size crib, bassinet, and cot bedding needs.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural White Silk Crib Sheet</h4>
                  <p className="text-sm text-gray-600 mb-3">Natural White Mulberry Silk Fitted Sheet</p>
                  <p className="mb-4">
                    Our signature natural white silk crib sheet made from grade 6A mulberry silk. This fitted sheet for standard crib features deep pockets and elastic all around for secure fit on any crib mattress. The best silk choice for preventing baby hair loss and bald patch formation.
                  </p>
                  <p className="font-semibold mb-2">Price: $45 - $65</p>
                  <p className="text-sm text-gray-600 mb-2">Features: Pure 19 momme silk, OEKO-TEX certified, prevents baby bald spots</p>
                  <p className="text-sm text-gray-600">Sizes: Standard size crib, Mini crib, Bassinet</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Silk Bassinet Sheets</h4>
                  <p className="text-sm text-gray-600 mb-3">Silk Bassinet and Silk Mini Crib Sheets</p>
                  <p className="mb-4">
                    Specially designed silk bassinet sheets and silk mini crib sheets for smaller sleeping spaces. These silk fitted sheets provide the same hair and skin benefits in compact sizes perfect for your little one's first months.
                  </p>
                  <p className="font-semibold mb-2">Price: $35 - $55</p>
                  <p className="text-sm text-gray-600 mb-2">Features: Mulberry silk fitted design, temperature regulating, hypoallergenic</p>
                  <p className="text-sm text-gray-600">Options: Silk bassinet, Mini crib, Travel cot</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Organic Silk Crib Sheet Set</h4>
                  <p className="text-sm text-gray-600 mb-3">Organic Silk Baby Bedding Sheet Set</p>
                  <p className="mb-4">
                    Complete silk baby bedding set including fitted crib sheet and matching silk pillowcase. This organic silk collection provides comprehensive protection against baby bald spots while maintaining baby's comfort throughout the night.
                  </p>
                  <p className="font-semibold mb-2">Price: $75 - $95</p>
                  <p className="text-sm text-gray-600 mb-2">Features: GOTS certified organic silk, includes pillowcase, momme silk crib quality</p>
                  <p className="text-sm text-gray-600">Perfect for: Baby shower gifts, complete nursery setup</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Silk Pillowcase and Silk Crib Sheet Stop Baby Hair Loss</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Science Behind Silk and Baby Hair Protection</h3>
              <p className="mb-6">
                Research shows that silk helps reduce friction that causes baby bald spots. When babies sleep on cotton crib sheets, the rough texture can tug at delicate hair follicles. Our silk crib sheet creates a smooth surface that allows baby hair to glide without breakage, helping maintain a full head of hair.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Silk vs Cotton for Baby Bedding</h3>
              <p className="mb-6">
                Unlike cotton crib bedding, silk is a natural protein fiber that shares similar properties with human hair. This compatibility makes silk the ideal choice for babies with sensitive skin. The smooth silk surface reduces the friction that leads to hair loss and bald patch development.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Hair Protection System</h3>
              <p className="mb-6">
                For maximum protection, use silk crib fitted sheet combined with a silk pillowcase. This combination creates a completely friction-free sleep environment for your little one, ensuring gentle care for both hair and skin throughout the night.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperature and Comfort Benefits</h3>
              <p className="mb-6">
                The temperature regulating properties of silk keep babies comfortable without overheating. Silk keeps the optimal sleep temperature, which is crucial for quality baby sleep. The breathable nature of silk fabric allows air circulation while maintaining warmth when needed.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hypoallergenic Properties for Sensitive Babies</h3>
              <p className="mb-6">
                Babies with sensitive skin or allergies benefit greatly from silk products. The hypoallergenic nature of mulberry silk creates a safe silk environment that reduces irritation and supports healthy skin development. Silk is naturally resistant to dust mites and bacteria.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Care for Busy Parents</h3>
              <p className="mb-6">
                Our silk crib sheet and silk bassinet sheets are designed for easy care. Machine washable and durable, these sheets for babies maintain their soft and safe properties even after multiple washes, making them practical for daily use.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Silk Cot Sheets and Bassinet Options - Complete Bedding Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🛏️ Silk Cot and Travel Bedding</h4>
                  <p>Our silk cot sheets provide the same premium quality for portable sleeping solutions. Whether you need silk cot sheets for travel or a permanent cot setup, our fitted crib designs ensure perfect fit and maximum comfort.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">👶 Bassinet Silk Solutions</h4>
                  <p>Specially designed for smaller spaces, our silk bassinet options include fitted designs that work perfectly with most bassinet models. The silk helps create an ideal sleep environment for your little one's earliest months.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🌟 Premium Silk Fabric Quality</h4>
                  <p>All our silk products use grade 6A mulberry silk, the highest quality available. This ensures maximum durability and the smoothest texture for protecting baby hair and preventing bald spots.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">🎁 Perfect Baby Shower Gift</h4>
                  <p>Our silk baby bedding makes an exceptional baby shower gift. The combination of luxury and practical benefits makes it a thoughtful present that new parents will truly appreciate and use daily.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews - Real Experiences with Silk Crib Sheet Benefits</h2>
              <p className="mb-6">See how our silk crib sheet collection has helped prevent baby bald spots and improved sleep quality for families worldwide</p>

              <div className="space-y-6 mb-8">
                <blockquote className="border-l-4 border-gray-300 pl-6">
                  <div className="mb-2">★★★★★ "No More Bald Spot!"</div>
                  <p className="mb-2 italic">
                    "I was worried about my baby developing a bald spot from sleeping. After switching to this silk crib sheet, I noticed a huge difference! The silk helps protect her delicate hair and she sleeps so much better. The fitted sheet stays in place all night and the silk keeps her at the perfect temperature."
                  </p>
                  <p className="text-sm text-gray-600">- Jennifer M., Mother of 6-month-old</p>
                  <p className="text-xs text-gray-500">Verified Purchase: Natural White Silk Crib Sheet</p>
                </blockquote>

                <blockquote className="border-l-4 border-gray-300 pl-6">
                  <div className="mb-2">★★★★★ "Perfect for Sensitive Skin"</div>
                  <p className="mb-2 italic">
                    "My little one has eczema and this silk crib sheet has been amazing. The hypoallergenic properties really work - no more red marks or irritation. The silk is so soft and smooth, and I love that it's gentle on baby's delicate skin and hair. Worth every penny!"
                  </p>
                  <p className="text-sm text-gray-600">- Sarah L., Pediatric Nurse & Mom</p>
                  <p className="text-xs text-gray-500">Verified Purchase: Organic Silk Crib Sheet</p>
                </blockquote>

                <blockquote className="border-l-4 border-gray-300 pl-6">
                  <div className="mb-2">★★★★★ "Temperature Regulating Works!"</div>
                  <p className="mb-2 italic">
                    "Living in a hot climate, I needed something that would keep my baby comfortable. This silk crib sheet is amazing for temperature regulation. The silk keeps him cool when it's hot and warm when it's cool. No more sweaty wake-ups and much better baby sleep!"
                  </p>
                  <p className="text-sm text-gray-600">- Maria K., Mom from Florida</p>
                  <p className="text-xs text-gray-500">Verified Purchase: Mulberry Silk Fitted Sheet</p>
                </blockquote>

                <blockquote className="border-l-4 border-gray-300 pl-6">
                  <div className="mb-2">★★★★★ "Hair Growth Improvement"</div>
                  <p className="mb-2 italic">
                    "I noticed my baby was developing a small bald patch where his head rubbed against the mattress. Since using this silk crib fitted sheet, his hair growth has improved dramatically. The silk fabric is so much gentler than cotton crib sheets. Highly recommend!"
                  </p>
                  <p className="text-sm text-gray-600">- David R., Father from Texas</p>
                  <p className="text-xs text-gray-500">Verified Purchase: Silk Bassinet Sheets</p>
                </blockquote>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Silk Crib Sheet Buying Guide - Choose the Best Silk for Your Baby</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Understanding Momme Weight in Silk</h3>
              <p className="mb-6">
                When selling silk products, momme weight indicates quality. Our pure 19 momme silk crib sheet provides the perfect balance of durability and softness. This weight ensures the silk is substantial enough to last while remaining gentle on baby's skin and hair.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fitted vs Flat Sheet Options</h3>
              <p className="mb-6">
                We recommend fitted crib sheet designs for safety and convenience. Our silk fitted options feature deep pockets and elastic edges that secure firmly to any crib mattress, bassinet, or cot. The fitted design prevents loose fabric that could pose safety concerns.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Size Guide for Different Beds</h3>
              <ul className="mb-6">
                <li>Standard Size Crib: 28" x 52" fitted sheet</li>
                <li>Mini Crib: 24" x 38" silk mini crib sheets</li>
                <li>Bassinet: Various sizes for silk bassinet sheets</li>
                <li>Cot: Portable silk cot sheets in standard dimensions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety Considerations for Silk Baby Bedding</h3>
              <p className="mb-6">
                All our silk products meet strict safety standards for infant bedding. The fitted crib sheet design ensures proper fit without excess fabric. Our safe silk materials are OEKO-TEX certified and free from harmful chemicals, making them perfect for babies with sensitive skin or allergies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Care Instructions for Silk Longevity</h3>
              <p className="mb-4">To maintain the benefits of silk, follow these care guidelines:</p>
              <ul className="mb-6">
                <li>Machine wash gentle cycle with cold water</li>
                <li>Use silk-friendly detergent</li>
                <li>Air dry or low heat tumble dry</li>
                <li>Avoid bleach or fabric softeners</li>
                <li>Iron on low if needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">When to Use Silk Crib Sleeves</h3>
              <p className="mb-6">
                For extra protection, consider silk crib sleeves that can be placed over existing mattresses. These provide the benefits of silk without replacing your entire bedding setup.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions About Silk Crib Sheet Benefits</h2>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">How does silk prevent baby bald spots?</h4>
              <p className="mb-4">
                Silk creates a smooth surface that reduces friction against baby hair. Unlike cotton that can tug and pull at delicate hair follicles, silk allows hair to glide freely, preventing the hair breakage that leads to bald spots and supporting healthy hair growth.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Is silk safe for newborns?</h4>
              <p className="mb-4">
                Yes, our silk crib sheet collection is completely safe for newborns. The natural silk is hypoallergenic and free from harmful chemicals. The fitted design ensures safety by eliminating loose fabric while providing gentle care for newborn hair and sensitive skin.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">What makes mulberry silk the best choice?</h4>
              <p className="mb-4">
                Mulberry silk is considered the highest quality natural silk. Our grade 6A mulberry silk provides the smoothest texture and greatest durability. This quality ensures maximum benefits for preventing baby hair loss while maintaining the temperature regulating properties babies need.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Can I use silk for bassinet and cot too?</h4>
              <p className="mb-6">
                Absolutely! We offer silk bassinet sheets and silk cot sheets designed specifically for these smaller sleeping spaces. The same hair and skin benefits apply regardless of the bed size, making silk an excellent choice for all your baby's sleeping arrangements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Silk Products - Premium Mulberry Park Quality</h2>
              <p className="mb-4">Partner with Taihu Snow Silk for wholesale silk crib sheet and silk baby bedding opportunities. Our mulberry park quality ensures consistent excellence for retailers worldwide.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Premium Silk Quality</h4>
                  <p className="text-sm">Grade 6A mulberry silk with pure 19 momme weight consistency</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Complete Product Range</h4>
                  <p className="text-sm">Full line of silk crib sheet, silk bassinet, and silk cot options</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Competitive Wholesale Pricing</h4>
                  <p className="text-sm">Best rates on luxury silk products with volume discounts</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Safety Certifications</h4>
                  <p className="text-sm">All silk products certified safe for babies with sensitive skin</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Custom Options</h4>
                  <p className="text-sm">Private label silk baby bedding and custom packaging available</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Marketing Support</h4>
                  <p className="text-sm">Educational materials about benefits of silk for retailers</p>
                </div>
              </div>

              <p className="mb-6">
                Our wholesale program includes the complete range of silk products designed to prevent baby bald spots and provide optimal comfort. From fitted crib sheet options to silk pillowcase accessories, we provide everything retailers need to offer premium silk baby bedding.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wholesale Program Benefits:</h3>
              <ul className="mb-6">
                <li>Minimum order: 50 pieces per style</li>
                <li>Volume discounts up to 40% off retail pricing</li>
                <li>Drop shipping available for online retailers</li>
                <li>Educational materials about silk benefits</li>
                <li>Dedicated support for silk products training</li>
                <li>Fast shipping on silk bassinet sheets and fitted options</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Wholesale Catalog</h2>
              <p className="mb-6">
                Contact Taihu Snow Silk - Premium Silk Crib Sheet Supplier. Ready to provide your customers with the best silk crib sheet options? Contact us for wholesale silk baby bedding inquiries and learn how our silk helps create the perfect sleep environment for your little one.
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

        {/* FAQ Section */}
        <section id="related-products" className="pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Related Products</h2>
            <AutoCarousel /> 
          </div>
        </section>
    </main>
  );
}
