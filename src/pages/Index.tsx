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
  targetRegions,
} from "@/lib/seo";

const Index = () => {
  const seoConfig = generatePageSEO("home");
  const structuredData = [
    generateStructuredData("LocalBusiness", {
      name: "Единый Центр Помощи после ДТП",
      description:
        "Круглосуточная служба аварийного комиссара и независимой автоэкспертизы в регионах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Профессиональное оформление ДТП, максимальные страховые выплаты.",
      url: "https://emergency-service-portal.poehali.dev",
      sameAs: ["https://t.me/emergency_help_dtp", "https://wa.me/79518538242"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги аварийного комиссара и автоэкспертизы",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Вызов аварийного комиссара при ДТП",
              description:
                "Экстренный выезд специалиста для профессионального оформления документов при ДТП и защиты ваших интересов",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Независимая автоэкспертиза после ДТП",
              description:
                "Профессиональная оценка ущерба автомобиля для получения максимальных страховых выплат по ОСАГО и КАСКО",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Судебная автоэкспертиза",
              description:
                "Экспертиза для судебных разбирательств, рецензирование заключений, трасологическая экспертиза",
            },
          },
        ],
      },
    }),
    generateStructuredData("Organization", {
      name: "Единый Центр Помощи после ДТП",
      legalName: "ООО Центр Независимой Автоэкспертизы",
      description: `Ведущий центр независимой автоэкспертизы и аварийных комиссаров в городах: ${targetRegions.map((r) => r.name).join(", ")}`,
    }),
    generateStructuredData("WebSite", {}),
    generateStructuredData("Service", {
      name: "Аварийный Комиссар и Независимая Автоэкспертиза 24/7",
      description: `Профессиональная служба аварийного комиссара и независимой автоэкспертизы в городах: ${targetRegions.map((r) => r.name).join(", ")}. Круглосуточное оформление ДТП, оценка ущерба, максимальные страховые выплаты`,
      serviceType: "Emergency Auto Commissioner",
      category: "Independent Auto Assessment & Emergency Service",
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
