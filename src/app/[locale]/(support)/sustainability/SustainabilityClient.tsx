'use client';
import { useEffect } from 'react';

interface SustainabilityClientProps {
  children: React.ReactNode;
}

export default function SustainabilityClient({ children }: SustainabilityClientProps) {
  useEffect(() => {
    // Scroll Animation Handler
    function handleScrollAnimation() {
      const elements = document.querySelectorAll('.fade-in');

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    }

    // Initialize animations on load and scroll
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScrollAnimation);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16);
      }
    };

    let ticking = false;
    window.addEventListener('scroll', handleScroll);
    handleScrollAnimation(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
} 