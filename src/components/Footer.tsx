import { Phone, Clock, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/files/2baca7d5-4fc1-4cc9-a032-1fbef5bf2b93.jpg"
                alt="Логотип ЕЦПП ДТП"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-bold text-amber-400">
                Единый Центр Помощи после ДТП
              </h3>
            </div>
            <p className="text-slate-300">
              Профессиональная помощь водителям в любое время суток. Мы работаем
              для вашей безопасности и спокойствия.
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="text-amber-400" size={20} />
              <span className="font-semibold">Телефон экстренной связи</span>
            </div>
            <a
              href="tel:+79991234567"
              className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              +7 (999) 123-45-67
            </a>
          </div>

          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
              <Clock className="text-amber-400" size={20} />
              <span className="font-semibold">Режим работы</span>
            </div>
            <p className="text-slate-300">24 часа в сутки</p>
            <p className="text-slate-300">7 дней в неделю</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-400">
          <p>&copy; 2024 Единый Центр Помощи после ДТП. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
