import React, { createContext, useState, useContext } from "react";


interface LikesContext {
  addLikedAnime: (id:string) => void, 
  removeAnime: (id:string) => void, 
  likedAnimes: string[]
}

export const LikeContext = createContext<LikesContext | undefined>(undefined);

const LikeContextProvider = (props: React.PropsWithChildren) => {
  const [likedAnimes, setLikedAnimes] = useState<string[]>([]);

  const addLikedAnime = (animeID:string) => {
    setLikedAnimes([...likedAnimes, animeID]);
  };

  const removeAnime = (malID:string) => {
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

export const useLikes = () => {
  const context = useContext(LikeContext)

  if(!context) {
    throw Error('useLikes can only be used within Likeontext Provider')
  }

  return context
}

export default LikeContextProvider;
