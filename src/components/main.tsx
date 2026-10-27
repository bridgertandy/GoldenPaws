import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styling/index.css";
import GoogleReviews from "./GoogleReviews.tsx";

createRoot(document.getElementById("reviews-root")!).render(
  <StrictMode>
    <GoogleReviews />
  </StrictMode>,
);
