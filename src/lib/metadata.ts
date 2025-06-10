import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

// 语言路径映射配置
const LOCALE_PATH_MAP = {
  'en': '',
  'zh': 'zh',
} as const;

// 基础网站配置
const SITE_CONFIG = {
  baseUrl: 'https://www.wholesalesilkbedding.com',
  defaultLocale: routing.defaultLocale,
} as const;

interface MetadataOptions {
  locale: string;
  translationModule: string; 
  translationKey?: string;
  pathname?: string;
}

/**
 * 生成多语言metadata - 只包含基础SEO字段
 */
export async function generateMultilingualMetadata({
  locale,
  translationModule,
  translationKey = 'metadata', // 默认使用 'metadata' 键
  pathname = '',
}: MetadataOptions): Promise<Metadata> {
  
  const t = await getTranslations(translationModule);
  
  // 构建当前页面的完整URL
  const currentPath = pathname ? `/${pathname}` : '';
  const currentUrl = locale === SITE_CONFIG.defaultLocale 
    ? `${SITE_CONFIG.baseUrl}${currentPath}`
    : `${SITE_CONFIG.baseUrl}/${locale}${currentPath}`;

  // 构建多语言alternates
  const languages: Record<string, string> = {};
  routing.locales.forEach((localeKey) => {
    const localePath = LOCALE_PATH_MAP[localeKey as keyof typeof LOCALE_PATH_MAP] || localeKey;
    const fullLocalePath = localePath ? `/${localePath}` : '';
    const languageCode = localeKey === 'en' ? 'en-US' : 'zh-CN';
    languages[languageCode] = `${SITE_CONFIG.baseUrl}${fullLocalePath}${currentPath}`;
  });

  // 如果有具体的翻译键，使用嵌套访问；否则直接访问模块级别的 title 和 description
  const titleKey = translationKey ? `${translationKey}.title` : 'title';
  const descriptionKey = translationKey ? `${translationKey}.description` : 'description';

  return {
    title: t(titleKey),
    description: t(descriptionKey),
    alternates: {
      canonical: currentUrl,
      languages,
    },
  };
} 