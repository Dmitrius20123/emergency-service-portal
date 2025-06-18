import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-amber-400">
            Единый Центр Помощи после ДТП
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Профессиональная помощь в любое время суток
          </p>
          <a
            href="tel:+79991234567"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Phone size={24} />
            Вызвать комиссара 24/7
          </a>
          <p className="text-sm text-slate-400 mt-2">+7 (999) 123-45-67</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
