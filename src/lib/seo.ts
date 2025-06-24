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

export const defaultSEO: SEOConfig = {
  title:
    "Независимая Автоэкспертиза после ДТП в Москве 24/7 | Оценка Ущерба Автомобиля | Аварийный Комиссар | +7 (951) 853-82-42",
  description:
    "⚡ Независимая автоэкспертиза и оценка ущерба после ДТП в Москве и МО. Аварийные комиссары 24/7. Максимальные выплаты по ОСАГО/КАСКО. Судебная автоэкспертиза. Работаем с РСА. Выезд за 15 минут! ☎️ +7 (951) 853-82-42",
  keywords:
    "независимая автоэкспертиза Москва, оценка ущерба автомобиля ДТП, аварийный комиссар Москва, судебная автоэкспертиза, независимая экспертиза ОСАГО, оценка автомобиля после ДТП, экспертиза ущерба МО, автотехническая экспертиза, независимый оценщик авто, РСА экспертиза, страховая экспертиза автомобиля, оценка повреждений авто, трасологическая экспертиза ДТП, техническая экспертиза автомобиля, независимая оценка ущерба КАСКО",
  image:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&q=80",
  url: "https://emergency-service-portal.poehali.dev",
  type: "website",
  author: "Единый Центр Помощи после ДТП",
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
        name: "Единый Центр Помощи после ДТП",
        alternateName: "ЕЦПП ДТП",
        description:
          "Круглосуточная служба экстренной помощи при ДТП в Москве и Московской области. Профессиональное оформление документов, эвакуация, юридическая поддержка",
        url: "https://emergency-service-portal.poehali.dev",
        telephone: "+7 (951) 853-82-42",
        email: "info@emergency-help.ru",
        address: {
          "@type": "PostalAddress",
          addressCountry: "RU",
          addressRegion: "Московская область",
          addressLocality: "Москва",
          streetAddress: "Центральный административный округ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "55.7558",
          longitude: "37.6176",
        },
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
        priceRange: "$$",
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "55.7558",
            longitude: "37.6176",
          },
          geoRadius: "100000",
        },
        areaServed: ["Москва", "Московская область", "Подмосковье"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Услуги помощи при ДТП",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Вызов комиссара при ДТП",
                description:
                  "Экстренный выезд специалиста для оформления документов",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Услуги эвакуатора",
                description: "Быстрая эвакуация поврежденных автомобилей",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "247",
          bestRating: "5",
        },
        ...data,
      };

    case "Organization":
      return {
        ...baseData,
        name: "Единый Центр Помощи после ДТП",
        url: "https://emergency-service-portal.poehali.dev",
        logo: "https://cdn.poehali.dev/files/2baca7d5-4fc1-4cc9-a032-1fbef5bf2b93.jpg",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+7 (951) 853-82-42",
            contactType: "emergency",
            areaServed: "RU",
            availableLanguage: "Russian",
            hoursAvailable: "24/7",
          },
        ],
        sameAs: [
          "https://t.me/emergency_help_dtp",
          "https://wa.me/79518538242",
        ],
        ...data,
      };

    case "WebSite":
      return {
        ...baseData,
        name: "Единый Центр Помощи после ДТП",
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
        ...data,
      };

    case "Service":
      return {
        ...baseData,
        name: data.name,
        description: data.description,
        provider: {
          "@type": "Organization",
          name: "Единый Центр Помощи после ДТП",
          telephone: "+7 (951) 853-82-42",
        },
        areaServed: {
          "@type": "State",
          name: "Московская область",
        },
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
          name: "Единый Центр Помощи после ДТП",
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
        "Независимая Автоэкспертиза после ДТП в Москве 24/7 | Оценка Ущерба Автомобиля | Аварийный Комиссар | +7 (951) 853-82-42",
      description:
        "⚡ Независимая автоэкспертиза и оценка ущерба после ДТП в Москве и МО. Аварийные комиссары 24/7. Максимальные выплаты по ОСАГО/КАСКО. Судебная автоэкспертиза. Работаем с РСА. Выезд за 15 минут! ☎️ +7 (951) 853-82-42",
      keywords:
        "независимая автоэкспертиза Москва, оценка ущерба автомобиля ДТП, аварийный комиссар Москва, судебная автоэкспертиза, независимая экспертиза ОСАГО, оценка автомобиля после ДТП, экспертиза ущерба МО, автотехническая экспертиза, независимый оценщик авто, РСА экспертиза, страховая экспертиза автомобиля, оценка повреждений авто, трасологическая экспертиза ДТП, техническая экспертиза автомобиля, независимая оценка ущерба КАСКО",
      url: getCanonicalUrl("/"),
    },
    reviews: {
      title:
        "Отзывы о Независимой Автоэкспертизе в Москве - Реальные Клиенты об Оценке Ущерба после ДТП | Аварийные Комиссары",
      description:
        "📝 Читайте отзывы клиентов о независимой автоэкспертизе в Москве. Реальные истории получения максимальных выплат по ОСАГО/КАСКО. Профессиональная оценка ущерба после ДТП. 1000+ довольных клиентов!",
      keywords:
        "отзывы автоэкспертиза Москва, отзывы независимая оценка авто, отзывы аварийный комиссар, реальные отзывы экспертиза ДТП, клиенты автоэкспертизы",
      url: getCanonicalUrl("/reviews"),
    },
    expertise: {
      title:
        "Виды Автоэкспертизы в Москве - Независимая Оценка Ущерба | Судебная Автотехническая Экспертиза | Трасологическая Экспертиза ДТП",
      description:
        "🔍 Все виды независимой автоэкспертизы в Москве: оценка ущерба после ДТП, судебная автотехническая экспертиза, трасологическая экспертиза, оценка для РСА, ОСАГО/КАСКО. Лицензированные эксперты.",
      keywords:
        "виды автоэкспертизы, судебная автоэкспертиза Москва, трасологическая экспертиза ДТП, автотехническая экспертиза, экспертиза для суда, независимая оценка РСА",
      url: getCanonicalUrl("/expertise"),
    },
    regions: {
      title:
        "Автоэкспертиза в Московской Области - Независимая Оценка Ущерба в МО | Подольск, Мытищи, Балашиха, Люберцы",
      description:
        "🚗 Независимая автоэкспертиза в городах МО: Подольск, Мытищи, Балашиха, Люберцы, Химки, Королёв. Быстрый выезд экспертов. Оценка ущерба после ДТП по всей Московской области.",
      keywords:
        "автоэкспертиза Подольск, независимая оценка Мытищи, экспертиза ДТП Балашиха, оценка ущерба Люберцы, автоэкспертиза Химки, независимая экспертиза Королёв, оценка авто МО",
      url: getCanonicalUrl("/regions"),
    },
  };

  return {
    ...defaultSEO,
    ...pageConfigs[page as keyof typeof pageConfigs],
    ...customData,
  };
};

