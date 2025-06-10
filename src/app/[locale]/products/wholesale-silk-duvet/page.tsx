import Image from 'next/image';
import AutoCarousel from "@/components/product/AutoCarousel";
import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wholesale Silk Bed & Silk Duvet - China Silk Bedding - Taihu Snow Silk',
  description: 'Discover premium wholesale silk bed & silk duvet options. High quality silk bedding, including breathable mulberry silk duvets, available now! -Taihu Snow Silk',
  alternates: {
    canonical: '/products/wholesale-silk-duvet',
  },
};

const categoryData = [
  {
    id: 1,
    emoji: "🌙",
    title: "All-Season Mulberry Silk Duvet & Comforter Sets",
    description: "Medium weight silk duvets perfect for year-round comfort. Our pure mulberry silk filled products feature hypoallergenic properties ideal for most climates and sleeping preferences.",
    href: "#",
    features: [
      "Grade A Pure Mulberry Silk Fill",
      "300-400GSM Weight Range", 
      "Breathable Cotton Shell",
      "Hypoallergenic Silk Properties",
      "Machine Washable Silk Bed Products",
      "Includes Silk Duvet Cover Options"
    ],
    moq: "50 pieces",
    image: "/images/taihu-snow-silk-banner-1.webp"
  },
  {
    id: 2,
    emoji: "☀️",
    title: "Summer Weight Silk Duvet & Silk Satin Bed Set",
    description: "Lightweight silk duvets designed for warm weather. Ultra-breathable silk fabric fibers with superior temperature regulation and moisture-wicking properties.",
    href: "#",
    features: [
      "Premium Long-Fiber Silk",
      "150-250GSM Light Weight",
      "Superior Temperature Regulation", 
      "Moisture-Wicking Silk Properties",
      "Compact Storage Design",
      "Optional Silk Duvet Cover Set"
    ],
    moq: "50 pieces",
    image: "/images/taihu-snow-silk-banner-2.webp"
  },
  {
    id: 3,
    emoji: "❄️",
    title: "Winter Silk & Mulberry Silk Filled Duvets",
    description: "Heavier winter silk duvets providing extra warmth while maintaining breathability for cold seasons. Features luxury and comfort with enhanced insulation.",
    href: "#",
    features: [
      "Extra Mulberry Silk Fill Density",
      "500-600GSM Weight",
      "Enhanced Insulation Properties",
      "Natural Temperature Control", 
      "Luxurious Comfort Design",
      "Compatible Quilt Cover Options"
    ],
    moq: "30 pieces",
    image: "/images/taihu-snow-silk-banner-3.webp"
  },
  {
    id: 4,
    emoji: "👑",
    title: "Luxury Silk Satin & Pure Mulberry Silk Duvet Collection",
    description: "Premium grade luxury silk satin duvets with superior construction and finishing for high-end retail markets. Features 19 momme silk with higher momme count for enhanced durability.",
    href: "#",
    features: [
      "Grade 6A Mulberry Silk",
      "Hand-Stretched Construction",
      "Silk Satin Shell Options Available",
      "Custom Packaging Solutions",
      "Extended Warranty Coverage", 
      "Charmeuse Finish Options"
    ],
    moq: "20 pieces",
    image: "/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-1.webp"
  },
  {
    id: 5,
    emoji: "🏨",
    title: "Hotel Grade Silk Bed & Silk Comforter Sets",
    description: "Commercial-grade silk bed products designed for hospitality industry with enhanced durability. Perfect for hotels and resorts requiring high-quality silk bedding items.",
    href: "#",
    features: [
      "Commercial Durability Standards",
      "Frequent Wash Resistant Silk",
      "Standardized Sizing Options",
      "Bulk Packaging Solutions",
      "Volume Discount Pricing",
      "Professional Quality Control"
    ],
    moq: "100 pieces",
    image: "/images/hotel.webp"
  },
  {
    id: 6,
    emoji: "👶",
    title: "Children's Silk Duvet & Home Silk Products",
    description: "Specially designed home silk duvets for children with safety features and appropriate sizing. Features hypoallergenic silk properties perfect for sensitive skin.",
    href: "#",
    features: [
      "Child-Safe Silk Materials",
      "Smaller Dimensions Available", 
      "Extra Soft Silk Fill",
      "Easy Care Instructions",
      "Fun Color Options",
      "Hypoallergenic Properties"
    ],
    moq: "50 pieces",
    image: "/images/taihu-snow-silk-banner-5.webp"
  }
];

