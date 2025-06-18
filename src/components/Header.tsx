import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://cdn.poehali.dev/files/2baca7d5-4fc1-4cc9-a032-1fbef5bf2b93.jpg"
            alt="Логотип ЕЦПП ДТП"
            className="w-24 h-24 object-contain"
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-amber-400">
              Единый Центр Помощи после ДТП
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Профессиональная помощь в любое время суток
            </p>
            <a
              href="tel:+79518538242"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone size={24} />
              Вызвать комиссара 24/7
            </a>
            <p className="text-sm text-slate-400 mt-2">+7 (951) 853-82-42</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
