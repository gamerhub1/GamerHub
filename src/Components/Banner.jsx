import React, { useEffect } from "react";
import "../Css/Banner.css"

function Banner({gameBanner}) {
    useEffect(()=>{
        
    })
    return(
        <div className="divbanner">
                <div className="titulobanner">
                <h2>{gameBanner.name}</h2>
                <button className="buttonbanner" onClick={()=> window.location.href = 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?l=portuguese'}>Get Now</button>
                </div>
            <img src={gameBanner.background_image} className="bannerimg"/>
        </div>
    )
}

export default Banner