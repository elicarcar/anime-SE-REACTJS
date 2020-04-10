import React from "react";
import { useParams } from "react-router-dom";
import "./AnimeDetails.css";
import uuid from "uuid/v1";

const AnimeDetails = props => {
  const { id } = useParams();
  return (
    <div className="container-detail">
      <img
        src={props.animeDetails.image_url}
        alt={props.animeDetails.title}
        className="img-detail"
      />
      <h1 className="title-detail">{props.animeDetails.title}</h1>
      <ul className="detailed-info">
        <li>
          <span className="li-identifiers">Episodes: </span>
          {props.animeDetails.episodes}
        </li>
        <li>
          <span className="li-identifiers">MAL Score: </span>
          {props.animeDetails.score}
        </li>
        <li>
          <span className="li-identifiers">Type:</span> {props.animeDetails.tv}
        </li>
        <li>
          <span className="li-identifiers">Airing: </span>

          {props.animeDetails.airing === false
            ? "Not aired right now"
            : "Currently aired"}
        </li>
        <li>
          <span className="li-identifiers">Started:</span>
          {props.animeDetails.start_date}
        </li>
        <li>
          <span className="li-identifiers">Ended:</span>{" "}
          {props.animeDetails.end_date}
        </li>
      </ul>
      <p>{props.animeDetails.synopsis}</p>
    </div>
  );
};

export default AnimeDetails;
