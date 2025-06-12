import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { generateMultilingualMetadata } from "@/lib/metadata";
import SustainabilityClient from './SustainabilityClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return generateMultilingualMetadata({
    locale,
    translationModule: 'support',
    translationKey: 'sustainability.metadata',
    pathname: 'sustainability',
  });
}


export default function Sustainability() {
  const t = useTranslations('support.sustainability');

  const fourHearts = [
    {
      icon: "⚖️",
      title: t('four_hearts.0.title'),
      description: t('four_hearts.0.description')
    },
    {
      icon: "🎨",
      title: t('four_hearts.1.title'),
      description: t('four_hearts.1.description')
    },
    {
      icon: "🌱",
      title: t('four_hearts.2.title'),
      description: t('four_hearts.2.description')
    },
    {
      icon: "🤝",
      title: t('four_hearts.3.title'),
      description: t('four_hearts.3.description')
    }
  ];

  // 2024 ESG Performance Highlights
const esgMetrics = [
  {
    value: "2,268.92",
    description: t('esg_highlights.esg1')
  },
  {
    value: "99",
    description: t('esg_highlights.esg2')
  },
  {
    value: "2,459",
    description: t('esg_highlights.esg3')
  },
  {
    value: "100%",
    description: t('esg_highlights.esg4')
  },
  {
    value: "0.0091",
    description: t('esg_highlights.esg5')
  },
  {
    value: "55.97%",
    description: t('esg_highlights.esg6')
  },
  {
    value: "22.2",
    description: t('esg_highlights.esg7')
  },
  {
    value: "17.47",
    description: t('esg_highlights.esg8')
  }
];

// Achievements data
const achievements = [
  {
    title: t('achievements_data.0.title'),
    issuer: t('achievements_data.0.issuer'),
    description: t('achievements_data.0.description')
  },
  {
    title: t('achievements_data.1.title'),
    issuer: t('achievements_data.1.issuer'),
    description: t('achievements_data.1.description')
  },
  {
    title: t('achievements_data.2.title'),
    issuer: t('achievements_data.2.issuer'),
    description: t('achievements_data.2.description')
  },
  {
    title: t('achievements_data.3.title'),
    issuer: t('achievements_data.3.issuer'),
    description: t('achievements_data.3.description')
  },
  {
    title: t('achievements_data.4.title'),
    issuer: t('achievements_data.4.issuer'),
    description: t('achievements_data.4.description')
  },
  {
    title: t('achievements_data.5.title'),
    issuer: t('achievements_data.5.issuer'),
    description: t('achievements_data.5.description')
  },
  {
    title: t('achievements_data.6.title'),
    issuer: t('achievements_data.6.issuer'),
    description: t('achievements_data.6.description')
  },
  {
    title: t('achievements_data.7.title'),
    issuer: t('achievements_data.7.issuer'),
    description: t('achievements_data.7.description')
  }
];

// Sustainability Goals data
const sustainabilityGoals = [
  {
    title: t('sustainability_goals_data.0.title'),
    description: t('sustainability_goals_data.0.description')
  },
  {
    title: t('sustainability_goals_data.1.title'),
    description: t('sustainability_goals_data.1.description')
  },
  {
    title: t('sustainability_goals_data.2.title'),
    description: t('sustainability_goals_data.2.description')
  },
  {
    title: t('sustainability_goals_data.3.title'),
    description: t('sustainability_goals_data.3.description')
  }
];

  return (
    <SustainabilityClient>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-primary/80 text-secondary text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto px-8 relative z-10">
            <h1 className="text-5xl md:text-6xl font-light mb-4 fade-in">{t('hero.h1')}</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8 fade-in">
              {t('hero.p')}
            </p>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center fade-in">
                <div className="text-3xl font-bold mb-1 text-yellow-400">5,000+</div>
                <div className="text-sm opacity-80">{t('hero.p2')}</div>
              </div>
              <div className="text-center fade-in">
                <div className="text-3xl font-bold mb-1 text-yellow-400">100%</div>
                <div className="text-sm opacity-80">{t('hero.p3')}</div>
              </div>
              <div className="text-center fade-in">
                <div className="text-3xl font-bold mb-1 text-yellow-400">{t('hero.carbon')}</div>
                <div className="text-sm opacity-80">{t('hero.p4')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Hearts Philosophy */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-center text-4xl font-light mb-4 fade-in text-primary">
              {t('philosophy.h2')}
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-lg fade-in text-gray-600">
              {t('philosophy.p')}
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
              {t('esg_highlights.h2')}
            </h2>
            <p className="text-center max-w-4xl mx-auto mb-12 fade-in text-gray-600">
              {t('esg_highlights.p')}
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
              {t('achievements.h2')}
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-lg fade-in text-gray-600">
              {t('achievements.p')}
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
              {t('sustainability_goals.h2')}
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600 text-lg  opacity-90 fade-in">
              {t('sustainability_goals.p')}
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
              {t('esg_report.h2')}
            </h2>
            <div className="bg-white max-w-2xl mx-auto p-12 rounded-2xl shadow-lg fade-in">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                {t('esg_report.h3')}
              </h3>
              <p className="mb-8 text-gray-600 leading-relaxed">
                {t('esg_report.p')}
              </p>
              <a
                href="#"
                className="inline-block px-10 py-4 text-secondary text-lg font-medium rounded-lg hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 bg-primary no-underline"
              >
                {t('esg_report.download_full_report')}
              </a>
            </div>
          </div>
        </section>
      </main>
    </SustainabilityClient>
  );
} 