export default function WholesaleSilkDuvetPage() {
  return (
    <main>    
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/taihu-snow-silk-banner-1.webp"
            alt="Custom Wholesale Silk Duvet"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-end">
          <div className="max-w-3xl text-center text-secondary mb-16">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Wholesale Silk Duvet & Silk Bed Collection - Premium Silk Duvet Cover Sets
            </h1>
            <p className=" text-base mb-6">
            Discover premium wholesale silk products including silk duvet insert and silk duvet wholesale options
            </p>
            <ContactButton className="bg-primary/70 hover:bg-primary  font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
              Send Inquiry Now
            </ContactButton>
          </div>
        </div>
      </section>

      <div className="px-4 py-4">
        <Breadcrumb items={[
          { label: 'Products', href: '/products' },
          { label: 'Wholesale Silk Duvet', isCurrent: true },  
        ]} />
      </div>

      {/* Introduction Section */}
      <section className="w-full py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Silk Duvet & Mulberry Silk Comforter Collection</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the luxury of authentic mulberry silk duvets and silk bed products designed for wholesale customers. Our silk collection offers unmatched comfort with breathable silk materials for year-round use. Shop high-quality silk bedding at competitive prices from our factory silk production facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-primary">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🔍</span>
                <h3 className="text-xl font-semibold text-gray-800">Wholesale Silk Bed Products Exploration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Explore our comprehensive range of silk duvets, silk duvet covers, and silk bed accessories featuring different weights, sizes, and construction methods. From lightweight summer silk options to winter silk comfort solutions with natural temperature-regulating properties.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-primary">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">📦</span>
                <h3 className="text-xl font-semibold text-gray-800">Silk Duvet Wholesale Benefits</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Enjoy competitive bulk pricing on mulberry silk filled products, flexible MOQ options, and dedicated wholesale support. Perfect for retailers seeking premium silk bedding sets and silk satin products from China silk manufacturers and suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Wholesale Silk & Mulberry Silk Duvet Categories</h2>
          <div className="space-y-16">
            {categoryData.map((category, index) => (
              <div
                key={category.id}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{category.emoji}</span>
                    <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-primary font-semibold">Wholesale MOQ: {category.moq}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <Link href={category.href}>
                    <div className="relative w-full h-90 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Discover Our Curated Collection of Silk Duvets</h2>
          <p className="text-gray-600 text-lg mb-12 text-center max-w-4xl mx-auto">
            Sinosilk offers a full range of silk bedding, available both as individual items and in sets. Made from 100% mulberry silk satin, our products come in various thickness options, including 16, 19, 22, 25, and 30 momme.
          </p>
          <AutoCarousel />
        </div>
      </section>

      {/* Complete Silk Bedding Sets Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Complete Silk Bedding Sets & Accessories</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Discover premium silk bedding collections including silk pillowcase, silk sheets, and complementary silk accessories. Our comprehensive bedding set silk options feature charmeuse pillowcase designs and silk floss construction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Silk Pillowcase & Charmeuse Pillowcase Collection</h3>
              <p className="text-gray-600">Premium silk pillowcase options including charmeuse finishes and various thread count options for luxury and comfort.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Silk Sheets & Bedding Set Silk Options</h3>
              <p className="text-gray-600">Complete silk sheets sets with matching duvet cover silk combinations for coordinated bedroom aesthetics.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Silk Bedding Items & Accessories</h3>
              <p className="text-gray-600">Including silk pillowcases, silk sleep masks, silk bonnets, and silk sleepwear for complete bedroom luxury.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Silk Scrunchies & Hair Accessories</h3>
              <p className="text-gray-600">Premium silk scrunchies and hair accessories made from high-quality silk with gentle care properties.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cover Silk & Silk Quilt Options</h3>
              <p className="text-gray-600">Versatile cover silk solutions and silk quilt alternatives for various bedding preferences and seasonal needs.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Bulk Orders & Chinese Silk Specialties</h3>
              <p className="text-gray-600">Specialized custom bulk orders featuring authentic Chinese silk products with traditional craftsmanship and modern quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Benefits Section */}
      <section className="py-16 bg-primary text-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Wholesale Silk & Silk Bedding Manufacturers and Suppliers</h2>
            <p className="text-xl max-w-4xl mx-auto">
              As leading silk bedding manufacturers and suppliers in China, Taihu Snow offers comprehensive wholesale solutions with competitive shipping costs and flexible return policies for silk products for inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Competitive Silk Pricing</h3>
              <p className="text-secondary/90">Tiered pricing structure with discounts up to 40% off retail prices for bulk silk orders. Transparent costs of returning the silk products if quality doesn't meet expectations.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-3">Fast Silk Shipping</h3>
              <p className="text-secondary/90">Direct from our Taihu Snow facility with expedited shipping options available worldwide. Competitive shipping costs for international silk bed product deliveries.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Custom Silk Solutions</h3>
              <p className="text-secondary/90">Private labeling, custom packaging, and bespoke sizing options for your silk brand. Specialized silk production process customization available.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Dedicated Silk Support</h3>
              <p className="text-secondary/90">Assigned wholesale account manager and priority customer service for all silk orders. Expert guidance on returning the silk products and quality assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Taihu Snow Silk Duvet & Silk Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-t-primary">
              <div className="text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Direct Silk Manufacturer</h3>
                <p className="text-gray-600">Own silk farm and production facility ensuring quality control and competitive pricing on all silk silk products with comprehensive silk production process oversight.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-t-primary">
              <div className="text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Sustainable Silk Sourcing</h3>
                <p className="text-gray-600">Ethically sourced mulberry silk with environmentally responsible production methods for all our silk bed and silk duvet cover silk products.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-t-primary">
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">High Quality Silk Certified</h3>
                <p className="text-gray-600">OEKO-TEX certified materials meeting international quality and safety standards for all high-quality silk products and silk bedding items.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-t-primary">
              <div className="text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Silk Customization Options</h3>
                <p className="text-gray-600">Flexible sizing, packaging, and branding options to meet your specific requirements for silk duvet cover silk and other silk products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Wholesale Silk Order?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact our wholesale team today for pricing, samples, and custom silk solutions. Discover premium silk products with competitive wholesale pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactButton className="bg-primary hover:bg-primary/90 text-secondary font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
              Get Wholesale Pricing
            </ContactButton>
            <ContactButton className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
              Request Silk Samples
            </ContactButton>
          </div>
        </div>
      </section>
    </main>
  );
}
