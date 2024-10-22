import React, { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import "../Css/GamesByGenresId.css";

function GamesByGenresId({ genreId }) {
  const [gameList, setGameList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 16;

  const fetchGames = async (page) => {
    try {
      const response = await GlobalAPI.getGameListByGenreId(genreId, page);
      setGameList(response.data.results);
      setTotalPages(Math.ceil(response.data.count / itemsPerPage));
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

  const paginatedGames = gameList.slice(0, itemsPerPage);

  return (
    <div className="gencardgame">
      {paginatedGames.map((item, index) => (
        <div key={index} className="gencard">
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
