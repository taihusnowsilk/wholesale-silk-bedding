import { Metadata } from "next";
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ContactButton } from "@/components/ContactButton";
import { HomeBanner } from "@/components/HomeBanner";
import AutoCarousel from "@/components/product/AutoCarousel";
import { CarouselProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Wholesale Bedding: Hotel bedding Quality, Great Prices - Taihu Snow Silk",
  description: "Wholesale Bedding: Hotel quality linen & bedding sets at great prices. Shop wholesale hotel bedding, comforter sets & more! - Suzhou Taihu Snow Silk",
};

const whyChooseData = [
  {
    title: "Quarter-Century Expertise",
    description: "Taihu Snow brings 25+ years of experience in bedding manufacturing and global distribution. Our bedding collection includes coverlets, comforters, duvet covers, microfiber pillowcases, soft bed sheets, bed skirts, and top sheets—crafted for comfort, durability, and a luxurious look.",
    image: "/images/taihu-snow-silk-banner-1.webp"
  },
  {
    title: "Certified Eco-Friendly Quality",
    description: "All bedding products are Oeko-Tex Standard 100, ISO 9001, and organic certified, ensuring hypoallergenic, breathable, and eco-friendly bedding for peace of mind and guest comfort.",
    image: "/images/taihu-snow-silk-banner-2.webp"
  },
  {
    title: "Customization & Bulk Bedding Solutions",
    description: "Tailor your bedding sets, comforter sets, and duvet cover designs to meet your unique style and hospitality needs. We offer bulk bedding sets, bedding in bulk, and cost-effective options for hotels, lodges, resorts, and Airbnb's.",
    image: "/images/taihu-snow-silk-banner-3.webp"
  },
  {
    title: "Efficient Global Shipping",
    description: "With a 500,000+ annual production capacity and shipping to 50+ countries, you'll never miss a deadline. Streamline your supply chain with our reliable delivery and premier bedding supplier support.",
    image: "/images/taihu-snow-silk-banner-4.webp"
  },
  {
    title: "Blowout & Unbeatable Prices",
    description: "Get the best value on quality bedding, with low wholesale prices on martex millennium, martex wovens, martex ultra touch down alternative, and more. wholesale bedding in bulk online and enjoy affordability with sophistication and comfort.",
    image: "/images/taihu-snow-silk-banner-5.webp"
  }
];

const testimonialsData = [
  {
    quote: "Taihu Snow has been our trusted supplier for over 5 years. Their consistent quality and reliable delivery have made them an invaluable partner for our bedding business.",
    name: "Robert Johnson",
    company: "Luxury Bedding Co., USA"
  },
  {
    quote: "The customization options provided by Taihu Snow allowed us to create a unique product line that has become our bestseller. Their attention to detail is exceptional.",
    name: "Sophia Müller",
    company: "European Home Textiles, Germany"
  },
  {
    quote: "As a high-end hotel chain, we demand the best for our guests. Taihu Snow's hotel bedding collection has exceeded our expectations in both quality and durability.",
    name: "Hiroshi Tanaka",
    company: "Luxury Hotels Group, Japan"
  }
];

