import "../styling/reviews.css";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

type Review = { author: string; rating: number; text: string };

const emptyStars = Array.from({ length: 5 }, (_, i) => (
  <Star key={i} strokeWidth={0}></Star>
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
          "http://localhost:3000/reviews",
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
        <span>{reviews[0]?.author}</span>
        <div className="rating-container">
          <div className="stars-container">
            <div className="full-stars">{fullStars}</div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[0]?.rating}</span>
        </div>
        <span>"{reviews[0]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[1]?.author}</span>
        <div className="rating-container">
          <div className="stars-container">
            <div className="full-stars">{fullStars}</div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[1]?.rating}</span>
        </div>
        <span>"{reviews[1]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[2]?.author}</span>
        <div className="rating-container">
          <div className="stars-container">
            <div className="full-stars">{fullStars}</div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[2]?.rating}</span>
        </div>
        <span>"{reviews[2]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[3]?.author}</span>
        <div className="rating-container">
          <div className="stars-container">
            <div className="full-stars">{fullStars}</div>
            <div className="empty-stars">{emptyStars}</div>
          </div>
          <span className="rating"> {reviews[3]?.rating}</span>
        </div>
        <span>"{reviews[3]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[4]?.author}</span>
        <div className="rating-container">
          <div className="stars-container">
            <div className="full-stars">{fullStars}</div>
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
