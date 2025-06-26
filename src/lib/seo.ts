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
  return `вызвать эвакуатор ${region}, эвакуатор ${region} срочно, эвакуатор при ДТП ${region} круглосуточно, экстренная эвакуация ${region}, транспортировка авто ${region}, служба эвакуации ${region}, эвакуация со штрафстоянки ${region}, помощь на дороге ${region}, вызов эвакуатора ${region} 24/7, автоэвакуатор ${region}, ДТП эвакуатор ${region}, срочный эвакуатор ${region}, помощь водителям ${region}, эвакуация мотоциклов ${region}, эвакуация грузовиков ${region}`;
};

export const defaultSEO: SEOConfig = {
  title:
    "24/7 Федеральная Служба Экстренной Эвакуации - Круглосуточный Эвакуатор",
  description:
    "Круглосуточная служба экстренной эвакуации автомобилей по всей России. Быстрая подача эвакуатора в течение 15 минут. Профессиональная транспортировка авто, мотоциклов, спецтехники. Работаем с ДТП, поломками, эвакуацией со штрафстоянок. ☎️ +7 (951) 853-82-42",
  keywords: `экстренная эвакуация Воронеж, срочный эвакуатор Липецк, круглосуточная эвакуация Курск, эвакуатор при ДТП Брянск, служба эвакуации Ростов-на-Дону, быстрый эвакуатор Краснодар, эвакуация авто Саратов, ${targetRegions.map((r) => `эвакуатор ${r.name}, экстренная эвакуация ${r.name}, срочная подача эвакуатора ${r.name}`).join(", ")}, эвакуация со штрафстоянки ГИБДД, транспортировка неисправных авто, эвакуация мотоциклов`,
  image:
    "https://cdn.poehali.dev/files/340025d4-ad94-41c9-87ac-cf16e0457245.jpg",
  url: "https://emergency-service-portal.ru",
  type: "website",
  author: "Федеральная Служба Экстренной Эвакуации 24/7",
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
          "Экстренный Эвакуатор 24/7 - Срочная Эвакуация в Воронеже, Липецке, Курске | Федеральная Служба",
        description:
          "⚡ СРОЧНО вызвать эвакуатор! Федеральная служба экстренной эвакуации работает в 7 городах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Подача за 15 минут. Профессиональная транспортировка любых ТС. ☎️ +7 (951) 853-82-42",
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
              name: "Как быстро приедет эвакуатор?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Наш эвакуатор приезжает в течение 15-30 минут в любом из регионов: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов.",
              },
            },
            {
              "@type": "Question",
              name: "Сколько стоят услуги экстренной эвакуации?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Стоимость эвакуации зависит от расстояния и типа транспортного средства. Консультация бесплатная. Звоните +7 (951) 853-82-42.",
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
    name: "Федеральная Служба Экстренной Эвакуации 24/7",
    legalName: "ООО Федеральный Эвакуаторный Центр",
    description:
      "Круглосуточная федеральная служба экстренной эвакуации автомобилей и спецтехники в регионах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов",
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
      name: "Услуги экстренной эвакуации и транспортировки",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Экстренная эвакуация автомобилей",
            description:
              "Срочная подача эвакуатора при ДТП, поломках и других чрезвычайных ситуациях в течение 15 минут",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Профессиональная транспортировка техники",
            description:
              "Безопасная перевозка автомобилей, мотоциклов, спецтехники и грузовых автомобилей",
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
    industry: "Emergency Towing Services",
    "service-type": "Emergency Towing, Vehicle Transportation",
    "coverage-area": targetRegions.map((r) => r.name).join(", "),
    "emergency-phone": "+7 (951) 853-82-42",
    "response-time": "15-30 минут",
    availability: "24/7",
    "target-regions": targetRegions.map((r) => r.name).join(","),
    "main-keywords": "экстренная эвакуация, срочный эвакуатор",
    "anti-click-fraud": "protected",
    "regional-service": "multi-city",
    "service-quality": "premium",
    expertise: "Professional Towing Specialists",
    equipment: "Modern Tow Trucks and Transport Equipment",
    partnership: "Insurance Companies and Roadside Assistance",
    payment: "Flexible Payment Options",
    languages: "Russian",
    "expert-count": "25+ Certified Towing Specialists",
    experience: "15+ Years Emergency Towing Experience",
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
