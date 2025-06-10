import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ProductFilter from '@/components/product/ProductFilter'
import ProductsBreadcrumb from '@/components/Breadcrumb'
import { ContactButton } from '@/components/ContactButton'
import { generateMultilingualMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateMultilingualMetadata({
    locale,
    translationModule: 'page',
    translationKey: 'products.metadata',
    pathname: 'products',
  });
}
export default function ProductsPage() {
  const t = useTranslations('page.products')

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[450px]">
        <Image
          src="/images/taihu-snow-silk-banner-5.webp"
          alt="Silk Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-secondary max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl md:text-2xl mb-8">{t('subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Navigation and Filters */}
      <div className="container mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <ProductsBreadcrumb items={[
          { label: t('products'), isCurrent: true },
        ]} />

        {/* Products Filter and Grid */}
        <ProductFilter />
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">100%</div>
              <p className="text-xl font-semibold mb-2">{t('pure')}</p>
              <p className="text-gray-600">{t('pure_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">1000+ </div>
              <p className="text-xl font-semibold mb-2">{t('clients')}</p>
              <p className="text-gray-600">{t('clients_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">20+</div>
              <p className="text-xl font-semibold mb-2">{t('years')}</p>
              <p className="text-gray-600">{t('years_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta')}</h2>
          <p className="text-xl mb-8">{t('cta_desc')}</p>
          <ContactButton title={t('cta_button')} className="text-lg px-8">
            {t('cta_button')}
          </ContactButton>
        </div>
      </div>
    </>
  )
} 