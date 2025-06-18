import { useState } from "react";
import { Star, Send } from "lucide-react";

const ReviewsForm = () => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет отправка отзыва
    alert("Спасибо за ваш отзыв!");
    setName("");
    setReview("");
    setRating(5);
  };

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Оставить отзыв
        </h2>
        <div className="bg-slate-800 p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2 font-medium">
                Ваше имя
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-amber-500 focus:outline-none transition-colors"
                placeholder="Введите ваше имя"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">
                Оценка
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-colors hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={
                        star <= rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-400"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white mb-2 font-medium">
                Ваш отзыв
              </label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                placeholder="Расскажите о качестве наших услуг"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-black py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Отправить отзыв
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewsForm;
