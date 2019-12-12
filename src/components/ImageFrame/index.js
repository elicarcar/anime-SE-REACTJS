import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { __esModule } from "react-router-dom/cjs/react-router-dom.min";

export default function ImageFrame({ image, alt_text, desc, id, getData }) {
  const [animeDetail, setAnimeDetail] = useState({});
  return (
    <section className="images">
      <img className="image-section" src={image} alt={alt_text} />
      <p className="descriptions">
        {desc}
        <span>
          <Link to={`/anime/:${id}`} onClick={getData}>
            see more
          </Link>
        </span>
      </p>
    </section>
  );
}
