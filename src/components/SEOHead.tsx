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

      {/* Расширенные мета-теги для автоэкспертизы */}
      <meta name="industry" content="Independent Auto Expertise" />
      <meta
        name="service-type"
        content="Car Damage Assessment, Auto Expertise"
      />
      <meta
        name="expertise-type"
        content="независимая автоэкспертиза,судебная экспертиза,трасологическая экспертиза"
      />
      <meta
        name="assessment-types"
        content="ОСАГО,КАСКО,РСА,досудебная,судебная"
      />
      <meta
        name="coverage-area"
        content="Москва,Московская область,Подольск,Мытищи,Балашиха,Люберцы,Химки,Королёв"
      />
      <meta name="emergency-phone" content="+7 (951) 853-82-42" />
      <meta name="response-time" content="15-30 минут в пределах МКАД" />
      <meta name="availability" content="круглосуточно без выходных" />
      <meta name="license" content="Лицензированные автоэксперты и оценщики" />
      <meta
        name="insurance"
        content="Работаем со всеми страховыми компаниями"
      />
      <meta
        name="expertise"
        content="Независимые автоэксперты, судебные эксперты"
      />
      <meta
        name="equipment"
        content="Профессиональное оборудование для экспертизы"
      />
      <meta
        name="partnership"
        content="Реестр экспертов РСА, аккредитованные оценщики"
      />
      <meta name="payment" content="Наличные, карта, рассрочка, работа с ДМС" />
      <meta name="languages" content="Русский, английский" />
      <meta name="expert-count" content="15+ сертифицированных экспертов" />
      <meta name="experience" content="12+ лет в автоэкспертизе" />
      <meta name="certification" content="РСА,Минюст,СМАО,ТПП" />

      {/* Специализированные теги для автоэкспертизы */}
      <meta name="auto-expertise" content="true" />
      <meta
        name="expertise-category"
        content="независимая,судебная,досудебная,рецензия"
      />
      <meta name="damage-types" content="ДТП,угон,пожар,стихия,вандализм" />
      <meta
        name="vehicle-types"
        content="легковые,грузовые,мотоциклы,автобусы,спецтехника"
      />
      <meta name="insurance-work" content="ОСАГО,КАСКО,ДСАГО,Зеленая карта" />
      <meta
        name="court-expertise"
        content="гражданские дела,уголовные дела,административные"
      />
      <meta name="rsa-registry" content="включены в реестр РСА" />
      <meta name="assessment-method" content="единая методика РСА" />
      <meta
        name="report-types"
        content="заключение эксперта,отчет оценщика,рецензия"
      />

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
      <meta name="reply-to" content="info@auto-expertise.ru" />
      <meta name="owner" content="Центр Независимой Автоэкспертизы" />
      <meta name="url" content={config.url} />
      <meta name="identifier-URL" content={config.url} />
      <meta name="directory" content="submission" />
      <meta name="category" content="Emergency Services, Automotive" />
      <meta name="coverage" content="Worldwide" />

      {/* Business specific tags */}
      <meta
        name="business:contact_data:street_address"
        content="Москва, все районы"
      />
      <meta name="business:contact_data:locality" content="Москва" />
      <meta name="business:contact_data:region" content="Московская область" />
      <meta name="business:contact_data:postal_code" content="101000" />
      <meta
        name="business:contact_data:country_name"
        content="Российская Федерация"
      />
      <meta
        name="business:contact_data:phone_number"
        content="+7 (951) 853-82-42"
      />
      <meta name="business:hours" content="Пн-Вс 00:00-23:59" />
      <meta
        name="business:service_types"
        content="автоэкспертиза,оценка ущерба,судебная экспертиза"
      />
      <meta name="business:price_range" content="от 3000 рублей" />
      <meta
        name="business:payment_methods"
        content="наличные,карта,безналичный расчет"
      />

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
      <meta
        property="og:site_name"
        content="Центр Независимой Автоэкспертизы"
      />
      <meta property="og:phone_number" content="+7 (951) 853-82-42" />
      <meta property="og:email" content="info@auto-expertise.ru" />
      <meta property="og:country-name" content="Россия" />
      <meta property="og:region" content="Москва и Московская область" />
      <meta property="og:street-address" content="Выезд по всей Москве и МО" />
      <meta property="og:postal-code" content="все индексы Москвы и МО" />
      <meta property="og:locality" content="Москва" />

      {/* Дополнительные Open Graph для автоэкспертизы */}
      <meta property="og:business:type" content="Automotive Services" />
      <meta property="og:business:hours" content="24/7" />
      <meta property="og:business:price_range" content="от 3000₽" />

      {/* Business Open Graph */}
      <meta
        property="business:contact_data:street_address"
        content="Москва, все районы"
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
      <meta name="geo.placename" content="Москва и Московская область" />
      <meta name="geo.position" content="55.7558;37.6176" />
      <meta name="ICBM" content="55.7558, 37.6176" />
      <meta name="DC.title" content={config.title} />
      <meta
        name="DC.subject"
        content="автоэкспертиза,оценка ущерба,независимая экспертиза"
      />
      <meta name="DC.coverage" content="Москва, Московская область" />

      {/* Дополнительные региональные теги */}
      <meta name="location" content="Moscow, Moscow Region, Russia" />
      <meta
        name="service-regions"
        content="Москва,Подольск,Мытищи,Балашиха,Люберцы,Химки,Королёв,Одинцово,Домодедово"
      />
      <meta name="metro-stations" content="все станции метро Москвы" />
      <meta
        name="districts"
        content="ЦАО,САО,СВАО,ВАО,ЮВАО,ЮАО,ЮЗАО,ЗАО,СЗАО"
      />

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

      {/* Теги для автомобильных и страховых агрегаторов */}
      <meta name="auto-service" content="independent-auto-expertise" />
      <meta name="auto-category" content="экспертиза,оценка,страхование,ДТП" />
      <meta name="auto-location" content="москва,московская-область" />
      <meta name="auto-availability" content="круглосуточно" />
      <meta name="insurance-companies" content="все страховые компании РФ" />
      <meta name="expertise-standards" content="РСА,Минюст,СМАО" />

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
