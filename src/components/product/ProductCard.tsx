import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import type { FC, MouseEvent } from 'react';
import { ContactButton } from '@/components/ContactButton';
import { useTranslations } from 'next-intl';

export interface ProductCardProps {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  categories?: string[];
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ProductCard: FC<ProductCardProps> = ({ image, alt, title, description, href, onButtonClick }) => {
  const t = useTranslations('common.productCard');
  return (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
    <Link href={href} className="group flex-1 flex flex-col focus:outline-none">
      <div className="relative w-full h-48 md:h-72">
        <Image src={image} alt={alt} fill className="object-cover transition-transform group-hover:scale-105" />
      </div>
    </Link>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
    </div>

    <div className="px-6 pb-6">
      <ContactButton title={t('sendInquiryNow')} className="w-full bg-primary/70 hover:bg-primary text-secondary font-semibold p-3 rounded-md transition-colors duration-300">
        {t('sendInquiryNow')}
      </ContactButton>
    </div>
  </div>
  );
};

export { ProductCard }; 