import {
  Shield,
  FileText,
  Truck,
  Fuel,
  Calculator,
  Eye,
  Scale,
  Wrench,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Оформление ДТП",
      description: "Профессиональное документирование происшествия",
    },
    {
      icon: Scale,
      title: "Юридическая помощь",
      description: "Консультации и представительство в суде",
    },
    {
      icon: Truck,
      title: "Эвакуатор",
      description: "Быстрая эвакуация повреждённого транспорта",
    },
    {
      icon: Fuel,
      title: "Доставка топлива",
      description: "Экстренная заправка на месте происшествия",
    },
    {
      icon: Calculator,
      title: "Увеличение суммы страхового возмещения",
      description: "Максимальные выплаты по ОСАГО/КАСКО",
    },
    {
      icon: Eye,
      title: "Контроль страховки",
      description: "Надзор за действиями страховой компании",
    },
    {
      icon: Shield,
      title: "Независимая экспертиза",
      description: "Объективная оценка ущерба от ДТП",
    },
    {
      icon: Wrench,
      title: "Ремонт по страховке",
      description: "Организация качественного восстановления",
    },
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-700 hover:bg-slate-600 p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500 rounded-lg mb-4">
                  <Icon size={24} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
