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
    <section
      className="py-16 bg-slate-800"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/OfferCatalog"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            itemProp="name"
          >
            🚨 Экстренная помощь при ДТП в Москве и области - Полный комплекс
            услуг 24/7
          </h2>
          <p
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            itemProp="description"
          >
            ⚡{" "}
            <strong>
              Профессиональная служба помощи водителям круглосуточно:
            </strong>{" "}
            вызов комиссара за 15 минут, эвакуатор, автоюрист, независимая
            экспертиза, максимальные страховые выплаты до 400 тыс. руб. по
            ОСАГО/КАСКО
          </p>

          {/* SEO текст */}
          <div className="mt-6 text-sm text-slate-400 max-w-5xl mx-auto leading-relaxed">
            <p>
              <strong>Наша служба специализируется на:</strong> оформлении ДТП
              по европротоколу, взыскании ущерба с виновника аварии, досудебном
              урегулировании споров со страховыми компаниями, оценке скрытых
              повреждений и УТС (утрата товарной стоимости), представительстве в
              суде по автоспорам, техпомощи на дороге, доставке топлива,
              кузовном ремонте и восстановлении геометрии автомобиля.
            </p>
          </div>
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
                  className="text-slate-300 text-sm leading-relaxed mb-3"
                  itemProp="description"
                >
                  {service.description}
                </p>

                {/* SEO keywords для каждой услуги */}
                <div className="text-xs text-slate-500" itemProp="keywords">
                  {service.keywords}
                </div>

                <meta
                  itemProp="provider"
                  content="Единый Центр Помощи после ДТП"
                />
                <meta
                  itemProp="areaServed"
                  content="Москва и Московская область"
                />
                <meta itemProp="availability" content="24/7" />
                <meta itemProp="serviceType" content="Emergency Service" />
              </article>
            );
          })}
        </div>

        {/* Расширенный блок CTA с SEO текстом */}
        <div className="text-center mt-12 bg-slate-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            🆘 Экстренная помощь при ДТП - Вызов комиссара круглосуточно!
          </h3>
          <p className="text-slate-300 text-lg mb-6 max-w-3xl mx-auto">
            <strong>⏱️ Приезжаем за 15 минут в пределах МКАД!</strong>
            <br />
            Профессиональное оформление документов, работа со страховыми
            компаниями, защита ваших интересов. Опыт работы более 10 лет, более
            5000 успешно решенных дел.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+79518538242"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              itemProp="telephone"
              title="Вызвать комиссара при ДТП круглосуточно"
            >
              <Phone size={24} />
              📞 Вызвать комиссара: +7 (951) 853-82-42
            </a>

            <a
              href="https://wa.me/79518538242"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              title="Написать в WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Дополнительная SEO информация */}
          <div className="text-sm text-slate-400 max-w-4xl mx-auto">
            <p className="mb-2">
              <strong>🏆 Почему выбирают нас:</strong> Лицензированные эксперты,
              сертифицированные оценщики, опытные автоюристы. Работаем с любыми
              страховыми компаниями: РОСГОССТРАХ, ИНГОССТРАХ, СОГАЗ, ВСК,
              РЕСО-Гарантия, АльфаСтрахование и др.
            </p>
            <p>
              <strong>📍 Зона обслуживания:</strong> Москва (внутри МКАД - 15
              мин, за МКАД - 30 мин), Московская область, Подмосковье (Балашиха,
              Химки, Мытищи, Люберцы, Реутов, Королёв и др.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
