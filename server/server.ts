import dotenv from "dotenv";
import express from "express";
import cors from "cors";

// console.log(process.cwd());

dotenv.config({ path: ".env" });

const app = express();
app.use(cors());

app.get("/reviews", async (_req, res) => {
  const reviews = await getReviews();

  res.json(reviews);
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.PLACE_ID;

// console.log(GOOGLE_API_KEY, PLACE_ID);

const url: string = `https://places.googleapis.com/v1/places/${PLACE_ID}?key=${GOOGLE_API_KEY}`;

async function getReviews() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Goog-FieldMask": "reviews",
        Referer: "https://goldenpawsmobile.com",
      },
    });
    const data = await response.json();

    //   console.log(data);

    return data.reviews.map((review: any) => ({
      author: review.authorAttribution.displayName,
      rating: review.rating,
      text: review.text.text,
    }));
  } catch (e) {
    console.error(e);
  }
}

// console.log(await getReviews());
