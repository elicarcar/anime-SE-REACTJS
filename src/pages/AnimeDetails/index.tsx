import React from "react";
import { useParams } from "react-router-dom";
import "./AnimeDetails.css";


type Props = {
  image_url: string,
  title:string,
  episodes:number,
  score: string,
  tv: string,
airing:boolean,
start_date:string,
end_date:string,
synopsis:string
}

const AnimeDetails = ({image_url, title, episodes, score, tv, airing, start_date, end_date, synopsis}:Props) => {
  const { id } = useParams<{id:string}>();
  return (
    <div className="container-detail">
      <img
        src={image_url}
        alt={title}
        className="img-detail"
      />
      <h1 className="title-detail">{title}</h1>
      <ul className="detailed-info">
        <li>
          <span className="li-identifiers">Episodes: </span>
          {episodes}
        </li>
        <li>
          <span className="li-identifiers">MAL Score: </span>
          {score}
        </li>
        <li>
          <span className="li-identifiers">Type:</span> {tv}
        </li>
        <li>
          <span className="li-identifiers">Airing: </span>

          {airing === false
            ? "Not aired right now"
            : "Currently aired"}
        </li>
        <li>
          <span className="li-identifiers">Started:</span>
          {start_date}
        </li>
        <li>
          <span className="li-identifiers">Ended:</span>{" "}
          {end_date}
        </li>
      </ul>
      <p>{synopsis}</p>
    </div>
  );
};

export default AnimeDetails;
