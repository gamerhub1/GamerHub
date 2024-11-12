import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const newsPerPage = 6;

  const fetchNews = async (query) => {
    try {
      
      const response = await axios.get(`/api/news?q=${query || "games"}&lang=pt&sortBy=publishedAt`);
      
      const articles = response.data.articles || [];
      setNews(articles);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
      setNews([]); 
    }
  };

  useEffect(() => {
    fetchNews(searchTerm);
  }, [searchTerm]);

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

  return (
    <div className='MainNews'>
      <input
        type="text"
        placeholder="Pesquise um Jogo ou Empresa..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-barNews"
      />

      {currentNews.length === 0 ? (
        <p className='pNews'>Nenhuma notícia encontrada.</p>
      ) : (
        <ul className='ulNews'>
          {currentNews.map((article, index) => (
            <li className='liNews' key={index}>
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
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
