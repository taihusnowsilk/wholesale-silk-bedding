// 产品静态数据（不包含需要翻译的文本）
export const productIds = [
  {
    id: 1,
    key: "redSilkBlanket", // 翻译文件中的键名
    image: "/images/silk-quilt-blanket-1.webp",
    href: "/products/red-silk-blanket",
    categories: ["all-season", "hotel"] as string[],
  },
  {
    id: 2,
    key: "silkCribSheets",
    image: "/images/silk-crib-sheets-1.webp",
    href: "/products/silk-crib-sheets",
    categories: [] as string[],
  },
  {
    id: 3,
    key: "silkFilledDuvet",
    image: "/images/silk-filled-duvet-1.webp",
    href: "/products/silk-filled-duvet",
    categories: [] as string[],
  },
  {
    id: 4,
    key: "veganSilkSheets",
    image: "/images/vegan-silk-sheets-1.webp",
    href: "/products/vegan-silk-sheets",
    categories: [] as string[],
  }
] as const;

// 产品数据类型定义
export interface Product {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  categories: string[];
}