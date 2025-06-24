export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  alternateLanguages?: { hreflang: string; href: string }[];
  breadcrumbs?: { name: string; url: string }[];
}

// Целевые регионы работы
export const targetRegions = [
  { name: "Воронеж", code: "vrn", coords: "51.661535,39.200287" },
  { name: "Липецк", code: "lpk", coords: "52.603075,39.571812" },
  { name: "Курск", code: "krs", coords: "51.730361,36.192647" },
  { name: "Брянск", code: "brn", coords: "53.243325,34.363407" },
  { name: "Ростов-на-Дону", code: "rnd", coords: "47.222531,39.718705" },
  { name: "Краснодар", code: "krd", coords: "45.035470,38.975313" },
  { name: "Саратов", code: "sar", coords: "51.533103,46.034158" },
];

// Агрессивные ключевые слова для каждого региона
const generateRegionalKeywords = (region: string) => {
  return `вызвать аварийного комиссара ${region}, аварийный комиссар ${region} срочно, комиссар при ДТП ${region} круглосуточно, помощь при аварии ${region}, оформление ДТП ${region}, независимая автоэкспертиза ${region}, оценка ущерба авто ${region}, страховой комиссар ${region}, экстренная помощь ДТП ${region}, вызов комиссара ${region} 24/7, автокомиссар ${region}, ДТП комиссар ${region}, срочный комиссар ${region}, помощь водителям ${region}, автоэкспертиза ${region}, судебная экспертиза авто ${region}`;
};

export const defaultSEO: SEOConfig = {
  title:
    "Вызвать Аварийного Комиссара 24/7 | Независимая Автоэкспертиза | Оценка Ущерба после ДТП | +7 (951) 853-82-42",
  description:
    "⚡ СРОЧНО вызвать аварийного комиссара! Работаем в Воронеже, Липецке, Курске, Брянске, Ростове-на-Дону, Краснодаре, Саратове. Независимая автоэкспертиза, максимальные выплаты ОСАГО/КАСКО. Приезжаем за 15 минут! ☎️ +7 (951) 853-82-42",
  keywords: `${targetRegions.map((r) => generateRegionalKeywords(r.name)).join(", ")}, вызвать аварийного комиссара срочно, независимая автоэкспертиза, оценка ущерба автомобиля, судебная экспертиза авто, страховые выплаты ОСАГО КАСКО, помощь при ДТП круглосуточно`,
  image:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&q=80",
  url: "https://emergency-service-portal.poehali.dev",
  type: "website",
  author: "Центр Независимой Автоэкспертизы",
  alternateLanguages: [
    { hreflang: "ru", href: "https://emergency-service-portal.poehali.dev" },
    {
      hreflang: "x-default",
      href: "https://emergency-service-portal.poehali.dev",
    },
  ],
};

export const generateStructuredData = (
  type:
    | "LocalBusiness"
    | "Service"
    | "Review"
    | "Organization"
    | "FAQPage"
    | "BreadcrumbList"
    | "WebSite",
  data: any,
) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  };

  switch (type) {
    case "LocalBusiness":
      return {
        ...baseData,
        name: "Центр Независимой Автоэкспертизы",
        alternateName: [
          "Аварийный Комиссар",
          "Независимая Экспертиза",
          "Автоэкспертиза",
        ],
        description:
          "Круглосуточная služba экстренной помощи при ДТП. Вызов аварийного комиссара, независимая автоэкспертиза, максимальные страховые выплаты",
        url: "https://emergency-service-portal.poehali.dev",
        telephone: "+7 (951) 853-82-42",
        email: "info@auto-expertise.ru",
        address: targetRegions.map((region) => ({
          "@type": "PostalAddress",
          addressCountry: "RU",
          addressRegion: `${region.name} область`,
          addressLocality: region.name,
          streetAddress: `Круглосуточная служба по городу ${region.name}`,
        })),
        geo: targetRegions.map((region) => ({
          "@type": "GeoCoordinates",
          latitude: region.coords.split(",")[0],
          longitude: region.coords.split(",")[1],
        })),
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        priceRange: "Доступные цены",
        serviceArea: targetRegions.map((region) => ({
          "@type": "City",
          name: region.name,
          containedInPlace: {
            "@type": "Country",
            name: "Россия",
          },
        })),
        areaServed: targetRegions.map((r) => r.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги аварийного комиссара",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Вызов аварийного комиссара при ДТП",
                description:
                  "Экстренный выезд специалиста для оформления документов и защиты интересов",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Независимая автоэкспертиза",
                description:
                  "Профессиональная оценка ущерба для максимальных страховых выплат",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2847",
          bestRating: "5",
        },
        ...data,
      };

    case "Organization":
      return {
        ...baseData,
        name: "Центр Независимой Автоэкспертизы",
        url: "https://emergency-service-portal.poehali.dev",
        logo: "https://cdn.poehali.dev/files/2baca7d5-4fc1-4cc9-a032-1fbef5bf2b93.jpg",
        contactPoint: targetRegions.map((region) => ({
          "@type": "ContactPoint",
          telephone: "+7 (951) 853-82-42",
          contactType: "emergency",
          areaServed: region.name,
          availableLanguage: "Russian",
          hoursAvailable: "24/7",
          serviceArea: region.name,
        })),
        sameAs: [
          "https://t.me/emergency_help_dtp",
          "https://wa.me/79518538242",
        ],
        ...data,
      };

    case "WebSite":
      return {
        ...baseData,
        name: "Вызвать Аварийного Комиссара",
        url: "https://emergency-service-portal.poehali.dev",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://emergency-service-portal.poehali.dev/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        about: targetRegions.map((region) => ({
          "@type": "Thing",
          name: `Аварийный комиссар ${region.name}`,
          description: `Круглосуточная помощь при ДТП в городе ${region.name}`,
        })),
        ...data,
      };

    case "Service":
      return {
        ...baseData,
        name: data.name,
        description: data.description,
        provider: {
          "@type": "Organization",
          name: "Центр Независимой Автоэкспертизы",
          telephone: "+7 (951) 853-82-42",
        },
        areaServed: targetRegions.map((region) => ({
          "@type": "City",
          name: region.name,
        })),
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: "+7 (951) 853-82-42",
          serviceUrl: "https://emergency-service-portal.poehali.dev",
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        ...data,
      };

    case "FAQPage":
      return {
        ...baseData,
        mainEntity: data.questions || [],
        ...data,
      };

    case "BreadcrumbList":
      return {
        ...baseData,
        itemListElement: data.items || [],
        ...data,
      };

    case "Review":
      return {
        ...baseData,
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Центр Независимой Автоэкспертизы",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: data.rating,
          bestRating: 5,
        },
        author: {
          "@type": "Person",
          name: data.author,
        },
        reviewBody: data.text,
        datePublished: data.date,
        ...data,
      };

    default:
      return baseData;
  }
};

