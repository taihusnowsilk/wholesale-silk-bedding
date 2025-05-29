import { ProductInfo, type Product } from "@/components/product/ProductInfo";
import { CarouselProducts } from "@/lib/products";
import type { Metadata } from "next";
import AutoCarousel from "@/components/product/AutoCarousel";
import Image from "next/image";
import { AnchorNav, sections } from "@/components/product/AnchorNav";

export const metadata: Metadata = {
  title: "Mulberry Silk Blanket: Soft Silk Quilt & Lightweight Blanket - Taihu Snow Silk",
  description: "Indulge in a Mulberry Silk Blanket. Experience the softness of a silk quilt and a lightweight throw blanket. Perfect as a red silk throw for year-round comfort.",
  alternates: {
    canonical: '/products/red-silk-blanket',
  },
};

const productData: Product = {
  title: "Premium Red Silk Blanket - Pure Mulberry Silk Bedding Quilt with Deep Red Silk Cooling Lightweight Design for Sofa",
  descriptions: [
    "100% Pure Mulberry Silk Construction",
    "Deep Red Cactus Silk Finish",
    "Hypoallergenic & Breathable Design",
    "Lightweight Wool-Silk Blend Options",
    "Perfect for Sofa and Bed Use"
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
    '/images/custom-silk-throw-blanket-1.webp',
    '/images/custom-silk-throw-blanket-2.webp',
    '/images/custom-silk-throw-blanket-3.webp',
    '/images/custom-silk-throw-blanket-4.webp',
    '/images/custom-silk-throw-blanket-5.webp',
    '/images/custom-silk-throw-blanket-6.webp',
  ]
};

