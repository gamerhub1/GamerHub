import React, { useState, useEffect, useCallback, useRef } from "react";
import "../Catalogo/Catalogo.css";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import JogosDestaques from "../Components/JogosDestaques";
import GamesByGenresId from "../Components/GamesByGenresId";
import GamesSearch from "../Components/GamesSearch"; // Importando o novo componente

const Catalogo = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  const [genreId, setGenreId] = useState(4);
  const [searchQuery, setSearchQuery] = useState("");

  const gameListCache = useRef({});

  const getAllGamesList = useCallback(async () => {
    try {
      const resp = await GlobalAPI.getAllGames;
      setAllGameList(resp.data.results);
    } catch (error) {
      console.error("Error fetching all games:", error);
    }
  }, []);

  const getGameListByGenresId = useCallback(async (id) => {
    if (gameListCache.current[id]) {
      setGameListByGenres(gameListCache.current[id]);
      return;
    }

    try {
      const resp = await GlobalAPI.getGameListByGenreId(id, 1);
      gameListCache.current[id] = resp.data.results;
      setGameListByGenres(resp.data.results);
    } catch (error) {
      console.error("Error fetching games by genre:", error);
    }
  }, []);

  const searchGames = async () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    try {
      const resp = await GlobalAPI.searchGames(searchQuery);
      setSearchResults(resp.data.results);
    } catch (error) {
      console.error("Error searching for games:", error);
    }
  };

  useEffect(() => {
    getAllGamesList();
  }, [getAllGamesList]);

  useEffect(() => {
    getGameListByGenresId(genreId);
  }, [genreId, getGameListByGenresId]);

  return (
    <div className='Main'>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Pesquisar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-btn" onClick={searchGames}>
          Pesquisar
        </button>
      </div>
      <div className="genrelist">
        <GenreList
          genereId={(genereId) => setGenreId(genereId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      
      {searchResults.length > 0 ? (
        <div className="searchg"><GamesSearch games={searchResults} /></div> 
      
      ) : (
        <>
          <div className="banner">
            <Banner gameBanner={allGameList[0]} />
          </div>
          <h1>🔥 Destaques</h1>
          <div className="jogosdestaques">
            <JogosDestaques gameList={allGameList} />
          </div>
          <h1>🎮 Jogos</h1>
          <div className="gamelist">
            <GamesByGenresId genreId={genreId} selectedGenresName={selectedGenresName} />
          </div>
        </>
      )}
    </div>
  );
};

export default Catalogo;
