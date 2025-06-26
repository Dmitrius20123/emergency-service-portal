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
  title: "Федеральная Служба Аварийных Комиссаров 24/7 - Помощь при ДТП",
  description:
    "Круглосуточная служба аварийного комиссара при ДТП. Приезжаем за 15 минут в 7 городах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Независимая автоэкспертиза, юридическая помощь, эвакуация авто, максимальная страховая выплата. ☎️ +7 (951) 853-82-42",
  keywords: `аварийный комиссар Воронеж, вызвать комиссара при ДТП Липецк, независимая автоэкспертиза Курск, оценка ущерба автомобиля Брянск, комиссар ДТП Ростов-на-Дону, автоэкспертиза Краснодар, судебная экспертиза авто Саратов, ${targetRegions.map((r) => `аварийный комиссар ${r.name}, независимая автоэкспертиза ${r.name}, вызвать комиссара ${r.name}`).join(", ")}, страховые выплаты ОСАГО КАСКО, помощь при ДТП 24/7, оформление европротокола`,
  image:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&q=80",
  url: "https://emergency-service-portal.ru",
  type: "website",
  author: "Единый Центр Помощи после ДТП",
  alternateLanguages: [
    { hreflang: "ru", href: "https://emergency-service-portal.ru" },
    {
      hreflang: "x-default",
      href: "https://emergency-service-portal.ru",
    },
  ],
};

// Функции для генерации SEO
export const generatePageSEO = (page: string): SEOConfig => {
  const baseSEO = { ...defaultSEO };

  switch (page) {
    case "home":
      return {
        ...baseSEO,
        title:
          "Аварийный Комиссар 24/7 - Вызвать в Воронеже, Липецке, Курске | Независимая Автоэкспертиза",
        description:
          "⚡ СРОЧНО вызвать аварийного комиссара! Работаем в 7 городах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Приезжаем за 15 минут. Независимая автоэкспертиза, максимальные страховые выплаты. ☎️ +7 (951) 853-82-42",
      };
    default:
      return baseSEO;
  }
};

export const generateStructuredData = (type: string, params: any) => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...params,
  };
};

export const generateFAQStructuredData = (faqs: any[] = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      faqs.length > 0
        ? faqs
        : [
            {
              "@type": "Question",
              name: "Как быстро приедет аварийный комиссар?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Наш аварийный комиссар приезжает в течение 15-30 минут в любом из регионов: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов.",
              },
            },
            {
              "@type": "Question",
              name: "Сколько стоят услуги независимой автоэкспертизы?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Стоимость независимой автоэкспертизы зависит от сложности случая. Консультация бесплатная. Звоните +7 (951) 853-82-42.",
              },
            },
          ],
  };
};

export const generateEmergencyServiceData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://emergency-service-portal.ru/#business",
    name: "Единый Центр Помощи после ДТП",
    legalName: "ООО Центр Независимой Автоэкспертизы",
    description:
      "Круглосуточная служба аварийного комиссара и независимой автоэкспертизы в регионах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов",
    url: "https://emergency-service-portal.ru",
    telephone: "+79518538242",
    priceRange: "$$",
    currenciesAccepted: "RUB",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: targetRegions.map((r) => ({
      "@type": "City",
      name: r.name,
      addressCountry: "RU",
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.661535,
        longitude: 39.200287,
      },
      geoRadius: "500000",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "RU",
      addressRegion: "Воронежская область",
      addressLocality: "Воронеж",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.661535,
      longitude: 39.200287,
    },
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
              "Экстренный выезд аварийного комиссара для оформления ДТП в течение 15 минут",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Независимая автоэкспертиза",
            description:
              "Профессиональная оценка ущерба автомобиля для максимальных страховых выплат",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "847",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: ["https://t.me/emergency_help_dtp", "https://wa.me/79518538242"],
  };
};

export const getCanonicalUrl = (path: string = "") => {
  return `${defaultSEO.url}${path}`;
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
      host: "emergency-service-portal.ru",
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
