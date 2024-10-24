import React, { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import "../Css/Generos.css";

function GenreList({ genereId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);  // Lista de gêneros da API
  const [activeIndex, setActiveIndex] = useState(null);  // Index ativo para destacar o gênero selecionado

  useEffect(() => {
    getGenreList();  // Chama a função para buscar a lista de gêneros ao carregar o componente
  }, []);

  // Função para buscar a lista de gêneros da API
  const getGenreList = () => {
    GlobalAPI.getGenreList.then((resp) => {
      setGenreList(resp.data.results);  // Armazena a lista de gêneros no estado
    });
  };

  return (
    <div className="containerlist">
      <h2 className="h2genre">Gêneros</h2>
      {genreList.map((item, index) => (
        <div
          key={item.id}
          className={`iconlist ${activeIndex === index ? "active" : ""}`}  // Destaca o item ativo
          onClick={() => {
            setActiveIndex(index);  // Define o índice ativo para alterar a classe
            genereId(item.id);  // Passa o ID do gênero selecionado para o componente pai (Catalogo)
            selectedGenresName(item.name);  // Passa o nome do gênero para o componente pai
          }}
        >
          <img className="icongenre" src={item.image_background} alt={item.name} />
          <h3 className="namegenre">{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
