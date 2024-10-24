import React from "react";
import "../Css/Banner.css";

function Banner({ gameBanner }) {
  return (
    <div className="main-container">
      <div className="divbanner">
        <div className="titulobanner">
          <h2>{gameBanner.name}</h2>
          <button
            className="buttonbanner"
            onClick={() =>
              window.location.href =
                "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?l=portuguese"
            }
          >
            Get Now
          </button>
        </div>
        <img
          src={gameBanner.background_image}
          className="bannerimg"
          alt="Banner"
        />
      </div>
    </div>
  );
}

export default Banner;