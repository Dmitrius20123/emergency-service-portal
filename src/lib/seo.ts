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
}

export const defaultSEO: SEOConfig = {
  title: "Служба экстренного реагирования 24/7 - Быстрая помощь при ДТП",
  description:
    "Круглосуточная служба экстренного реагирования. Быстрая помощь при ДТП, эвакуация автомобилей, техническая помощь на дороге. Звоните 24/7!",
  keywords:
    "экстренная помощь, ДТП, эвакуатор, техпомощь, служба реагирования, 24/7",
  image:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop",
  url: "https://emergency-service-portal.poehali.dev",
  type: "website",
  author: "Служба экстренного реагирования",
};

export const generateStructuredData = (
  type: "LocalBusiness" | "Service" | "Review",
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
        name: "Служба экстренного реагирования 24/7",
        description:
          "Круглосуточная служба экстренного реагирования при ДТП и технических неполадках",
        telephone: "+7 (800) 123-45-67",
        address: {
          "@type": "PostalAddress",
          addressCountry: "RU",
          addressLocality: "Москва",
        },
        openingHours: "24/7",
        priceRange: "$$",
        serviceArea: "Москва и область",
        areaServed: "RU",
        ...data,
      };

    case "Service":
      return {
        ...baseData,
        name: data.name,
        description: data.description,
        provider: {
          "@type": "Organization",
          name: "Служба экстренного реагирования 24/7",
        },
        areaServed: "RU",
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: "+7 (800) 123-45-67",
        },
        ...data,
      };

    case "Review":
      return {
        ...baseData,
        itemReviewed: {
          "@type": "LocalBusiness",
          name: "Служба экстренного реагирования 24/7",
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
      title: "Служба экстренного реагирования 24/7 - Быстрая помощь при ДТП",
      description:
        "Круглосуточная служба экстренного реагирования. Быстрая помощь при ДТП, эвакуация автомобилей, техническая помощь на дороге. Звоните 24/7!",
      keywords:
        "экстренная помощь, ДТП, эвакуатор, техпомощь, служба реагирования, 24/7, авария",
      url: getCanonicalUrl("/"),
    },
    reviews: {
      title: "Отзывы клиентов - Служба экстренного реагирования 24/7",
      description:
        "Читайте отзывы клиентов о нашей службе экстренного реагирования. Реальные истории помощи при ДТП и технических неполадках.",
      keywords:
        "отзывы, служба помощи, ДТП, эвакуатор отзывы, техпомощь отзывы",
      url: getCanonicalUrl("/reviews"),
    },
  };

  return {
    ...defaultSEO,
    ...pageConfigs[page as keyof typeof pageConfigs],
    ...customData,
  };
};
