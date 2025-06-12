import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from 'next-intl';
import { generateMultilingualMetadata } from "@/lib/metadata";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateMultilingualMetadata({
    locale,
    translationModule: 'support',
    translationKey: 'contact_us.metadata',
    pathname: 'contact-us',
  });
}

export default function ContactPage() {
  const t = useTranslations('support.contact_us');

  const faqs = [
    {
      question: t('faq_1.question'),
      answer: t('faq_1.answer')
    },
    {
      question: t('faq_2.question'),
      answer: t('faq_2.answer')
    },
    {
      question: t('faq_3.question'),
      answer: t('faq_3.answer')
    },
    {
      question: t('faq_4.question'),
      answer: t('faq_4.answer')
    }
  ];
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[450px]">
        <Image
          src="/images/taihu-snow-silk.webp"
          alt="Contact Us with Suzhou Taihu Snow Silk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">{t('h1')}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('send_us_a_message')}</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">{t('reach_us')}</h2>
            {/* Phone */}
            <div className=" text-lg mb-6">
              <h3 className="mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('phone')}
              </h3>
              <div>
                <p>+86 135 8497 0970</p>
              </div>
            </div>

            {/* Email */}
            <div className=" text-lg mb-6">
              <h3 className="mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t('email')}
              </h3>
              <div>
                <p>carol@taihusnow.com</p>
              </div>
            </div>

            {/* Address */}
            <div className=" text-lg mb-6">
              <h3 className="mb-2 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {t('address')}
              </h3>
              <div>
                <p>{t('address_line1')}</p>
                <p>{t('address_line2')}</p>
                <p>{t('address_line3')}</p>
                <p>{t('address_line4')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="max-w-6xl mx-auto mt-4">
          <h2 className="text-2xl font-bold mb-6">{t('location')}</h2>
          <div className="h-[600px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4840.646347962003!2d120.50300968596058!3d30.91870882615446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b340ed1591ad4f%3A0xfc838ec26440573a!2z6IuP5bee5aSq5rmW6Zuq5Lid57u45a625bGF5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2sus!4v1746669908977!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('frequently_asked_questions')}</h2>
          <div className="mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
