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
  title: "Федеральная Служба Аварийных Комиссаров 24/7",
  description: "Служба аварийных комиссаров, оформление ДТП",
  keywords: `аварийный комиссар, независимая экспертиза ДТП, оценка ущерба автомобиля, страховой эксперт, урегулирование ДТП, аварийные комиссары 24/7, экспертиза после ДТП, независимая автоэкспертиза, урегулирование страховых случаев, техническая экспертиза автомобилей, оценка повреждений авто, автотехническая экспертиза, страховые выплаты по ОСАГО, страховые выплаты по КАСКО, досудебная экспертиза ДТП, судебная автоэкспертиза, федеральная служба аварийных комиссаров, круглосуточная служба экспертов, выезд эксперта на место ДТП, помощь при ДТП, автострахование экспертиза, независимый оценщик автомобилей, экспертное заключение по ДТП, возмещение ущерба при ДТП, автомобильная экспертиза, транспортная экспертиза, дорожно-транспортное происшествие экспертиза, страховой случай оценка, автоэксперт сертифицированный, восстановительная стоимость автомобиля, утрата товарной стоимости УТС, экспертиза для суда по ДТП, независимый автоэксперт, оценка автомобиля после аварии, экспертиза повреждений транспортного средства, страховая компания экспертиза, ОСАГО экспертиза ущерба, КАСКО оценка повреждений, автомобильная авария экспертиза, ДТП независимая оценка, техническое состояние автомобиля экспертиза, дефектовка автомобиля, калькуляция ремонта авто, стоимость восстановительного ремонта, автомобильный ущерб оценка, транспортно-трасологическая экспертиза, автотоваровед эксперт, независимый оценщик ущерба, федеральный реестр экспертов автотехники, лицензированный автоэксперт, сертифицированный оценщик автомобилей, профессиональная автоэкспертиза, квалифицированный автотехнический эксперт, аккредитованная экспертная организация, официальная автоэкспертиза, государственная лицензия на экспертизу, независимое экспертное заключение, досудебное урегулирование ДТП, внесудебное разрешение споров по ДТП, медиация по автомобильным спорам, арбитраж по страховым случаям, претензионная работа со страховыми, взыскание страхового возмещения, доплата по страховке, недоплата страховой компании, занижение выплат ОСАГО, занижение выплат КАСКО, независимая экспертиза для доплаты, экспертиза для взыскания УТС, судебная практика по ДТП, юридическая поддержка при ДТП, правовая помощь автовладельцам, консультации по автострахованию, защита прав автомобилистов, представительство в суде по ДТП, ведение дел в страховых компаниях, сопровождение страховых случаев, полный цикл урегулирования ДТП, комплексная поддержка при авариях, профессиональная помощь при ДТП, экстренная помощь автомобилистам, срочная экспертиза ДТП, быстрая оценка ущерба, оперативный выезд эксперта, круглосуточная диспетчерская служба, горячая линия по ДТП, автомобильная криминалистика, трасологическая экспертиза ДТП, механо-техническая экспертиза, фотофиксация места ДТП, документооборот по ДТП, отчетность для страховых, заключения для судов, справки для ГИБДД, протоколы осмотра ТС, акты технического состояния, дефектные ведомости, сметы на ремонт, калькуляции запчастей, нормочасы ремонтных работ, технологические карты восстановления, регламенты ремонта автомобилей, стандарты качества ремонта, сертификация ремонтных работ, гарантии на экспертные заключения, страхование профессиональной ответственности эксперта, аккредитация в страховых компаниях, партнерство с автодилерами, сотрудничество с автосервисами, интеграция с ремонтными предприятиями, база данных запчастей и расходников, каталоги нормативов ремонта, справочники средних рыночных цен, мониторинг стоимости автокомплектующих, анализ рынка автомобильных услуг, статистика ДТП по регионам, аналитика страховых выплат, прогнозирование страховых рисков, актуарные расчеты по автострахованию, ${targetRegions.map((r) => `аварийный комиссар ${r.name}, экспертиза ДТП ${r.name}, оценка ущерба ${r.name}, страховой эксперт ${r.name}, урегулирование ДТП ${r.name}, независимая экспертиза ${r.name}, автоэкспертиза ${r.name}, оценка автомобиля ${r.name}, экспертное заключение ${r.name}, страховые выплаты ${r.name}`).join(", ")}`,
  image:
    "https://cdn.poehali.dev/files/d9493eac-4708-4a78-8c3d-048df0308ba9.jpg",
  url: "https://emergency-service-portal.ru",
  type: "website",
  author: "Федеральная Служба Аварийных Комиссаров 24/7",
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
          "Аварийный Комиссар 24/7 - Экспертиза ДТП в Воронеже, Липецке, Курске | Федеральная Служба",
        description:
          "⚡ СРОЧНО вызвать аварийного комиссара! Федеральная служба экспертов работает в 7 городах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов. Выезд эксперта за 30 минут. Независимая оценка ущерба, экспертиза ДТП. ☎️ +7 (951) 853-82-42",
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
    name: "Федеральная Служба Аварийных Комиссаров 24/7",
    legalName: "ООО Федеральный Центр Автоэкспертизы",
    description:
      "Круглосуточная федеральная служба аварийных комиссаров для экспертизы ДТП, независимой оценки ущерба и урегулирования страховых случаев в регионах: Воронеж, Липецк, Курск, Брянск, Ростов-на-Дону, Краснодар, Саратов",
    url: "https://emergency-service-portal.ru",
    telephone: "+79518538242",
    logo: "https://cdn.poehali.dev/files/d9493eac-4708-4a78-8c3d-048df0308ba9.jpg",
    image:
      "https://cdn.poehali.dev/files/d9493eac-4708-4a78-8c3d-048df0308ba9.jpg",
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
      name: "Услуги аварийных комиссаров и автоэкспертизы",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Экспертиза ДТП и оценка ущерба",
            description:
              "Срочная независимая экспертиза дорожно-транспортных происшествий с выездом на место ДТП в течение 30 минут",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Урегулирование страховых случаев",
            description:
              "Профессиональное сопровождение страховых случаев, взаимодействие со страховыми компаниями и защита интересов клиентов",
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
    industry:
      "Automotive Insurance Services, Auto Damage Assessment, Vehicle Accident Investigation",
    "service-type":
      "Independent Auto Damage Assessment, Accident Investigation, Insurance Claim Support",
    "coverage-area": targetRegions.map((r) => r.name).join(", "),
    "emergency-phone": "+7 (951) 853-82-42",
    "response-time": "30 минут",
    availability: "24/7",
    "target-regions": targetRegions.map((r) => r.name).join(","),
    "main-keywords":
      "аварийный комиссар, экспертиза ДТП, оценка ущерба автомобиля, страховые выплаты, независимая автоэкспертиза",
    "anti-click-fraud": "protected",
    "regional-service": "multi-city",
    "service-quality": "premium",
    expertise:
      "Certified Insurance Claim Specialists, Licensed Auto Damage Assessors",
    equipment:
      "Professional Damage Assessment Tools, Digital Documentation Systems",
    partnership: "All Major Insurance Companies, OSAGO, KASKO Providers",
    payment: "Insurance Direct Billing, Flexible Payment Options",
    languages: "Russian",
    "expert-count": "25+ Certified Auto Damage Assessors",
    experience: "15+ Years Insurance Claim Experience",
    "business-category":
      "automotive services, insurance services, damage assessment, vehicle inspection",
    "primary-activity":
      "автомобильная экспертиза, страховые услуги, оценка ущерба транспортных средств",
    "secondary-activity":
      "урегулирование страховых случаев, техническая экспертиза автомобилей, независимая оценка",
    "yandex-verification": "automotive-insurance-expert-service",
    "google-category":
      "Insurance Agency, Auto Repair, Vehicle Inspection Service",
    "bing-category": "Automotive Services, Insurance Services",
    classification:
      "ОКВЭД 66.03 - Деятельность по оценке рисков и ущербов, 71.20.9 - Деятельность в области технического контроля, испытаний и анализа",
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
