import Image from 'next/image';
import { ContactButton } from "@/components/ContactButton";
import { useTranslations } from 'next-intl';
import { generateMultilingualMetadata } from "@/lib/metadata";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateMultilingualMetadata({
    locale,
    translationModule: 'support',
    translationKey: 'about_us.metadata',
    pathname: 'about-us',
  });
}

export default function AboutUsPage() {
  const t = useTranslations('support.about_us');

  const manufacturingCapabilities = [
    {
      title: t('capabilities.capabilities.0.title'),
      value: '500,000+',
      unit: t('capabilities.capabilities.0.unit'),
      description: t('capabilities.capabilities.0.description')
    },
    {
      title: t('capabilities.capabilities.1.title'),
      value: '15,000',
      unit: t('capabilities.capabilities.1.unit'),
      description: t('capabilities.capabilities.1.description')
    },
    {
      title: t('capabilities.capabilities.2.title'),
      value: '20+',
      unit: t('capabilities.capabilities.2.unit'),
      description: t('capabilities.capabilities.2.description')
    },
    {
      title: t('capabilities.capabilities.3.title'),
      value: '15-30',
      unit: t('capabilities.capabilities.3.unit'),
      description: t('capabilities.capabilities.3.description')
    }
  ];
  // Company data arrays for map rendering
  const timelineData = [
    {
      year: t('timeline_data.0.year'),
      content: t('timeline_data.0.content')
    },
    {
      year: t('timeline_data.1.year'),
      content: t('timeline_data.1.content')
    },
    {
      year: t('timeline_data.2.year'),
      content: t('timeline_data.2.content')
    },
    {
      year: t('timeline_data.3.year'),
      content: t('timeline_data.3.content')
    },
    {
      year: t('timeline_data.4.year'),
      content: t('timeline_data.4.content')
    },
    {
      year: t('timeline_data.5.year'),
      content: t('timeline_data.5.content')
    },
    {
      year: t('timeline_data.6.year'),
      content: t('timeline_data.6.content')
    }
  ];

  const b2bServices = [
    {
      title: t('b2b_services_data.0.title'),
      description: t('b2b_services_data.0.description'),
      icon: '🏭'
    },
    {
      title: t('b2b_services_data.1.title'),
      description: t('b2b_services_data.1.description'),
      icon: '📦'
    },
    {
      title: t('b2b_services_data.2.title'),
      description: t('b2b_services_data.2.description'),
      icon: '🎨'
    },
    {
      title: t('b2b_services_data.3.title'),
      description: t('b2b_services_data.3.description'),
      icon: '🛠️'
    },
    {
      title: t('b2b_services_data.4.title'),
      description: t('b2b_services_data.4.description'),
      icon: '🌍'
    },
    {
      title: t('b2b_services_data.5.title'),
      description: t('b2b_services_data.5.description'),
      icon: '✅'
    }
  ];

  const clientTypes = [
    {
      type: t('client_types_data.0.type'),
      description: t('client_types_data.0.description'),
      examples: t('client_types_data.0.examples'),
      icon: '🏨'
    },
    {
      type: t('client_types_data.1.type'),
      description: t('client_types_data.1.description'),
      examples: t('client_types_data.1.examples'),
      icon: '🏪'
    },
    {
      type: t('client_types_data.2.type'),
      description: t('client_types_data.2.description'),
      examples: t('client_types_data.2.examples'),
      icon: '💻'
    },
    {
      type: t('client_types_data.3.type'),
      description: t('client_types_data.3.description'),
      examples: t('client_types_data.3.examples'),
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('h1')}</h1>
            <p className="text-xl md:text-2xl mb-8">{t('sub_title')}</p>
            <ContactButton title={t('request_wholesale_catalog')} className="bg-primary hover:bg-primary/90 text-secondary font-semibold py-4 px-8 rounded-md transition-colors duration-300">
              {t('request_wholesale_catalog')}
            </ContactButton>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('company_overview.h2')}</h2>   
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('company_overview.p1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('company_overview.p2')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">{t('company_overview.export_countries')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-gray-600">{t('company_overview.b2b_partners')}</div>
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
          <h2 className="text-4xl font-bold text-center mb-4">{t('capabilities.h2')}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            {t('capabilities.p')}
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
          <h2 className="text-4xl font-bold text-center mb-4">{t('timeline.h2')}</h2>
          <p className="text-center text-gray-600 mb-16">{t('timeline.p')}</p>

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
          <h2 className="text-4xl font-bold text-center mb-4">{t('b2b_services.h2')}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            {t('b2b_services.p')}
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
          <h2 className="text-4xl font-bold text-center mb-4">{t('quality_assurance.h2')}</h2>  
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            {t('quality_assurance.p')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('quality_assurance_data.0.title')}</h3>
              <p className="text-gray-600">{t('quality_assurance_data.0.description')}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('quality_assurance_data.1.title')}</h3>
              <p className="text-gray-600">{t('quality_assurance_data.1.description')}</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('quality_assurance_data.2.title')}</h3>
              <p className="text-gray-600">{t('quality_assurance_data.2.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 mb-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('cta.h2')}</h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta.p')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <ContactButton title={t('cta.request_wholesale_quote')} className="bg-secondary hover:bg-secondary/90 text-primary font-semibold py-4 px-8 rounded-md transition-colors duration-300">
              {t('cta.request_wholesale_quote')}
            </ContactButton>
          </div>
        </div>
      </section>
    </>
  );
}
