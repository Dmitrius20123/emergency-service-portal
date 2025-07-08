export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
  author: string;
  alternateLanguages: Array<{ hreflang: string; href: string }>;
  additionalData?: Record<string, any>;
}

export const generateRegionalSEO = (
  page: string,
  region: string,
  baseSEO: SEOConfig,
): SEOConfig => {
  const regionalKeywords = generateRegionalKeywords(region);
  return {
    ...baseSEO,
    title: `${baseSEO.title} - ${region}`,
    description: `${baseSEO.description} в ${region}`,
    keywords: `${baseSEO.keywords}, ${regionalKeywords}`,
  };
};

export const generateCitySEO = (
  page: string,
  city: string,
  baseSEO: SEOConfig,
): SEOConfig => {
  const cityKeywords = generateCityKeywords(city);
  return {
    ...baseSEO,
    title: `${baseSEO.title} - ${city}`,
    description: `${baseSEO.description} в ${city}`,
    keywords: `${baseSEO.keywords}, ${cityKeywords}`,
  };
};

const generateRegionalKeywords = (region: string) => {
  return `вызвать эвакуатор ${region}, эвакуатор ${region} срочно, эвакуатор при ДТП ${region} круглосуточно, экстренная эвакуация ${region}, транспортировка авто ${region}, служба эвакуации ${region}, эвакуация со штрафстоянки ${region}, помощь на дороге ${region}, вызов эвакуатора ${region} 24/7, автоэвакуатор ${region}, ДТП эвакуатор ${region}, срочный эвакуатор ${region}, помощь водителям ${region}, эвакуация мотоциклов ${region}, эвакуация грузовиков ${region}`;
};

export const defaultSEO: SEOConfig = {
  title: "Федеральная Служба Аварийных Комиссаров 24/7",
  description: "Служба аварийных комиссаров, оформление ДТП",
  keywords:
    "аварийный комиссар, независимая экспертиза ДТП, оценка ущерба автомобиля, страховой эксперт, урегулирование ДТП, аварийные комиссары 24/7, экспертиза после ДТП, независимая автоэкспертиза, урегулирование страховых случаев, техническая экспертиза автомобилей, оценка повреждений авто, автотехническая экспертиза, страховые выплаты по ОСАГО, страховые выплаты по КАСКО, досудебная экспертиза ДТП, судебная автоэкспертиза, федеральная служба аварийных комиссаров, круглосуточная служба экспертов, выезд эксперта на место ДТП, помощь при ДТП, автострахование экспертиза, независимый оценщик автомобилей, экспертное заключение по ДТП, возмещение ущерба при ДТП, автомобильная экспертиза, транспортная экспертиза, дорожно-транспортное происшествие экспертиза, страховой случай оценка, автоэксперт сертифицированный, восстановительная стоимость автомобиля, утрата товарной стоимости УТС, экспертиза для суда по ДТП, независимый автоэксперт, оценка автомобиля после аварии, экспертиза повреждений транспортного средства, страховая компания экспертиза, ОСАГО экспертиза ущерба, КАСКО оценка повреждений, автомобильная авария экспертиза, ДТП независимая оценка, техническое состояние автомобиля экспертиза, дефектовка автомобиля, калькуляция ремонта авто, стоимость восстановительного ремонта, автомобильный ущерб оценка, транспортно-трасологическая экспертиза, автотоваровед эксперт, независимый оценщик ущерба, федеральный реестр экспертов автотехники, лицензированный автоэксперт, сертифицированный оценщик автомобилей, профессиональная автоэкспертиза, квалифицированный автотехнический эксперт, аккредитованная экспертная организация, официальная автоэкспертиза, государственная лицензия на экспертизу, независимое экспертное заключение, досудебное урегулирование ДТП, внесудебное разрешение споров по ДТП, медиация по автомобильным спорам, арбитраж по страховым случаям, претензионная работа со страховыми, взыскание страхового возмещения, доплата по страховке, недоплата страховой компании",
  image:
    "https://cdn.poehali.dev/files/2f503313-2a08-4442-9a76-c86cbe2560a0.png",
  url: "https://emergency-service-portal.ru",
  type: "website",
  author: "Федеральная Служба Аварийных Комиссаров 24/7",
  alternateLanguages: [
    { hreflang: "ru", href: "https://emergency-service-portal.ru" },
    { hreflang: "x-default", href: "https://emergency-service-portal.ru" },
  ],
};

export const generateSEO = (page: string, params: any = {}): SEOConfig => {
  const baseSEO = params.region
    ? generateRegionalSEO(page, params.region, defaultSEO)
    : params.city
      ? generateCitySEO(page, params.city, defaultSEO)
      : defaultSEO;

  switch (page) {
    case "reviews":
      return {
        ...baseSEO,
        title:
          "Отзывы клиентов - Аварийный Комиссар 24/7 | Независимая Автоэкспертиза",
        description:
          "Читайте реальные отзывы наших клиентов об услугах аварийного комиссара и независимой автоэкспертизы. Более 500 довольных клиентов в 10 городах России.",
      };
    case "privacy":
      return {
        ...baseSEO,
        title: "Политика конфиденциальности - Аварийный Комиссар 24/7",
        description:
          "Политика конфиденциальности службы аварийных комиссаров и независимой автоэкспертизы.",
      };
    case "terms":
      return {
        ...baseSEO,
        title: "Условия использования - Аварийный Комиссар 24/7",
        description:
          "Условия использования услуг службы аварийных комиссаров и независимой автоэкспертизы.",
      };
    default:
      return baseSEO;
  }
};

export const generateStructuredData = (type: string, params: any) => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: params.name || "Федеральная Служба Аварийных Комиссаров 24/7",
    description:
      params.description || "Служба аварийных комиссаров, оформление ДТП",
    url: params.url || "https://emergency-service-portal.ru",
    image:
      params.image ||
      "https://cdn.poehali.dev/files/2f503313-2a08-4442-9a76-c86cbe2560a0.png",
    ...(params.additionalData || {}),
  };
};

const generateCityKeywords = (city: string) => {
  return `аварийный комиссар ${city}, экспертиза ДТП ${city}, оценка ущерба автомобиля ${city}, страховой эксперт ${city}, урегулирование ДТП ${city}, аварийные комиссары ${city} 24/7, экспертиза после ДТП ${city}, независимая автоэкспертиза ${city}, урегулирование страховых случаев ${city}, техническая экспертиза автомобилей ${city}, оценка повреждений авто ${city}, автотехническая экспертиза ${city}, страховые выплаты по ОСАГО ${city}, страховые выплаты по КАСКО ${city}, досудебная экспертиза ДТП ${city}, судебная автоэкспертиза ${city}, федеральная служба аварийных комиссаров ${city}, круглосуточная служба экспертов ${city}, выезд эксперта на место ДТП ${city}, помощь при ДТП ${city}, автострахование экспертиза ${city}, независимый оценщик автомобилей ${city}, экспертное заключение по ДТП ${city}, возмещение ущерба при ДТП ${city}`;
};
