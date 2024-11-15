import React, { useState, useEffect } from 'react';
import api from '../Services/GlobalAPINews'; 
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("Games");  
  const newsPerPage = 6;

  
  const fetchNews = async (query) => {
    try {
      const response = await api.fetchNews(query);  
      setNews(response.data.articles);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  
  useEffect(() => {
    fetchNews(searchTerm); 
  }, []); 

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(news.length / newsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);  
  };

  const handleSearchSubmit = (event) => {
    if (event.key === "Enter") {
      fetchNews(searchTerm); 
    }
  };

  return (
    <div className='MainNews'>
      <input
        type="text"
        placeholder="Pesquise um Jogo ou Empresa..."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleSearchSubmit} 
        className="search-barNews"
      />

      {currentNews.length === 0 ? (
        <p className='pNews'>Nenhuma notícia encontrada.</p>
      ) : (
        <ul className='ulNews'>
          {currentNews.map((article, index) => (
            <li className='liNews' key={index}>
              {article.image && <img src={article.image} alt={article.title} className="news-image" />}
              <h2 className='h2News'>{article.title}</h2>
              <p className='pNews'>{article.description}</p>
              <a className='aNews' href={article.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
            </li>
          ))}
        </ul>
      )}

      <div className="paginationNews">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
        <span>{`Página ${currentPage} de ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Próximo</button>
      </div>
    </div>
  );
};

export default News;
