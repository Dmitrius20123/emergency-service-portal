import { useState } from "react";
import { Star, Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useReviews } from "@/lib/reviewsStore";
import SEOHead from "@/components/SEOHead";
import { generatePageSEO, generateStructuredData } from "@/lib/seo";

const Reviews = () => {
  const { reviews, addReview } = useReviews();
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const seoConfig = generatePageSEO("reviews");
  const structuredData = [
    ...reviews.map((reviewItem) =>
      generateStructuredData("Review", {
        rating: reviewItem.rating,
        author: reviewItem.name,
        text: reviewItem.review,
        date: reviewItem.date,
      }),
    ),
  ];

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
    <>
      <SEOHead config={seoConfig} structuredData={structuredData} />
      <div className="min-h-screen bg-slate-900 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <nav aria-label="Хлебные крошки" className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-amber-400">
                  Главная
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                Отзывы
              </li>
            </ol>
          </nav>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Вернуться на главную
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center text-white">
              Отзывы наших клиентов
            </h1>
            <p className="text-center text-slate-300 mt-4 text-lg">
              Реальные истории помощи в экстренных ситуациях
            </p>
          </header>

          {/* Форма отправки отзыва */}
          <section className="bg-slate-800 p-8 rounded-lg shadow-xl mb-12">
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
          </section>

          {/* Список всех отзывов */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Все отзывы ({reviews.length})
            </h2>

            {reviews.map((reviewItem) => (
              <article
                key={reviewItem.id}
                className="bg-slate-800 p-6 rounded-lg shadow-lg"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-white font-semibold text-lg"
                      itemProp="author"
                    >
                      {reviewItem.name}
                    </h3>
                    <time
                      className="text-slate-400 text-sm"
                      itemProp="datePublished"
                    >
                      {reviewItem.date}
                    </time>
                  </div>
                  <div
                    className="flex gap-1"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta
                      itemProp="ratingValue"
                      content={reviewItem.rating.toString()}
                    />
                    <meta itemProp="bestRating" content="5" />
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
                <p
                  className="text-slate-300 leading-relaxed"
                  itemProp="reviewBody"
                >
                  {reviewItem.review}
                </p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Reviews;
