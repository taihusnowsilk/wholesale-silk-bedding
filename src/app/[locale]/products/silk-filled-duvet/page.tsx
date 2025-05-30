import { ProductInfo, type Product } from "@/components/product/ProductInfo";
import Image from "next/image";
import { AnchorNav, sections } from "@/components/product/AnchorNav";
import AutoCarousel from "@/components/product/AutoCarousel";
import { CarouselProducts } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mulberry Silk Comforter: All-Season Silk Filled Duvet - Taihu Snow Silk",
  description: "Mulberry Silk Comforter: All-Season Silk Filled Duvet. Experience luxurious comfort with a breathable & hypoallergenic silk-filled comforter. Enjoy a silk duvet, perfect all year!",
  alternates: {
    canonical: "/products/silk-filled-duvet",
  },
}

const productData: Product = {
  title: "Premium Silk Filled Duvet - All-Season Silk Comforter with Organic Cotton Shell for Hair and Skin Health",
  descriptions: [
    "100% Grade 6A mulberry silk filling for superior durability",
    "300 thread count organic cotton shell, soft and breathable",
    "Long strand mulberry silk floss filling for durability",
    "Hypoallergenic and Oeko-Tex Standard 100 certified",
    "Moisture-wicking and temperature-regulating for all-season comfort",
    "Box-stitched silk floss design prevents filling from shifting"
  ],
  price: "$50 - $200",
  MOQ: "30 pcs",
  sizes: [
    "Twin",
    "Full",
    "Queen",
    "King",
    "Cal.King",
    "Custom Size"
  ],
  colors: ["Red", "Pink", "Blue", "White", "Custom Color"],
  imagesUrl: [
    '/images/silk-filled-duvet-1.webp',
    '/images/silk-filled-duvet-2.webp',
    '/images/silk-filled-duvet-3.webp',
    '/images/silk-filled-duvet-4.webp',
    '/images/silk-filled-duvet-5.webp',
    '/images/silk-filled-duvet-6.webp',
  ]
};

