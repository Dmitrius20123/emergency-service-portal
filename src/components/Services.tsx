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
import { targetRegions } from "@/lib/seo";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Вызов Аварийного Комиссара",
      description:
        "Экстренный выезд специалиста для профессионального оформления ДТП с соблюдением всех требований ГИБДД. Помощь в составлении европротокола, сбор необходимых справок, защита ваших интересов.",
      keywords:
        "вызвать аварийного комиссара, комиссар при ДТП, оформление аварии",
    },
    {
      icon: Shield,
      title: "Независимая Автоэкспертиза",
      description:
        "Объективная оценка ущерба от ДТП лицензированными экспертами. Современное оборудование, точная калькуляция с учетом скрытых повреждений и утраты товарной стоимости.",
      keywords:
        "независимая автоэкспертиза, оценка ущерба автомобиля, экспертиза после ДТП",
    },
    {
      icon: Scale,
      title: "Судебная Автоэкспертиза",
      description:
        "Профессиональная экспертиза для судебных разбирательств. Трасологическая экспертиза, рецензирование заключений, представительство в суде по автоспорам.",
      keywords:
        "судебная автоэкспертиза, трасологическая экспертиза, экспертиза для суда",
    },
    {
      icon: Calculator,
      title: "Максимальные Страховые Выплаты",
      description:
        "Добиваемся максимальных выплат по ОСАГО и КАСКО. Досудебное урегулирование споров, взыскание неустойки и штрафных санкций со страховых компаний.",
      keywords:
        "максимальные выплаты ОСАГО КАСКО, увеличение страхового возмещения",
    },
    {
      icon: Eye,
      title: "Оценка Скрытых Повреждений",
      description:
        "Выявление скрытых дефектов и повреждений, не видимых при визуальном осмотре. Диагностика электроники, геометрии кузова, состояния ходовой части.",
      keywords: "скрытые повреждения авто, диагностика после ДТП",
    },
    {
      icon: Wrench,
      title: "Техническая Экспертиза",
      description:
        "Комплексная техническая диагностика автомобиля после ДТП. Проверка всех систем безопасности, двигателя, трансмиссии и электрооборудования.",
      keywords: "техническая экспертиза авто, диагностика автомобиля",
    },
    {
      icon: Truck,
      title: "Эвакуатор",
      description:
        "Круглосуточная служба эвакуации по всем регионам работы. Современные эвакуаторы, бережная погрузка, доставка на СТО или в нужное место в кратчайшие сроки.",
      keywords: "эвакуатор круглосуточно, эвакуация авто, служба эвакуации",
    },
    {
      icon: Wrench,
      title: "Ремонт за Счет Страховой",
      description:
        "Организация качественного восстановительного ремонта на сертифицированных СТО. Контроль качества работ, использование оригинальных запчастей.",
      keywords: "ремонт по страховке, восстановительный ремонт, СТО",
    },
    {
      icon: Car,
      title: "Кузовной Ремонт",
      description:
        "Профессиональное восстановление геометрии кузова, покраска в заводской цвет, замена поврежденных деталей. Современное оборудование, опытные мастера.",
      keywords:
        "кузовной ремонт, покраска автомобиля, восстановление геометрии",
    },
    {
      icon: ClipboardCheck,
      title: "Постановка на Учет",
      description:
        "Полное сопровождение регистрации ТС в ГИБДД. Подготовка документов, прохождение техосмотра, получение номеров. Экономия времени и нервов.",
      keywords:
        "постановка на учет ГИБДД, регистрация автомобиля, оформление ТС",
    },
    {
      icon: DollarSign,
      title: "Выкуп Автомобилей",
      description:
        "Быстрый выкуп авто после ДТП, с проблемными документами, кредитных, залоговых. Честная оценка, моментальный расчет, оформление за 1 день.",
      keywords: "выкуп авто после ДТП, срочный выкуп автомобилей, скупка машин",
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
            🚨 Аварийный Комиссар и Автоэкспертиза 24/7 - Полный Комплекс Услуг
          </h2>
          <div
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-4"
            itemProp="description"
          >
            <p className="font-bold text-amber-400 mb-2">
              ⚡ Работаем в городах:{" "}
              {targetRegions.map((r) => r.name).join(", ")}
            </p>
            <p>
              <strong>
                Профессиональная служба помощи водителям круглосуточно:
              </strong>{" "}
              вызов аварийного комиссара за 15 минут, независимая
              автоэкспертиза, максимальные страховые выплаты по ОСАГО/КАСКО,
              судебная экспертиза
            </p>
          </div>

          {/* Региональный SEO блок */}
          <div className="mt-6 text-sm text-slate-400 max-w-5xl mx-auto leading-relaxed">
            <p className="mb-2">
              <strong>🏆 Наша служба специализируется на:</strong> срочном
              вызове аварийного комиссара, независимой автоэкспертизе после ДТП,
              судебной экспертизе автомобилей, оценке скрытых повреждений и УТС
              (утрата товарной стоимости), досудебном урегулировании споров со
              страховыми компаниями, трасологической экспертизе,
              представительстве в суде по автоспорам
            </p>
            <p>
              <strong>📍 Зона обслуживания:</strong> Воронеж, Липецк, Курск,
              Брянск, Ростов-на-Дону, Краснодар, Саратов и прилегающие районы
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

                <div className="text-xs text-slate-500" itemProp="keywords">
                  {service.keywords}
                </div>

                <meta
                  itemProp="provider"
                  content="Центр Независимой Автоэкспертизы"
                />
                <meta
                  itemProp="areaServed"
                  content={targetRegions.map((r) => r.name).join(", ")}
                />
                <meta itemProp="availability" content="24/7" />
                <meta itemProp="serviceType" content="Emergency Auto Service" />
              </article>
            );
          })}
        </div>

        {/* Главный CTA блок с региональной оптимизацией */}
        <div className="text-center mt-12 bg-slate-900 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            🆘 СРОЧНО Вызвать Аварийного Комиссара - Работаем Круглосуточно!
          </h3>
          <p className="text-slate-300 text-lg mb-4 max-w-3xl mx-auto">
            <strong className="text-amber-400">
              ⏱️ Приезжаем за 15-30 минут в любом городе!
            </strong>
          </p>

          {/* Список городов */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6 text-sm text-slate-300">
            {targetRegions.map((region, index) => (
              <div key={index} className="bg-slate-800 p-2 rounded">
                <strong className="text-amber-400">📍 {region.name}</strong>
                <br />
                Аварийный комиссар 24/7
              </div>
            ))}
          </div>

          <p className="text-slate-300 mb-6">
            Профессиональное оформление документов при ДТП, работа со страховыми
            компаниями, независимая экспертиза, защита ваших интересов. Опыт
            работы более 15 лет, более 8000 успешно решенных дел.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+79518538242"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              itemProp="telephone"
              title="Вызвать аварийного комиссара круглосуточно"
            >
              <Phone size={24} />
              📞 Вызвать Комиссара: +7 (951) 853-82-42
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
              сертифицированные оценщики, опытные аварийные комиссары. Работаем
              с любыми страховыми компаниями: РОСГОССТРАХ, ИНГОССТРАХ, СОГАЗ,
              ВСК, РЕСО-Гарантия, АльфаСтрахование и др.
            </p>
            <p>
              <strong>⚡ Гарантии:</strong> Профессиональное оформление ДТП,
              максимальные страховые выплаты, защита от занижения ущерба, полное
              сопровождение до получения компенсации
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
