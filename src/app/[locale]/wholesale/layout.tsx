
import { AsideNav } from '@/components/AsideNav';

export default function WholesaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wholesalePages = [
    { title: 'Wholesale', href: '/wholesale' },
    { title: 'OEM/ODM Silk', href: '/wholesale/oem-odm-silk' },
    { title: 'Silk Duvet Manufacturer', href: '/wholesale/silk-duvet-manufacturer' },
    { title: 'Silk Quality', href: '/wholesale/silk-quality' },
    { title: 'Silk Production Process', href: '/wholesale/silk-production-process' },
  ];

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="flex flex-col md:flex-row gap-8">
        <AsideNav items={wholesalePages} />
        
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
} 