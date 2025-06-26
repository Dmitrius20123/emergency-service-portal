import { Phone, Clock, MapPin } from "lucide-react";
import { targetRegions } from "@/lib/seo";

const Footer = () => {
  return (
    <footer
      className="bg-slate-950 text-white py-12"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/files/2baca7d5-4fc1-4cc9-a032-1fbef5bf2b93.jpg"
                alt="Логотип Центра Автоэкспертизы"
                className="w-16 h-16 object-contain"
                itemProp="logo"
              />
              <h3 className="text-xl font-bold text-amber-400" itemProp="name">
                Единый Центр Помощи после ДТП
              </h3>
            </div>
            <p className="text-slate-300 mb-4" itemProp="description">
              Профессиональная круглосуточная служба аварийного комиссара и
              независимой автоэкспертизы. Более 15 лет опыта, 8000+ успешно
              решенных случаев.
            </p>

            <div
              className="space-y-2"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin size={16} />
                <span>Работаем в регионах:</span>
              </div>
              <div className="text-sm text-slate-300 ml-6">
                {targetRegions.map((region, index) => (
                  <div key={index} className="mb-1">
                    📍 Липецк ул. Краснозаводская д.2г
                  </div>
                ))}
              </div>
              <meta itemProp="addressCountry" content="RU" />
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="text-amber-400" size={20} />
              <span className="font-semibold">Экстренная связь</span>
            </div>
            <a
              href="tel:+79518538242"
              className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors block mb-2"
              itemProp="telephone"
            >
              +7 (951) 853-82-42
            </a>
            <div className="text-sm text-slate-400 space-y-1">
              <p>📱 WhatsApp: круглосуточно</p>
              <p>💬 Telegram: @emergency_help</p>
              <p>📧 Email: info@auto-expertise.ru</p>
              <p className="text-amber-400 font-semibold mt-2">
                Вызов аварийного комиссара - 15 минут!
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
              <Clock className="text-amber-400" size={20} />
              <span className="font-semibold">Режим работы</span>
            </div>
            <div className="text-slate-300 space-y-1">
              <p className="text-lg font-semibold">24 часа в сутки</p>
              <p>7 дней в неделю</p>
              <p>365 дней в году</p>
              <p className="text-sm text-amber-400">
                Без праздников и выходных!
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <h4 className="text-sm font-semibold text-amber-400 mb-2">
                Наши услуги:
              </h4>
              <nav
                className="text-sm text-slate-400 space-y-1"
                aria-label="Услуги компании"
              >
                <p>• Аварийный комиссар при ДТП</p>
                <p>• Независимая автоэкспертиза</p>
                <p>• Судебная экспертиза авто</p>
                <p>• Максимальные страховые выплаты</p>
                <p>• Оценка ущерба автомобиля</p>
              </nav>
            </div>
          </div>
        </div>

        {/* Региональный SEO блок */}
        <div className="border-t border-slate-800 mt-6 pt-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-amber-400 mb-2">
              🚗 Аварийный комиссар в регионах
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-400">
              {targetRegions.map((region, index) => (
                <div key={index} className="bg-slate-900 p-2 rounded">
                  <strong className="text-amber-400">{region.name}</strong>
                  <br />
                  Комиссар ДТП 24/7
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2024 Центр Независимой Автоэкспертизы. Все права защищены.
            </p>
            <div className="flex gap-4 text-xs text-slate-500">
              <a
                href="/privacy"
                className="hover:text-amber-400 transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="/terms"
                className="hover:text-amber-400 transition-colors"
              >
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
