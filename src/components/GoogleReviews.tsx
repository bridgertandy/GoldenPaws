import "../styling/reviews.css";
import { useState, useEffect } from "react";

type Review = { author: string; rating: number; text: string };

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
            <span className="empty-stars">☆☆☆☆☆</span>
            <span className="full-stars">★★★★★</span>
          </div>
          <span className="rating"> {reviews[0]?.rating}</span>
        </div>
        <span>"{reviews[0]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[1]?.author}</span>
        <span>{reviews[1]?.rating} Stars</span>
        <span>"{reviews[1]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[2]?.author}</span>
        <span>{reviews[2]?.rating} Stars</span>
        <span>"{reviews[2]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[3]?.author}</span>
        <span>{reviews[3]?.rating} Stars</span>
        <span>"{reviews[3]?.text}"</span>
      </div>
      <div className="review-card">
        <span>{reviews[4]?.author}</span>
        <span>{reviews[4]?.rating} Stars</span>
        <span>"{reviews[4]?.text}"</span>
      </div>
    </div>
  );
}

export default GoogleReviews;
