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

// Функции для генерации SEO
export const generatePageSEO = (page: string): SEOConfig => {
  return defaultSEO;
};

export const generateStructuredData = (type: string, params: any) => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...params,
  };
};

export const generateFAQStructuredData = (faqs: any[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs,
  };
};

export const generateEmergencyServiceData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "Центр Независимой Автоэкспертизы",
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
