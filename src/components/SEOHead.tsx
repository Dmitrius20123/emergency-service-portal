import { Helmet } from "react-helmet-async";
import { SEOConfig } from "@/lib/seo";

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

      {/* Расширенные мета-теги для автомобильных услуг */}
      <meta name="industry" content="Automotive Services" />
      <meta name="service-type" content="Emergency Road Assistance" />
      <meta name="coverage-area" content="Moscow, Moscow Region" />
      <meta name="emergency-phone" content="+7 (951) 853-82-42" />
      <meta name="response-time" content="15-30 minutes" />
      <meta name="availability" content="24/7" />
      <meta name="license" content="Licensed Emergency Service Provider" />
      <meta name="insurance" content="Fully Insured Operations" />
      <meta name="expertise" content="Traffic Accident Specialists" />
      <meta name="equipment" content="Professional Tow Trucks, Mobile Office" />
      <meta name="partnership" content="GIBDD Authorized Service" />
      <meta name="payment" content="Cash, Card, Insurance Direct Payment" />
      <meta name="languages" content="Russian, English" />
      <meta name="fleet-size" content="15+ Emergency Vehicles" />
      <meta name="experience" content="10+ Years in Emergency Services" />

      {/* Специализированные теги для экстренных служб */}
      <meta name="emergency-service" content="true" />
      <meta name="emergency-type" content="road-assistance" />
      <meta name="service-category" content="automotive,emergency,insurance" />
      <meta
        name="target-audience"
        content="drivers,car-owners,fleet-managers"
      />
      <meta name="service-quality" content="premium" />
      <meta name="certification" content="GIBDD-approved,insurance-licensed" />
      <meta name="mobile-service" content="yes" />
      <meta name="emergency-response" content="immediate" />

      {/* Additional SEO Meta Tags */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="content-language" content="ru" />
      <meta name="subject" content="Помощь при ДТП, эвакуатор, автоюрист" />
      <meta name="copyright" content="Единый Центр Помощи после ДТП" />
      <meta
        name="abstract"
        content="Круглосуточная служба помощи при ДТП в Москве"
      />
      <meta name="topic" content="Автомобильные услуги, помощь водителям" />
      <meta
        name="summary"
        content="Экстренная помощь при ДТП 24/7 в Москве и области"
      />
      <meta name="classification" content="Automotive Services" />
      <meta name="designer" content="Единый Центр Помощи после ДТП" />
      <meta name="reply-to" content="info@emergency-help.ru" />
      <meta name="owner" content="Единый Центр Помощи после ДТП" />
      <meta name="url" content={config.url} />
      <meta name="identifier-URL" content={config.url} />
      <meta name="directory" content="submission" />
      <meta name="category" content="Emergency Services, Automotive" />
      <meta name="coverage" content="Worldwide" />

      {/* Business specific tags */}
      <meta name="business:contact_data:street_address" content="Москва, ЦАО" />
      <meta name="business:contact_data:locality" content="Москва" />
      <meta name="business:contact_data:region" content="Московская область" />
      <meta name="business:contact_data:postal_code" content="101000" />
      <meta name="business:contact_data:country_name" content="Россия" />
      <meta
        name="business:contact_data:phone_number"
        content="+7 (951) 853-82-42"
      />
      <meta name="business:hours" content="Mo-Su 00:00-23:59" />

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

      {/* Enhanced Open Graph */}
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
            content="Единый Центр Помощи после ДТП - Круглосуточная служба экстренного реагирования"
          />
        </>
      )}
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="Единый Центр Помощи после ДТП" />
      <meta property="og:phone_number" content="+7 (951) 853-82-42" />
      <meta property="og:email" content="info@emergency-help.ru" />
      <meta property="og:country-name" content="Russia" />
      <meta property="og:region" content="Moscow" />

      {/* Business Open Graph */}
      <meta
        property="business:contact_data:street_address"
        content="Москва, ЦАО"
      />
      <meta property="business:contact_data:locality" content="Москва" />
      <meta
        property="business:contact_data:phone_number"
        content="+7 (951) 853-82-42"
      />
      <meta property="business:contact_data:website" content={config.url} />

      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:site" content="@emergency_dtp" />
      <meta name="twitter:creator" content="@emergency_dtp" />
      {config.image && (
        <>
          <meta name="twitter:image" content={config.image} />
          <meta name="twitter:image:src" content={config.image} />
          <meta
            name="twitter:image:alt"
            content="Единый Центр Помощи после ДТП"
          />
        </>
      )}
      <meta
        name="twitter:domain"
        content="emergency-service-portal.poehali.dev"
      />

      {/* Enhanced Meta Tags for SEO */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="bingbot" content="index, follow" />
      <meta name="yandex" content="index, follow" />
      <meta name="slurp" content="index, follow" />
      <meta name="msnbot" content="index, follow" />

      {/* Local SEO */}
      <meta name="geo.region" content="RU-MOW" />
      <meta name="geo.placename" content="Москва" />
      <meta name="geo.position" content="55.7558;37.6176" />
      <meta name="ICBM" content="55.7558, 37.6176" />
      <meta name="DC.title" content={config.title} />

      {/* Additional local SEO */}
      <meta name="location" content="Moscow, Russia" />
      <meta name="zipcode" content="101000" />
      <meta name="city" content="Moscow" />
      <meta name="state" content="Moscow Region" />
      <meta name="country" content="Russia" />

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

      {/* Verification tags (add your own) */}
      <meta
        name="google-site-verification"
        content="your-google-verification-code"
      />
      <meta
        name="yandex-verification"
        content="your-yandex-verification-code"
      />
      <meta name="mail-verification" content="your-mail-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />

      {/* Дополнительные теги для российских поисковиков */}
      <meta name="rambler-verification" content="your-rambler-code" />
      <meta name="sputnik-verification" content="your-sputnik-code" />

      {/* Теги для автомобильных агрегаторов */}
      <meta name="auto-service" content="emergency-road-assistance" />
      <meta name="auto-category" content="emergency,towing,insurance" />
      <meta name="auto-location" content="moscow,moscow-region" />
      <meta name="auto-availability" content="24-7" />

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
