import { useState, useEffect } from "react";

export interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Анна Петрова",
    rating: 5,
    review: "Отличное качество работы! Очень довольна результатом.",
    date: "15 января 2025",
  },
  {
    id: 2,
    name: "Михаил Сидоров",
    rating: 4,
    review: "Хорошая работа, но можно было бы быстрее.",
    date: "12 января 2025",
  },
  {
    id: 3,
    name: "Елена Кузнецова",
    rating: 5,
    review: "Профессиональный подход, все вопросы решили быстро.",
    date: "10 января 2025",
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    rating: 5,
    review: "Спасибо за оперативную помощь! Рекомендую всем.",
    date: "8 января 2025",
  },
];

let globalReviews = initialReviews;
let listeners: (() => void)[] = [];

export const useReviews = () => {
  const [reviews, setReviews] = useState(globalReviews);

  useEffect(() => {
    const listener = () => setReviews([...globalReviews]);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  const addReview = (review: Omit<Review, "id">) => {
    const newReview = { ...review, id: Date.now() };
    globalReviews = [newReview, ...globalReviews];
    listeners.forEach((listener) => listener());
  };

  return { reviews, addReview };
};
