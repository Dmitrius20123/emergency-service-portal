import { DollarSign, Shield, Clock, CheckCircle } from "lucide-react";

const InsuranceBonus = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Помощь в получении доплаты от Страховой Компании
            </h2>
            <div className="text-2xl font-semibold text-red-600 mb-2">
              Гарантированный результат ❗❗❗
            </div>
            <div className="text-xl text-red-600 font-medium">
              Вы ничего не вкладываете ❗❗❗❗❗
            </div>
            <div className="text-xl text-red-600 font-medium">
              Все расходы на мне ❗❗❗
            </div>
          </div>

          {/* Основной блок с гарантией */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold mb-4">
                <Shield className="w-6 h-6" />
                Если вы подходите по критериям то я обязан вам помочь ❗❗❗
              </div>
            </div>

            {/* Критерии */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-slate-800">
                    Критерий 1
                  </h3>
                </div>
                <p className="text-slate-700 text-lg">
                  Вы были потерпевшим в результате ДТП
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800">
                    Критерий 2
                  </h3>
                </div>
                <p className="text-slate-700 text-lg">
                  С момента ДТП прошло не более 3-х лет
                </p>
              </div>
            </div>

            {/* Результат */}
            <div className="text-center mb-8">
              <p className="text-lg text-slate-700 mb-6">
                Тогда мы можем с вами приступить к дополнительной выплате к
                вашей страховой компенсации
              </p>

              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold mb-4">
                  Сколько она составит?
                </h3>
                <div className="text-3xl font-bold mb-2">
                  От 10 до 50% от суммы
                </div>
                <p className="text-lg">
                  которую изначально вам заплатила страховая компания ❗❗❗
                </p>
              </div>
            </div>

            {/* Призыв к действию */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-8 h-8" />
                <span className="text-2xl font-bold">
                  Время это Деньги ❗❗❗ 💰
                </span>
              </div>
              <p className="text-lg mb-4">
                Не стоит терять времени! Связывайтесь со мной и я подробно
                расскажу процедуру нашего взаимодействия!
              </p>
            </div>

            {/* Финальное сообщение */}
            <div className="text-center bg-green-100 p-6 rounded-xl">
              <p className="text-xl font-bold text-green-800">
                А ваши деньги должны быть у вас а не у страховой компании ❗
              </p>
            </div>

            {/* Кнопка связи */}
            <div className="text-center mt-8">
              <a
                href="tel:+79991234567"
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <DollarSign size={24} />
                Получить доплату сейчас
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceBonus;