export const getCanonicalUrl = (path: string = "") => {
  return `${defaultSEO.url}${path}`;
};

export const generatePageSEO = (
  page: string,
  customData?: Partial<SEOConfig>,
): SEOConfig => {
  const pageConfigs = {
    home: {
      title:
        "Вызвать Аварийного Комиссара 24/7 | Воронеж, Липецк, Курск, Брянск, Ростов, Краснодар, Саратов | +7 (951) 853-82-42",
      description:
        "⚡ СРОЧНО вызвать аварийного комиссара! Работаем круглосуточно в Воронеже, Липецке, Курске, Брянске, Ростове-на-Дону, Краснодаре, Саратове. Независимая автоэкспертиза, максимальные выплаты. Приезжаем за 15 минут! ☎️ +7 (951) 853-82-42",
      keywords: `${targetRegions.map((r) => `вызвать аварийного комиссара ${r.name}, комиссар ДТП ${r.name}`).join(", ")}, независимая автоэкспертиза, оценка ущерба авто, страховые выплаты ОСАГО КАСКО`,
      url: getCanonicalUrl("/"),
    },
    reviews: {
      title:
        "Отзывы о Работе Аварийного Комиссара - Воронеж, Липецк, Курск, Брянск, Ростов, Краснодар, Саратов",
      description:
        "📝 Читайте реальные отзывы клиентов о работе аварийного комиссара и независимой автоэкспертизе в Воронеже, Липецке, Курске, Брянске, Ростове-на-Дону, Краснодаре, Саратове. 2500+ довольных клиентов!",
      keywords: `${targetRegions.map((r) => `отзывы аварийный комиссар ${r.name}`).join(", ")}, отзывы автоэкспертиза, реальные отзывы комиссар ДТП`,
      url: getCanonicalUrl("/reviews"),
    },
    expertise: {
      title:
        "Независимая Автоэкспертиза | Оценка Ущерба после ДТП | Судебная Экспертиза Авто",
      description:
        "🔍 Профессиональная независимая автоэкспертиза в регионах: оценка ущерба после ДТП, судебная экспертиза, трасологическая экспертиза. Лицензированные эксперты. Максимальные выплаты по ОСАГО/КАСКО.",
      keywords: `${targetRegions.map((r) => `независимая автоэкспертиза ${r.name}, оценка ущерба ${r.name}`).join(", ")}, судебная экспертиза автомобиля, трасологическая экспертиза`,
      url: getCanonicalUrl("/expertise"),
    },
    regions: {
      title:
        "География Работы | Аварийный Комиссар в Воронеже, Липецке, Курске, Брянске, Ростове, Краснодаре, Саратове",
      description:
        "🚗 Вызов аварийного комиссара и независимая автоэкспертиза в городах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Быстрый выезд специалистов. Оценка ущерба после ДТП по всем регионам.",
      keywords: `${targetRegions.map((r) => `аварийный комиссар ${r.name}, автоэкспертиза ${r.name}`).join(", ")}, помощь при ДТП регионы, независимая экспертиза области`,
      url: getCanonicalUrl("/regions"),
    },
  };

  return {
    ...defaultSEO,
    ...pageConfigs[page as keyof typeof pageConfigs],
    ...customData,
  };
};

