import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="bg-slate-900 text-white py-6"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://cdn.poehali.dev/files/2baca7d5-4fc1-4cc9-a032-1fbef5bf2b93.jpg"
            alt="Логотип ЕЦПП ДТП - Единый Центр Помощи после ДТП"
            className="w-24 h-24 object-contain"
            itemProp="logo"
          />
          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-2 text-amber-400"
              itemProp="name"
            >
              Единый Центр Помощи после ДТП
            </h1>
            <p className="text-xl text-slate-300 mb-2" itemProp="description">
              Профессиональная помощь водителям при ДТП в Москве и области 24/7
            </p>
            <p className="text-lg text-slate-400 mb-6">
              ⚡ Выезд комиссара за 15 минут | 🛡️ Максимальные страховые выплаты
              | 🚛 Эвакуатор круглосуточно
            </p>

            <nav
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
              aria-label="Основная навигация"
            >
              <a
                href="tel:+79518538242"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                itemProp="telephone"
                aria-label="Вызвать комиссара по телефону"
              >
                <Phone size={24} />
                Вызвать комиссара 24/7
              </a>
              <Link
                to="/reviews"
                className="inline-flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                aria-label="Посмотреть отзывы клиентов"
              >
                <MessageSquare size={20} />
                Отзывы клиентов (250+)
              </Link>
            </nav>

            <div
              className="text-center space-y-2"
              itemScope
              itemType="https://schema.org/ContactPoint"
            >
              <p
                className="text-lg font-semibold text-amber-400"
                itemProp="telephone"
              >
                📞 +7 (951) 853-82-42
              </p>
              <div className="text-sm text-slate-400" itemProp="areaServed">
                <p>🏢 Обслуживаем: Москва и Московская область</p>
                <p>🕐 Время работы: Круглосуточно, без выходных</p>
                <meta itemProp="contactType" content="customer service" />
                <meta itemProp="availableLanguage" content="Russian" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
