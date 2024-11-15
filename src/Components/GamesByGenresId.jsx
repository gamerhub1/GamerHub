import React, { useEffect, useState, useMemo } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import "../Css/GamesByGenresId.css";

function GamesByGenresId({ genreId }) {
  const [gameList, setGameList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 12;


  const cache = useMemo(() => ({}), []);

  const fetchGames = async (page) => {
    if (cache[`${genreId}-${page}`]) {
      setGameList(cache[`${genreId}-${page}`]);
      return;
    }
    
    try {
      const response = await GlobalAPI.getGameListByGenreId(genreId, page);
      setGameList(response.data.results);
      setTotalPages(Math.ceil(response.data.count / itemsPerPage));

      
      cache[`${genreId}-${page}`] = response.data.results;
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchGames(currentPage);
  }, [genreId, currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="gencardgame">
      {gameList.map((item) => (
        <div key={item.id} className="gencard">
          <img src={item.background_image} alt={item.name} className="gengame-image" />
          <h2 className="gengame-title">
            {item.name} <span id="genmetacritic">{item.metacritic}</span>
          </h2>
          <h3 className="genrating">{item.rating}⭐</h3>
        </div>
      ))}

      <div className="custom-pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span className="paginationnames">Página {currentPage} de {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage >= totalPages}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export default GamesByGenresId;
