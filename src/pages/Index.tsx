import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Services from "@/components/Services";
import ReviewsForm from "@/components/ReviewsForm";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generatePageSEO, generateStructuredData } from "@/lib/seo";

const Index = () => {
  const seoConfig = generatePageSEO("home");
  const structuredData = [
    generateStructuredData("LocalBusiness", {
      url: "https://emergency-service-portal.poehali.dev",
      sameAs: ["https://t.me/emergency_help_dtp", "https://wa.me/79518538242"],
    }),
    generateStructuredData("Organization", {}),
    generateStructuredData("WebSite", {}),
    generateStructuredData("Service", {
      name: "Помощь при ДТП 24/7",
      description:
        "Круглосуточная экстренная помощь водителям при дорожно-транспортных происшествиях в Москве и области",
    }),
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
