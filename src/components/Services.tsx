import {
  Shield,
  FileText,
  Truck,
  Fuel,
  Calculator,
  Eye,
  Scale,
  Wrench,
  ClipboardCheck,
  Car,
  DollarSign,
  Phone,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Оформление ДТП",
      description:
        "Профессиональное документирование происшествия с соблюдением всех требований ГИБДД. Помощь в составлении европротокола и сборе необходимых справок для страховой компании.",
      keywords: "оформление ДТП, европротокол, документы после аварии",
    },
    {
      icon: Scale,
      title: "Юридическая помощь",
      description:
        "Профессиональные автоюристы с 10+ летним опытом. Консультации по ОСАГО/КАСКО, представительство в суде, взыскание ущерба с виновника ДТП.",
      keywords: "автоюрист Москва, юридическая помощь ДТП, взыскание ущерба",
    },
    {
      icon: Truck,
      title: "Эвакуатор",
      description:
        "Круглосуточная служба эвакуации по Москве и области. Современные эвакуаторы, бережная погрузка, доставка на СТО или в нужное место за 30 минут.",
      keywords: "эвакуатор Москва, эвакуация авто круглосуточно",
    },
    {
      icon: Fuel,
      title: "Доставка топлива",
      description:
        "Экстренная заправка автомобиля на месте происшествия или поломки. Качественное топливо АИ-92, АИ-95, дизель. Доставка в течение 40 минут по Москве.",
      keywords: "доставка топлива, заправка на дороге, техпомощь",
    },
    {
      icon: Calculator,
      title: "Увеличение суммы страхового возмещения",
      description:
        "Максимальные выплаты по ОСАГО до 400 тыс. руб., по КАСКО без ограничений. Досудебное урегулирование спора, взыскание неустойки и штрафных санкций со страховых компаний.",
      keywords: "увеличение страховых выплат, максимальные выплаты ОСАГО КАСКО",
    },
    {
      icon: Eye,
      title: "Страховой контроль",
      description:
        "Профессиональный надзор за действиями страховой компании. Контроль сроков выплат, качества ремонта, защита от занижения ущерба и необоснованных отказов.",
      keywords: "страховой контроль, защита от страховой, контроль выплат",
    },
    {
      icon: Shield,
      title: "Независимая экспертиза",
      description:
        "Объективная оценка ущерба от ДТП лицензированными экспертами. Современное оборудование, точная калькуляция, учет скрытых повреждений и утраты товарной стоимости.",
      keywords: "независимая экспертиза ДТП, оценка ущерба автомобиля",
    },
    {
      icon: Wrench,
      title: "Ремонт автомобиля за счет страховой компании",
      description:
        "Организация качественного восстановительного ремонта на сертифицированных СТО. Контроль качества работ, использование оригинальных запчастей, гарантия на ремонт.",
      keywords: "ремонт по страховке, восстановительный ремонт автомобиля",
    },
    {
      icon: Car,
      title: "Кузовной ремонт автомобиля",
      description:
        "Профессиональное восстановление геометрии кузова, покраска в заводской цвет, замена поврежденных деталей. Современное оборудование, опытные мастера.",
      keywords:
        "кузовной ремонт, покраска автомобиля, восстановление геометрии",
    },
    {
      icon: ClipboardCheck,
      title: "Помощь в постановке автомобиля на учет",
      description:
        "Полное сопровождение регистрации ТС в ГИБДД. Подготовка документов, прохождение техосмотра, получение номеров. Экономия времени и нервов.",
      keywords: "постановка на учет ГИБДД, регистрация автомобиля",
    },
    {
      icon: DollarSign,
      title: "Выкуп автомобилей в любом состоянии",
      description:
        "Быстрый выкуп авто после ДТП, с проблемными документами, кредитных, залоговых. Честная оценка, моментальный расчет, оформление за 1 день.",
      keywords: "выкуп авто после ДТП, срочный выкуп автомобилей",
    },
  ];

  return (
    <section className="py-16 bg-slate-800" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Полный спектр услуг помощи при ДТП в Москве и области
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Профессиональная поддержка водителей 24/7: от оформления документов
            до получения максимальных страховых выплат
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="bg-slate-700 hover:bg-slate-600 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-lg mb-4">
                  <Icon size={24} className="text-black" aria-hidden="true" />
                </div>
                <h3
                  className="text-lg font-semibold mb-3 text-white"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  className="text-slate-300 text-sm leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>
                <meta
                  itemProp="provider"
                  content="Единый Центр Помощи после ДТП"
                />
                <meta
                  itemProp="areaServed"
                  content="Москва и Московская область"
                />
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-300 text-lg mb-4">
            🚨 <strong>Экстренная помощь при ДТП круглосуточно!</strong> Вызов
            специалиста за 15 минут
          </p>
          <a
            href="tel:+79518538242"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            itemProp="telephone"
          >
            <Phone size={24} />
            Вызвать комиссара: +7 (951) 853-82-42
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
