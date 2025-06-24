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
    "Единый Центр Помощи после ДТП 24/7 - Экстренная Помощь при Аварии в Москве | Эвакуатор, Юрист, Независимая Экспертиза",
  description:
    "🚨 Круглосуточная служба помощи при ДТП в Москве и области. ⚡ Вызов комиссара за 15 минут! Оформление документов, эвакуатор, юридическая поддержка, независимая экспертиза. Максимальные выплаты по ОСАГО/КАСКО. Звоните +7 (951) 853-82-42",
  keywords:
    "помощь при ДТП Москва, экстренная помощь после аварии, вызов комиссара ДТП, эвакуатор круглосуточно Москва, независимая экспертиза после ДТП, юрист по ДТП, оформление ДТП, страховые выплаты ОСАГО КАСКО, техпомощь на дороге, служба экстренного реагирования, автоюрист Москва, помощь водителям 24/7",
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
        "Единый Центр Помощи после ДТП 24/7 - Экстренная Помощь при Аварии в Москве | Эвакуатор, Юрист, Независимая Экспертиза",
      description:
        "🚨 Круглосуточная служба помощи при ДТП в Москве и области. ⚡ Вызов комиссара за 15 минут! Оформление документов, эвакуатор, юридическая поддержка, независимая экспертиза. Максимальные выплаты по ОСАГО/КАСКО. Звоните +7 (951) 853-82-42",
      keywords:
        "помощь при ДТП Москва, экстренная помощь после аварии, вызов комиссара ДТП, эвакуатор круглосуточно Москва, независимая экспертиза после ДТП, юрист по ДТП, оформление ДТП, страховые выплаты ОСАГО КАСКО, техпомощь на дороге, служба экстренного реагирования, автоюрист Москва, помощь водителям 24/7",
      url: getCanonicalUrl("/"),
    },
    reviews: {
      title:
        "Отзывы клиентов о помощи при ДТП - Единый Центр Помощи 24/7 | Реальные истории водителей Москвы",
      description:
        "📝 Читайте реальные отзывы клиентов о нашей службе помощи при ДТП в Москве. Истории успешного решения проблем после аварий, получения страховых выплат и качественного сервиса. Более 1000 довольных клиентов!",
      keywords:
        "отзывы помощь ДТП Москва, отзывы эвакуатор, отзывы автоюрист, отзывы независимая экспертиза, реальные истории ДТП, клиенты служба помощи",
      url: getCanonicalUrl("/reviews"),
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
    ],
  });
};