export default function Home() {

  return (
    <>
      {/* hero section */}
      <HomeBanner />

      {/* Introduction Section */}
      <section className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-primary font-semibold">25+ Years of Excellence</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Discover the best value on quality bedding with Taihu Snow
            </h2>
            <p className="text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
              Your trusted supplier for wholesale bedding, hotel bedding, comforter sets, duvet covers, bed linens, and eco-friendly bedding products. With over 25 years of excellence, we combine traditional craftsmanship with modern technology to deliver luxury bedding for hotels, resorts, guest rooms, and hospitality venues worldwide.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <ContactButton title="Get Quote Now" className="bg-primary hover:bg-primary/90 text-secondary font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Quote Now
            </ContactButton>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="max-w-5xl mx-auto text-4xl font-bold text-center mb-16">Why Choose Taihu Snow for Wholesale Bedding linen, Comforter Sets, and Hotel Bedding ?</h2>
          <div className="px-20 space-y-16">
            {whyChooseData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-20 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 bg-white rounded-2xl p-10 shadow-lg border-t-4 border-t-primary">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
                
                {/* Image */}
                <div className="flex-1">
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Materials */}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-20 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-4 shadow-lg relative overflow-hidden border-t-4 border-t-primary hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Certifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Oeko-Tex Standard 100 | ISO 9001 | Organic Certified
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg relative overflow-hidden border-t-4 border-t-primary hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                Soft, microfiber, polyester, hypoallergenic and breathable silk fabrics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Silk Fabric Products</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Explore our premium silk duvet cover set collections designed for various seasons and needs
          </p>
          <AutoCarousel products={CarouselProducts} />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Industry Leaders Choose Us</h2>
            <p className="text-xl text-secondary/90 max-w-3xl mx-auto">
              Over 25 years of excellence in silk bedding manufacturing with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 - Export Countries */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-secondary/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold mb-2 text-secondary">50+</div>
                <div className="text-lg text-secondary/90">Export Countries</div>
              </div>
            </div>

            {/* Stat 2 - R&D Personnel */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-secondary/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold mb-2 text-secondary">66+</div>
                <div className="text-lg text-secondary/90">R&D Personnel</div>
              </div>
            </div>

            {/* Stat 3 - Mulberry Orchard */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-secondary/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold mb-2 text-secondary">200+</div>
                <div className="text-lg text-secondary/90">Mulberry Orchard (Acres)</div>
              </div>
            </div>

            {/* Stat 4 - Customer Satisfaction */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-secondary/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold mb-2 text-secondary">98%</div>
                <div className="text-lg text-secondary/90">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="max-w-5xl mx-auto text-4xl font-bold text-center mb-10">Trusted by Hotels, Resorts, and Hospitality Professionals Worldwide wholesale bedding suppliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA  Section */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="max-w-5xl mx-auto text-4xl font-bold text-center mb-10">Your Premier Source for Wholesale Hotel Bedding, Comforter Sets & Duvet Covers</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether you need bedding for hotels, resorts, or Airbnb's, our bedding products—including plush comforters, duvet covers, bed linens, pillowcases, bedspreads, bed skirts, mattress protectors, thermal blankets, coverlets, and toppers—offer a luxurious look, long-lasting durability, and unbeatable prices.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our bedding sets are designed for guest satisfaction, guest comfort, and a superior sleep experience.
                </p>
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Choose bedding from Taihu Snow to get the best value on quality, streamline your bulk bedding orders, and enjoy peace of mind with premier suppliers. Our bedding collection is perfect for hospitality, hotel bedding, and bulk bedding needs—delivering affordability, cost-effective solutions, and a unique style for every guest room.
                </p>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-white rounded-2xl p-10 mt-12 shadow-lg border-t-4 border-t-primary text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800"><Link className="underline" href="/products">Shop Wholesale Bedding Online & Get Blowout Prices Now!</Link></h3>
              <p className="text-lg text-gray-600 mb-6">
                Bulk bedding sets available in twin sizes and more. Experience premier bedding and unbeatable wholesale prices with Taihu Snow—the trusted name in hotel bedding and hospitality linens.
              </p>
              <ContactButton className="bg-primary hover:bg-primary/80 text-secondary font-semibold py-3 px-8 rounded-md transition-colors duration-300">
                Get Quote Now
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="w-full py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Latest News</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Stay updated with our company developments and industry insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2025</div>
                <h3 className="text-xl font-semibold mb-2">Taihu Snow to Exhibit at Heimtextil 2025</h3>
                <p className="text-gray-600 mb-4">
                  Visit our booth to explore our latest silk duvet collections and meet our team.
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 28, 2025</div>
                <h3 className="text-xl font-semibold mb-2">New Organic Silk Collection Launched</h3>
                <p className="text-gray-600 mb-4">
                  Our latest eco-friendly silk duvet collection has received GOTS certification.
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 10, 2025</div>
                <h3 className="text-xl font-semibold mb-2">Taihu Snow Expands Production Capacity</h3>
                <p className="text-gray-600 mb-4">
                  New state-of-the-art facility increases our annual production by 30%.
                </p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 