import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ImageFrame({
  image,
  alt_text,
  desc,
  id,
  getData,
  addAnime
}) {
  return (
    <section className="images">
      <img className="image-section" src={image} alt={alt_text} />
      <span>
        <button onClick={addAnime}>+</button>
      </span>
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
