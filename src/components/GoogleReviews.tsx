import "../styling/reviews.css";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

type Review = { author: string; rating: number; text: string };

const emptyStars = Array.from({ length: 5 }, (_, i) => (
  <Star key={i} strokeWidth={1}></Star>
));

const fullStars = Array.from({ length: 5 }, (_, i) => (
  <Star key={i} fill="currentColor" strokeWidth={0}></Star>
));

function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviewData: Review[] = await fetch(
          `${import.meta.env.VITE_API_URL}/reviews`,
        ).then((res) => res.json());

        setReviews(reviewData);
      } catch (e) {
        console.error(e);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div id="reviews-container">
      <div className="review-card">
        <h2>{reviews[0]?.author}</h2>
        <div className="rating-container">
          <div className="stars-container">
            <div
              className="full-stars"
              style={{ width: `${(reviews[0]?.rating || 0) * 20}%` }}
            >
              {fullStars}
            </div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[0]?.rating}</span>
        </div>
        <span>"{reviews[0]?.text}"</span>
      </div>
      <div className="review-card">
        <h2>{reviews[1]?.author}</h2>
        <div className="rating-container">
          <div className="stars-container">
            <div
              className="full-stars"
              style={{ width: `${(reviews[1]?.rating || 0) * 20}%` }}
            >
              {fullStars}
            </div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[1]?.rating}</span>
        </div>
        <span>"{reviews[1]?.text}"</span>
      </div>
      <div className="review-card">
        <h2>{reviews[2]?.author}</h2>
        <div className="rating-container">
          <div className="stars-container">
            <div
              className="full-stars"
              style={{ width: `${(reviews[2]?.rating || 0) * 20}%` }}
            >
              {fullStars}
            </div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[2]?.rating}</span>
        </div>
        <span>"{reviews[2]?.text}"</span>
      </div>
      <div className="review-card">
        <h2>{reviews[3]?.author}</h2>
        <div className="rating-container">
          <div className="stars-container">
            <div
              className="full-stars"
              style={{ width: `${(reviews[3]?.rating || 0) * 20}%` }}
            >
              {fullStars}
            </div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[3]?.rating}</span>
        </div>
        <span>"{reviews[3]?.text}"</span>
      </div>
      <div className="review-card">
        <h2>{reviews[4]?.author}</h2>
        <div className="rating-container">
          <div className="stars-container">
            <div
              className="full-stars"
              style={{ width: `${(reviews[4]?.rating || 0) * 20}%` }}
            >
              {fullStars}
            </div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[4]?.rating}</span>
        </div>
        <span>"{reviews[4]?.text}"</span>
      </div>
    </div>
  );
}

export default GoogleReviews;