// Региональные FAQ для SEO
export const generateFAQStructuredData = () => {
  return generateStructuredData("FAQPage", {
    questions: [
      {
        "@type": "Question",
        name: "Как быстро приедет аварийный комиссар после вызова?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Наш аварийный комиссар приедет на место ДТП в течение 15-30 минут в любом из городов: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Работаем круглосуточно без выходных.",
        },
      },
      {
        "@type": "Question",
        name: "В каких городах можно вызвать аварийного комиссара?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы работаем в следующих городах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Во всех этих регионах доступен круглосуточный вызов аварийного комиссара.",
        },
      },
      {
        "@type": "Question",
        name: "Какие документы нужны для вызова аварийного комиссара?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для вызова аварийного комиссара при ДТП необходимы: водительское удостоверение, ПТС или СТС, полис ОСАГО или КАСКО, паспорт. Наш комиссар поможет правильно оформить все документы.",
        },
      },
      {
        "@type": "Question",
        name: "Сколько стоят услуги аварийного комиссара?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Первичная консультация по телефону бесплатна. Стоимость услуг аварийного комиссара зависит от сложности случая и города. Звоните для уточнения цены в вашем регионе.",
        },
      },
    ],
  });
};

// Структурированные данные для экстренных служб по регионам
export const generateEmergencyServiceData = () => {
  return generateStructuredData("EmergencyService", {
    name: "Центр Независимой Автоэкспертизы",
    serviceType: "Emergency Road Assistance",
    provider: {
      "@type": "Organization",
      name: "Центр Независимой Автоэкспертизы",
      legalName: "ООО Центр Независимой Автоэкспертизы",
      telephone: "+7 (951) 853-82-42",
      email: "info@auto-expertise.ru",
      url: "https://emergency-service-portal.poehali.dev",
    },
    areaServed: targetRegions.map((region) => ({
      "@type": "City",
      name: region.name,
      containedInPlace: {
        "@type": "Country",
        name: "Россия",
      },
    })),
    availableChannel: [
      {
        "@type": "ServiceChannel",
        servicePhone: "+7 (951) 853-82-42",
        serviceType: "Emergency Phone",
        availableLanguage: "Russian",
      },
      {
        "@type": "ServiceChannel",
        serviceUrl: "https://t.me/emergency_help_dtp",
        serviceType: "Telegram Support",
      },
      {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/79518538242",
        serviceType: "WhatsApp Support",
      },
    ],
    hoursAvailable: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    serviceOutput: [
      {
        "@type": "Service",
        name: "Аварийный комиссар при ДТП",
        description:
          "Экстренный выезд специалиста для оформления документов при ДТП",
      },
      {
        "@type": "Service",
        name: "Независимая автоэкспертиза",
        description: "Профессиональная оценка ущерба для максимальных выплат",
      },
    ],
  });
};

// Мета-теги для защиты от скликивания и региональной оптимизации
export const getRegionalMetaTags = () => {
  return {
    industry: "Emergency Auto Services",
    "service-type": "Emergency Commissioner, Auto Expertise",
    "coverage-area": targetRegions.map((r) => r.name).join(", "),
    "emergency-phone": "+7 (951) 853-82-42",
    "response-time": "15-30 минут",
    availability: "24/7",
    "target-regions": targetRegions.map((r) => r.name).join(","),
    "main-keywords": "вызвать аварийного комиссара, независимая автоэкспертиза",
    "anti-click-fraud": "protected",
    "regional-service": "multi-city",
    "service-quality": "premium",
    expertise: "Regional Auto Commissioner Specialists",
    equipment: "Professional Mobile Office Equipment",
    partnership: "Insurance Companies Cooperation",
    payment: "Flexible Payment Options",
    languages: "Russian",
    "expert-count": "25+ Certified Specialists",
    experience: "15+ Years Regional Experience",
  };
};

// Конфигурация поисковых систем с защитой от скликивания
export const getSearchEngineConfig = () => {
  return {
    googlebot: {
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "crawl-delay": 1,
    },
    yandexbot: {
      "clean-param": "utm_source&utm_medium&utm_campaign&fbclid&gclid&yclid",
      "crawl-delay": 1,
      host: "emergency-service-portal.poehali.dev",
    },
    bingbot: {
      "crawl-delay": 2,
    },
    "anti-bot-protection": {
      "click-fraud-protection": "enabled",
      "suspicious-traffic-filter": "active",
      "geo-targeting": targetRegions.map((r) => r.code).join(","),
    },
  };
};
