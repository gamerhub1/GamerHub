import React, { useState } from "react";
import "../Css/GamesSearch.css"; 

const GamesSearch = ({ games }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 20;


  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(games.length / gamesPerPage);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

 
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="games-search-container">
        {currentGames.map((game) => (
          <div key={game.id} className="games-search-card">
            <img
              src={game.background_image}
              alt={game.name}
              className="games-search-image"
            />
            <div className="games-search-details">
              <h2 className="games-search-title">{game.name} <span id="metacritic"> {game.metacritic}</span> </h2>
              <p className="games-search-rating">⭐ {game.rating}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="pagination-buttons">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default GamesSearch;
