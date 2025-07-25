import { Helmet } from "react-helmet-async";
import { SEOConfig } from "@/lib/seo";

interface SEOHeadProps {
  config: SEOConfig;
  structuredData?: any[];
}

const SEOHead = ({ config, structuredData = [] }: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Базовые мета-теги */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords} />
      <link rel="canonical" href={config.url} />

      {/* Favicon */}
      <link
        rel="icon"
        type="image/x-icon"
        href="https://cdn.poehali.dev/files/cf5c364f-86a9-488e-a2ac-864ad096f07d.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://cdn.poehali.dev/files/cf5c364f-86a9-488e-a2ac-864ad096f07d.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://cdn.poehali.dev/files/cf5c364f-86a9-488e-a2ac-864ad096f07d.jpg"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://cdn.poehali.dev/files/cf5c364f-86a9-488e-a2ac-864ad096f07d.jpg"
      />
      <link
        rel="mask-icon"
        href="https://cdn.poehali.dev/files/cf5c364f-86a9-488e-a2ac-864ad096f07d.jpg"
        color="#D4AF37"
      />
      <meta name="theme-color" content="#D4AF37" />

      {/* Open Graph */}
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content={config.image} />
      <meta property="og:url" content={config.url} />
      <meta property="og:type" content={config.type || "website"} />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Единый Центр Помощи после ДТП" />
      <meta
        property="og:logo"
        content="https://cdn.poehali.dev/files/cf5c364f-86a9-488e-a2ac-864ad096f07d.jpg"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={config.image} />
      <meta
        name="twitter:logo"
        content="https://cdn.poehali.dev/files/cf5c364f-86a9-488e-a2ac-864ad096f07d.jpg"
      />

      {/* Критические SEO элементы */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="yandex" content="index, follow" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="RU-VOR" />
      <meta
        name="geo.placename"
        content="Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов"
      />
      <meta name="geo.position" content="51.661535;39.200287" />
      <meta name="ICBM" content="51.661535, 39.200287" />

      {/* Языковые альтернативы */}
      <link rel="alternate" hrefLang="ru" href={config.url} />
      <link rel="alternate" hrefLang="x-default" href={config.url} />

      {/* Структурированные данные */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      {/* Дополнительная региональная оптимизация */}
      <meta name="author" content="Центр Независимой Автоэкспертизы" />
      <meta name="publisher" content="Единый Центр Помощи после ДТП" />
      <meta
        name="coverage"
        content="Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов"
      />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />

      {/* Яндекс верификация */}
      <meta
        name="yandex-verification"
        content="emergency-service-verification"
      />
      <meta
        name="google-site-verification"
        content="DNwsQo5vy44vAqzV-y5LpXPAJL99PCZpbzC8VrJKD6c"
      />

      {/* Дополнительные теги для местного SEO */}
      <meta name="locality" content="RU" />
      <meta
        name="region"
        content="Центральный федеральный округ, Южный федеральный округ, Приволжский федеральный округ"
      />
      <meta
        name="placename"
        content="Воронежская область, Липецкая область, Курская область, Брянская область, Ростовская область, Краснодарский край, Саратовская область"
      />
    </Helmet>
  );
};

export default SEOHead;