export default function SilkFilledDuvet() {

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
                Experience the ultimate in luxury bedding with our premium silk-filled duvet, crafted with mulberry silk and featuring an organic cotton cotton shell. This all-season silk comforter is designed specifically for the growing North American and European markets, where personalized bedding solutions are experiencing dynamic expansion.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Mulberry Silk Comforter - Top Grade Breathable Bedding</h2>
              <p className="mb-6">
                Our silk duvet features long-strand silk silk fill that provides exceptional breathable comfort for every sleeper. The mulberry silk filled interior offers superior temperature regulation, making it perfect for hot sleepers who need moisture-wicking properties year-round.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Silk Quality</h3>
              <ul className="mb-6">
                <li>Grade 6a silk mulberry silk comforter construction</li>
                <li>Long strand mulberry silk floss filling for durability</li>
                <li>Natural silk-filled core with silk shell exterior</li>
                <li>Oeko-Tex® Standard 100 certified for safety</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hair and Skin Benefits</h3>
              <p className="mb-6">
                Our silk-filled comforter provides exceptional benefits for hair and skin health. The smooth charmeuse silk surface reduces friction, while the natural silk fibers maintain optimal moisture levels.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Washable Silk-Filled Duvet Insert - Oeko-Tex Standard 100 Certified</h2>
              <p className="mb-6">
                The global comforter market, valued at approximately USD 10 billion in 2023, is projected to grow at a CAGR of 5.5% through 2032, with silk products leading premium segments.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Materials & Construction</h3>
              <p className="mb-6">
                Pure Silk Excellence with Standard 100 certification ensures our duvet meets the highest safety standards. Each silk duvet insert features premium cotton cover construction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">All-Season Silk Duvet with Cotton Cover - Perfect for Hot Sleepers</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All-Season Comfort features:</h3>
              <ul className="mb-6">
                <li>Summer comforter functionality with cooling comforter properties</li>
                <li>Summer weight design that adapts to warm and cool conditions</li>
                <li>Season silk comforter versatility for winter and cool weather</li>
                <li>Moisture-wicking technology for optimal sleep comfort</li>
              </ul>

              <p className="mb-6">
                The US bedding market, valued at $19.27 billion in 2024, shows growing demand for health-focused bedding solutions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews: Mulberry Silk Filled Comforter Performance</h2>
              <blockquote className="mb-4 pl-4 border-l-4 border-gray-300 italic">
                "This silk-filled duvet transformed my sleep quality. The great quality and super soft texture make it worth every penny."<br />
                - European Customer
              </blockquote>
              <blockquote className="mb-6 pl-4 border-l-4 border-gray-300 italic">
                "Perfect cooling comforter for hot summer nights. The mulberry silk filled comforter keeps me comfortable all season."<br />
                - American Customer
              </blockquote>

              <p className="mb-6">
                The comforters market shows strong growth, with consumers increasingly seeking personalized solutions across North America and Europe.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hypoallergenic Silk Fill - Natural Silk-Filled Luxury Bedding</h2>
              <p className="mb-4">Our hypoallergenic silk construction is perfect for sensitive skin. The natural silk-filled design provides:</p>
              <ul className="mb-6">
                <li>Breathable comfort for every sleeper</li>
                <li>Moisture-wicking properties</li>
                <li>Hypoallergenic benefits</li>
                <li>Superior temperature regulation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">King Size Queen Size Twin Size - Mulberry Silk Duvet Insert Options</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Twin Full Queen King Available:</h3>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Twin Size</h4>
              <p className="mb-4">68"×86" - Perfect starter duvet</p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">Queen Size</h4>
              <p className="mb-4">88"×92" - Most popular bedding choice</p>

              <h4 className="text-lg font-semibold text-gray-900 mb-2">King Size</h4>
              <p className="mb-6">104"×92" - Ultimate luxury bedding experience</p>

              <p className="mb-4">Each mulberry silk filled duvet insert features:</p>
              <ul className="mb-6">
                <li>Cotton cover with 300+ thread count</li>
                <li>Washable design for easy maintenance</li>
                <li>Silk floss construction</li>
                <li>Long-strand silk technology</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Moisture-Wicking Silk Comforter Cover - Long-Strand Silk Technology</h2>
              <p className="mb-4">Our advanced moisture-wicking technology features long-strand silk floss construction. The silk comforter cover design ensures optimal comfort with:</p>
              <ul className="mb-6">
                <li>Momme silk quality standards</li>
                <li>Long-staple fiber construction</li>
                <li>Top grade materials</li>
                <li>Oeko-Tex certification</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cooling Comforter for Summer Weight - Season Silk Comfort</h2>
              <p className="mb-6">
                Experience the perfect season silk comfort with our cooling comforter design. The summer weight construction provides year-round versatility.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Brand Comparisons</h2>
              <p className="mb-4">Compare with leading brands like LilySilk, Cozy Earth, THXSilk, and MommesilK:</p>
              <ul className="mb-6">
                <li>Superior 7a grade mulberry silk duvet quality</li>
                <li>Enhanced covered silk comforter design</li>
                <li>Top grade materials exceeding Cuddle Dreams silk comforter standards</li>
                <li>6a grade certification</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Care & Maintenance</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Care Instructions:</h3>
              <ul className="mb-6">
                <li>Washable in gentle cycle with mild detergent</li>
                <li>Compatible with duvet cover and pillowcase sets</li>
                <li>Pairs beautifully with silk sheets and sateen bed sheets</li>
                <li>Egyptian cotton outer shell for added durability</li>
                <li>Works with linen accessories</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Construction:</h3>
              <ul className="mb-6">
                <li>Filled with 100% silk floss filling</li>
                <li>Grade mulberry silk sourcing from premium plantations</li>
                <li>Cotton shell protection</li>
                <li>Silk-filled comforter technology</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Silk Comforter</h2>
              <ul className="mb-6">
                <li>All-Season versatility - One duvet for year-round comfort</li>
                <li>Hypoallergenic properties - Safe for every sleeper</li>
                <li>Breathable design - Superior airflow compared to traditional duvets</li>
                <li>Moisture-wicking technology - Keeps you dry and comfortable</li>
                <li>Silk-filled duvets quality - Premium construction</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ordering Information</h2>
              <p className="mb-4">Available for wholesale orders with:</p>
              <ul className="mb-6">
                <li>Pillowcase and linen set combinations</li>
                <li>Duvet cover compatibility</li>
                <li>Silk duvet options</li>
                <li>Pure silk accessories</li>
              </ul>

              <p className="mb-6">
                The global bedding industry continues expanding, with the comforter market reaching $4.29 billion USD in 2023, reflecting growing consumer demand for premium sleep solutions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="mb-6">
                Invest in the finest silk bedding experience with our mulberry silk comforter. From twin size to king size, each silk duvet insert delivers unmatched comfort, temperature regulation, and great quality that discerning customers expect from premium luxury bedding.
              </p>

              <p className="mb-6">
                This landing page is specifically optimized for the European and American markets, where the duvet market is experiencing dynamic expansion fueled by consumer preferences for personalized and sustainable bedding solutions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premium Silk Bedding Collection</h2>
              <p className="mb-6">
                Experience the luxury of mulberry silk with our complete bedding line including silk-filled duvet, silk comforter, and accessories.
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
