import React, { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import "../Css/Generos.css";

function GenreList({ genereId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); 

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalAPI.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };

  return (
    <div className="containerlist">
      <h2 className="h2genre">Gêneros</h2>
      {genreList.map((item, index) => (
        <div
          key={item.id}
          className={`iconlist ${activeIndex === index ? "active" : ""}`} 
          onClick={() => {
            setActiveIndex(index); 
            selectedGenresName(item.name);
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
