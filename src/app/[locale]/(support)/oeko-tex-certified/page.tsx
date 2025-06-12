import Image from 'next/image';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { generateMultilingualMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateMultilingualMetadata({
    locale,
    translationModule: 'support',
    translationKey: 'oeko.metadata',
    pathname: 'oeko-tex-certified',
  });
}

export default function OekoTexPage() {
  const t = useTranslations('support.oeko');

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/80 text-secondary text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4">{t('hero.h1')}</h1>  
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
              {t('hero.p')}
            </p>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 text-yellow-400">100+</div>
                <div className="text-sm opacity-80">{t('hero.test_parameters')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 text-yellow-400">Class II</div>
                <div className="text-sm opacity-80">{t('hero.certification_level')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 text-yellow-400">16</div>
                <div className="text-sm opacity-80">{t('hero.global_test_institutes')}</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">{t('what_is_oeko_tex.h2')}</h2>
              
              <p className="text-gray-700">
                {t('what_is_oeko_tex.p1')}
              </p>
              
              <p className="text-gray-700">
                {t('what_is_oeko_tex.p2')}
              </p>
              
              <Image src="/images/taihu-snow-silk-oeko-tex-1.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />
              <Image src="/images/taihu-snow-silk-oeko-tex-2.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />

              <p className="text-gray-700">
                {t('what_is_oeko_tex.p3')}
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-700">{t('what_is_oeko_tex.p4')}</p>
                
                <div className="space-y-2 ml-4">
                  <p className="text-gray-700"><strong>Class I:</strong> {t('what_is_oeko_tex.p5')}</p>
                  
                  <p className="text-gray-700"><strong>Class II:</strong> {t('what_is_oeko_tex.p6')}</p>
                  
                  <p className="text-gray-700"><strong>Class III:</strong> {t('what_is_oeko_tex.p7')}</p>
                  
                  <p className="text-gray-700"><strong>Class IV:</strong> {t('what_is_oeko_tex.p8')}</p>
                </div>
              </div>
              
              <p className="text-gray-700">
                {t('what_is_oeko_tex.p9')}
              </p>
              
              <p className="text-gray-700">
                {t('what_is_oeko_tex.p10')}
              </p>
              
              <p className="text-gray-700">
                {t('what_is_oeko_tex.p11')}
              </p>
            </section>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">{t('how_to.h2')}</h2>
              
              <p className="text-gray-700">
                {t('how_to.p1')}
              </p>
              <Image src="/images/taihu-snow-silk-oeko-tex-3.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />
              <Image src="/images/taihu-snow-silk-oeko-tex-4.webp" alt="OEKO-TEX® Standard 100" width={1000} height={600} />
            </section>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">{t('how_get_oeko.h2')}</h2>
              <p className="text-gray-700">
                {t('how_get_oeko.p1')}
              </p>
              
              <p className="text-gray-700">
                {t('how_get_oeko.p2')}
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
