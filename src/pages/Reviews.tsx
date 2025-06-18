import { useState } from "react";
import { Star, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useReviews } from "@/lib/reviewsStore";

const Reviews = () => {
  const { reviews, addReview } = useReviews();
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addReview({
      name,
      rating,
      review,
      date: new Date().toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    });

    setName("");
    setReview("");
    setRating(5);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Вернуться на главную
        </Link>

        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Все отзывы наших клиентов
        </h1>

        {/* Форма отправки отзыва */}
        <div className="bg-slate-800 p-8 rounded-lg shadow-xl mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">
            Оставить отзыв
          </h2>
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

        {/* Список всех отзывов */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Все отзывы ({reviews.length})
          </h2>

          {reviews.map((reviewItem) => (
            <div
              key={reviewItem.id}
              className="bg-slate-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {reviewItem.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{reviewItem.date}</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={
                        star <= reviewItem.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-400"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {reviewItem.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
