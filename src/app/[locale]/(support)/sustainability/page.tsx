'use client';

import { useEffect } from 'react';

// Four Hearts Philosophy data
const fourHearts = [
  {
    icon: "⚖️",
    title: "Perseverance • Governance Excellence",
    description: "Building robust governance frameworks, enhancing risk management, and upholding business ethics to establish a solid foundation for sustainable development."
  },
  {
    icon: "🎨",
    title: "Craftsmanship • Silk Mastery",
    description: "Embracing the spirit of \"perfecting every silk thread,\" we maintain quality excellence, drive innovation, and deliver premium products and services to our customers."
  },
  {
    icon: "🌱",
    title: "Dedication • Environmental Stewardship",
    description: "Practicing green development principles, protecting biodiversity, and promoting sustainable operations to safeguard our ecological environment."
  },
  {
    icon: "🤝",
    title: "Unity • Shared Prosperity",
    description: "Caring for employee growth, fulfilling social responsibilities, and promoting rural revitalization to create a better future together with all stakeholders."
  }
];

// 2024 ESG Performance Highlights
const esgMetrics = [
  {
    value: "2,268.92",
    description: "Million RMB R&D Investment"
  },
  {
    value: "99",
    description: "Valid Patents (8 Invention + 91 Utility Model)"
  },
  {
    value: "2,459",
    description: "Copyright Works"
  },
  {
    value: "100%",
    description: "Employee Training Coverage"
  },
  {
    value: "0.0091",
    description: "Tons CO₂e per 10K RMB Revenue"
  },
  {
    value: "55.97%",
    description: "Waste Recycling Rate"
  },
  {
    value: "22.2",
    description: "Million RMB Social Investment"
  },
  {
    value: "17.47",
    description: "Million RMB Total Tax Contribution"
  }
];

// Achievements data
const achievements = [
  {
    title: "National Cultural Industry Demonstration Base",
    issuer: "Ministry of Culture and Tourism, China",
    description: "Recognition for outstanding contribution to cultural heritage preservation and innovation"
  },
  {
    title: "National Model Workers' Home",
    issuer: "All-China Federation of Trade Unions",
    description: "Honored for exemplary employee care and workplace excellence"
  },
  {
    title: "Best Employer 2024",
    issuer: "Greater Suzhou Best Employer Committee",
    description: "Recognized for creating an inclusive and supportive work environment"
  },
  {
    title: "ESG Value Communication Award",
    issuer: "China ESG Sustainable Development Conference",
    description: "Acknowledged for transparent ESG communication and stakeholder engagement"
  },
  {
    title: "High-Tech Enterprise Certification",
    issuer: "Ministry of Science and Technology, China",
    description: "Continuous advancement in technological innovation and R&D capabilities"
  },
  {
    title: "Specialized & Innovative SME (Provincial)",
    issuer: "Jiangsu Department of Commerce",
    description: "Recognition for specialized innovation and market leadership"
  },
  {
    title: "Jiangsu Province Integration of Domestic & Foreign Trade Pilot Enterprise",
    issuer: "Jiangsu Department of Commerce",
    description: "Leading integration of domestic and international trade practices"
  },
  {
    title: "First Prize - Suzhou Textile & Silk Science & Technology Progress Award",
    issuer: "Suzhou Textile & Silk Science & Technology Progress Award Committee",
    description: "Excellence in textile and silk technological advancement"
  }
];

// Sustainability Goals data
const sustainabilityGoals = [
  {
    title: "Environmental Protection",
    description: "Advancing green operations, improving resource efficiency, reducing environmental impact, and protecting biodiversity through innovative practices."
  },
  {
    title: "Product Innovation",
    description: "Increasing R&D investment, driving technological innovation, and developing more eco-friendly, healthy, and high-quality silk products."
  },
  {
    title: "Employee Development",
    description: "Creating an inclusive and diverse work environment, providing growth opportunities, and ensuring employee rights and occupational health and safety."
  },
  {
    title: "Social Responsibility",
    description: "Actively participating in rural revitalization, preserving silk culture, and contributing to community development and cultural heritage."
  }
];


