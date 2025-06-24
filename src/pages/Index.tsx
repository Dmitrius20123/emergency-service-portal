import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ReviewsForm from "@/components/ReviewsForm";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import {
  generatePageSEO,
  generateStructuredData,
  generateFAQStructuredData,
  generateEmergencyServiceData,
} from "@/lib/seo";

const Index = () => {
  const seoConfig = generatePageSEO("home");
  const structuredData = [
    generateStructuredData("LocalBusiness", {
      name: "Центр Независимой Автоэкспертизы",
      description:
        "Независимая автоэкспертиза и оценка ущерба после ДТП в Москве и МО. Судебная автоэкспертиза. Аварийные комиссары 24/7.",
      url: "https://emergency-service-portal.poehali.dev",
      sameAs: ["https://t.me/emergency_help_dtp", "https://wa.me/79518538242"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги автоэкспертизы",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Независимая автоэкспертиза после ДТП",
              description:
                "Профессиональная оценка ущерба автомобиля после ДТП для получения максимальных выплат",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Судебная автоэкспертиза",
              description:
                "Экспертиза для судебных разбирательств и рецензирование заключений",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Аварийный комиссар",
              description:
                "Экстренный выезд специалиста для оформления ДТП и защиты ваших интересов",
            },
          },
        ],
      },
    }),
    generateStructuredData("Organization", {
      name: "Центр Независимой Автоэкспертизы",
      legalName: "ООО Центр Независимой Автоэкспертизы",
      description: "Ведущий центр независимой автоэкспертизы в Москве и МО",
    }),
    generateStructuredData("WebSite", {}),
    generateStructuredData("Service", {
      name: "Независимая Автоэкспертиза 24/7",
      description:
        "Профессиональная независимая автоэкспертиза и оценка ущерба после ДТП в Москве и Московской области",
      serviceType: "Automotive Expertise",
      category: "Independent Auto Assessment",
    }),
    generateFAQStructuredData(),
    generateEmergencyServiceData(),
  ];

  return (
    <>
      <SEOHead config={seoConfig} structuredData={structuredData} />
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main role="main">
          <Services />
          <ReviewsForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
