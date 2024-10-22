import React, { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import "../Css/Generos.css";

function GenreList({genereId,selectedGenresName}) {
    

    const [genreList,setGenreList]=useState([])
    const [activeIndex,setActiveIndex]=useState(0)
    useEffect(()=> {
        getGenreList();

    }, [])
    const getGenreList=()=>{
        GlobalAPI.getGenreList.then((resp)=>{
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }
    return (
        <div className="containerlist">
            <h2 className="h2genre">Gêneros</h2>
            {genreList.map((item,index)=>
                <div className="iconlist">
                    <img className="icongenre" src={item.image_background}/>
                    <h3
                    onClick={()=>{setActiveIndex(index);genereId(item.id); selectedGenresName 
                        selectedGenresName(item.name)}} className={`namegenre ${activeIndex==index?"":null}`}>{item.name}</h3>

                </div>  
                        
        
     )}
        </div>
    
)
}

export default GenreList