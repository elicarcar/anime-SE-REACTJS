import React, { useState, useCallback, useEffect, useContext } from "react";
import { LikeContext } from "../../contexts/LikeContext";
import { AnimeContext } from "../../contexts/AnimeContext";
import AnimeInput from "../../components/AnimeInput";
import ImageFrame from "../../components/ImageFrame";
import "./style.scss";
import AnimeSlider from "../../components/AnimeSlider";
import { season, currentYear } from "../../utils";
import List from "../../components/List";

function useKey(key) {
  const [pressed, setPressed] = useState(false);
  const match = (e) => key.toLowerCase() == e.key.toLowerCase();
  const onDown = (e) => {
    if (match(e)) {
      setPressed(true);
    }
  };

  const onUp = (e) => {
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
  const [state, dispatch] = useContext(AnimeContext);

  const enter = useKey("enter");

  async function fetchAnimes(url, action) {
    try {
      const res = await fetch(url);
      const animes = await res.json();

      dispatch({
        type: action,
        payload: animes,
      });

      console.log(animes);
    } catch (error) {
      console.log(error);
    }
  }

  // const searchInput = useCallback(() => {
  //   fetchAnimes()
  // }, [anime])

  // const getAnimeData = (anime) => {
  //   props.passAnimeData(anime)
  //   console.log(anime)
  // }

  useEffect(() => {
    fetchAnimes(
      "https://api.jikan.moe/v3/top/anime/1/airing",
      "GET_AIRING_ANIMES"
    );
    fetchAnimes(
      "https://api.jikan.moe/v3/top/anime/1/upcoming",
      "GET_TOP_ANIMES"
    );

    fetchAnimes("https://api.jikan.moe/v3/top/anime/1/movie", "GET_TOP_MOVIES");

    fetchAnimes(
      `https://api.jikan.moe/v3/season/${currentYear}/${season}`,
      "GET_SEASONAL_ANIMES"
    );
  }, []);

  console.log(state);

  return (
    <React.Fragment>
      <section className="home">
        <div className="wrapper-div">
          {state.seasonal.length ? (
            <AnimeSlider
              title={`${season} ${currentYear} Anime`}
              animes={state.seasonal[0]}
              cut={true}
              sliceAmount={10}
            />
          ) : (
            <p>Loading...</p>
          )}
          {state.movies.length ? (
            <AnimeSlider
              title={`Top Movies`}
              animes={state.movies[0]}
              cut={true}
              sliceAmount={10}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="side-list">
          {state.top.length ? (
            <List
              listTitle={"Upcomings"}
              listItems={state.top[0]}
              itemType={"anime"}
              moreInfoPath="/#"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="side-list">
          {state.airing.length ? (
            <List
              listTitle={"Currenlty Airing"}
              listItems={state.airing[0]}
              itemType={"anime"}
              moreInfoPath="/#"
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
