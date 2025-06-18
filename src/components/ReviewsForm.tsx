import { Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useReviews } from "@/lib/reviewsStore";

const ReviewsForm = () => {
  const { reviews } = useReviews();
  const latestReviews = reviews.slice(0, 3);

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Отзывы наших клиентов
        </h2>

        {/* Последние отзывы */}
        <div className="space-y-6 mb-8">
          {latestReviews.map((reviewItem) => (
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

        {/* Кнопка просмотра всех отзывов */}
        <div className="text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Eye size={20} />
            Посмотреть все отзывы ({reviews.length})
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewsForm;
