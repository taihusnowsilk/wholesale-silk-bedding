import {Link} from '@/i18n/navigation';
import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';

export default function OemOdmSilk() {
  const services = [
    {
      title: 'Custom Design Development',
      description: 'Create unique silk duvets, bedding sets, or accessories tailored to your specifications, including custom sizes, colors, patterns, and materials.',
      icon: '🎨'
    },
    {
      title: 'Private Label Solutions',
      description: 'Complete branding services including custom packaging, logo placement, and marketing materials to establish your luxury bedding brand.',
      icon: '🏷️'
    },
    {
      title: 'Material & Quality Options',
      description: 'Choose from various silk grades (6A to 7A), weights (19-25 momme), and finishes including OEKO-TEX certified organic options.',
      icon: '🧵'
    },
    {
      title: 'Prototyping & Sampling',
      description: 'Comprehensive sample development and testing to ensure your vision is perfectly realized before full-scale production begins.',
      icon: '🔬'
    }
  ];

  const advantages = [
    {
      title: 'Manufacturing Expertise',
      description: 'Over 15 years of silk production experience with state-of-the-art facilities and skilled craftsmen delivering premium quality.',
      highlight: 'Stock Code: 838262'
    },
    {
      title: 'Flexible Production Scale',
      description: 'From startup quantities (50-100 pieces) to large wholesale orders (10,000+ pieces), we adapt to your business needs.',
      highlight: 'MOQ from 50 pieces'
    },
    {
      title: 'Global Quality Standards',
      description: 'All products meet international safety standards with OEKO-TEX Standard 100 certification and comprehensive quality control.',
      highlight: 'OEKO-TEX Certified'
    },
    {
      title: 'Complete Brand Support',
      description: 'Marketing materials, product photography, technical specifications, and ongoing support to help your brand succeed.',
      highlight: '24hr Response Time'
    }
  ];

  const productCategories = [
    {
      category: 'Silk Duvets & Comforters',
      items: ['All-season silk comforters', 'Summer weight duvets', 'Winter weight options', 'Custom fill weights']
    },
    {
      category: 'Silk Bedding Sets',
      items: ['Sheet sets (fitted, flat, pillowcases)', 'Duvet covers', 'Pillow shams', 'Complete bedding collections']
    },
    {
      category: 'Specialty Items',
      items: ['Silk pillowcases', 'Baby crib sheets', 'Travel-size products', 'Silk accessories']
    },
    {
      category: 'Custom Solutions',
      items: ['Unique sizes and shapes', 'Hotel & hospitality lines', 'Therapeutic bedding', 'Seasonal collections']
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Share your vision, target market, and specific requirements. We provide expert guidance on materials, designs, and market positioning.',
      timeline: 'Day 1-3'
    },
    {
      step: 2,
      title: 'Design & Development',
      description: 'Our team creates detailed specifications, selects materials, and develops initial prototypes based on your brand requirements.',
      timeline: 'Week 1-2'
    },
    {
      step: 3,
      title: 'Sample Production',
      description: 'Receive physical samples for quality review, testing, and approval. We refine designs based on your feedback.',
      timeline: 'Week 2-3'
    },
    {
      step: 4,
      title: 'Production & Delivery',
      description: 'Upon approval, we begin full production with regular updates. Quality control ensures every piece meets your standards.',
      timeline: 'Week 4-8'
    }
  ];

  const brandingServices = [
    {
      service: 'Package Design',
      description: 'Custom boxes, bags, and inserts featuring your brand colors, logo, and messaging for premium presentation.'
    },
    {
      service: 'Product Labels',
      description: 'Care labels, brand tags, and certification labels seamlessly integrated into your products.'
    },
    {
      service: 'Marketing Assets',
      description: 'Professional product photography, detailed specifications, and marketing materials for your sales channels.'
    },
    {
      service: 'Brand Guidelines',
      description: 'Complete brand consistency across all touchpoints with detailed style guides and usage recommendations.'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', href: '/wholesale' }, { label: 'OEM/ODM Silk', isCurrent: true }]} />
      
      {/* Hero Section */}
      <section className="space-y-6 px-4">
        <h1 className="text-4xl font-bold text-gray-900">Premium Silk OEM/ODM Manufacturing</h1>
        <p className="text-xl text-gray-600 max-w-4xl">
          Transform your vision into reality with Taihu Snow Silk's comprehensive OEM and ODM services. As China's leading silk manufacturer, 
          we provide end-to-end solutions for luxury bedding brands, from custom design development to private label production.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <div className="bg-green-50 px-4 py-2 rounded-lg">
            <span className="text-green-800 font-medium">20+ Years Experience</span>
          </div>
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-blue-800 font-medium">50+ Countries Served</span>
          </div>
          <div className="bg-purple-50 px-4 py-2 rounded-lg">
            <Link href="/oeko-tex-certified" className="text-purple-800 font-medium">OEKO-TEX Certified</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 space-y-8 px-4">
        <h2 className="text-3xl font-bold text-gray-900">Our Manufacturing Services</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 space-y-8 px-4">
        <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <div key={category.category} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-4 text-gray-900">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-600 text-sm flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Advantages */}
      <section className="space-y-8 px-4">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Taihu Silk</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="p-8 bg-white border border-gray-200 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  {advantage.highlight}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 space-y-8 px-4">
        <h2 className="text-3xl font-bold text-gray-900">Our Development Process</h2>
        <div className="space-y-6">
          {processSteps.map((step) => (
            <div key={step.step} className="flex gap-6 p-8 bg-white border border-gray-200 rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full font-bold text-lg">
                {step.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <span className="text-sm text-gray-500 font-medium">{step.timeline}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Label & Branding */}
      <section className="py-16 space-y-8 px-4">
        <h2 className="text-3xl font-bold text-gray-900">Private Label & Branding Services</h2>
        <p className="text-gray-600 max-w-3xl">
          Build your luxury bedding brand with our comprehensive private label solutions. From packaging design to marketing support, 
          we help you create a cohesive brand identity that stands out in the premium bedding market.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {brandingServices.map((service) => (
            <div key={service.service} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3 text-gray-900">{service.service}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 space-y-6 px-4">
        <h2 className="text-2xl font-semibold text-gray-900">Related Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Link 
            href="/wholesale/silk-duvet-manufacturer"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold mb-2 text-gray-900">Manufacturing Capabilities</h3>
            <p className="text-gray-600 text-sm">Learn more about our production facilities and manufacturing strength.</p>
          </Link>
          <Link 
            href="/wholesale/silk-production-process"
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold mb-2 text-gray-900">Production Process</h3>
            <p className="text-gray-600 text-sm">Learn more about our production process.</p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4 ">
        <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Silk Brand?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto ">
          Join hundreds of successful brands worldwide who trust Taihu Silk for their premium bedding needs. 
          Our expert team is ready to bring your vision to life with uncompromising quality and service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ContactButton className="bg-primary/70 text-secondary hover:bg-primary">
            Start Your Project
          </ContactButton>
          <span >•</span>
          <span>24-hour response guarantee</span>
        </div>
      </section>
    </>
  );
} 