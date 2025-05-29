import Image from 'next/image'
import { useTranslations } from 'next-intl'
import ProductsBreadcrumb from '@/components/Breadcrumb'

export default function SilkPillowcasePage() {
  const t = useTranslations('products')

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/silk-pillowcase-hero.jpg"
          alt="Silk Pillowcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Wholesale Silk Pillowcase</h1>
            <p className="text-xl md:text-2xl mb-8">Luxurious comfort for better sleep</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <ProductsBreadcrumb items={[
          { label: 'Products', href: '/products' },
          { label: 'Wholesale Silk Pillowcase', isCurrent: true },
        ]} />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
          <p className="text-lg text-gray-600 text-center">
            Our premium silk pillowcase collection will be available soon. 
            Experience the ultimate in comfort and luxury.
          </p>
        </div>
      </div>
    </>
  )
} 