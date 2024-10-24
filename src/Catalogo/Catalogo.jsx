import React, { useState, useEffect, useCallback, useRef } from "react"; // Adicione useRef aqui
import "../Catalogo/Catalogo.css";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import JogosDestaques from "../Components/JogosDestaques";
import GamesByGenresId from "../Components/GamesByGenresId";

const Catalogo = () => {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');
  const [genreId, setGenreId] = useState(4); 

  // Cache para armazenar listas de jogos por gênero
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
    // Verifica se já temos os jogos armazenados em cache
    if (gameListCache.current[id]) {
      setGameListByGenres(gameListCache.current[id]);
      return;
    }

    try {
      const resp = await GlobalAPI.getGameListByGenreId(id, 1);
      gameListCache.current[id] = resp.data.results; // Armazena em cache
      setGameListByGenres(resp.data.results);
    } catch (error) {
      console.error("Error fetching games by genre:", error);
    }
  }, []);

  useEffect(() => {
    getAllGamesList(); // Busca todos os jogos uma vez
  }, [getAllGamesList]);

  useEffect(() => {
    getGameListByGenresId(genreId); // Busca jogos por gênero quando genreId muda
  }, [genreId, getGameListByGenresId]);

  return (
    <div className='Main'>
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Pesquisar..." />
        <button className="search-btn">Pesquisar</button>
      </div>
      <div className="genrelist">
        <GenreList
          genereId={(genereId) => {
            setGenreId(genereId); // Atualiza o genreId
          }}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      {allGameList.length > 0 && gameListByGenres.length > 0 ? (
        <div>
          <div className="banner">
            <Banner gameBanner={allGameList[0]} />
          </div>
          <div className="jogosdestaques">
            <JogosDestaques gameList={allGameList} />
          </div>
          <h1>12</h1>
          <div className="gamelist">
            <GamesByGenresId
              genreId={genreId}
              selectedGenresName={selectedGenresName}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Catalogo;
