import React, { useState, useEffect } from 'react';
import api from '../Services/GlobalAPINews'; 
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("games");  // Inicia com "games" como padrão
  const newsPerPage = 6;

  // Função para buscar as notícias com base no termo de pesquisa
  const fetchNews = async (query) => {
    try {
      const response = await api.fetchNews(query);  
      setNews(response.data.articles);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  // Busca inicial com "games" quando o componente for montado
  useEffect(() => {
    fetchNews(searchTerm); 
  }, []); // Executa apenas uma vez ao carregar o componente

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

  // Atualiza o valor da pesquisa
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);  // Reseta para a página 1 ao mudar o texto
  };

  // Realiza a busca quando pressionar Enter
  const handleSearchSubmit = (event) => {
    if (event.key === "Enter") {
      fetchNews(searchTerm); // Chama a API apenas quando Enter for pressionado
    }
  };

  return (
    <div className='MainNews'>
      <input
        type="text"
        placeholder="Pesquise um Jogo ou Empresa..."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleSearchSubmit}  // Dispara a pesquisa somente quando pressionar Enter
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
