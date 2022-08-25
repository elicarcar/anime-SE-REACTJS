import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";

type Props = {
  image:string,
  alt_text:string,
  desc:string,
  id:string,
  getData: () => void,
  addAnime: () => void
}

export default function ImageFrame({
  image,
  alt_text,
  desc,
  id,
  getData,
  addAnime
}: Props) {
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