export default function RedSilkBlanket() {

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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Luxurious Silk Blanket Collection - Oeko-Tex Certified Dupioni Handwoven Mulberry Silk Throw Blanket</h2>
            <p className="mb-6">
              Discover our premium silk collection featuring the finest mulberry silk craftsmanship. Each silk blanket in our collection represents the pinnacle of bedding excellence, combining traditional handwoven techniques with modern oeko-tex certification standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Silk Quality</h3>
            <p className="mb-6">
              Our red silk blanket features pure mulberry silk construction with dupioni weave patterns. The deep red coloration is achieved through eco-friendly processes, ensuring each silk blanket maintains its vibrant appearance while providing silk cooling properties for year-round comfort.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Versatile Design Applications</h3>
            <p className="mb-6">
              This throw blanket serves multiple purposes as both a functional bedding piece and decorative home decor element. Whether draped over your sofa or used as a coverlet on your bed, this silk throw blanket adds elegance to any space while providing lightweight warmth.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Comfort & Health Benefits</h3>
            <p className="mb-6">
              Experience the silky smoothness of our pure silk construction. This hypoallergenic blanket is perfect for those with sensitive skin, offering natural breathable properties that regulate temperature throughout the night.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pure Mulberry Silk Bedding Collection - Silk Cooling Lightweight Wool Blend Red Silk Throw</h2>
            <p className="mb-6">
              Our comprehensive silk bedding collection features premium 100 mulberry silk products designed for ultimate comfort. From throw blanket for couch applications to complete bedroom sets, each piece showcases the natural fiber quality that makes mulberry silk cooling properties so desirable.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Silk Throw Collection</h3>
            <p className="mb-6">
              Our silk throw selection includes various textures from smooth satin blanket finishes to textured cactus silk weaves. Each lightweight blanket offers exceptional durability while maintaining the signature coolness that silk provides.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Bedding Accessories</h3>
            <p className="mb-6">
              Complement your red blanket with matching pillow shams and coordinating silk sheets. Our bedspread options include reversible designs and fringe details that add sophisticated décor elements to any bedroom.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Queen Size King Size Silk Blanket - Cozy Blanket Queen Duvet Comforter Specifications</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Sizes</h3>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Throw Size</h4>
            <p className="mb-4">50"×60" - Perfect throw blanket for couch and sofa use</p>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">Queen Size</h4>
            <p className="mb-4">90"×90" - Our most popular blanket queen size for bedrooms</p>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">King Size</h4>
            <p className="mb-6">108"×90" - Luxurious king size coverage for large beds</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Specifications</h3>
            <div className="mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Material</td>
                    <td className="border border-gray-300 px-4 py-2">Pure mulberry silk with oeko-tex certification</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Weave</td>
                    <td className="border border-gray-300 px-4 py-2">Handwoven dupioni with traditional stitch patterns</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Weight</td>
                    <td className="border border-gray-300 px-4 py-2">Lightweight 19 momme silk density</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Care</td>
                    <td className="border border-gray-300 px-4 py-2">Gentle washing machine cycle or professional cleaning</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Features</td>
                    <td className="border border-gray-300 px-4 py-2">Hypoallergenic, breathable, temperature regulating</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sabra Silk Velvet Cooling Comforter - Coverlet Lightweight Blanket with Satin Finish</h2>
            <p className="mb-6">
              Experience unparalleled comfort with our cooling comforter technology. This cozy quilt combines the luxury of sabra silk with the smoothness of velvet textures, creating a coverlet that adapts to your body's temperature needs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Temperature Regulation</h3>
            <p className="mb-6">
              Our silk cooling technology provides natural temperature control. The lightweight construction allows for optimal airflow while the mulberry silk cooling properties ensure comfort during cool summer nights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Texture & Feel</h3>
            <p className="mb-6">
              The silky smoothness of our woven silk creates an unmatched tactile experience. Each blanket features carefully crafted handcraft details that showcase the natural elegance of premium silk fiber.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Moroccan Throw Blanket - Wool Silk Hand Loomed Throw for Home Decor and Room Decor</h2>
            <p className="mb-6">
              Transform your living space with our designer moroccan throw blanket collection. Each hand loomed throw combines traditional craftsmanship with contemporary home decor sensibilities, making them perfect accent pieces for modern interiors.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Living Room Styling</h3>
            <p className="mb-6">
              Drape this wool silk blend over your sofa or use as a cushion cover to instantly elevate your room decor. The rich textures complement both contemporary and traditional interior design schemes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Bedroom Accents</h3>
            <p className="mb-6">
              Layer this bedding quilt over your existing bedding for added warmth and style. The reversible design offers versatile décor options to match changing seasonal preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Breathable Microfiber Gauze Linen - Cool Summer Muslin Cushion with Handcraft Details</h2>
            <p className="mb-6">
              Our innovative material blend incorporates breathable microfiber technology with traditional gauze and linen elements. This creates a unique cool summer experience that rivals traditional muslin while offering superior durability.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Fiber Technology</h3>
            <p className="mb-6">
              Our proprietary blend combines silk with viscose elements to create enhanced coolness properties. This innovative approach ensures optimal comfort for those who tend to snuggle under heavier bedding.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Artisan Craftsmanship</h3>
            <p className="mb-6">
              Each piece features handcraft details including decorative fringe and precision stitch work. These elements showcase the elegance and attention to detail that sets our products apart.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Care Instructions for Your Premium Silk Collection</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Washing Guidelines</h3>
            <p className="mb-6">
              Your silk summer collection requires gentle care to maintain its luxurious feel. Use cool water and mild detergent in your washing machine on the delicate cycle, or opt for professional cleaning for best results.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Storage Recommendations</h3>
            <p className="mb-6">
              Store your cooling blankets in a breathable cotton bag to maintain their natural properties. Avoid plastic storage which can trap moisture and affect the silk's natural fiber structure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews: Premium Silk Bedding Experience</h2>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Sarah M. - Interior Designer ★★★★★</h4>
            <blockquote className="mb-4 pl-4 border-l-4 border-gray-300 italic">
              "The thxsilk 100 quality of this duvet exceeded expectations. Perfect for clients with sensitive skin who need hypoallergenic bedding options. The deep red color adds perfect decor accent to any bedroom."
            </blockquote>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">Michael R. - Hotel Buyer ★★★★★</h4>
            <blockquote className="mb-6 pl-4 border-l-4 border-gray-300 italic">
              "Ordered 200 pieces for our luxury suites. The oeko certification and woven silk quality make these perfect for our premium rooms. Guests love the silk throw blanket as both bedding and room decor."
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Wholesale Silk Bedding Program</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Bulk Pricing Tiers</h3>
            <ul className="mb-6">
              <li>50-99 pieces: $159.99 per comforter</li>
              <li>100-249 pieces: $139.99 per quilt</li>
              <li>250-499 pieces: $119.99 per blanket</li>
              <li>500+ pieces: $89.99 per piece</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Customization</h3>
            <ul className="mb-6">
              <li>✓ Custom pillow and shams sets</li>
              <li>✓ Matching cushion covers available</li>
              <li>✓ Private label packaging</li>
              <li>✓ Custom weave patterns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Premium Silk Luxury?</h2>
            <p className="mb-6">
              Join our wholesale program and offer your customers the finest silk bedding collection available. From sofa and bed applications to complete bedroom transformations, our products deliver unmatched quality and comfort.
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
          <AutoCarousel products={CarouselProducts} />
        </div>
      </section>
    </main>
  );
}
