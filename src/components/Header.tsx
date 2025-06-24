import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { targetRegions } from "@/lib/seo";

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
            alt="Логотип Центра Независимой Автоэкспертизы - Аварийный Комиссар"
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
              Аварийный комиссар и независимая автоэкспертиза 24/7
            </p>

            {/* Региональный блок */}
            <div className="text-lg text-amber-300 mb-4 font-semibold">
              🏢 Работаем в городах:{" "}
              {targetRegions
                .slice(0, 4)
                .map((r) => r.name)
                .join(", ")}{" "}
              и др.
            </div>

            <p className="text-lg text-slate-400 mb-6">
              ⚡ Выезд аварийного комиссара за 15 минут | 🛡️ Максимальные
              страховые выплаты | 🚛 Независимая экспертиза
            </p>

            <nav className="flex flex-col sm:flex-row gap-4 mb-4">
              <a
                href="tel:+79518538242"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
                itemProp="telephone"
              >
                <Phone size={20} />
                +7 (951) 853-82-42
              </a>
              <a
                href="https://t.me/emergency_help_dtp"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={20} />
                Telegram
              </a>
            </nav>

            <div className="text-sm text-slate-400">
              ⏰ Круглосуточно без выходных | 🚀 Выезд за 15 минут
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