// Дополнительные SEO утилиты
export const generateFAQStructuredData = () => {
  return generateStructuredData("FAQPage", {
    questions: [
      {
        "@type": "Question",
        name: "Как быстро приедет комиссар после вызова?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Наш комиссар приедет на место ДТП в течение 15-30 минут в пределах МКАД и до 45 минут в Московской области. Мы работаем круглосуточно без выходных.",
        },
      },
      {
        "@type": "Question",
        name: "Какие документы нужны для оформления ДТП?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Для оформления ДТП необходимы: водительское удостоверение, ПТС или СТС, полис ОСАГО или КАСКО, паспорт. Наш комиссар поможет правильно оформить все документы.",
        },
      },
      {
        "@type": "Question",
        name: "Работаете ли вы с ГИБДД?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, наши комиссары имеют все необходимые лицензии и работают в тесном сотрудничестве с ГИБДД. Мы оформляем ДТП согласно всем требованиям законодательства РФ.",
        },
      },
      {
        "@type": "Question",
        name: "Какова стоимость ваших услуг?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Первичная консультация бесплатна. Стоимость услуг комиссара от 3000 рублей, эвакуатора от 2500 рублей. Окончательная цена зависит от сложности случая и расстояния.",
        },
      },
    ],
  });
};

// Структурированные данные для экстренных служб
export const generateEmergencyServiceData = () => {
  return generateStructuredData("EmergencyService", {
    name: "Единый Центр Помощи после ДТП",
    serviceType: "Emergency Road Assistance",
    provider: {
      "@type": "Organization",
      name: "Единый Центр Помощи после ДТП",
      legalName: "ООО Единый Центр Помощи",
      telephone: "+7 (951) 853-82-42",
      email: "info@emergency-help.ru",
      url: "https://emergency-service-portal.poehali.dev",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Москва",
        containedInPlace: {
          "@type": "Country",
          name: "Россия",
        },
      },
      {
        "@type": "State",
        name: "Московская область",
        containedInPlace: {
          "@type": "Country",
          name: "Россия",
        },
      },
    ],
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
        name: "Комиссар по ДТП",
        description: "Выезд комиссара для оформления документов при ДТП",
      },
      {
        "@type": "Service",
        name: "Эвакуатор",
        description: "Услуги эвакуации поврежденных автомобилей",
      },
      {
        "@type": "Service",
        name: "Независимая экспертиза",
        description: "Оценка ущерба для максимальных выплат",
      },
    ],
  });
};

// Дополнительные мета-теги для автомобильных услуг
export const getAutomotiveMetaTags = () => {
  return {
    industry: "Automotive Services",
    "service-type": "Emergency Road Assistance",
    "coverage-area": "Moscow, Moscow Region",
    "emergency-phone": "+7 (951) 853-82-42",
    "response-time": "15-30 minutes",
    availability: "24/7",
    license: "Licensed Emergency Service Provider",
    insurance: "Fully Insured Operations",
    expertise: "Traffic Accident Specialists",
    equipment: "Professional Tow Trucks, Mobile Office",
    partnership: "GIBDD Authorized Service",
    payment: "Cash, Card, Insurance Direct Payment",
    languages: "Russian, English",
    "fleet-size": "15+ Emergency Vehicles",
    experience: "10+ Years in Emergency Services",
  };
};

// Расширенная конфигурация для поисковых систем
export const getSearchEngineConfig = () => {
  return {
    googlebot: {
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "crawl-delay": 1,
    },
    yandexbot: {
      "clean-param": "utm_source&utm_medium&utm_campaign&fbclid&gclid",
      "crawl-delay": 1,
      host: "emergency-service-portal.poehali.dev",
    },
    bingbot: {
      "crawl-delay": 2,
    },
  };
};
