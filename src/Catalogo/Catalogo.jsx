import React from "react";
import "../Catalogo/Catalogo.css";
import { useState, useEffect } from "react";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import JogosDestaques from "../Components/JogosDestaques";
import GamesByGenresId from "../Components/GamesByGenresId";

const Catalogo = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');
  const [genreId, setGenreId] = useState(4); // ID padrão de gênero

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(genreId);
  }, [genreId]);

  const getAllGamesList = () => {
    GlobalAPI.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    GlobalAPI.getGameListByGenreId(id, 1).then((resp) => { 
      setGameListByGenres(resp.data.results);
    });
    setGenreId(id); 
  };

  return (
    <>
      <div className='Main'>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Pesquisar..." />
          <button className="search-btn">Pesquisar</button>
        </div>
        <div>
          <GenreList
            genereId={(genereId) => {
              getGameListByGenresId(genereId);
            }}
            selectedGenresName={(name) => setSelectedGenresName(name)}
          />
        </div>
        <div>
          {allGameList.length > 0 && gameListByGenres.length > 0 ? (
            <div>
              <Banner gameBanner={allGameList[0]} />
              <h1 className="destaque">Destaques🔥</h1>
              <JogosDestaques gameList={allGameList} />
              <h1 className="jogos">Jogos🎮</h1>
              <GamesByGenresId
                genreId={genreId} 
                selectedGenresName={selectedGenresName}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Catalogo;
