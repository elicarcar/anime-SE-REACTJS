import React, { createContext, useState } from "react";

export const LikeContext = createContext();

const LikeContextProvider = props => {
  const [likedAnimes, setLikedAnimes] = useState([]);

  const addLikedAnime = animeID => {
    setLikedAnimes([...likedAnimes, animeID]);
  };

  const removeAnime = malID => {
    const newAnimeList = likedAnimes.filter(id => id !== malID);
    setLikedAnimes(newAnimeList);
    console.log(likedAnimes);
  };

  return (
    <LikeContext.Provider value={{ addLikedAnime, removeAnime, likedAnimes }}>
      {props.children}
    </LikeContext.Provider>
  );
};

export default LikeContextProvider;
