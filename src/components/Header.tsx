'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const t = useTranslations('common.header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productItems = [
    { label: t('allProducts'), href: '/products' },
    { label: t('wholesaleSilkDuvet'), href: '/products/wholesale-silk-duvet' },
    { label: t('silkCribSheets'), href: '/products/silk-crib-sheets' },
    { label: t('silkFilledDuvet'), href: '/products/silk-filled-duvet' },
    { label: t('redSilkBlanket'), href: '/products/red-silk-blanket' },
    { label: t('veganSilkSheets'), href: '/products/vegan-silk-sheets' },
  ];

  const wholesaleItems = [
    { label: t('wholesale'), href: '/wholesale' },
    { label: t('oemOdmSilk'), href: '/wholesale/oem-odm-silk' },
    { label: t('silkDuvetManufacturer'), href: '/wholesale/silk-duvet-manufacturer' },
    { label: t('silkQuality'), href: '/wholesale/silk-quality' },
    { label: t('silkProductionProcess'), href: '/wholesale/silk-production-process' },
  ];

  const supportItems = [
    { label: t('aboutUs'), href: '/about-us' },
    { label: t('sustainability'), href: '/sustainability' },
    { label: t('oekoTexCertified'), href: '/oeko-tex-certified' },
  ];

  const blogItems = [
    { label: t('news'), href: '/news' },
    { label: t('silkGuides'), href: '/silk-guides' },
    { label: t('silkMaterials'), href: '/silk-materials' },
    { label: t('silkCare'), href: '/silk-care' },
    { label: t('silkCompare'), href: '/silk-compare' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-primary/80 text-secondary shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold h-16 px-4 flex items-center transition-colors duration-900 hover:text-primary hover:bg-secondary">
              {t('logo')}
            </Link>
          </div>
          
          {/* desktop navigation */}
          <nav className="hidden md:flex items-center" aria-label="Main navigation">
            <Link href="/" className="transition-colors duration-900 h-16 flex items-center px-4 hover:text-primary hover:bg-secondary">
              {t('home')}
            </Link>
            <DropdownMenu
              label={t('products')}
              items={productItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
             <DropdownMenu
              label= {t('wholesale')}
              items={wholesaleItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
             <DropdownMenu
              label= {t('support')}
              items={supportItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
            <Link href="/contact-us" className="transition-colors duration-900 h-16 flex items-center px-4 hover:text-primary hover:bg-secondary">
              {t('contactUs')}
            </Link>
            <DropdownMenu
              label= {t('blog')}
              items={blogItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher scrolled={true} />
          </div>
          
          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-secondary hover:text-primary hover:bg-secondary transition-colors duration-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 w-full bg-secondary shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900">
                  {t('products')}
                </div>
                <div className="mt-2 space-y-1">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900">
                    {t('support')}
                </div>
                <div className="mt-2 space-y-1">
                  {supportItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact-us"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <div className="px-3 py-2">
                <LanguageSwitcher scrolled={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 