import Image from 'next/image';
import { ContactButton } from "@/components/ContactButton";

export default function AboutUsPage() {
  // Company data arrays for map rendering
  const timelineData = [
    {
      year: '1995',
      content: 'Founded as a family silk workshop in Suzhou, China\'s historic silk capital'
    },
    {
      year: '2002',
      content: 'First international B2B partnerships with Japanese and Korean wholesalers'
    },
    {
      year: '2007',
      content: 'Achieved ISO 9001 and Oeko-Tex Standard 100 certifications for quality assurance'
    },
    {
      year: '2012',
      content: 'Expanded to European and North American wholesale markets, built modern production facility'
    },
    {
      year: '2018',
      content: 'Introduced automated silk processing equipment, reached 500,000+ annual production capacity'
    },
    {
      year: '2020',
      content: 'Launched OEM/ODM services for custom hotel bedding and hospitality solutions'
    },
    {
      year: '2024',
      content: 'Established global distribution network serving 50+ countries with reliable supply chain'
    }
  ];

  const manufacturingCapabilities = [
    {
      title: 'Annual Production Capacity',
      value: '500,000+',
      unit: 'Units',
      description: 'Complete bedding sets, comforters, and hotel linens'
    },
    {
      title: 'Factory Size',
      value: '15,000',
      unit: 'sqm',
      description: 'State-of-the-art manufacturing facility'
    },
    {
      title: 'Quality Control Points',
      value: '20+',
      unit: 'Checkpoints',
      description: 'From raw silk to finished products'
    },
    {
      title: 'Lead Time',
      value: '15-30',
      unit: 'Days',
      description: 'Fast turnaround for bulk orders'
    }
  ];

  const b2bServices = [
    {
      title: 'OEM/ODM Manufacturing',
      description: 'Custom silk bedding design and manufacturing according to your specifications, brand requirements, and market needs.',
      icon: '🏭'
    },
    {
      title: 'Flexible MOQ',
      description: 'Minimum order quantities starting from 100 pieces per style, scalable to meet your business growth.',
      icon: '📦'
    },
    {
      title: 'Custom Packaging',
      description: 'Private label packaging, custom hang tags, and branding solutions for your retail or hospitality business.',
      icon: '🎨'
    },
    {
      title: 'Technical Support',
      description: '24/7 technical assistance, fabric consultation, and product development support for your team.',
      icon: '🛠️'
    },
    {
      title: 'Global Logistics',
      description: 'Worldwide shipping solutions with trusted freight partners, ensuring timely delivery to 50+ countries.',
      icon: '🌍'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive QC inspections, pre-shipment reports, and international certification compliance.',
      icon: '✅'
    }
  ];

  const clientTypes = [
    {
      type: 'Luxury Hotels & Resorts',
      description: 'Premium bedding solutions for 5-star hospitality',
      examples: 'Marriott, Hilton, Four Seasons partners',
      icon: '🏨'
    },
    {
      type: 'Wholesale Distributors',
      description: 'Bulk bedding supply for retail distribution',
      examples: 'Home goods retailers, department stores',
      icon: '🏪'
    },
    {
      type: 'E-commerce Brands',
      description: 'Private label manufacturing for online sellers',
      examples: 'Amazon sellers, D2C bedding brands',
      icon: '💻'
    },
    {
      type: 'Hospitality Suppliers',
      description: 'Contract manufacturing for hospitality vendors',
      examples: 'Hotel linen suppliers, facility management',
      icon: '🤝'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <Image
          src="/images/taihu-snow-silk.webp"
          alt="Taihu Snow - Leading Silk Bedding Manufacturer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Leading Silk Bedding Manufacturer</h1>
            <p className="text-xl md:text-2xl mb-8">Your Trusted B2B Partner for Wholesale Hotel Bedding & Custom Silk Products</p>
            <ContactButton className="bg-primary hover:bg-primary/90 text-secondary font-semibold py-4 px-8 rounded-md transition-colors duration-300">
              Request Wholesale Catalog
            </ContactButton>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">29 Years of Manufacturing Excellence</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Since 1995, Taihu Snow has been China's leading manufacturer of premium silk bedding and hotel linens. Located in Suzhou, the historic heart of China's silk industry, we combine traditional craftsmanship with modern manufacturing technology.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialize in B2B wholesale manufacturing, serving luxury hotels, hospitality suppliers, retail distributors, and e-commerce brands worldwide. Our state-of-the-art facility produces over 500,000 bedding sets annually with consistent quality and competitive pricing.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Export Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-600">B2B Partners</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/taihu-snow-silk.webp"
                alt="Taihu Snow Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Manufacturing Capabilities</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Advanced production facilities and quality control systems ensure consistent, high-volume manufacturing for your wholesale needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center border-t-4 border-t-primary">
                <div className="text-4xl font-bold text-primary mb-2">{capability.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{capability.unit}</div>
                <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our B2B Journey</h2>
          <p className="text-center text-gray-600 mb-16">Key milestones in becoming a trusted wholesale manufacturing partner</p>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12">
                <div className="flex-1 text-right pr-8">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="font-bold text-primary text-xl">{item.year}</h3>
                      <p className="text-gray-700">{item.content}</p>
                    </>
                  )}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="flex-1 pl-8">
                  {index % 2 === 1 && (
                    <>
                      <h3 className="font-bold text-primary text-xl">{item.year}</h3>
                      <p className="text-gray-700">{item.content}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Services */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Comprehensive B2B Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Full-service manufacturing solutions designed for wholesale partners and business customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {b2bServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Who We Serve</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Trusted manufacturing partner for diverse B2B clients across hospitality, retail, and e-commerce sectors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-primary">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{client.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{client.type}</h3>
                    <p className="text-gray-600 mb-3">{client.description}</p>
                    <p className="text-sm text-primary font-medium">{client.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Quality Assurance & Certifications</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            International certifications and rigorous quality control ensure consistent product excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management System certification ensuring consistent manufacturing standards</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Oeko-Tex Standard 100</h3>
              <p className="text-gray-600">Textile safety certification guaranteeing harmful substance-free products</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">BSCI Certification</h3>
              <p className="text-gray-600">Business Social Compliance Initiative ensuring ethical manufacturing practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 mb-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 1000+ satisfied B2B partners worldwide. Let's discuss your wholesale silk bedding requirements.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <ContactButton className="bg-secondary hover:bg-secondary/90 text-primary font-semibold py-4 px-8 rounded-md transition-colors duration-300">
              Request Wholesale Quote
            </ContactButton>
            <ContactButton className="border-2 border-secondary hover:bg-secondary hover:text-primary text-secondary font-semibold py-4 px-8 rounded-md transition-colors duration-300">
              Download Catalog
            </ContactButton>
          </div>
        </div>
      </section>
    </>
  );
}