export default function Sustainability() {

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

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/80 text-secondary text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4 fade-in">Sustainability</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8 fade-in">
              Preserving thousand-year silk heritage while weaving a sustainable future for generations to come
            </p>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center fade-in">
                <div className="text-3xl font-bold mb-1 text-yellow-400">5,000+</div>
                <div className="text-sm opacity-80">Years of Silk Heritage</div>
              </div>
              <div className="text-center fade-in">
                <div className="text-3xl font-bold mb-1 text-yellow-400">100%</div>
                <div className="text-sm opacity-80">Natural Materials</div>
              </div>
              <div className="text-center fade-in">
                <div className="text-3xl font-bold mb-1 text-yellow-400">Carbon</div>
                <div className="text-sm opacity-80">Neutral Goals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Hearts Philosophy */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-center text-4xl font-light mb-4 fade-in text-primary">
              Our Four Hearts Philosophy
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-lg fade-in text-gray-600">
              Guided by four core principles that drive our commitment to sustainable development and responsible business practices
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {fourHearts.map((heart, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-10 text-center shadow-lg relative overflow-hidden border-t-4 border-t-primary hover:transform hover:-translate-y-2 transition-all duration-300 fade-in"
                >
                  <span className="text-6xl mb-6 block text-primary">{heart.icon}</span>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {heart.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {heart.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Key Metrics */}
        <section className="py-20 bg-primary/10">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-center text-4xl font-light mb-4 fade-in text-primary">
              2024 ESG Performance Highlights
            </h2>
            <p className="text-center max-w-4xl mx-auto mb-12 fade-in text-gray-600">
              Our commitment to sustainability is reflected in measurable outcomes across environmental, social, and governance dimensions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {esgMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl text-center shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 fade-in"
                >
                  <span className="text-4xl font-bold block mb-2 text-primary">{metric.value}</span>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Recognition */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-center text-4xl font-light mb-4 fade-in text-primary">
              2024 Recognition & Achievements
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-lg fade-in text-gray-600">
              Our sustainability efforts have been recognized by leading organizations and industry bodies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl border-l-4 border-l-primary bg-primary/10 hover:transform hover:translate-x-1 transition-all duration-300 fade-in"
                >
                  <h4 className="text-lg font-semibold mb-2 text-primary">
                    {achievement.title}
                  </h4>
                  <div className="text-sm italic mb-4 text-gray-600">
                    {achievement.issuer}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Goals */}
        <section className="py-20 relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <h2 className="text-center text-4xl text-primary font-light mb-4 fade-in">
              Our Sustainability Commitments
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600 text-lg  opacity-90 fade-in">
              Setting ambitious targets to drive positive impact across our value chain and beyond
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {sustainabilityGoals.map((goal, index) => (
                <div
                  key={index}
                  className="p-10 rounded-2xl backdrop-blur-md border border-white/20 bg-white/10 hover:transform hover:-translate-y-1 transition-all duration-300 fade-in"
                >
                  <h4 className="text-xl font-semibold mb-4 text-primary">
                    {goal.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Report Download */}
        <section className="py-20 text-center bg-gray-50">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-center text-4xl font-light mb-8 fade-in text-primary">
              ESG Report Download
            </h2>
            <div className="bg-white max-w-2xl mx-auto p-12 rounded-2xl shadow-lg fade-in">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                2024 Environmental, Social & Governance (ESG) Report
              </h3>
              <p className="mb-8 text-gray-600 leading-relaxed">
                Discover detailed insights into Taihu Snow's sustainability philosophy, practices, and performance achievements
              </p>
              <a
                href="#"
                className="inline-block px-10 py-4 text-secondary text-lg font-medium rounded-lg hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-primary no-underline"
              >
                Download Full Report
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 