import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generatePageSEO } from "@/lib/seo";

const Privacy = () => {
  const seoConfig = generatePageSEO("privacy");

  return (
    <>
      <SEOHead config={seoConfig} />
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main role="main" className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">
              Политика конфиденциальности
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300">
                Информация о политике конфиденциальности будет добавлена
                позднее.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
