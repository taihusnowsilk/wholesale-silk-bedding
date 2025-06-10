'use client';

import Image from 'next/image';
import { ContactButton } from "@/components/ContactButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';


const bannerImages = [
  { src: "/images/taihu-snow-silk-banner-1.webp", alt: "Premium Silk Bedding Manufacturing" },
  { src: "/images/taihu-snow-silk-banner-6.webp", alt: "Luxury Silk Duvet Collections" },
  { src: "/images/taihu-snow-silk-banner-2.webp", alt: "Wholesale Hotel Bedding Solutions" },
  { src: "/images/taihu-snow-silk-banner-3.webp", alt: "Luxury Silk Duvet Collections" },

];

export function HomeBanner() {
  const t = useTranslations('page.home.banner');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => api.destroy(); 
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Fixed Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col text-secondary items-center justify-end pb-16 ml-20 text-center max-w-4xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-4  drop-shadow-lg">
          {t('title')}
        </h1>
        <p className="text-base md:text-lg mb-6  drop-shadow-md">
          {t('subtitle')}
        </p>
        <ContactButton title={t('cta')} className="bg-primary/70 hover:bg-primary/90  font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
          {t('cta')}
        </ContactButton>
      </div>

      {/* Carousel */}
      <Carousel
        className="w-full h-full"
        setApi={setApi}
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="h-screen">
          {bannerImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 border-none text-white w-10 h-10 rounded-full transition-colors duration-200" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 border-none text-white w-10 h-10 rounded-full transition-colors duration-200" />

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}