import { Helmet } from "react-helmet-async";
import { SEOConfig, targetRegions } from "@/lib/seo";

interface SEOHeadProps {
  config: SEOConfig;
  structuredData?: any[];
}

const SEOHead = ({ config, structuredData = [] }: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Enhanced Title & Meta Tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      {config.keywords && <meta name="keywords" content={config.keywords} />}
      {config.author && <meta name="author" content={config.author} />}

      {/* Агрессивные мета-теги для региональной автоэкспертизы */}
      <meta name="industry" content="Emergency Auto Commissioner Services" />
      <meta
        name="service-type"
        content="Аварийный Комиссар, Независимая Автоэкспертиза"
      />
      <meta
        name="main-service"
        content="вызвать аварийного комиссара круглосуточно"
      />
      <meta
        name="target-regions"
        content={targetRegions.map((r) => r.name).join(", ")}
      />
      <meta
        name="regional-keywords"
        content={targetRegions
          .map(
            (r) =>
              `аварийный комиссар ${r.name}, комиссар ДТП ${r.name}, автоэкспертиза ${r.name}`,
          )
          .join(", ")}
      />

      {/* Детальные региональные мета-теги */}
      <meta
        name="voronezh-service"
        content="вызвать аварийного комиссара Воронеж, независимая экспертиза Воронеж"
      />
      <meta
        name="lipetsk-service"
        content="аварийный комиссар Липецк срочно, автоэкспертиза Липецк"
      />
      <meta
        name="kursk-service"
        content="комиссар при ДТП Курск, оценка ущерба Курск"
      />
      <meta
        name="bryansk-service"
        content="вызов комиссара Брянск 24/7, экспертиза авто Брянск"
      />
      <meta
        name="rostov-service"
        content="аварийный комиссар Ростов-на-Дону, независимая экспертиза Ростов"
      />
      <meta
        name="krasnodar-service"
        content="комиссар ДТП Краснодар круглосуточно, автоэкспертиза Краснодар"
      />
      <meta
        name="saratov-service"
        content="вызвать комиссара Саратов, оценка ущерба Саратов"
      />

      {/* Защита от скликивания */}
      <meta name="anti-click-fraud" content="protected" />
      <meta name="click-protection" content="active" />
      <meta name="bot-protection" content="enabled" />
      <meta name="suspicious-traffic-filter" content="on" />
      <meta name="quality-traffic-only" content="yes" />

      {/* Основные характеристики услуг */}
      <meta name="emergency-phone" content="+7 (951) 853-82-42" />
      <meta name="response-time" content="15-30 минут в любом регионе" />
      <meta name="availability" content="круглосуточно без выходных" />
      <meta
        name="service-guarantee"
        content="профессиональное оформление ДТП"
      />
      <meta
        name="expertise-type"
        content="независимая автоэкспертиза, судебная экспертиза"
      />
      <meta
        name="insurance-work"
        content="ОСАГО, КАСКО, максимальные выплаты"
      />

      {/* Дополнительные SEO теги */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="content-language" content="ru" />
      <meta
        name="subject"
        content="Аварийный комиссар, автоэкспертиза, помощь при ДТП"
      />
      <meta name="copyright" content="Центр Независимой Автоэкспертизы" />
      <meta
        name="abstract"
        content="Круглосуточная служба аварийного комиссара в регионах РФ"
      />
      <meta
        name="topic"
        content="Автомобильные услуги, помощь водителям, экспертиза"
      />
      <meta
        name="summary"
        content="Экстренная помощь при ДТП 24/7 в ключевых регионах России"
      />
      <meta name="classification" content="Emergency Automotive Services" />
      <meta name="reply-to" content="info@auto-expertise.ru" />
      <meta name="owner" content="Центр Независимой Автоэкспертизы" />
      <meta name="url" content={config.url} />
      <meta name="identifier-URL" content={config.url} />
      <meta name="category" content="Emergency Services, Auto Expertise" />

      {/* Региональные бизнес-теги */}
      {targetRegions.map((region, index) => (
        <div key={index}>
          <meta
            name={`business:${region.code}:contact_phone`}
            content="+7 (951) 853-82-42"
          />
          <meta
            name={`business:${region.code}:locality`}
            content={region.name}
          />
          <meta
            name={`business:${region.code}:service`}
            content="аварийный комиссар, автоэкспертиза"
          />
          <meta
            name={`business:${region.code}:hours`}
            content="круглосуточно"
          />
          <meta name={`geo:${region.code}:position`} content={region.coords} />
        </div>
      ))}

      {/* Canonical URL */}
      {config.url && <link rel="canonical" href={config.url} />}

      {/* Language alternates */}
      {config.alternateLanguages?.map((lang, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={lang.hreflang}
          href={lang.href}
        />
      ))}

      {/* Enhanced Open Graph для региональных услуг */}
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:type" content={config.type || "website"} />
      {config.url && <meta property="og:url" content={config.url} />}
      {config.image && (
        <>
          <meta property="og:image" content={config.image} />
          <meta property="og:image:secure_url" content={config.image} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta
            property="og:image:alt"
            content="Вызвать Аварийного Комиссара - Круглосуточная помощь при ДТП"
          />
        </>
      )}
      <meta property="og:locale" content="ru_RU" />
      <meta
        property="og:site_name"
        content="Центр Независимой Автоэкспертизы"
      />
      <meta property="og:phone_number" content="+7 (951) 853-82-42" />
      <meta property="og:email" content="info@auto-expertise.ru" />
      <meta property="og:country-name" content="Россия" />
      <meta
        property="og:region"
        content={targetRegions.map((r) => r.name).join(", ")}
      />

      {/* Business Open Graph для каждого региона */}
      {targetRegions.map((region, index) => (
        <div key={index}>
          <meta
            property={`business:region:${region.code}:name`}
            content={region.name}
          />
          <meta
            property={`business:region:${region.code}:service`}
            content="аварийный комиссар"
          />
          <meta
            property={`business:region:${region.code}:phone`}
            content="+7 (951) 853-82-42"
          />
        </div>
      ))}

      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:site" content="@auto_expertise" />
      <meta name="twitter:creator" content="@emergency_commissioner" />
      {config.image && (
        <>
          <meta name="twitter:image" content={config.image} />
          <meta
            name="twitter:image:alt"
            content="Вызвать Аварийного Комиссара круглосуточно"
          />
        </>
      )}

      {/* Агрессивные роботс-теги для максимальной индексации */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, noimageindex:false"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="bingbot" content="index, follow, noimageindex:false" />
      <meta name="yandex" content="index, follow, noyaca" />
      <meta name="slurp" content="index, follow" />
      <meta name="msnbot" content="index, follow" />

      {/* Региональная геолокация */}
      {targetRegions.map((region, index) => (
        <div key={index}>
          <meta name={`geo.region.${region.code}`} content={region.name} />
          <meta name={`geo.position.${region.code}`} content={region.coords} />
          <meta name={`ICBM.${region.code}`} content={region.coords} />
        </div>
      ))}

      {/* Dublin Core для каждого региона */}
      <meta name="DC.title" content={config.title} />
      <meta
        name="DC.subject"
        content="аварийный комиссар, автоэкспертиза, независимая экспертиза"
      />
      <meta
        name="DC.coverage"
        content={targetRegions.map((r) => r.name).join(", ")}
      />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="ru" />

      {/* Mobile optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Performance hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />

      {/* Региональные теги для автомобильных агрегаторов */}
      <meta name="auto-service" content="emergency-commissioner" />
      <meta
        name="auto-category"
        content="комиссар,экспертиза,ДТП,страхование"
      />
      <meta
        name="auto-regions"
        content={targetRegions.map((r) => r.name.toLowerCase()).join(",")}
      />
      <meta name="auto-availability" content="круглосуточно" />
      <meta name="commissioner-service" content="professional" />
      <meta
        name="expertise-standards"
        content="независимая,судебная,трасологическая"
      />

      {/* Article specific */}
      {config.publishedTime && (
        <meta
          property="article:published_time"
          content={config.publishedTime}
        />
      )}
      {config.modifiedTime && (
        <meta property="article:modified_time" content={config.modifiedTime} />
      )}
      {config.author && (
        <meta property="article:author" content={config.author} />
      )}

      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
