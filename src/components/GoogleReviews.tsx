import "../styling/index.css";
import { useState, useEffect } from "react";

function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await fetch("http://localhost:3000/reviews").then(
          (res) => res.json(),
        );

        setReviews(reviews);
      } catch (e) {
        console.error(e);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div id="reviews-container">
      <div>
        <span>{reviews.length} reviews</span>
      </div>
    </div>
  );
}

export default GoogleReviews;
