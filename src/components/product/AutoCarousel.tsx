'use client'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import { ProductCard } from "./ProductCard"; 
import { useTranslations } from 'next-intl';
import { productIds, Product } from '@/lib/products';

interface AutoCarouselProps {
  className?: string;
}

export default function AutoCarousel({ className }: AutoCarouselProps) {
  const t = useTranslations('products.items');
  

  const products: Product[] = productIds.map(product => {
    // 排除 key 属性，只保留 Product 接口需要的属性
    const { key, ...productData } = product;
    return {
      ...productData,
      title: t(`${key}.title`),
      description: t(`${key}.description`),
      alt: t(`${key}.alt`),
    };
  });

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className={`w-full ${className || ''}`}
    >
      <CarouselContent className="-ml-4">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-10 md:basis-1/2 lg:basis-1/3">
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
