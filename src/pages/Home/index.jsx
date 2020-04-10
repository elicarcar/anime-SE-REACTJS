import React, { useState, useCallback, useEffect, useContext } from "react";
import { LikeContext } from "../../contexts/LikeContext";
import AnimeInput from "../../components/AnimeInput";
import ImageFrame from "../../components/ImageFrame";
import "./style.css";

function useKey(key) {
  const [pressed, setPressed] = useState(false);
  const match = e => key.toLowerCase() == e.key.toLowerCase();
  const onDown = e => {
    if (match(e)) {
      setPressed(true);
    }
  };

  const onUp = e => {
    if (match(e)) {
      setPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [key]);

  return pressed;
}

export default function Home(props) {
  const [anime, setAnime] = useState("");
  const [animeInfos, setAnimeInfos] = useState([]);
  const { addLikedAnime } = useContext(LikeContext);
  const { likedAnimes } = useContext(LikeContext);

  const enter = useKey("enter");

  async function fetchAnimes() {
    const res = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${anime}&limit=16`
    );
    const animes = await res.json();
    const { results } = animes;
    setAnimeInfos(results);
  }

  const queryInput = e => {
    const targetedAnime = e.target.value;
    setAnime(targetedAnime);
  };

  const searchInput = useCallback(() => {
    fetchAnimes();
  }, [anime]);

  const getAnimeData = anime => {
    props.passAnimeData(anime);
    console.log(anime);
  };

  return (
    <div className="wrapper-div">
      {console.log(likedAnimes)}
      <AnimeInput queryInput={queryInput} searchInput={() => searchInput()} />

      {animeInfos.map(info => {
        return (
          <ImageFrame
            addAnime={() => addLikedAnime(info)}
            getData={() => getAnimeData(info)}
            image={info.image_url}
            desc={info.synopsis}
            id={info.mal_id}
            info={info}
          />
        );
      })}

      {enter && searchInput()}
    </div>
  );
}
