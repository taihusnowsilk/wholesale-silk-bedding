'use client';
import { useState, useEffect } from 'react';

export const sections = [
  { id: "desc", label: "Product Description" },
  { id: "why", label: "Why Choose Us" },
  { id: "related-products", label: "Related Products" },
];

interface Section {
  id: string;
  label: string;
}

interface AnchorNavProps {
  sections: Section[];
}

export function AnchorNav({ sections }: AnchorNavProps) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = sections[0].id;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) current = sec.id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const anchorNavHeight = 60;
      const extraPadding = 20;
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (headerHeight + anchorNavHeight + extraPadding);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-16 z-40 bg-white border-t border-gray-200 flex justify-center py-3" aria-label="Anchor navigation">
      <ul className="flex gap-4 md:gap-8">
        {sections.map((sec) => (
          <li key={sec.id}>
            <button
              type="button"
              className={`text-gray-700 font-medium px-3 py-1 rounded focus:outline-none transition-colors ${
                active === sec.id ? 'bg-gray-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 