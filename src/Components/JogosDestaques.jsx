import React, { useEffect } from "react";
import "../Css/JogosDestaques.css"


function JogosDestaques({gameList}) {
    useEffect(()=>{
        console.log(gameList)
    },[])
    
    return (
        <div className="cardgame">
            {gameList.map((item,index)=>index<4&&(
              <div class="card">
              <img src={item.background_image} class="game-image"/>
              <h2 class="game-title">{item.name}  <span id="metacritic">{item.metacritic}</span></h2>
              <h3 className="rating">{item.rating}⭐</h3>
              </div>
            ))}
        </div>
        
    )
}

export default JogosDestaques